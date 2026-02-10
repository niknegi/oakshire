"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "This platform has redefined how we think about digital lending. The combination of seamless UX, AI-powered decision making, and robust risk management has given us a competitive edge. During Diwali season, when demand spikes 5x, the system handled the load flawlessly. The fraud detection alone has saved us over ₹45 Crores.",
    author: "Head of Branch Banking & Gold Loans",
    company: "Fintech Bank",
    role: "Fortune 500 Bank",
  },
  {
    quote:
      "We needed a partner who could innovate without precedent. The team delivered a world-class booking platform that rivals international cruise lines. The dynamic pricing engine alone increased our revenue by 18%. This platform is our competitive advantage.",
    author: "President & CEO",
    company: "Cordelia Cruises",
    role: "India's First Premium Cruise Line",
  },
  {
    quote:
      "They didn't just build features—they innovated on hard AI problems that are the core of our business. The transaction categorization model is the best in the industry. When we raised our Series A, investors were blown away by the technical moat we've built.",
    author: "CTO & Co-Founder",
    company: "Fincent",
    role: "US-Based FinTech",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to
            say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-stone-800/50 rounded-xl p-8 border border-stone-700 flex flex-col"
            >
              <Quote className="h-8 w-8 text-[#7a8a74] mb-6" />

              <blockquote className="text-stone-300 leading-relaxed mb-8 flex-grow">
                "{testimonial.quote}"
              </blockquote>

              <div className="border-t border-stone-700 pt-6">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-[#7a8a74] text-sm">{testimonial.company}</p>
                <p className="text-stone-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
