import Link from "next/link";
import { ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import config from "next.config";

export const metadata = {
  title: "Fintech Bank Case Study | Oakshire Labs",
  description:
    "AI-Powered Digital Lending Platform - Transforming Gold Loan Processing with End-to-End Automation. ₹12,000+ Crores processed.",
};

export default function AxisBankCaseStudy() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-stone-800 to-stone-900 text-white py-20 relative">
         <Image 
            src={`${config.assetPrefix}assets/images/fintech.jpg`}
            alt="Fintech bank background"
            fill
            className="object-cover z-10"
          />
           <div className="absolute top-0 h-full w-full z-10 bg-white" style={{opacity:'40%'}}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative ">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-stone-400 hover:text-stone-900 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>

          <div className="max-w-4xl">
            <p className="text-stone-500 text-sm uppercase tracking-wider mb-4">
              Banking & Financial Services • 18 months
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 text-stone-900">
              Fintech Bank: AI-Powered Digital Lending Platform
            </h1>
            <p className="text-xl text-stone-900">
              Transforming Gold Loan Processing with End-to-End Automation
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
              Fintech Bank, serving over 100 million customers across India, needed
              to modernize their gold loan processing system to compete with
              fintech disruptors and meet growing customer demand for instant
              loan approvals. The traditional process involved manual paperwork,
              physical gold verification, and approval times of 24-48 hours.
            </p>
            <p className="text-stone-700 text-lg leading-relaxed">
              We built MIDAS (Modern Integrated Digital Asset System), a
              comprehensive digital platform that reduced loan processing time
              from 2 days to under 30 minutes while maintaining strict RBI
              compliance and fraud prevention standards.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-stone-900 mb-8">
              Impact at Scale
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { value: "₹12,000+", label: "Crores in loans processed" },
                { value: "75,000+", label: "Customers onboarded digitally" },
                { value: "87%", label: "Reduction in processing time" },
                { value: "99.7%", label: "Uptime across 2,000+ branches" },
                { value: "40%", label: "Increase in completion rates" },
                { value: "73%", label: "Reduction in fraud cases" },
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
                    "Customer Experience: Lengthy loan approval process (2-3 branch visits required)",
                    "Operational Cost: High manual processing costs (₹450 per loan application)",
                    "Competition: Fintech companies offering instant gold loans online",
                    "Scalability: Legacy system couldn't handle peak festival season demand",
                    "Risk Management: Manual gold purity verification prone to human error",
                    "Compliance: Strict RBI guidelines for KYC, documentation, and reporting",
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
                    "Cloud-native, microservices-based platform",
                    "AI/ML fraud detection with 94% precision",
                    "Gold purity prediction using TensorFlow (99.2% accuracy)",
                    "Integration with 15+ legacy banking systems",
                    "Real-time gold rate synchronization",
                    "Offline capability for rural branches",
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
                  tech: "React.js, Redux, Material-UI, React Native",
                },
                {
                  category: "Backend",
                  tech: "Node.js, TypeScript, Express, Kong API Gateway",
                },
                {
                  category: "AI/ML",
                  tech: "TensorFlow, Scikit-learn, BERT, LangChain",
                },
                {
                  category: "Database",
                  tech: "PostgreSQL, Redis, Elasticsearch, AWS S3",
                },
                {
                  category: "Infrastructure",
                  tech: "AWS, Kubernetes, Docker, Jenkins",
                },
                {
                  category: "Integrations",
                  tech: "Finacle, CIBIL, DigiLocker, Aadhaar, NPCI",
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
              "This platform has redefined how we think about digital lending.
              The combination of seamless user experience, AI-powered decision
              making, and robust risk management has given us a competitive edge
              in the gold loan market. During Diwali season, when gold loan
              demand spikes 5x, the system handled the load flawlessly while our
              competitors struggled. The fraud detection alone has saved us over
              ₹45 Crores."
            </blockquote>
            <div>
              <p className="font-semibold text-lg">
                Head of Branch Banking & Gold Loans
              </p>
              <p className="text-stone-400">Fintech Bank</p>
              <p className="text-stone-100">Fortune 500</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-4">
            Ready to transform your banking systems?
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build secure, scalable, and
            AI-powered financial software.
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
