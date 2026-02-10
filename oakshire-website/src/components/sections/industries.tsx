"use client";

import {
  Building2,
  Plane,
  Wallet,
  Truck,
  ShoppingCart,
  Heart,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "Banking & Finance",
    description:
      "Digital lending, core banking, payments, compliance",
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    description:
      "Booking engines, inventory management, dynamic pricing",
  },
  {
    icon: Wallet,
    name: "FinTech SaaS",
    description:
      "Accounting, payments, tax compliance, AI automation",
  },
  {
    icon: Truck,
    name: "Logistics & IoT",
    description:
      "Fleet tracking, route optimization, predictive maintenance",
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce",
    description:
      "Marketplaces, inventory, payment integration, analytics",
  },
  {
    icon: Heart,
    name: "Healthcare",
    description:
      "Telemedicine, patient portals, HIPAA compliance, EHR integration",
  },
];

export function IndustriesSection() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900 mb-4">
            Domain Expertise Across Industries
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Deep experience in regulated industries where quality, security, and
            compliance matter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="bg-white p-6 rounded-xl border border-stone-200 hover:border-[#5c6b56]/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-stone-600">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
