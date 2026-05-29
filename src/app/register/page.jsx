"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const router = useRouter();

  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Password Validation
    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain one uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
      return setError("Password must contain one lowercase letter");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    // Success
    toast.success("Registration Successful!");

    console.log({
      name,
      email,
      photo,
      password,
    });

    // Redirect
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4 pt-20 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
          User Registration
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 rounded-xl text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded-xl text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Photo URL
            </label>

            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              required
              className="w-full border border-gray-300 text-black rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              className="w-full border border-gray-300 rounded-xl text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              required
              className="w-full border border-gray-300 text-black rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm font-medium">{error}</p>
          )}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="w-full border border-gray-300 hover:bg-gray-100 text-black py-3 rounded-xl flex items-center justify-center gap-3 font-medium transition"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>
      </div>
    </div>
  );
}