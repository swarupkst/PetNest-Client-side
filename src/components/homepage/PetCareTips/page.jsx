"use client";

import { HeartHandshake, ShieldCheck, Home, Stethoscope } from "lucide-react";

export default function PetCareTips() {
  return (
    <div>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-orange-500">
              Pet Care Tips
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Proper care keeps your pets healthy, happy, and active every day.
            </p>
          </div>

          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Tip 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3 text-orange-500">
                Healthy Food
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Feed your pets nutritious meals and always provide clean water
                to maintain their overall health.
              </p>
            </div>

            {/* Tip 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3 text-orange-500">
                Regular Exercise
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Daily walks and playtime help pets stay physically fit and
                mentally active.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3 text-orange-500">
                Vet Checkups
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Schedule routine veterinary visits to ensure your pets remain
                healthy and vaccinated.
              </p>
            </div>

            {/* Tip 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3 text-orange-500">
                Grooming & Hygiene
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Regular grooming keeps your pets clean, comfortable, and free
                from infections.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}