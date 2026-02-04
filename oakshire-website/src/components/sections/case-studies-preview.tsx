"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

const caseStudies = [
  {
    title: "Axis Bank: AI-Powered Gold Loan Platform",
    description:
      "Transformed gold loan processing from 48-hour manual process to 30-minute automated system with AI fraud detection.",
    challenge:
      "Manual loan processing took 48 hours, high costs, scaling issues during peak demand.",
    solution:
      "End-to-end digital platform with AI fraud detection, automated gold valuation, and real-time processing.",
    impacts: [
      "₹12,000+ Crores in loans processed",
      "87% reduction in processing time (48h → 30min)",
      "75,000+ customers onboarded digitally",
      "99.7% uptime across 2,000+ branches",
    ],
    link: "/case-studies/axis-bank",
    color: "bg-gradient-to-br from-stone-800 to-stone-900",
  },
  {
    title: "Cordelia Cruises: Premium Booking Engine",
    description:
      "Built sophisticated booking platform with AI-powered pricing, real-time inventory sync, and mobile-first design.",
    challenge:
      "Launch India's first cruise line with complex cabin inventory, dynamic pricing, and multi-channel distribution.",
    solution:
      "Sophisticated booking platform with AI-powered pricing, real-time inventory sync, and mobile-first design.",
    impacts: [
      "₹450+ Crores in bookings (Year 1)",
      "85% average occupancy rate",
      "150,000+ passengers booked",
      "78% mobile booking rate",
    ],
    link: "/case-studies/cordelia-cruises",
    color: "bg-gradient-to-br from-[#5c6b56] to-[#3d4a38]",
  },
  {
    title: "Fincent: AI Accounting SaaS (USA)",
    description:
      "AI-first accounting platform with ML transaction categorization, receipt OCR, and RAG-powered tax optimization.",
    challenge:
      "Small businesses spend 15+ hours/month on manual bookkeeping, paying $3K-10K annually for CPAs.",
    solution:
      "AI-first accounting platform with ML transaction categorization, receipt OCR, and RAG-powered tax optimization.",
    impacts: [
      "$600M+ transactions automated",
      "99.3% categorization accuracy",
      "10,000+ businesses served",
      "$6,800 avg. annual savings per customer",
    ],
    link: "/case-studies/fincent",
    color: "bg-gradient-to-br from-stone-700 to-stone-800",
  },
];

export function CaseStudiesPreviewSection() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900 mb-4">
            Enterprise Projects That Deliver Results
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            See how we've helped industry leaders transform their businesses
            with custom software solutions.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((caseStudy, index) => (
            <Card
              key={caseStudy.title}
              className="overflow-hidden border-stone-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image/Visual Side */}
                <div
                  className={`${caseStudy.color} p-8 lg:p-12 flex flex-col justify-center min-h-[300px]`}
                >
                  <div className="text-white">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                      {caseStudy.title}
                    </h3>
                    <p className="text-white/80 text-lg">
                      {caseStudy.description}
                    </p>
                  </div>
                </div>

                {/* Content Side */}
                <CardContent className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-2">
                        Challenge
                      </h4>
                      <p className="text-stone-700">{caseStudy.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-2">
                        Solution
                      </h4>
                      <p className="text-stone-700">{caseStudy.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">
                        Impact
                      </h4>
                      <ul className="space-y-2">
                        {caseStudy.impacts.map((impact) => (
                          <li
                            key={impact}
                            className="flex items-start gap-2 text-sm text-stone-700"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#5c6b56] mt-0.5 shrink-0" />
                            {impact}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={caseStudy.link}
                      className="inline-flex items-center font-medium text-[#5c6b56] hover:text-[#4a5744] transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-[#5c6b56] hover:bg-[#4a5744] text-white"
          >
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
