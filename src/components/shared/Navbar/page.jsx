

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, UserCircle } from "lucide-react";
import Image from "next/image";
import Logo from "../../../../public/asset/logo.png"

export default function Navbar({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">

  {/* Logo */}
  <Link href="/" className="flex items-center gap-2 z-10">
    <Image
      src={Logo}
      alt="Logo"
      width={60}
      height={60}
      className="rounded-full"
    />
    <span className="text-2xl font-bold text-orange-500">
      PetConnect
    </span>
  </Link>

  {/* CENTER MENU (NEW FIX) */}
  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
    <Link href="/" className="text-black hover:text-orange-500">
      Home
    </Link>

    <Link href="/pets" className="text-black hover:text-orange-500">
      All Pets
    </Link>

    <Link href="/my-requests" className="text-black hover:text-orange-500">
      My Requests
    </Link>

    <Link href="/add-pet" className="text-black hover:text-orange-500">
      Add Pet
    </Link>
  </div>

  {/* USER SECTION (RIGHT SIDE) */}
  <div className="hidden md:flex items-center gap-4 z-10">
    {user ? (
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-1"
        >
          <UserCircle size={30} />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg border z-50">
            <Link
              href="/dashboard"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Dashboard
            </Link>

            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
              Logout
            </button>
          </div>
        )}
      </div>
    ) : (
      <Link
        href="/login"
        className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Login
      </Link>
    )}
  </div>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-orange-500"
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? <X size={28} /> : <Menu size={28} />}
  </button>
</div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-4">
            <Link href="/" className="text-black hover:text-orange-500">
              Home
            </Link>

            <Link href="/pets" className="text-black hover:text-orange-500">
              All Pets
            </Link>

            <Link href="/my-requests" className="text-black hover:text-orange-500">
              My Requests
            </Link>

            <Link href="/add-pet" className="text-black hover:text-orange-500">
              Add Pet
            </Link>

            {user && (
              <>
                <Link href="/my-requests">My Requests</Link>
                <Link href="/add-pet">Add Pet</Link>

                <Link href="/dashboard">Dashboard</Link>

                <button className="text-left text-red-500">
                  Logout
                </button>
              </>
            )}

            {!user && (
              <Link
                href="/login"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg w-fit"
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