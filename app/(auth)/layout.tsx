import type React from "react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/navBar"
import { StickyHeader } from "@/components/StickyHeader"
import { LoginHeader } from "@/components/login-header"
import localFont from "next/font/local"
import { fontSans } from "@/lib/font"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}
const degular = localFont({
  src: "../fonts/DegularDisplay-Semibold.otf",
  variable: "--font-degular",              
  weight: "400",                           
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <body className={` ${degular.variable} ${fontSans.variable} antialiased font-sans relative dark:bg-[#000000] `}>
 
          <div className="relative min-h-screen w-full ">
               <LoginHeader />
            <div className="fixed inset-0 z-0">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/bg-5.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            </div>
            <div className="relative z-10">{children}</div>
          </div>
      </body>
  )
}
