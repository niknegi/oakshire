import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import Image from "next/image";
import config from "next.config";

const caseStudies = [
  {
    slug: "axis-bank",
    client: "Fintech Bank",
    title: "AI-Powered Digital Lending Platform",
    subtitle: "Transforming Gold Loan Processing with End-to-End Automation",
    description:
      "Built MIDAS (Modern Integrated Digital Asset System), a comprehensive digital platform that reduced loan processing time from 2 days to under 30 minutes while maintaining strict RBI compliance.",
    impacts: [
      "₹12,000+ Crores in loans processed",
      "87% reduction in processing time (48h → 30min)",
      "75,000+ customers onboarded digitally",
      "99.7% uptime across 2,000+ branches",
      "73% reduction in fraud cases",
    ],
    industry: "Banking & Finance",
    duration: "18 months",
    color: "bg-gradient-to-br from-stone-800 to-stone-900",
    image: `${config.assetPrefix}assets/images/fintech.jpg`
  },
  {
    slug: "cordelia-cruises",
    client: "Cordelia Cruises",
    title: "Premium Booking Engine",
    subtitle: "India's First Premium Cruise Line - Powering Luxury Travel at Scale",
    description:
      "Built a sophisticated, scalable booking engine and customer management platform that processed over ₹450 Crores in bookings in the first year.",
    impacts: [
      "₹450+ Crores in bookings (Year 1)",
      "85% average occupancy rate",
      "150,000+ passengers booked",
      "78% mobile booking rate",
      "18% revenue increase from dynamic pricing",
    ],
    industry: "Travel & Hospitality",
    duration: "14 months",
    color: "bg-gradient-to-br from-[#5c6b56] to-[#3d4a38]",
    image: `${config.assetPrefix}assets/images/cruise.jpg`
  },
  {
    slug: "fincent",
    client: "Fincent",
    title: "AI-Powered Financial SaaS Platform",
    subtitle: "Automating Bookkeeping for Small Businesses with Machine Learning",
    description:
      "Built an AI-first accounting platform with sophisticated ML models for transaction categorization, anomaly detection, and tax optimization.",
    impacts: [
      "$600M+ transactions automated",
      "99.3% categorization accuracy",
      "10,000+ businesses served",
      "$6,800 avg. annual savings per customer",
      "92% automation rate",
    ],
    industry: "FinTech SaaS",
    duration: "24+ months",
    color: "bg-gradient-to-br from-stone-700 to-stone-800",
    image: `${config.assetPrefix}assets/images/saas.jpg`
  },
  {
    slug: "emcode",
    client: "Emcode",
    title: "Vehicle Tracking & AI Analytics",
    subtitle: "Intelligent Fleet Management for Middle East Logistics",
    description:
      "Developed AI/ML models for predictive analytics and route optimization on top of IoT-enabled vehicle tracking solutions.",
    impacts: [
      "50,000+ vehicles tracked",
      "$12M annual savings for clients",
      "65% reduction in unplanned downtime",
      "40% fewer accidents",
      "22% fuel cost reduction",
    ],
    industry: "Logistics & IoT",
    duration: "12 months",
    color: "bg-gradient-to-br from-stone-600 to-stone-700",
    image: `${config.assetPrefix}assets/images/logistics.jpg`
  },
];

export const metadata = {
  title: "Case Studies | Oakshire Labs",
  description:
    "See how we've helped industry leaders transform their businesses with custom software solutions. Fintech Bank, Cordelia Cruises, Fincent, and more.",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Header */}
      <section className="bg-primary text-white py-20 relative">
         <Image 
            src={`${config.assetPrefix}assets/images/study.jpg`}
            alt="Case study background"
            fill
            className=" object-cover z-10 "
          />
          <div className="absolute top-0 h-full w-full z-10 bg-white" style={{opacity:'80%'}}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-6 text-stone-900  drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              Case Studies
            </h1>
            <p className="text-xl text-stone-700">
              Proven track record in building mission-critical systems for
              Fortune 500 banks, cruise lines, and fintech innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((caseStudy, index) => (
              <Card
                key={caseStudy.slug}
                className="overflow-hidden border-stone-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Visual Side */}
                  <div
                    className={`${caseStudy.color} p-8 lg:p-12 flex flex-col justify-center min-h-[280px] relative`}
                  >
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover z-10"
                    />
                    <div className="absolute top-0 left-0 h-full w-full z-10 bg-white" style={{opacity:'40%'}}></div>
                    <div className=" z-10">
                      <p className="text-sm uppercase tracking-wider mb-2 text-stone-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                        {caseStudy.industry} • {caseStudy.duration}
                      </p>
                      <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-stone-900 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                        {caseStudy.client}
                      </h2>
                      <h3 className="text-x mb-4 text-stone-800 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                        {caseStudy.title}
                      </h3>
                      <p className="text-stone-600">{caseStudy.subtitle}</p>
                    </div>
                  </div>

                  {/* Content Side */}
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <p className="text-stone-700 mb-6">
                      {caseStudy.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">
                        Key Results
                      </h4>
                      <ul className="space-y-2">
                        {caseStudy.impacts.slice(0, 4).map((impact) => (
                          <li
                            key={impact}
                            className="flex items-start gap-2 text-sm text-stone-700"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            {impact}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/case-studies/${caseStudy.slug}`}
                      className="inline-flex items-center font-medium text-primary hover:text-[#4a5744] transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-4">
            Have a similar project in mind?
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build scalable, secure, and
            high-performance software solutions.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primaryHover text-white"
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
