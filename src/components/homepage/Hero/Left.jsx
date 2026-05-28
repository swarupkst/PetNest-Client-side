"use client";

import Link from "next/link";
import React from 'react'

const Left = () => {
  return (
    <div>
      
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Find Your <span className="text-orange-500">Perfect Pet</span> Today 🐾
          </h1>

          <p className="mt-5 text-gray-300 text-lg max-w-xl">
            Adopt loving pets from caring people near you. Every adoption gives
            a pet a second chance at life and brings joy to your home.
          </p>

          <div className="mt-8">
            <Link
              href="/pets"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full text-lg font-medium transition shadow-lg"
            >
              Adopt Now
            </Link>
          </div>
        </div>

  )
}

export default Left
