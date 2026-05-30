"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      toast.error("Please login first");
      router.push("/login");
    }
  }, [session, isPending, router]);

  const handleLogout = async () => {
    try {
      await authClient.signOut();

      toast.success("Logged out successfully");

      router.push("/");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-orange-500"></span>
      </div>
    );
  }

  if (!session) return null;

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Add Pet",
      path: "/dashboard/add-pet",
    },
    {
      name: "My Listings",
      path: "/dashboard/listings",
    },
    {
      name: "My Requests",
      path: "/dashboard/requests",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50 pt-16">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 min-h-screen bg-white border-r shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-orange-500">
              PetConnect
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              {session?.user?.email}
            </p>
          </div>

          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-4 py-3 rounded-xl transition ${
                  pathname === item.path
                    ? "bg-orange-500 text-white"
                    : "hover:bg-orange-100 text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}

        

            
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Top Header */}
          <header className="bg-white border-b px-8 py-5 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Dashboard
              </h1>

              <p className="text-sm text-gray-500">
                Manage your pets and adoption requests
              </p>
            </div>

            
          </header>

          {/* Page Content */}
          <div className="p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}