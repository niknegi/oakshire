import Link from "next/link";
import { Separator } from "~/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "Our Process", href: "/process" },
    { label: "Technology Stack", href: "/tech-stack" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const trustedClients = [
  "Axis Bank (Fortune 500)",
  "Cordelia Cruises",
  "Fincent (USA)",
  "Emcode (UAE)",
];

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-semibold text-stone-100">
                Oakshire
              </span>
              <span className="text-2xl font-light text-stone-400"> Labs</span>
            </Link>
            <p className="text-stone-400 mb-6 max-w-sm">
              Enterprise Software Development & AI/ML Solutions. We build
              mission-critical systems for Fortune 500 banks, cruise lines, and
              fintech innovators.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-stone-500" />
                <span>hello@oakshirelabs.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-stone-500" />
                <span>+91-XXXX-XXXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-stone-500" />
                <span>India | Serving US, Europe & Beyond</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-stone-100 font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-stone-200 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-stone-100 font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-stone-200 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trusted By */}
          <div>
            <h4 className="text-stone-100 font-semibold mb-4">Trusted By</h4>
            <ul className="space-y-3">
              {trustedClients.map((client) => (
                <li key={client} className="text-stone-400 text-sm">
                  {client}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-stone-800" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-stone-500">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-stone-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-stone-300 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-stone-300 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-stone-300 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>

          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Oakshire Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
