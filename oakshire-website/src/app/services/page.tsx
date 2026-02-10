import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, Landmark, Globe, Code2, Server, Database, Cloud } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import config from "next.config.js";

const mainServices = [
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
      "Natural Language Processing",
    ],
    tech: ["TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "Pinecone", "BERT"],
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
      "Regulatory reporting",
    ],
    tech: ["Node.js", "React", "PostgreSQL", "Redis", "AWS", "Kubernetes"],
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
      "Progressive Web Apps",
    ],
    tech: ["React", "React Native", "TypeScript", "Next.js", "Microservices", "Kubernetes"],
  },
];

const techCapabilities = [
  {
    icon: Code2,
    title: "Frontend Development",
    items: ["React & Next.js", "React Native", "TypeScript", "Redux & State Management", "Tailwind CSS", "Progressive Web Apps"],
  },
  {
    icon: Server,
    title: "Backend Development",
    items: ["Node.js & Express", "Python & FastAPI", "GraphQL & REST APIs", "Microservices", "Event-Driven Architecture", "WebSocket APIs"],
  },
  {
    icon: Database,
    title: "Data & Storage",
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "TimescaleDB", "Data Warehousing"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: ["AWS & GCP", "Kubernetes", "Docker", "CI/CD Pipelines", "Terraform", "Monitoring & Observability"],
  },
];

export const metadata = {
  title: "Services | Oakshire Labs",
  description:
    "Enterprise-grade software engineering for scale, security, and measurable impact. AI/ML, Financial Software, and Enterprise Web & Mobile development.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Header */}
      <section className="relative bg-primary text-white py-20">
        {/* Image Background */}
        <Image
          src={`${config.assetPrefix}assets/images/hero-2.jpg`}
          alt="Services background"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl text-white sm:text-5xl font-semibold mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              What We Build
            </h1>
            <p className="text-xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Enterprise-grade software engineered for scale, security, and
              measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service) => (
              <Card
                key={service.title}
                className="border-stone-200 h-full"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-stone-900">
                    {service.title}
                  </h2>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-stone-600 mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-stone-600 flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-stone-100">
                    <p className="text-xs text-stone-500">
                      <span className="font-medium">Technologies:</span>{" "}
                      {service.tech.join(", ")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Capabilities */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-stone-900 mb-4">
              Full-Stack Expertise, Enterprise Standards
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Modern technology stack proven at scale across billions of
              transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white p-8 rounded-xl border border-stone-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <cap.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900">
                    {cap.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {cap.items.map((item) => (
                    <div
                      key={item}
                      className="text-sm text-stone-600 bg-stone-50 px-3 py-2 rounded"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-stone-900 mb-12 text-center">
              Our Approach
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Enterprise Architecture",
                  description:
                    "Microservices, event-driven design, horizontal scalability",
                },
                {
                  title: "AI/ML Innovation",
                  description:
                    "Custom models, ensemble learning, continuous retraining",
                },
                {
                  title: "Security First",
                  description:
                    "SOC 2 compliance, encryption, penetration testing, audit trails",
                },
                {
                  title: "Agile Delivery",
                  description:
                    "2-week sprints, continuous deployment, regular demos",
                },
                {
                  title: "Performance at Scale",
                  description:
                    "99.9% uptime, sub-second response times, load tested for millions",
                },
                {
                  title: "Ongoing Partnership",
                  description:
                    "Post-launch support, feature enhancements, 24/7 monitoring",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
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
      <section className="relative py-20 bg-primary">
        <Image
          src={`${config.assetPrefix}assets/images/start.jpg`}
          alt="Get Started background"
          fill
          className="object-cover z-9"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
          <h2 className="text-3xl font-semibold text-white mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Ready to start your project?
          </h2>
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Let's discuss how we can help you build scalable, secure, and
            high-performance software solutions.
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
