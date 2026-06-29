import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Heart,
  ArrowUp,
  BadgeCheck,
} from "lucide-react";
import logoSrc from "@/assets/logo.jpeg";

const quick = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Projects", to: "/projects" },
  { label: "Terms & Condition", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Refund Policy", to: "/refund" },
  { label: "FAQ", to: "/membership" },
  { label: "Donate", to: "/donate" },
] as const;

const about = [
  { label: "Our About", to: "/about" },
  { label: "Membership", to: "/membership" },
  { label: "Volunteer With Us", to: "/volunteer" },
  { label: "Board Members", to: "/about" },
  { label: "Internship", to: "/internship" },
  { label: "Our Story", to: "/about" },
  { label: "Our Projects", to: "/projects" },
  { label: "CSR Collaboration", to: "/csr" },
  { label: "Careers", to: "/careers" },
] as const;


const socials = [
  { I: Facebook, href: "https://www.facebook.com/share/1HSWkyYMCb/", label: "Facebook" },
  { I: Youtube, href: "https://youtube.com/@mahilachetnasamiti", label: "YouTube" },
  { I: Instagram, href: "#", label: "Instagram" },
  { I: Linkedin, href: "#", label: "LinkedIn" },
];

function LinkCol({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; to: string }[];
}) {
  return (
    <div>
      <h4 className="text-white font-display font-bold text-[17px] tracking-wide pb-3 mb-5 border-b border-white/15">
        {title}
      </h4>
      <ul className="space-y-3 text-[14.5px]">
        {items.map((q) => (
          <li key={q.label}>
            <Link
              to={q.to}
              className="group inline-flex items-center gap-2 text-white/80 hover:text-orange transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5 text-orange/80 group-hover:translate-x-0.5 transition-transform" />
              <span>
                {q.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-navy text-white/85">
      {/* Subtle pattern overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.9) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Main grid */}
      <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8 pt-16 pb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.5fr]">
        {/* Brand */}
        <div>
          <div className="bg-white rounded-2xl p-4 inline-flex items-center justify-center shadow-lg">
            <img
              src={logoSrc}
              alt="Mahila Chetna Samiti"
              className="h-20 w-auto object-cover rounded-full"
            />
          </div>
          <p className="mt-6 text-[14.5px] leading-7 text-white/75 max-w-sm">
            Mahila Chetna Samiti ek registered NGO hai jo Nari Sashaktikaran,
            Shiksha, Sahayata aur Suraksha ke liye 1997 se samarpit hai.
          </p>

          {/* Socials */}
          <div className="mt-7 flex items-center gap-3">
            {socials.map(({ I, href, label }) => (
              <a
                key={label}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/25 hover:bg-orange hover:border-orange flex items-center justify-center transition-all hover:-translate-y-0.5"
              >
                <I className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <LinkCol title="Quick Links" items={quick} />
        <LinkCol title="About" items={about} />

        {/* Contact */}
        <div>
          <h4 className="text-white font-display font-bold text-[17px] tracking-wide pb-3 mb-5 border-b border-white/15">
            Contact Us
          </h4>
          <ul className="space-y-5 text-[14.5px]">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 w-9 h-9 rounded-full border border-white/25 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-orange" />
              </span>
              <span className="text-white/80 leading-relaxed">
                330-A Nijampur Malhaur, Near Amity University, Lucknow – 226028,
                U.P., India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-orange" />
              </span>
              <div className="flex flex-col gap-1">
                <a
                  href="mailto:info@mahilachetnasamiti.org"
                  className="text-white/85 hover:text-orange transition break-all"
                >
                  info@mahilachetnasamiti.org
                </a>
                <a
                  href="mailto:support@mahilachetnasamiti.org"
                  className="text-white/85 hover:text-orange transition break-all"
                >
                  support@mahilachetnasamiti.org
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-orange" />
              </span>
              <a
                href="tel:+917373300737"
                className="text-white/85 hover:text-orange transition font-medium"
              >
                +91 73733 00737
              </a>
            </li>
          </ul>

          {/* Trust badges */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.04] px-4 py-2.5 text-[13px]">
              <BadgeCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-white/85">NGO Certified</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.04] px-4 py-2.5 text-[13px]">
              <BadgeCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-white/85">80G Approved</span>
            </div>
          </div>

          {/* Donate button */}
          <Link
            to="/donate"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-2 to-orange text-white font-semibold px-6 py-3 shadow-lg shadow-orange/30 hover:-translate-y-0.5 transition"
          >
            <Heart className="w-4 h-4 fill-white" />
            Donate Now
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/12">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-5 text-center text-[13.5px] text-white/70">
          All Rights Copyright © {new Date().getFullYear()} Reserved By{" "}
          <span className="text-orange font-semibold">Mahila Chetna Samiti</span>
          {" | "}
          Design & Developed By <span className="text-orange font-semibold">Team Axsem Softwares</span>
        </div>
      </div>

      {/* Floating left actions */}
      <div className="fixed left-4 bottom-6 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/917373300737"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-105 transition"
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.1-.981-1.842-2.19-2.058-2.56-.216-.37-.023-.57.163-.755.166-.166.373-.434.56-.65.186-.217.249-.372.373-.621.124-.248.062-.467-.031-.653-.093-.186-.67-1.613-.92-2.208-.242-.579-.487-.48-.67-.49-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.199 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        <a
          href="tel:+917373300737"
          aria-label="Call us"
          className="w-12 h-12 rounded-full bg-navy text-white border border-white/20 flex items-center justify-center shadow-xl hover:scale-105 hover:bg-orange hover:border-orange transition"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* Floating back-to-top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-gradient-to-br from-orange to-orange/80 hover:from-orange hover:to-orange flex items-center justify-center text-white shadow-xl shadow-orange/30 transition-all duration-500 transform ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-75 pointer-events-none"
        } hover:-translate-y-1 hover:shadow-orange/50 border border-white/15`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
