import Link from "next/link";
import { ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { Button } from "~/components/ui/button";

export const metadata = {
  title: "Cordelia Cruises Case Study | Oakshire Labs",
  description:
    "Premium Booking Engine for India's First Premium Cruise Line. ₹450+ Crores in bookings processed.",
};

export default function CordeliaCaseStudy() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#5c6b56] to-[#3d4a38] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-stone-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>

          <div className="max-w-4xl">
            <p className="text-stone-200 text-sm uppercase tracking-wider mb-4">
              Travel & Hospitality • 14 months
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
              Cordelia Cruises: Premium Booking Engine
            </h1>
            <p className="text-xl text-stone-100">
              India's First Premium Cruise Line - Powering Luxury Travel at Scale
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
              Cordelia Cruises, India's first and largest premium cruise liner,
              needed a robust digital platform to launch their operations and
              compete with international cruise lines. They required a
              comprehensive system to handle complex cruise bookings, cabin
              inventory, onboard services, and multi-channel distribution.
            </p>
            <p className="text-stone-700 text-lg leading-relaxed">
              We built a sophisticated, scalable booking engine and customer
              management platform that processed over ₹450 Crores in bookings in
              the first year and enabled Cordelia to achieve 85% occupancy rates
              on their maiden voyages.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-stone-900 mb-8">
              Platform Scale
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { value: "₹450+", label: "Crores in bookings (Year 1)" },
                { value: "150,000+", label: "Passengers booked" },
                { value: "85%", label: "Average occupancy rate" },
                { value: "78%", label: "Mobile booking rate" },
                { value: "18%", label: "Revenue increase from dynamic pricing" },
                { value: "12", label: "Distribution channels integrated" },
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
                    "Launch from scratch before inaugural cruise (6-month deadline)",
                    "Handle complex cabin inventory (600+ cabins across 8 categories)",
                    "Dynamic pricing engine with demand-based adjustments",
                    "Multi-passenger bookings with group discounts",
                    "Onboard service pre-booking with capacity limits",
                    "Real-time synchronization across 12+ sales channels",
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
                    "Modern, cloud-native microservices architecture",
                    "AI-powered dynamic pricing engine (18% revenue uplift)",
                    "Real-time inventory sync across all channels",
                    "Mobile-first React Native app (78% bookings)",
                    "Zero overbooking with distributed locking",
                    "Integration with 12+ OTAs and agent portals",
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
                  tech: "React.js, Next.js, React Native, styled-components",
                },
                {
                  category: "Backend",
                  tech: "Node.js, TypeScript, Express, Microservices",
                },
                {
                  category: "AI/ML",
                  tech: "Dynamic Pricing ML, Demand Forecasting, Recommendations",
                },
                {
                  category: "Database",
                  tech: "PostgreSQL, Redis, Elasticsearch, AWS S3",
                },
                {
                  category: "Infrastructure",
                  tech: "AWS, ECS/EKS, CloudFront, GitHub Actions",
                },
                {
                  category: "Integrations",
                  tech: "Razorpay, Salesforce, MakeMyTrip, Goibibo",
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
      <section className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="h-12 w-12 text-[#7a8a74] mx-auto mb-8" />
            <blockquote className="text-xl sm:text-2xl leading-relaxed mb-8">
              "Launching India's first premium cruise line required a technology
              partner who could innovate without precedent. The team built a
              world-class booking platform that rivals international cruise
              lines while being tailored for Indian customers. The dynamic
              pricing engine alone has increased our revenue by 18%, and the
              seamless mobile experience has made us a favorite among younger
              travelers. During our inaugural Diwali cruise launch, the platform
              handled a 10x surge in traffic without any glitches. This platform
              is a core competitive advantage for us."
            </blockquote>
            <div>
              <p className="font-semibold text-lg">President & CEO</p>
              <p className="text-[#7a8a74]">Cordelia Cruises</p>
              <p className="text-stone-500">India's First Premium Cruise Line</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-4">
            Ready to build your booking platform?
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you create a scalable, high-performance
            booking system.
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
