"use client";

import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className="text-white bg-[#244d3f] px-4 py-2 rounded-full font-semibold"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/all-tiles"
          className="text-gray-700 hover:text-[#244d3f] transition duration-300 px-4 py-2"
        >
          All Pets
        </Link>
      </li>

      <li>
        <Link
          href="/my-profile"
          className="text-gray-700 hover:text-[#244d3f] transition duration-300 px-4 py-2"
        >
          My Requests
        </Link>
      </li>

      <li>
        <Link
          href="/my-profile"
          className="text-gray-700 hover:text-[#244d3f] transition duration-300 px-4 py-2"
        >
          Add Pet 
        </Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">
      <div className="navbar mx-auto px-4 lg:px-8 py-2">

        {/* Left */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-2xl"
            >
              <HiOutlineMenuAlt3 />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[100] p-4 shadow-xl bg-white rounded-2xl w-60 space-y-2"
            >
              {navLinks}
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-black tracking-tight"
          >
            <span className="text-[#244d3f]">PetNest</span>
            
          </Link>
        </div>

        {/* Center Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 text-[15px] font-medium">
            {navLinks}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end flex gap-2">

          {/* Static Avatar */}
          <div className="avatar">
            <div className="w-10 rounded-full">
              <Link href="/my-profile">
                <img src="https://i.ibb.co/4pDNDk1/avatar.png" alt="User" />
              </Link>
            </div>
          </div>

          {/* Static Button */}
          <Link
            href="/login"
            className="btn bg-[#244d3f] hover:bg-[#1d4034] text-white border-none rounded-full px-8 shadow-md"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}