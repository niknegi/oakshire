"use client";

import { Trophy, Brain, PiggyBank } from "lucide-react";

const reasons = [
  {
    icon: Trophy,
    title: "Proven Enterprise Experience",
    description:
      "We've built mission-critical systems for Fortune 500 banks, handling billions in transactions with 99.9% uptime.",
    highlight: "Not outsourcing to juniors—you get our A-team.",
  },
  {
    icon: Brain,
    title: "AI/ML Expertise",
    description:
      "We don't just integrate APIs—we build custom ML models with 99%+ accuracy, trained on millions of data points.",
    highlight: "Real innovation, not buzzwords.",
  },
  {
    icon: PiggyBank,
    title: "Exceptional Value",
    description:
      "Enterprise-grade quality at 60-70% lower cost than US/EU agencies. ROI-focused delivery, not just billable hours.",
    highlight: "Your budget goes further without compromising quality.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900 mb-4">
            Why Global Clients Choose Us
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            We're not just another development agency. Here's what sets us
            apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="text-center p-8 rounded-xl border border-stone-100 hover:border-[#5c6b56]/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#5c6b56]/10 flex items-center justify-center mx-auto mb-6">
                <reason.icon className="h-8 w-8 text-[#5c6b56]" />
              </div>

              <h3 className="text-xl font-semibold text-stone-900 mb-4">
                {reason.title}
              </h3>

              <p className="text-stone-600 mb-4">{reason.description}</p>

              <p className="text-sm font-medium text-[#5c6b56]">
                {reason.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
