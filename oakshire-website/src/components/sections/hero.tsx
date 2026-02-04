"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { ArrowRight, Building2, Ship, Wallet, Car } from "lucide-react";

const trustedClients = [
  { name: "Axis Bank", icon: Building2, type: "Fortune 500" },
  { name: "Cordelia Cruises", icon: Ship, type: "Travel" },
  { name: "Fincent", icon: Wallet, type: "US-Based" },
  { name: "Emcode", icon: Car, type: "UAE" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#5c6b56] text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-8">
            We Build AI-Powered Software That Processes{" "}
            <span className="text-stone-200">$600M+</span> in Transactions
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-stone-100 mb-6 font-light">
            Trusted by Fortune 500 banks, cruise lines, and fintech innovators to
            deliver mission-critical systems that scale.
          </p>

          {/* Supporting Text */}
          <p className="text-lg text-stone-200/80 mb-10 max-w-2xl mx-auto">
            From intelligent lending platforms processing ₹12,000+ Crores to
            booking engines handling 150,000+ passengers, we engineer enterprise
            software that drives real business outcomes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#5c6b56] hover:bg-stone-100 font-medium px-8"
            >
              <Link href="/case-studies">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-dark border-white/30 text-white hover:bg-white/10 font-medium px-8"
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="border-t border-white/20 pt-10">
            <p className="text-sm text-stone-300 uppercase tracking-wider mb-6">
              Trusted By Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              {trustedClients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center gap-2 text-stone-200"
                >
                  <client.icon className="h-5 w-5 opacity-70" />
                  <span className="font-medium">{client.name}</span>
                  <span className="text-sm text-stone-300/70 hidden sm:inline">
                    ({client.type})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
