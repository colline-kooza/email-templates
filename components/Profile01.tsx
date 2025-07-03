import { LogOut, MoveUpRight, Settings, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface MenuItem {
  label: string;
  value?: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
}

interface TopNavProps {
  session?: Session | null,
  // singleProfile?: Profile | null
}

export default function Profile01({ session }: TopNavProps) {
  const name =  session?.user?.name;
  const role = session?.user?.role ?? "USER";
  const avatar =  session?.user?.image ?? "https://utfs.io/f/59b606d1-9148-4f50-ae1c-e9d02322e834-2558r.png";

  const router = useRouter();

  function handleLogout() {
    try {
      signOut();
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  }

  const menuItems: MenuItem[] = [
    
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="w-4 h-4" />,
    },
    // {
    //   label: "Terms & Policies",
    //   href: "/terms",
    //   icon: <FileText className="w-4 h-4" />,
    //   external: true,
    // },
  ].filter(Boolean) as MenuItem[];

  if (!session) {
    return null;
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <div className="relative px-6 pt-12 pb-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="relative shrink-0">
              <Image
                src={avatar}
                alt={name??"user profile image"}
                width={72}
                height={72}
                className="rounded-full ring-4 ring-white dark:ring-zinc-900 object-cover"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900" />
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{name}</h2>
              <p className="text-zinc-600 dark:text-zinc-400">{role}</p>
            </div>
          </div>
          <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-6" />
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                className="flex items-center justify-between p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors duration-200"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{item.label}</span>
                </div>
                {item.value && (
                  <span className="text-sm text-zinc-500 dark:text-zinc-400 mr-2">{item.value}</span>
                )}
              </Link>
            ))}
            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center justify-between p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Logout</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
