"use client";

import { HeartHandshake, ShieldCheck, Home, Stethoscope } from "lucide-react";

export default function WhyAdoptPet() {
  return (
    <div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-orange-500">
              Why Adopt Pets?
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Adopting a pet gives animals a second chance at life while
              bringing love, happiness, and companionship into your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-orange-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5">
                <HeartHandshake size={32} />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Save Lives
              </h3>

              <p className="text-gray-500 text-sm">
                Give homeless pets a loving and caring forever home.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5">
                <Home size={32} />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Find Companionship
              </h3>

              <p className="text-gray-500 text-sm">
                Pets bring happiness, loyalty, and emotional support.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5">
                <ShieldCheck size={32} />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Reduce Homelessness
              </h3>

              <p className="text-gray-500 text-sm">
                Adoption helps reduce the number of stray and abandoned pets.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5">
                <Stethoscope size={32} />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Better Mental Health
              </h3>

              <p className="text-gray-500 text-sm">
                Spending time with pets helps reduce stress and anxiety.
              </p>
            </div>

          </div>
        </div>
      </section>

      
    </div>
  );
}