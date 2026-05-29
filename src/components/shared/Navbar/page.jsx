"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../../../public/asset/logo.png";
import { authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const { data: session, refetch } = authClient.useSession();
  const user = session?.user;

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await authClient.signOut();

      // 🔥 IMPORTANT: clear cached session instantly
      await refetch();

      setDropdownOpen(false);
      setIsOpen(false);

      // redirect after logout
      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 z-10">
            <Image src={Logo} alt="Logo" width={55} height={55} />
            <span className="text-2xl font-bold text-orange-500">
              PetConnect
            </span>
          </Link>

          {/* MENU */}
          <div className="text-black hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
            <Link href="/">Home</Link>
            <Link href="/pets">All Pets</Link>

            {user && (
              <>
                <Link href="/my-requests">My Requests</Link>
                <Link href="/add-pet">Add Pet</Link>
              </>
            )}
          </div>

          {/* USER */}
          <div className="hidden md:flex items-center gap-4 z-10">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2"
                >
                  {/* PROFILE IMAGE */}
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt="profile"
                      width={65}
                      height={65}
                      className="rounded-full border"
                    />
                  ) : (
                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200">
                      {user.name?.charAt(0)}
                    </div>
                  )}
                </button>

                {/* DROPDOWN */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 text-black bg-white shadow-lg rounded-lg border z-50">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-orange-500 text-white px-5 py-2 rounded-lg"
              >
                Login
              </Link>
            )}
          </div>

          {/* MOBILE */}
          <button
            className="md:hidden text-orange-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-3 pb-4 text-black">
            <Link href="/">Home</Link>
            <Link href="/pets">All Pets</Link>

            {user && (
              <>
                <Link href="/my-requests">My Requests</Link>
                <Link href="/add-pet">Add Pet</Link>
                <Link href="/dashboard">Dashboard</Link>

                <button
                  onClick={handleLogout}
                  className="text-left text-red-500 text-black"
                >
                  Logout
                </button>
              </>
            )}

            {!user && (
              <Link
                href="/login"
                className="bg-orange-500 text-white px-4 py-2 rounded"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}