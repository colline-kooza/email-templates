"use server";

import { db } from "@/prisma/db";
import bcrypt from "bcryptjs";
import { Resend } from "resend";
import { generateVerificationCode } from "@/lib/utils";
import ReactEmailTemplate from "@/components/emails/ReactEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// Check if email exists
export async function checkEmail(email: string) {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });

    return { exists: !!user, user };
  } catch (error) {
    console.error("Error checking email:", error);
    return { error: "Something went wrong", exists: false };
  }
}

// Register user
export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  const { name, email, password } = data;

  try {
    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        error: `Email ${email} is already in use`,
        success: false,
      };
    }

    // Generate verification token
    const verifyToken = await generateVerificationCode(6);
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        verifyToken,
        isVerified: false,
        status: true,
      },
    });

    // Send verification email
    await sendVerificationEmail(email, verifyToken, name);

    return {
      success: true,
      userId: newUser.id,
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      error: "Something went wrong. Please try again.",
      success: false,
    };
  }
}

// Send verification email
async function sendVerificationEmail(
  email: string,
  token: string,
  name: string
) {
  try {
    await resend.emails.send({
      from: "Verification Code <info@rwoma.com>",
      to: email,
      subject: "Verify your email address",
      react: await ReactEmailTemplate({ code: token, name }),
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send verification email:", error);
    return { success: false, error };
  }
}

export async function verifyEmailToken(email: string, token: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
        verifyToken: token,
      },
    });

    if (!user) {
      return { success: false, error: "Invalid verification token" };
    }

    await db.user.update({
      where: { id: user.id },
      data: {
        isVerified: true,
        verifyToken: null,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error verifying token:", error);
    return { success: false, error: "Something went wrong" };
  }
}
