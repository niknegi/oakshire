"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-xl text-stone-200 mb-10">
            Whether you're a Fortune 500 enterprise or a scaling startup, we
            deliver software that drives measurable business outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-stone-100 font-medium px-10"
            >
              <Link href="/contact">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-medium px-10"
            >
              <Link href="/case-studies">View All Case Studies</Link>
            </Button>
          </div>

          <p className="text-sm text-stone-300 mt-6">
            30-minute discovery call to discuss your project. No pressure, no
            obligation.
          </p>
        </div>
      </div>
    </section>
  );
}
