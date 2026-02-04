import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export const metadata = {
  title: "Contact | Oakshire Labs",
  description:
    "Ready to build something exceptional? Schedule a free 30-minute consultation to discuss your project.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Header */}
      <section className="bg-[#5c6b56] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-6">
              Let's Build Together
            </h1>
            <p className="text-xl text-stone-200">
              Ready to transform your business with custom software? Let's start
              a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold text-stone-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-stone-600 mb-8 text-lg">
                Whether you're a Fortune 500 enterprise or a scaling startup, we
                deliver software that drives measurable business outcomes.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5c6b56]/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-[#5c6b56]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Email</h3>
                    <p className="text-stone-600">hello@oakshirelabs.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5c6b56]/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-[#5c6b56]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Phone</h3>
                    <p className="text-stone-600">+91-XXXX-XXXXXX</p>
                    <p className="text-stone-500 text-sm">+1-XXX-XXX-XXXX (US)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5c6b56]/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-[#5c6b56]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">
                      Location
                    </h3>
                    <p className="text-stone-600">India</p>
                    <p className="text-stone-500 text-sm">
                      Serving clients in US, Europe, and beyond
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-stone-900 mb-4">
                  Connect With Us
                </h3>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-[#5c6b56] hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-[#5c6b56] hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-[#5c6b56] hover:text-white transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-stone-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-stone-900 mb-2">
                  Schedule a Free Consultation
                </h2>
                <p className="text-stone-600 mb-8">
                  30-minute discovery call to discuss your project. No pressure,
                  no obligation.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#5c6b56] focus:border-transparent outline-none transition-all"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#5c6b56] focus:border-transparent outline-none transition-all"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-stone-700 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#5c6b56] focus:border-transparent outline-none transition-all"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-stone-700 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#5c6b56] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-ml">AI/ML Solutions</option>
                      <option value="financial">Financial Software</option>
                      <option value="enterprise">Enterprise Web & Mobile</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-stone-700 mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#5c6b56] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#5c6b56] hover:bg-[#4a5744] text-white"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-stone-900 mb-12 text-center">
              What to Expect
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Honest Assessment",
                  description:
                    "We'll give you a realistic evaluation of your project and our ability to help.",
                },
                {
                  title: "Technology Recommendations",
                  description:
                    "Expert advice on the best tech stack and architecture for your needs.",
                },
                {
                  title: "Ballpark Estimate",
                  description:
                    "Rough timeline and investment range to help with your planning.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <h3 className="font-semibold text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
