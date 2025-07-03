import Footer from "@/components/footer";
import { SiteHeader } from "@/components/navBar";
import { StickyHeader } from "@/components/StickyHeader";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen relative">
     {/* Background gradient effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,#e60a64,transparent_70%)] before:opacity-30 dark:before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.9] after:w-[1000%] after:rounded-[100%] after:border-t after:border-[#c5769066] after:bg-white dark:after:bg-zinc-900" />
      <SiteHeader />
      <StickyHeader />
      {children}
      <Footer/>
    </div>
  );
}