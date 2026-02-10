import Link from "next/link";
import { ArrowRight, Search, Palette, Code, Rocket, CheckCircle2 } from "lucide-react";
import { Button } from "~/components/ui/button";

const phases = [
  {
    icon: Search,
    number: "01",
    phase: "Week 1-2",
    title: "Discovery",
    description:
      "We begin by understanding your business, pain points, and goals. We conduct technical feasibility assessments and architecture planning, followed by a fixed-price proposal with clear milestones.",
    deliverables: [
      "Business requirements document",
      "Technical architecture proposal",
      "Project roadmap & timeline",
      "Fixed-price quote",
    ],
  },
  {
    icon: Palette,
    number: "02",
    phase: "Week 3-6",
    title: "Design & Planning",
    description:
      "We create detailed UI/UX designs with your feedback at every step. We document database schemas, API contracts, and prepare a comprehensive development roadmap.",
    deliverables: [
      "UI/UX mockups & prototypes",
      "Database schema design",
      "API documentation",
      "Sprint planning",
    ],
  },
  {
    icon: Code,
    number: "03",
    phase: "Week 7+",
    title: "Agile Development",
    description:
      "We work in 2-week sprints with regular demos. Our continuous integration and testing ensure quality at every step. You'll have direct access to our team via Slack and regular video calls.",
    deliverables: [
      "Bi-weekly sprint demos",
      "Continuous integration pipeline",
      "Automated testing (85%+ coverage)",
      "Regular progress updates",
    ],
  },
  {
    icon: Rocket,
    number: "04",
    phase: "Final Weeks",
    title: "Launch & Support",
    description:
      "We conduct thorough UAT and performance testing before production deployment. We provide training, documentation, and ongoing maintenance to ensure long-term success.",
    deliverables: [
      "UAT & performance testing",
      "Production deployment",
      "Training & documentation",
      "Ongoing support & maintenance",
    ],
  },
];

const engagementModels = [
  {
    title: "Fixed-Price Projects",
    description:
      "Best for well-defined scope with clear deliverables. You get a fixed price and timeline with milestone-based payments.",
    bestFor: "MVP development, specific feature builds, defined integrations",
  },
  {
    title: "Dedicated Team",
    description:
      "Ideal for ongoing product development. Our team integrates with yours for long-term collaboration.",
    bestFor: "Product companies, ongoing development, agile iterations",
  },
  {
    title: "AI/ML Consulting",
    description:
      "Focused engagements for specific AI/ML challenges. We help design, build, and deploy custom models.",
    bestFor: "Model development, optimization, AI strategy",
  },
];

export const metadata = {
  title: "Our Process | Oakshire Labs",
  description:
    "A proven process that delivers results. From discovery to launch, we keep you involved every step of the way.",
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Header */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-6">
              How We Work
            </h1>
            <p className="text-xl text-stone-200">
              A proven process that delivers results. From discovery to launch,
              we keep you involved every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div
                  key={phase.title}
                  className="relative grid grid-cols-1 md:grid-cols-12 gap-8"
                >
                  {/* Connector */}
                  {index < phases.length - 1 && (
                    <div className="hidden md:block absolute left-14 top-24 w-0.5 h-16 bg-stone-200" />
                  )}

                  {/* Icon & Number */}
                  <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <phase.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-stone-200">
                      {phase.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-10">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h2 className="text-2xl font-semibold text-stone-900">
                        {phase.title}
                      </h2>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {phase.phase}
                      </span>
                    </div>
                    <p className="text-stone-600 mb-6 text-lg leading-relaxed">
                      {phase.description}
                    </p>

                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                      <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-4">
                        Key Deliverables
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {phase.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-stone-700"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-stone-900 mb-4">
              Engagement Models
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Flexible engagement options to match your project needs and
              preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className="bg-white p-8 rounded-xl border border-stone-200"
              >
                <h3 className="text-xl font-semibold text-stone-900 mb-4">
                  {model.title}
                </h3>
                <p className="text-stone-600 mb-6">{model.description}</p>
                <div className="pt-4 border-t border-stone-100">
                  <p className="text-sm text-stone-500">
                    <span className="font-medium text-stone-700">Best for:</span>{" "}
                    {model.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-stone-900 mb-12 text-center">
              Quality Assurance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Automated Testing",
                  description:
                    "85%+ code coverage with unit, integration, and E2E tests for all critical flows.",
                },
                {
                  title: "Code Reviews",
                  description:
                    "Every line of code is reviewed by senior engineers before merging.",
                },
                {
                  title: "Staging Environments",
                  description:
                    "Production-like staging for thorough testing before release.",
                },
                {
                  title: "Load Testing",
                  description:
                    "Systems validated for millions of users before production deployment.",
                },
                {
                  title: "Security Audits",
                  description:
                    "Quarterly penetration testing and continuous security monitoring.",
                },
                {
                  title: "Performance Monitoring",
                  description:
                    "Real-time monitoring with alerts for 99.9% uptime SLA.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl text-stone-200 mb-10 max-w-2xl mx-auto">
            Let's discuss your requirements and create a tailored plan for your
            success.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-stone-100 font-medium px-10"
          >
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
