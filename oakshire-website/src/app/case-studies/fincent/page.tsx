import Link from "next/link";
import { ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import config from "next.config";

export const metadata = {
  title: "Fincent Case Study | Oakshire Labs",
  description:
    "AI-Powered Financial SaaS Platform for automated bookkeeping. 99.3% transaction categorization accuracy.",
};

export default function FincentCaseStudy() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-stone-800 to-stone-900 text-white py-20 relative">
          <Image 
            src={`${config.assetPrefix}assets/images/saas.jpg`}
            alt="Fintech bank background"
            fill
            className="object-cover z-10"
          />
            <div className="absolute top-0 h-full w-full z-10 bg-white" style={{opacity:'40%'}}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative ">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-stone-400 hover:text-stone-900 mb-8 transition-colors "
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>

          <div className="max-w-4xl">
            <p className="text-stone-500 text-sm uppercase tracking-wider mb-4">
              FinTech SaaS • 24+ months
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 text-stone-900">
              Fincent: AI-Powered Financial SaaS
            </h1>
            <p className="text-xl text-stone-900">
              Automating Bookkeeping for Small Businesses with Machine Learning
            </p>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-stone-900 mb-6">
              Executive Summary
            </h2>
            <p className="text-stone-700 text-lg leading-relaxed mb-8">
              Fincent is a U.S.-based FinTech startup building AI-powered
              bookkeeping and tax preparation software for small businesses.
              Traditional bookkeeping is time-consuming, error-prone, and
              expensive (CPAs charge $3,000-10,000 annually). Fincent's vision:
              Use AI to automate 80% of bookkeeping tasks, reducing costs by 70%
              while improving accuracy.
            </p>
            <p className="text-stone-700 text-lg leading-relaxed">
              We've been Fincent's core engineering partner, building their
              platform from ground up and developing sophisticated AI/ML models
              that power transaction categorization, anomaly detection, and tax
              optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-stone-900 mb-8">
              Platform Impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { value: "$600M+", label: "Transactions automated" },
                { value: "99.3%", label: "Categorization accuracy" },
                { value: "10,000+", label: "Businesses served" },
                { value: "$6,800", label: "Avg. annual savings per customer" },
                { value: "92%", label: "Automation rate" },
                { value: "4.8/5", label: "Customer rating (G2, Capterra)" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white p-6 rounded-xl border border-stone-200"
                >
                  <p className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-stone-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold text-stone-900 mb-6">
                  The Challenge
                </h2>
                <ul className="space-y-4">
                  {[
                    "Data integration with 10,000+ banks and financial institutions",
                    "Transaction categorization across diverse industries",
                    "Receipt OCR from messy, varied receipt images",
                    "Complex, state-specific tax rules engine",
                    "Real-time processing for near-instant categorization",
                    "Multi-tenancy with secure isolation for thousands of businesses",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-stone-700"
                    >
                      <span className="text-stone-400 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-stone-900 mb-6">
                  Our Solution
                </h2>
                <ul className="space-y-4">
                  {[
                    "Ensemble ML model (BERT + XGBoost + Neural Network)",
                    "99.3% transaction categorization accuracy",
                    "Custom-trained OCR with 94% field extraction accuracy",
                    "RAG-powered tax Q&A with IRS citations",
                    "Real-time bank sync via Plaid integration",
                    "Anomaly detection preventing $4.2M in fraud",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-stone-700"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-stone-900 mb-8">
              Technology Stack
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  category: "Frontend",
                  tech: "React.js, TypeScript, Redux, Ant Design",
                },
                {
                  category: "Backend",
                  tech: "Node.js, Express, Python, FastAPI, GraphQL",
                },
                {
                  category: "AI/ML",
                  tech: "TensorFlow, PyTorch, Scikit-learn, BERT, Pinecone",
                },
                {
                  category: "Database",
                  tech: "PostgreSQL, TimescaleDB, MongoDB, Redis, Snowflake",
                },
                {
                  category: "Infrastructure",
                  tech: "AWS EKS, Docker, GitHub Actions, ArgoCD",
                },
                {
                  category: "Integrations",
                  tech: "Plaid, Stripe, QuickBooks, TurboTax, Shopify",
                },
              ].map((stack) => (
                <div
                  key={stack.category}
                  className="bg-white p-6 rounded-xl border border-stone-200"
                >
                  <h3 className="font-semibold text-stone-900 mb-2">
                    {stack.category}
                  </h3>
                  <p className="text-stone-600 text-sm">{stack.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="h-12 w-12 text-[#7a8a74] mx-auto mb-8" />
            <blockquote className="text-xl sm:text-2xl leading-relaxed mb-8">
              "Our partnership with this team has been transformative. They
              didn't just build features—they innovated on hard AI problems that
              are the core of our business. The transaction categorization model
              they developed is the best in the industry, period. It's more
              accurate than human bookkeepers and costs 1/100th as much to run at
              scale. When we raised our Series A, investors were blown away by
              the technical moat we've built. This team is a huge reason for our
              success."
            </blockquote>
            <div>
              <p className="font-semibold text-lg">CTO & Co-Founder</p>
              <p className="text-[#7a8a74]">Fincent</p>
              <p className="text-stone-500">US-Based FinTech</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-4">
            Ready to build your AI-powered SaaS?
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you develop custom ML models and
            scalable software.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primaryHover text-white"
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
