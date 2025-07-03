import Link from "next/link";
import { MainNav } from "./main-site";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./moddle-toggle";
import ShinyButton from "./ui/shiny-button";


export async function SiteHeader() {
  let stars = 300; 
  try {
    const response = await fetch(
      "https://api.github.com/repos/magicuidesign/magicui",
      {
        headers: process.env.GITHUB_OAUTH_TOKEN
          ? {
              Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
              "Content-Type": "application/json",
            }
          : {},
        next: {
          revalidate: 3600,
        },
      },
    );

    if (response.ok) {
      const data = await response.json();
      stars = data.stargazers_count || stars; // Update stars if API response is valid
    }
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
  }

  return (
    <header
      className={cn(
        "supports-backdrop-blur:bg-background/90 sticky top-0 z-[10000] w-full bg-background/40 backdrop-blur-lg overflow-hidden md:px-6",
      )}
    >
      <div className=" flex h-16 items-center justify-between   w-full">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
    
          <div className="w-full flex-1 md:w-auto md:flex-none ">
          </div>
          <nav className="flex items-center gap-1 space-x-4">
          <Link
            className={cn(
              "dark:text-[#fec723] text-orange-600 font-semibold",
            )}
            href="/login"
          >
            
          Pricing
          </Link>
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
      </div>
    
    </header>
  );
}