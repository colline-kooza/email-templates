"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Globe, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/useAuthStore";
import { checkEmail, registerUser, verifyEmailToken } from "@/actions/user";

export default function LoginPage() {
  const router = useRouter();
  const {
    authStep,
    email,
    name,
    password,
    verificationToken,
    isLoading,
    error,
    setEmail,
    setName,
    setPassword,
    setVerificationToken,
    setAuthStep,
    setLoading,
    setError,
    reset
  } = useAuthStore();

  // Add state to track which OAuth provider is loading
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const result = await checkEmail(email);
      
      if (result.error) {
        setError(result.error);
        // Add shaking animation by toggling a class
        const form = document.getElementById("auth-form");
        form?.classList.add("shake");
        setTimeout(() => form?.classList.remove("shake"), 500);
        return;
      }
      
      if (result.exists) {
        setAuthStep("password");
      } else {
        setAuthStep("signup");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle password submit
  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Use NextAuth signIn
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password
      });
      
      if (result?.error) {
        setError("Invalid credentials. Please try again.");
        // Add shaking animation for invalid password
        const form = document.getElementById("auth-form");
        form?.classList.add("shake");
        setTimeout(() => form?.classList.remove("shake"), 500);
        return;
      }
      
      toast.success("Logged in successfully!");
      router.push("/dashboard");
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle signup submit
  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || !password) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const result = await registerUser({
        email,
        name,
        password
      });
      
      if (result.error) {
        setError(result.error);
        return;
      }
      
      toast.success("Registration successful! Please check your email for the verification code.");
      setAuthStep("verify");
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle verification submit
  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !verificationToken) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const result = await verifyEmailToken(email, verificationToken);
      
      if (!result.success) {
        setError(result.error || "Invalid verification code");
        return;
      }
      
      // After verification, sign in the user
      await signIn("credentials", {
        redirect: false,
        email,
        password
      });
      
      toast.success("Email verified successfully! You are now logged in.");
      router.push("/dashboard");
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle OAuth sign in - Updated to track which provider is loading
  const handleOAuthSignIn = async (provider: string) => {
    setLoadingProvider(provider);
    try {
      await signIn(provider, { callbackUrl: "/" });
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoadingProvider(null);
    }
  };

  // CSS for shake animation
  const shakeAnimation = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
      20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    .shake {
      animation: shake 0.5s ease-in-out;
    }
  `;

  return (
    <div className="relative flex w-full h-[90vh] items-center justify-center overflow-hidden">
      <style>{shakeAnimation}</style>
      
      {/* Login container */}
      <div className="w-full max-w-md rounded-xl bg-black/55 px-8 py-10 backdrop-blur-md">
        <div className="flex flex-col items-center space-y-6">
          {/* Heading */}
          <div className="flex items-center justify-center flex-col gap-2">
            <AnimatePresence mode="wait">
              <motion.h1
                key={authStep}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="text-xl font-bold text-white"
              >
                {authStep === "email" && "Welcome Back"}
                {authStep === "password" && "Enter Password"}
                {authStep === "signup" && "Create Account"}
                {authStep === "verify" && "Verify Email"}
              </motion.h1>
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
              <motion.p
                key={authStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-gray-300 text-sm"
              >
                {authStep === "email" && "Sign in to continue to your account"}
                {authStep === "password" && `Welcome back, enter your password for ${email}`}
                {authStep === "signup" && "Create a new account to get started"}
                {authStep === "verify" && "Enter the verification code sent to your email"}
              </motion.p>
            </AnimatePresence>
          </div>
          
          {/* Form */}
          <AnimatePresence mode="wait">
            {authStep === "email" && (
              <motion.form
                id="auth-form"
                key="email-form"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                onSubmit={handleEmailSubmit}
                className="w-full space-y-4"
              >
                <div className="w-full space-y-2">
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="h-11 bg-[#1e1f20] border-gray-400 text-white placeholder:text-gray-400 focus-visible:ring-purple-600"
                    required
                  />
                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full bg-purple-600 py-6 text-sm font-bold hover:bg-purple-700 text-white"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Checking...
                    </>
                  ) : "Continue"}
                </Button>
              </motion.form>
            )}
            
            {authStep === "password" && (
              <motion.form
                id="auth-form"
                key="password-form"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                onSubmit={handlePasswordSubmit}
                className="w-full space-y-4"
              >
                <div className="w-full space-y-2">
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-11 bg-[#1e1f20] border-gray-400 text-white placeholder:text-gray-400 focus-visible:ring-purple-600"
                    required
                  />
                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}
                </div>
                
                <div className="flex flex-col gap-2 w-full">
                  <Button 
                    type="submit"
                    disabled={isLoading || !password}
                    className="w-full bg-purple-600 py-6 text-sm font-bold hover:bg-purple-700 text-white"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                      </>
                    ) : "Sign In"}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setAuthStep("email")}
                    className="text-gray-300 hover:text-white"
                  >
                    Back to email
                  </Button>
                </div>
              </motion.form>
            )}
            
            {authStep === "signup" && (
              <motion.form
                id="auth-form"
                key="signup-form"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                onSubmit={handleSignupSubmit}
                className="w-full space-y-4"
              >
                <div className="w-full space-y-3">
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="h-11 bg-[#1e1f20] border-gray-400 text-white placeholder:text-gray-400 focus-visible:ring-purple-600"
                    required
                  />
                  
                  <Input
                    id="signup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="h-11 bg-[#1e1f20] border-gray-400 text-white placeholder:text-gray-400 focus-visible:ring-purple-600"
                    required
                    readOnly
                  />
                  
                  <Input
                    id="signup-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    className="h-11 bg-[#1e1f20] border-gray-400 text-white placeholder:text-gray-400 focus-visible:ring-purple-600"
                    required
                  />
                  
                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}
                </div>
                
                <div className="flex flex-col gap-2 w-full">
                  <Button 
                    type="submit"
                    disabled={isLoading || !name || !email || !password}
                    className="w-full bg-purple-600 py-6 text-sm font-bold hover:bg-purple-700 text-white"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating account...
                      </>
                    ) : "Sign Up"}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setAuthStep("email")}
                    className="text-gray-300 hover:text-white"
                  >
                    Back to email
                  </Button>
                </div>
              </motion.form>
            )}
            
            {authStep === "verify" && (
              <motion.form
                id="auth-form"
                key="verify-form"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                onSubmit={handleVerificationSubmit}
                className="w-full space-y-4"
              >
                <div className="w-full space-y-2">
                  <Input
                    id="verification-token"
                    type="text"
                    value={verificationToken}
                    onChange={(e) => setVerificationToken(e.target.value)}
                    placeholder="Enter verification code"
                    className="h-11 bg-[#1e1f20] border-gray-400 text-white placeholder:text-gray-400 focus-visible:ring-purple-600"
                    required
                  />
                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}
                </div>
                
                <div className="flex flex-col gap-2 w-full">
                  <Button 
                    type="submit"
                    disabled={isLoading || !verificationToken}
                    className="w-full bg-purple-600 py-6 text-sm font-bold hover:bg-purple-700 text-white"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verifying...
                      </>
                    ) : "Verify Email"}
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
          
          {/* OR divider - Only show in email step */}
          {authStep === "email" && (
            <>
              <div className="flex w-full items-center gap-2">
                <div className="h-px flex-1 bg-gray-600"></div>
                <span className="text-sm text-gray-400">OR</span>
                <div className="h-px flex-1 bg-gray-600"></div>
              </div>
              
              <div className="w-full space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-gray-600 bg-transparent py-6 text-sm font-medium text-white hover:bg-white/10"
                  onClick={() => handleOAuthSignIn("google")}
                  disabled={isLoading || loadingProvider !== null}
                >
                  {loadingProvider === "google" ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
                      alt="Google"
                      width={18}
                      height={18}
                      className="mr-2"
                    />
                  )}
                  Continue with Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-600 bg-transparent py-6 text-sm font-medium text-white hover:bg-white/10"
                  onClick={() => handleOAuthSignIn("github")}
                  disabled={isLoading || loadingProvider !== null}
                >
                  {loadingProvider === "github" ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/5968/5968896.png"
                      alt="GitHub"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                  )}
                  Continue with GitHub
                </Button>
              </div>
              
              {/* Sign up option */}
              <div className="text-center text-sm text-gray-300">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    if (email) {
                      setAuthStep("signup");
                    } else {
                      setError("Please enter your email first");
                      const form = document.getElementById("auth-form");
                      form?.classList.add("shake");
                      setTimeout(() => form?.classList.remove("shake"), 500);
                    }
                  }}
                  className="text-purple-400 hover:underline"
                >
                  Sign up
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Footer - Bottom right */}
      <div className="absolute bottom-4 right-4 flex items-center gap-4 text-sm text-white/70">
        <a href="#" className="hover:text-white hover:underline">
          Privacy policy
        </a>
        <span>|</span>
        <a href="#" className="hover:text-white hover:underline">
          Terms
        </a>
        <div className="flex items-center gap-1">
          <Globe className="h-4 w-4" />
          <select className="bg-transparent text-white/70 hover:text-white focus:outline-none">
            <option value="en-US">English (US)</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
    </div>
  );
}