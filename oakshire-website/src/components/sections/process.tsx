"use client";

import { Search, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    phase: "Week 1-2",
    title: "Discovery",
    description:
      "Understand your business, pain points, and goals. Technical feasibility and architecture planning. Fixed-price proposal with milestones.",
  },
  {
    icon: Palette,
    phase: "Week 3-6",
    title: "Design & Planning",
    description:
      "UI/UX design with your feedback. Database schema and API documentation. Development roadmap and sprint planning.",
  },
  {
    icon: Code,
    phase: "Week 7-N",
    title: "Agile Development",
    description:
      "2-week sprints with demos. Continuous integration and testing. Regular communication via Slack and video calls.",
  },
  {
    icon: Rocket,
    phase: "Final Weeks",
    title: "Launch & Support",
    description:
      "UAT and performance testing. Production deployment. Training and documentation. Ongoing maintenance and enhancements.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            A proven process that delivers results. From discovery to launch, we
            keep you involved every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-stone-200" />
              )}

              <div className="bg-stone-50 rounded-xl p-6 border border-stone-100 h-full">
                {/* Icon & Phase */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-stone-500">
                    {step.phase}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-stone-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
