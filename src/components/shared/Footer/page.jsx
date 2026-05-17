import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto border-t border-gray-800">
      <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand Section */}
        <div>
          <Link
            href="/"
            className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-2 mb-4"
          >
            <span className="text-3xl">🐾</span> PetNest.
          </Link>

          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Bringing joy to homes by connecting loving families with pets in need. Adopt, do not shop! Give them a forever home today.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-white">
            Contact
          </h3>

          <div className="space-y-3 text-sm text-gray-400">
            <p>📍 Dhaka, Bangladesh</p>

            <a
              href="mailto:support@petadopt.com"
              className="block hover:text-[#244d3f] transition duration-300"
            >
              ✉ support@petnest.com
            </a>

            <a
              href="tel:+8801234567890"
              className="block hover:text-[#244d3f] transition duration-300"
            >
              📞 +880 1234 567890
            </a>
          </div>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-white">
            Follow Us
          </h3>

          <p className="text-sm text-gray-400 mb-5">
            Stay connected with us on social media for heartwarming success stories and available pets.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#244d3f] hover:border-[#244d3f] hover:text-white transition-all duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#244d3f] hover:border-[#244d3f] hover:text-white transition-all duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#244d3f] hover:border-[#244d3f] hover:text-white transition-all duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#244d3f] hover:border-[#244d3f] hover:text-white transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PetNest Platform. All rights reserved.
      </div>
    </footer>
  );
}