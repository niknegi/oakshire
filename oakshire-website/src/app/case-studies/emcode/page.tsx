import Link from "next/link";
import { ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { Button } from "~/components/ui/button";

export const metadata = {
  title: "Emcode Case Study | Oakshire Labs",
  description:
    "AI-powered Vehicle Tracking and Fleet Analytics Platform for Middle East Logistics.",
};

export default function EmcodeCaseStudy() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-stone-600 to-stone-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-stone-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>

          <div className="max-w-4xl">
            <p className="text-stone-300 text-sm uppercase tracking-wider mb-4">
              Logistics & IoT • 12 months
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
              Emcode: Vehicle Tracking & AI Analytics
            </h1>
            <p className="text-xl text-stone-200">
              Intelligent Fleet Management for Middle East Logistics
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
              Emcode provides IoT-enabled vehicle tracking solutions for
              logistics companies across UAE, Saudi Arabia, and Qatar. We
              developed AI/ML models on top of their GPS tracking data to provide
              predictive maintenance alerts, route optimization, and driver
              behavior analysis.
            </p>
            <p className="text-stone-700 text-lg leading-relaxed">
              Our AI solutions transformed their basic tracking platform into an
              intelligent fleet management system that saves clients millions in
              operational costs while improving safety and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-stone-900 mb-8">
              Key Results
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { value: "50,000+", label: "Vehicles tracked" },
                { value: "$12M", label: "Annual savings for clients" },
                { value: "65%", label: "Reduction in unplanned downtime" },
                { value: "40%", label: "Fewer accidents" },
                { value: "22%", label: "Fuel cost reduction" },
                { value: "7 days", label: "Predictive maintenance alerts" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white p-6 rounded-xl border border-stone-200"
                >
                  <p className="text-3xl font-bold text-[#5c6b56] mb-2">
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
                    "Unplanned vehicle breakdowns causing delivery delays",
                    "High fuel costs due to inefficient routing",
                    "Driver safety concerns and accident risks",
                    "Lack of predictive insights for maintenance",
                    "Real-time processing of massive IoT data streams",
                    "Harsh desert conditions affecting vehicle performance",
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
                    "ML model predicts breakdowns 7 days in advance",
                    "Custom genetic algorithm for route optimization",
                    "Computer vision analyzes dashcam footage",
                    "Driver safety scoring with coaching recommendations",
                    "Real-time data processing with Apache Kafka",
                    "Integration with existing IoT hardware infrastructure",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-stone-700"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#5c6b56] mt-0.5 shrink-0" />
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
                  category: "AI/ML",
                  tech: "Python, TensorFlow, PyTorch, LSTM networks, Computer Vision",
                },
                {
                  category: "Optimization",
                  tech: "Genetic Algorithms, Simulated Annealing, Constraint Solving",
                },
                {
                  category: "Data Processing",
                  tech: "Apache Kafka, Spark, Real-time Stream Processing",
                },
                {
                  category: "Infrastructure",
                  tech: "AWS, EC2, S3, Lambda, CloudWatch",
                },
                {
                  category: "Database",
                  tech: "TimescaleDB, PostgreSQL, Redis",
                },
                {
                  category: "Integrations",
                  tech: "GPS Hardware APIs, Telematics Systems, ERP Connectors",
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

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-4">
            Ready to optimize your fleet operations?
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can transform your logistics and fleet
            management.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#5c6b56] hover:bg-[#4a5744] text-white"
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
