"use client";

import {
  BarChart2,
  Receipt,
  Building2,
  CreditCard,
  Folder,
  Wallet,
  Users2,
  Shield,
  MessagesSquare,
  Video,
  Settings,
  HelpCircle,
  Menu,
  Home,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { UserRole } from "@prisma/client";
import Logo from "./Logo";


interface NavItemProps {
  href: string;
  icon: any;
  children: React.ReactNode;
  onClick?: () => void;
}

// Navigation item component
function NavItem({ href, icon: Icon, children, onClick }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center px-3 py-2 text-sm rounded-md transition-all
        ${isActive 
          ? 'text-primary bg-primary/10 dark:bg-primary/20 font-medium' 
          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1F1F23]'
        }
        ${isActive ? 'shadow-sm' : ''}
      `}
    >
      <Icon 
        className={`h-4 w-4 mr-3 flex-shrink-0 
          ${isActive ? 'text-primary' : ''}
        `}
      />
      {children}
    </Link>
  );
}

interface SidebarProps {
  role: any;
}

export default function Sidebar({ role }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  function handleNavigation() {
    setIsMobileMenuOpen(false);
  }

  async function handleLogout() {
    try {
      await signOut();
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  }

  const routes = {
    overview: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: Home,
        roles: ["ADMIN", "STUDENT", "EMPLOYEE"],
      },
     
    ],
    team: [
      {
        title: "Templates-Categories",
        href: "/dashboard/category-templates",
        icon: Folder,
        roles: ["ADMIN"],
      },
      {
        title: "Templates",
        href: "/dashboard/templates",
        icon: Folder,
        roles: ["ADMIN"],
      },
     
      {
        title: "Components",
        href: "/dashboard/components",
        icon: Folder,
        roles: ["ADMIN"],
      },
      // {
      //   title: "Employees",
      //   href: "/dashboard/employees",
      //   icon: Folder,
      //   roles: ["ADMIN"],
      // },
      // {
      //   title: "Students",
      //   href: "/dashboard/students",
      //   icon: Folder,
      //   roles: ["ADMIN"],
      // },
      // {
      //   title: "Expenses",
      //   href: "/dashboard/expenses",
      //   icon: Folder,
      //   roles: ["ADMIN"],
      // }
    ],
    changePassword: [
      {
        title: "Change Password",
        href: "/dashboard/change-password",
        icon: Wallet,
        roles: ["ADMIN" , "EMPLOYEE" , "STUDENT"],
      },
   
    ],
    settings: [
      {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
        roles: ["ADMIN", "STUDENT", "EMPLOYEE"],
      },
      {
        title: "Notification",
        href: "/dashboard/notifications",
        icon: HelpCircle,
        roles: ["ADMIN", "STUDENT", "EMPLOYEE"],
      },
    ],
  };

  return (
    <>
      <button
        type="button"
        className="lg:hidden fixed top-4 left-4 z-[70] p-2 rounded-lg bg-white dark:bg-[#0F0F12] shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      <nav
        className={`
          fixed inset-y-0 left-0 z-[70] w-64 bg-white dark:bg-[#0F0F12] transform transition-transform duration-200 ease-in-out
          lg:translate-x-0 lg:static lg:w-64 border-r border-gray-200 dark:border-[#1F1F23]
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="h-full flex flex-col">
          <button
            className="h-16 px-6 flex items-center border-b border-gray-200 dark:border-[#1F1F23]"
          >
            <Logo/>
          </button>

          <div className="flex-1 overflow-y-auto py-4 px-4">
            <div className="space-y-6">
              {/* Overview Section */}
              <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Overview
                </div>
                <div className="space-y-1">
                  {routes.overview
                    .filter((item) => item.roles.includes(role))
                    .map((item, index) => (
                      <NavItem
                        key={index}
                        href={item.href}
                        icon={item.icon}
                        onClick={handleNavigation}
                      >
                        {item.title}
                      </NavItem>
                    ))}
                </div>
              </div>
             
             
              {/* Team Section */}
              <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Team
                </div>
                <div className="space-y-1">
                  {routes.team
                    .filter((item) => item.roles.includes(role))
                    .map((item, index) => (
                      <NavItem
                        key={index}
                        href={item.href}
                        icon={item.icon}
                        onClick={handleNavigation}
                      >
                        {item.title}
                      </NavItem>
                    ))}
                </div>
              </div>
              <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Password
                </div>
                <div className="space-y-1">
                  {routes.changePassword
                    .filter((item) => item.roles.includes(role))
                    .map((item, index) => (
                      <NavItem
                        key={index}
                        href={item.href}
                        icon={item.icon}
                        onClick={handleNavigation}
                      >
                        {item.title}
                      </NavItem>
                    ))}
                </div>
              </div>

            </div>
          </div>

          <div className="px-4 py-4 border-t border-gray-200 dark:border-[#1F1F23]">
            <div className="space-y-1">
              {routes.settings
                .filter((item) => item.roles.includes(role))
                .map((item, index) => (
                  <NavItem
                    key={index}
                    href={item.href}
                    icon={item.icon}
                    onClick={handleNavigation}
                  >
                    {item.title}
                  </NavItem>
                ))}
              <NavItem href="#" icon={LogOut} onClick={handleLogout}>
                Logout
              </NavItem>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[65] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}