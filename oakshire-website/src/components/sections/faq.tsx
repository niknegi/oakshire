"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const faqs = [
  {
    question: "What's your typical engagement model?",
    answer:
      "We work on fixed-price projects (for well-defined scope) or dedicated team arrangements (for ongoing product development). Most projects start with a 2-4 week discovery phase to understand your requirements and provide an accurate estimate.",
  },
  {
    question: "How do you ensure quality?",
    answer:
      "We maintain high quality through automated testing (85%+ code coverage), peer code reviews, staging environments, load testing, and rigorous UAT before production deployment. Our systems have maintained 99.9% uptime across all projects.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Absolutely. We integrate seamlessly with your in-house developers, designers, and product managers. We use Slack, Jira, GitHub, and whatever tools you prefer. We can work as an extension of your team or as a standalone delivery unit.",
  },
  {
    question: "What if we're not satisfied?",
    answer:
      "We offer milestone-based payments. You pay only when you approve each milestone. The first 2 weeks include a 'get to know you' period with minimal risk. We also provide ongoing support and iterate based on your feedback.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer post-launch support packages including bug fixes, feature enhancements, performance monitoring, and 24/7 incident response. Many of our clients have been with us for years, continuously improving their platforms.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in React, React Native, TypeScript, Node.js, Python, PostgreSQL, and AI/ML with TensorFlow and PyTorch. For cloud, we work extensively with AWS and GCP. We're also experienced with microservices, Kubernetes, and DevOps best practices.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope. A typical MVP takes 3-4 months, while enterprise platforms may take 6-12 months. We break projects into 2-week sprints with regular demos so you see progress continuously.",
  },
  {
    question: "Do you outsource production?",
    answer:
      "No, it's all done in-house. We believe our experience and standards are what set us apart. Your project will be handled directly by our senior engineers who have built systems for Fortune 500 companies.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-stone-600">
              Got questions? We've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-stone-200 rounded-lg mb-4 px-6 data-[state=open]:border-[#5c6b56]/30"
              >
                <AccordionTrigger className="text-left text-stone-900 font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-stone-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
