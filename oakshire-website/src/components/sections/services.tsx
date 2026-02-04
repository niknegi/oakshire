"use client";

import Link from "next/link";
import { Brain, Landmark, Globe, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "~/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description:
      "Transform operations with intelligent automation. From fraud detection to predictive analytics, we build custom ML models with 99%+ accuracy.",
    features: [
      "Transaction categorization (99%+ accuracy)",
      "Fraud detection & anomaly alerts",
      "Predictive analytics & forecasting",
      "Computer vision & OCR",
      "RAG-powered chatbots",
    ],
    tech: "TensorFlow, PyTorch, Scikit-learn, LangChain, Pinecone",
    caseStudy: {
      name: "Fincent",
      result: "99.3% accuracy in automated bookkeeping",
      link: "/case-studies/fincent",
    },
  },
  {
    icon: Landmark,
    title: "Financial Software",
    description:
      "Banking, fintech, and payment systems engineered for security, compliance, and scale. RBI-compliant digital lending platforms.",
    features: [
      "Digital lending platforms",
      "Core banking integrations",
      "Payment processing & compliance",
      "Risk management systems",
      "Real-time transaction processing",
    ],
    tech: "Node.js, React, PostgreSQL, Redis, AWS",
    caseStudy: {
      name: "Axis Bank",
      result: "₹12,000+ Cr processed",
      link: "/case-studies/axis-bank",
    },
  },
  {
    icon: Globe,
    title: "Enterprise Web & Mobile",
    description:
      "Scalable platforms for high-traffic businesses. From booking engines to customer portals, we build for millions of users.",
    features: [
      "Booking & inventory systems",
      "E-commerce platforms",
      "Customer portals & dashboards",
      "Mobile-first applications",
      "API development & integrations",
    ],
    tech: "React, React Native, TypeScript, Microservices, Kubernetes",
    caseStudy: {
      name: "Cordelia Cruises",
      result: "150K+ passengers booked",
      link: "/case-studies/cordelia-cruises",
    },
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900 mb-4">
            What We Build
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Enterprise-grade software engineered for scale, security, and
            measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-stone-200 hover:border-[#5c6b56]/30 transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-[#5c6b56]/10 flex items-center justify-center mb-4 group-hover:bg-[#5c6b56]/20 transition-colors">
                  <service.icon className="h-6 w-6 text-[#5c6b56]" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-stone-600 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-stone-600 flex items-start gap-2"
                    >
                      <span className="text-[#5c6b56] mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-stone-100">
                  <p className="text-xs text-stone-500 mb-3">
                    <span className="font-medium">Technologies:</span>{" "}
                    {service.tech}
                  </p>
                  <Link
                    href={service.caseStudy.link}
                    className="inline-flex items-center text-sm font-medium text-[#5c6b56] hover:text-[#4a5744] transition-colors"
                  >
                    Case Study: {service.caseStudy.name} —{" "}
                    {service.caseStudy.result}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
