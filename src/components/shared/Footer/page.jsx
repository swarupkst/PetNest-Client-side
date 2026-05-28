"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#050816] via-[#070b1a] to-[#050816] text-white border-t border-gray-800">

      {/* MAIN FOOTER */}
      <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/asset/logo.png"
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-2xl font-bold">
              Pet<span className="text-orange-500">Connect</span>
            </h1>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-xs md:max-w-none">
            Connecting loving families with pets in need. Every adoption saves
            a life and creates a beautiful bond.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6 justify-center md:justify-start">
            <a className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>

            <a className="bg-white/10 p-2 rounded-full hover:bg-black transition">
              <FaXTwitter />
            </a>

            <a className="bg-white/10 p-2 rounded-full hover:bg-pink-600 transition">
              <FaInstagram />
            </a>

            <a className="bg-white/10 p-2 rounded-full hover:bg-red-600 transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Platform */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Platform</h2>
          <ul className="space-y-3 text-gray-400">
            <li><Link href="/pets">All Pets</Link></li>
            <li><Link href="/add-pet">Add a Pet</Link></li>
            <li><Link href="/requests">My Requests</Link></li>
            <li><Link href="/listings">My Listings</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-3 text-gray-400">
            <li><Link href="/">About Us</Link></li>
            <li><Link href="/">Success Stories</Link></li>
            <li><Link href="/">Pet Care Tips</Link></li>
            <li><Link href="/">Why Adopt?</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>

          <div className="space-y-4 text-gray-400 text-sm">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <MdLocationOn className="text-orange-500" />
              123 Paw Street, Animal City
            </p>

            <p className="flex items-center gap-2 justify-center md:justify-start">
              <MdPhone className="text-orange-500" />
              0123456789
            </p>

            <p className="flex items-center gap-2 justify-center md:justify-start">
              <MdEmail className="text-orange-500" />
              hello@petconnect.com
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-5 text-sm text-gray-400 text-center">
          © 2026 PetConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}