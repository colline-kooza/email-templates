import Header from "@/components/header";
import Sidebar from "@/components/Sidebar";

import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") {
    redirect("/login");
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar role={session.user.role} />
      {/* <SidebarV2 /> */}
      <div className="flex flex-col">
        <Header session={session} />
        {children}
      </div>
    </div>
  );
}
