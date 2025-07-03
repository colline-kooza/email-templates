"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icons } from "./icons";
import { ModeToggle } from "./moddle-toggle";
import { cn } from "@/lib/utils";
import ShinyButton from "./ui/shiny-button";
import { docsConfig } from "@/config/docs";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

export function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Only show after 90vh of scrolling
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > viewportHeight * 0.9);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
   <motion.div
   {...({ className: cn(
     "fixed top-0 left-0 right-0 z-50 w-full",
     "supports-backdrop-blur:bg-background/90 bg-background/10 backdrop-blur-lg"
   ) } as HTMLMotionProps<"div">)}
   initial={{ y: -100, opacity: 0 }}
   animate={{ y: 0, opacity: 1 }}
   exit={{ y: -100, opacity: 0 }}
   transition={{ type: "spring", stiffness: 300, damping: 30 }}
 >
          <div className="flex h-16 items-center justify-between w-full px-4 md:px-6 lg:px-8">
            <div/>
            
            <div className="flex items-center gap-5 font-semibold">
                <Link className="text-sm dark:text-white text-gray-800" href="">Templates</Link>
                <Link className="text-sm dark:text-gray-300 text-gray-500" href="">Components</Link>
            </div>
            <nav className="flex items-center gap-1 space-x-4">
        <Button variant="ghost">
            <Search/>
        </Button>
          <Link
            className={cn(
              "hidden md:inline-flex",
            )}
            href="/login"
          >
            
            <ShinyButton>Login</ShinyButton>
          </Link>

          <Link
            className={cn(
              "lg:hidden md:hidden block",
            )}
            href="/login"
          >
            
            <ShinyButton>Login</ShinyButton>
          </Link>
          <ModeToggle />
          </nav>
          </div>
        
        </motion.div>
      )}
    </AnimatePresence>
  );
}