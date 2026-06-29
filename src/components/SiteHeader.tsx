import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin, Phone, Facebook, Instagram, Youtube, Linkedin,
  Heart, LogIn, Menu, X, ChevronDown,
} from "lucide-react";
import logoSrc from "@/assets/logo.jpeg";

type NavItem = {
  label: string;
  to: string;
  hasMenu?: boolean;
  children?: { label: string; to: string }[];
};

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about",
    hasMenu: true,
    children: [
      { label: "About Us", to: "/about" },
      { label: "Founder", to: "/founder" },
      { label: "Mission & Vision", to: "/mission-vision" },
    ],
  },
  { label: "Projects", to: "/projects" },
  {
    label: "Campaigns",
    to: "/crowd-funding",
    hasMenu: true,
    children: [
      { label: "Crowd Funding", to: "/crowd-funding" },
      { label: "Causes", to: "/causes" },
    ],
  },
  { label: "Events", to: "/events" },
  {
    label: "Gallery",
    to: "/gallery",
    hasMenu: true,
    children: [
      { label: "Photos & Videos", to: "/gallery" },
      { label: "Media Coverage", to: "/media-coverage" },
    ],
  },
  {
    label: "Blogs",
    to: "/blogs",
    hasMenu: true,
    children: [
      { label: "All Blogs", to: "/blogs" },
      { label: "Success Stories", to: "/success-stories" },
    ],
  },
  { label: "Documents", to: "/documents" },
  { label: "Contact Us", to: "/contact" },
];

const socials = [
  { I: Facebook, href: "https://www.facebook.com/share/1HSWkyYMCb/", label: "Facebook" },
  { I: Youtube, href: "https://youtube.com/@mahilachetnasamiti", label: "YouTube" },
  { I: Instagram, href: "#", label: "Instagram" },
  { I: Linkedin, href: "#", label: "LinkedIn" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-navy text-white text-[13px]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 h-10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-4 min-w-0">
            <a
              href="tel:+917373300737"
              className="flex items-center gap-2 hover:text-orange transition shrink-0"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>+91 73733 00737</span>
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <span className="hidden lg:flex items-center gap-2 text-white/85">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              330-A Nijampur Malhaur, Near Amity University, Lucknow – 226028, U.P., India
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2">
              {socials.map(({ I, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center transition"
                >
                  <I className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
            <span className="hidden sm:block w-px h-5 bg-white/20" />
            <a
              href="#"
              className="flex items-center gap-1.5 hover:text-orange transition font-medium"
            >
              <LogIn className="w-3.5 h-3.5" /> Login
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-gradient-to-b from-white to-[#F7F4EC] border-b border-border shadow-sm">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 h-[78px] sm:h-[92px] flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center min-w-0 shrink">
            <img
              src={logoSrc}
              alt="Mahila Chetna Samiti"
              className="h-14 sm:h-16 md:h-[72px] w-auto object-cover rounded-full"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-semibold text-navy">
            {navItems.map((n) => {
              const active = pathname === n.to || n.children?.some((c) => c.to === pathname);
              return (
                <div key={n.to} className="relative group">
                  <Link
                    to={n.to}
                    className={`flex items-center gap-1 hover:text-orange transition py-2 ${
                      active ? "text-orange" : ""
                    }`}
                  >
                    {n.label}
                    {n.hasMenu && (
                      <ChevronDown className="w-3.5 h-3.5 text-navy/60 group-hover:text-orange transition" />
                    )}
                  </Link>
                  {n.children && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="min-w-[220px] bg-white rounded-xl shadow-xl border border-border overflow-hidden">
                        {n.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className={`block px-4 py-3 text-[14px] hover:bg-orange/10 hover:text-orange transition ${
                              pathname === c.to ? "text-orange bg-orange/5" : "text-navy"
                            }`}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              to="/donate"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-2 to-orange text-white font-semibold pl-2 pr-5 py-2 shadow-lg shadow-orange/30 hover:-translate-y-0.5 transition"
            >
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Heart className="w-4 h-4 fill-white" />
              </span>
              Donate
            </Link>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="lg:hidden w-10 h-10 rounded-lg border border-border flex items-center justify-center text-navy shrink-0"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <nav className="max-w-[1320px] mx-auto px-4 py-3 flex flex-col text-[14px] font-semibold text-navy">
              {navItems.map((n) => (
                <div key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 border-b border-border/60 hover:text-orange flex items-center justify-between"
                  >
                    {n.label}
                    {n.hasMenu && <ChevronDown className="w-4 h-4 text-navy/50" />}
                  </Link>
                  {n.children && (
                    <div className="pl-4 border-b border-border/60">
                      {n.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setMenuOpen(false)}
                          className="block py-2.5 text-[13px] text-navy/80 hover:text-orange"
                        >
                          — {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/donate"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-2 to-orange text-white font-semibold px-5 py-3 shadow-lg shadow-orange/30"
              >
                <Heart className="w-4 h-4 fill-white" /> Donate
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
