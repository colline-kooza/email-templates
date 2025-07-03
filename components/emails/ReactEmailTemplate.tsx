import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Row,
  Column,
  Hr,
} from "@react-email/components";

interface VerificationEmailProps {
  code: string;
  name: string;
}

export const ReactEmailTemplate: React.FC<VerificationEmailProps> = ({
  code,
  name,
}) => {
  const codeArray = code.split("");

  return (
    <Html>
      <Head />
      <Preview>Verify your email address</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Heading style={h1}>
              <span style={logoText}>Digital</span>
              <span style={logoTextAccent}>Templates</span>
            </Heading>
          </Section>
          <Section style={content}>
            <Heading style={h2}>Verify your email address</Heading>
            <Text style={paragraph}>
              Hi {name},
            </Text>
            <Text style={paragraph}>
              Thank you for signing up! To complete your registration, please enter the verification code below:
            </Text>

            <Row style={codeContainer}>
              {codeArray.map((digit, index) => (
                <Column key={index} style={codeColumn}>
                  <Text style={codeText}>{digit}</Text>
                </Column>
              ))}
            </Row>

            <Text style={paragraph}>
              This code will expire in 30 minutes. If you didn't request this verification, you can safely ignore this email.
            </Text>
            <Hr style={hr} />
            <Text style={footer}>
              &copy; {new Date().getFullYear()} Digital Templates. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  borderRadius: "8px",
  overflow: "hidden",
  maxWidth: "600px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
};

const logoContainer = {
  padding: "30px 20px",
  backgroundColor: "#252627",
};

const logoText = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0",
};

const logoTextAccent = {
  color: "#a855f7", // Purple color
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0",
};

const content = {
  padding: "30px",
};

const h1 = {
  margin: "0",
  textAlign: "center" as const,
};

const h2 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 20px",
};

const paragraph = {
  color: "#555",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 20px",
};

const codeContainer = {
  margin: "30px 0",
  textAlign: "center" as const,
};

const codeColumn = {
  padding: "0 4px",
};

const codeText = {
  backgroundColor: "#252627",
  borderRadius: "8px",
  color: "#ffffff",
  display: "block",
  fontSize: "24px",
  fontWeight: "bold",
  padding: "12px",
  textAlign: "center" as const,
};

const hr = {
  borderColor: "#eaeaea",
  margin: "30px 0",
};

const footer = {
  color: "#999",
  fontSize: "14px",
  textAlign: "center" as const,
};

export default ReactEmailTemplate;