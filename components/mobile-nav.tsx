"use client";
import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/icons";
import { Button } from "./ui/button";
import ShinyButton from "./ui/shiny-button";
import { Menu } from "lucide-react";
import Logo from "./Logo";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 ml-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
     <Menu  />
     <Logo/>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
      <Logo/>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {docsConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                ),
            )}
          </div>
          <div className="flex flex-col space-y-2">
            {docsConfig.sidebarNav.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">{item.title}</h4>
                {item.items?.map((item) =>
                  !item.disabled && item.href ? (
                    <MobileLink
                      key={item.href}
                      href={item.href}
                      onOpenChange={setOpen}
                      onClick={() => item.event && posthog.capture(item.event)}
                      className={cn(
                        "text-muted-foreground",
                        item.disabled && "cursor-not-allowed opacity-60",
                      )}
                    >
                      {item.title}
                      {item.label && (
                        <span className="ml-2 rounded-md bg-[#FFBD7A] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                          {item.label}
                        </span>
                      )}
                    </MobileLink>
                  ) : (
                    <span
                      key={index}
                      className={cn(
                        "text-muted-foreground",
                        item.disabled && "cursor-not-allowed opacity-60",
                      )}
                    >
                      {item.title}
                      {item.label && (
                        <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                          {item.label}
                        </span>
                      )}
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>

          <Link
            className={cn(
              "lg:hidden md:flex",
            )}
            href="/login"
          >
            
            <ShinyButton>Login</ShinyButton>
          </Link>
       
         
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}