import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronDown } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import {
  Phone, Mail, Facebook, Instagram, Youtube, Twitter, Linkedin, Search,
  Heart, UserPlus, Award, ShieldCheck, FileCheck2, PieChart, Users,
  Target, Eye, Gem, Sparkles, BookOpen, HeartPulse, GraduationCap,
  Leaf, Scale, HandHeart, Home as HomeIcon, ArrowRight, Calendar, MapPin,
  Quote, CheckCircle2, Building2, BadgeCheck, ChevronRight, Send, Image as ImageIcon, PlayCircle, Play, X,
} from "lucide-react";
import nariImg from "@/assets/herosection/NariSashaktikaran.png";
import shikshaImg from "@/assets/herosection/Shiksha.png";
import sahayataImg from "@/assets/herosection/Sahayata.png";
import aboutGroup from "@/assets/about/about.png";
import program1 from "@/assets/Our Programs/WomenEmpowermentProgram.png";
import program2 from "@/assets/Our Programs/EducationSupportInitiative.png";
import program3 from "@/assets/Our Programs/HealthSafetyCampaign.png";
import program4 from "@/assets/Our Programs/SkillDevelopmentProgram.png";
import project1 from "@/assets/Featured Projects/SakshamWomenProject.png";
import project2 from "@/assets/Featured Projects/ShikshaSetuProject.png";
import project3 from "@/assets/Featured Projects/SwasthyaSurakshaProject.png";
import project4 from "@/assets/Featured Projects/GramVikasInitiative.png";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import ctaVolunteer from "@/assets/cta-volunteer.jpg";
import ctaMember from "@/assets/cta-member.jpg";
import gallery1 from "@/assets/Causes/GirlChildEducation.png";
import gallery2 from "@/assets/Blogs/HealthAwareness.png";
import gallery3 from "@/assets/herosection/NariSashaktikaran.png";
import gallery4 from "@/assets/Causes/Livelihood&Skills.png";
import gallery5 from "@/assets/Blogs/EmpoweringRuralWomen.png";
import gallery6 from "@/assets/herosection/Shiksha.png";
import video1 from "@/assets/Causes/WomenHealth&Hygiene.png";
import video2 from "@/assets/Blogs/ImportanceofGirlsEducation.png";
import video3 from "@/assets/herosection/Sahayata.png";
import blog1Img from "@/assets/Blogs/EmpoweringRuralWomen.png";
import blog2Img from "@/assets/Blogs/ImportanceofGirlsEducation.png";
import blog3Img from "@/assets/Blogs/HealthAwareness.png";
import faqImg from "@/assets/faq/faq (2).png";
import cause1Img from "@/assets/Causes/GirlChildEducation.png";
import cause2Img from "@/assets/Causes/WomenHealth&Hygiene.png";
import cause3Img from "@/assets/Causes/Livelihood&Skills.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mahila Chetna Samiti — Empowering Women, Building Stronger Communities" },
      { name: "description", content: "Registered NGO since 1997 working for women empowerment, education, healthcare and rural development across India." },
    ],
  }),
  component: Index,
});

const nav: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Projects", to: "/projects" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  { label: "Membership", to: "/membership" },
  { label: "Contact Us", to: "/contact" },
];

const trust = [
  { icon: ShieldCheck, title: "Registered NGO", sub: "Since 1997" },
  { icon: FileCheck2, title: "12A Approved", sub: "AAJAM8783GE2021301" },
  { icon: BadgeCheck, title: "80G Certified", sub: "AAJAM8783GF2021101" },
  { icon: PieChart, title: "Transparent NGO", sub: "We Ensure Transparency" },
];

const stats = [
  { icon: Users, num: "25,000+", label: "Lives Impacted", color: "#2E8B57", bg: "#E8F5EE" },
  { icon: HomeIcon, num: "500+", label: "Villages Reached", color: "#FF6B00", bg: "#FFF1E5" },
  { icon: BookOpen, num: "120+", label: "Programs Done", color: "#2563EB", bg: "#E6EEFB" },
  { icon: Users, num: "100+", label: "Active Volunteers", color: "#7C3AED", bg: "#EFE8FB" },
];

const focusAreas = [
  { icon: HandHeart, label: "Women\nEmpowerment", color: "#7C3AED", bg: "#F1EAFE" },
  { icon: BookOpen, label: "Education", color: "#2563EB", bg: "#E6EEFB" },
  { icon: HeartPulse, label: "Support &\nCare", color: "#2E8B57", bg: "#E8F5EE" },
  { icon: ShieldCheck, label: "Safety &\nProtection", color: "#FF6B00", bg: "#FFF1E5" },
  { icon: GraduationCap, label: "Skill\nDevelopment", color: "#16A34A", bg: "#E8F7EE" },
  { icon: Heart, label: "Women\nHealth", color: "#EC4899", bg: "#FCE7F3" },
  { icon: Scale, label: "Legal\nAwareness", color: "#0EA5E9", bg: "#E0F4FD" },
  { icon: Building2, label: "Rural\nDevelopment", color: "#B45309", bg: "#FEF3C7" },
];

const programs = [
  { img: program1, title: "Women Empowerment Program", desc: "Building confidence, leadership and decision-making skills in women." },
  { img: program2, title: "Education Support Initiative", desc: "Providing quality education to children in rural communities." },
  { img: program3, title: "Health & Safety Campaign", desc: "Spreading health awareness and safety practices in communities." },
  { img: program4, title: "Skill Development Program", desc: "Vocational training for self-reliance and financial independence." },
];

const projects = [
  { img: project1, title: "Saksham Women Project", desc: "Helping women gain skills and become entrepreneurs.", impact: "2,500+ Women" },
  { img: project2, title: "Shiksha Setu Project", desc: "Education support and resources for rural children.", impact: "1,000+ Children" },
  { img: project3, title: "Swasthya Suraksha Project", desc: "Health check-up camps and awareness programs.", impact: "5,000+ Beneficiaries" },
  { img: project4, title: "Gram Vikas Initiative", desc: "Working for village development and livelihoods.", impact: "40+ Villages" },
];

const stories = [
  { img: story1, name: "Suman Devi", role: "Entrepreneur", text: "With the support of Mahila Chetna Samiti, I learned tailoring and today I run my own small business and support my family." },
  { img: story2, name: "Anita Kumari", role: "Beneficiary", text: "Education support helped my children continue their studies. Today, my daughter wants to become a teacher." },
  { img: story3, name: "Rekha Sharma", role: "Community Member", text: "Health camps in our village have made a big difference. We are more aware and taking better care of our health." },
];

const whyUs = [
  { icon: ShieldCheck, title: "Registered NGO", desc: "Registered since 1997, fully trusted", color: "#2E8B57" },
  { icon: FileCheck2, title: "12A & 80G Approved", desc: "Tax benefits on your donations", color: "#2563EB" },
  { icon: PieChart, title: "Transparent NGO", desc: "Clear processes and financial reporting", color: "#FF6B00" },
  { icon: Users, title: "Experienced Team", desc: "Dedicated people working for change", color: "#7C3AED" },
  { icon: HandHeart, title: "Community Reach", desc: "Strong presence in villages and communities", color: "#0EA5E9" },
  { icon: Award, title: "Proven Impact", desc: "Real change in 25,000+ lives", color: "#16A34A" },
];

const partners = [
  { name: "TATA GROUP", initials: "TATA", color: "#1E40AF" },
  { name: "HDFC BANK", initials: "HDFC", color: "#DC2626" },
  { name: "NABARD", initials: "NB", color: "#16A34A" },
  { name: "SBI", initials: "SBI", color: "#1D4ED8" },
  { name: "LIC", initials: "LIC", color: "#EAB308" },
  { name: "Airtel", initials: "A", color: "#E11D48" },
  { name: "Canara Bank", initials: "CB", color: "#0EA5E9" },
  { name: "Vedanta", initials: "V", color: "#7C3AED" },
  { name: "Genisteeo", initials: "G", color: "#0F766E" },
  { name: "Uber", initials: "U", color: "#0B1F3A" },
];

import ImpactMapSection from "@/components/IndiaImpactMap";

const indexFaqs = [
  { q: "What is Mahila Chetna Samiti?", a: "We are a registered NGO working since 1997 for Women Empowerment, Education, Support and Safety. Our focus is Nari Sashaktikaran, Shiksha, Sahayata and Suraksha." },
  { q: "Is Mahila Chetna Samiti a registered NGO?", a: "Yes — Registration No. 914/1997-98, PAN AAJAM8783G, 12A (AAJAM8783GE2021301) and 80G (AAJAM8783GF2021101) certified." },
  { q: "Where does Mahila Chetna Samiti work?", a: "We work across Uttar Pradesh, Delhi, Bihar, Madhya Pradesh, Rajasthan, Jharkhand and Maharashtra — reaching rural and underserved communities." },
  { q: "How are my donations used?", a: "100% transparency. Your donations go directly to projects like Saksham, Shiksha Setu and Swasthya Suraksha." },
  { q: "How can I become a member or volunteer?", a: "You can choose a plan on our Membership page or fill the Contact Us form to become a volunteer." },
  { q: "How can I donate directly?", a: "You can donate by scanning our UPI QR code or through a bank transfer. All details are on the donation section." }
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryTab, setGalleryTab] = useState<"photos" | "videos">("photos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const photoItems = [
    { img: gallery1, h: "row-span-2", cls: "h-full min-h-[280px] sm:min-h-[380px]" },
    { img: gallery2, h: "", cls: "h-40 sm:h-48" },
    { img: gallery3, h: "", cls: "h-40 sm:h-48" },
    { img: gallery4, h: "row-span-2", cls: "h-full min-h-[280px] sm:min-h-[380px]" },
    { img: gallery5, h: "", cls: "h-40 sm:h-48" },
    { img: gallery6, h: "", cls: "h-40 sm:h-48" },
  ];
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : (i + 1) % photoItems.length));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? i : (i - 1 + photoItems.length) % photoItems.length));
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [lightboxIndex]);
  return (
    <div className="bg-background text-text font-sans">
      {/* Header */}
      <SiteHeader />


      {/* HERO SLIDER */}
      <HeroSlider />


      {/* TRUST BAR */}
      <section className="bg-white border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {trust.map((t) => (
            <div key={t.title} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-navy">
                <t.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[14px] font-semibold text-navy">{t.title}</div>
                <div className="text-[12px] text-text-2">{t.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
          <div className="eyebrow">Our Impact In Numbers</div>
          <h2 className="section-title mt-2">Every Step Creates A Lasting Change</h2>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="card-soft card-soft-hover p-8 text-center">
                <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center" style={{ background: s.bg, color: s.color }}>
                  <s.icon className="w-7 h-7" />
                </div>
                <div className="mt-5 text-[34px] font-extrabold text-navy font-display">{s.num}</div>
                <div className="text-text-2 text-[14px] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <img src={aboutGroup} alt="About" width={1024} height={768} loading="lazy" className="w-full h-[420px] object-cover" />
          </div>
          <div>
            <div className="eyebrow">About Us</div>
            <h2 className="section-title mt-2">About Mahila Chetna Samiti</h2>
            <p className="mt-4 text-text-2 leading-relaxed">
              Mahila Chetna Samiti is a registered NGO working since 1997. Our focus is Women Empowerment (Nari Sashaktikaran), Education (Shiksha), Support (Sahayata) and Safety (Suraksha). We work to make women, children and communities self-reliant and strong.
            </p>
            <p className="mt-3 text-text-2 leading-relaxed">
              Our team has reached thousands of women and children across India, bringing real change in their lives.
            </p>
            <Link to="/about" className="btn-orange mt-6">Read Full Story <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>

        {/* MVV */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 mt-10 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, color: "#2E8B57", bg: "#E8F5EE", title: "Our Mission", body: "To bring education, support and safety to every woman and community, so they become self-reliant and empowered." },
            { icon: Eye, color: "#FF6B00", bg: "#FFF1E5", title: "Our Vision", body: "To create a society where every person has equal opportunity, safety and a path to a better life." },
            { icon: Gem, color: "#2563EB", bg: "#E6EEFB", title: "Our Values", values: ["Empowerment", "Integrity", "Compassion", "Transparency", "Accountability", "Inclusiveness"] },
          ].map((c) => (
            <div key={c.title} className="card-soft card-soft-hover p-7">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: c.bg, color: c.color }}>
                <c.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-[18px] font-bold text-navy">{c.title}</h3>
              {c.body && <p className="mt-2 text-text-2 text-[14px] leading-relaxed">{c.body}</p>}
              {c.values && (
                <div className="mt-3 grid grid-cols-2 gap-y-1.5 text-[13px] text-text">
                  {c.values.map((v) => (
                    <div key={v} className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-orange" /> {v}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#FFF7F0] via-white to-[#F1F5F9] relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-orange/15 blur-3xl rounded-full animate-float" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 w-80 h-80 bg-purple/15 blur-3xl rounded-full animate-float-soft" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="eyebrow">A Message</div>
            <h2 className="section-title mt-2">From Our Founder's Desk</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="grid lg:grid-cols-[380px_1fr] gap-8 lg:gap-12 items-center">
            <div className="relative mx-auto lg:mx-0">
              <div className="absolute -inset-3 bg-gradient-to-br from-orange/40 to-purple/30 rounded-[32px] blur-xl animate-pulse-soft" />
              <div className="relative rounded-[28px] overflow-hidden img-zoom shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] border-4 border-white">
                <img src={story1} alt="Founder Sunita Sharma" className="w-[320px] h-[400px] object-cover" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-5 py-3 shadow-xl border border-border text-center min-w-[220px]">
                <div className="font-display font-extrabold text-navy">Sunita Sharma</div>
                <div className="text-[12px] text-orange font-semibold uppercase tracking-wider">Founder & President</div>
              </div>
              <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-orange text-white flex items-center justify-center shadow-xl animate-bounce-soft">
                <Quote className="w-7 h-7" />
              </div>
            </div>
            <div className="relative">
              <Quote className="absolute -top-4 -left-2 w-16 h-16 text-orange/15" />
              <p className="relative text-[16px] sm:text-[17px] leading-[1.85] text-text font-medium italic">
                "When I founded Mahila Chetna Samiti in 1997, I had one belief — that real change begins when women find their voice. Today that belief has touched 25,000+ lives across 500+ villages. Every woman who starts her own business, every child who returns to school, every village that moves toward better health — that is our true wealth."
              </p>
              <p className="mt-4 text-text-2 leading-relaxed">
                This journey continues. With your love and support, we will build a society where every woman, every child and every community gets the opportunity they deserve.
              </p>
              <div className="mt-7 grid sm:grid-cols-3 gap-4">
                {[
                  { num: "25+", label: "Years of Service" },
                  { num: "25K+", label: "Lives Touched" },
                  { num: "500+", label: "Villages Reached" },
                ].map((s) => (
                  <div key={s.label} className="card-soft p-4 text-center hover-lift">
                    <div className="text-orange font-extrabold text-[24px] font-display">{s.num}</div>
                    <div className="text-text-2 text-[12px] mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4">
                <svg viewBox="0 0 200 60" className="h-12 text-navy" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M10 40 Q 30 10 50 35 T 90 30 Q 110 50 130 25 T 180 35" />
                </svg>
                <div className="text-[13px] text-text-2">Signature</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
            <div className="eyebrow">Our Focus Areas</div>
            <h2 className="section-title mt-2">Education, Support, Safety — Our Commitment</h2>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {focusAreas.map((f) => (
              <div key={f.label} className="card-soft card-soft-hover p-5 text-center cursor-pointer">
                <div className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center" style={{ background: f.bg, color: f.color }}>
                  <f.icon className="w-6 h-6" />
                </div>
                <div className="mt-3 text-[13px] font-semibold text-navy whitespace-pre-line leading-tight">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-10 sm:py-14 bg-[#EEF4FB]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[280px_1fr] gap-8">
          <div>
            <div className="eyebrow">Our Programs</div>
            <h2 className="section-title mt-2">Programs That Bring Real Change</h2>
            <p className="mt-3 text-text-2 text-[14px] leading-relaxed">Our programs change lives, create opportunities and strengthen communities.</p>
            <Link to="/programs" className="btn-orange mt-5">View All Programs <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programs.map((p) => (
              <div key={p.title} className="card-soft card-soft-hover overflow-hidden">
                <img src={p.img} alt={p.title} width={640} height={512} loading="lazy" className="w-full h-40 object-cover" />
                <div className="p-5">
                  <h3 className="text-[15px] font-bold text-navy leading-snug">{p.title}</h3>
                  <p className="mt-2 text-[13px] text-text-2 leading-relaxed">{p.desc}</p>
                  <Link to="/programs" className="mt-3 inline-flex items-center gap-1 text-[13px] text-orange font-semibold">Learn More <ArrowRight className="w-3.5 h-3.5" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-10 sm:py-14 bg-[#FFF4EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[280px_1fr] gap-8">
          <div>
            <div className="eyebrow">Featured Projects</div>
            <h2 className="section-title mt-2">Projects That Change Lives</h2>
            <p className="mt-3 text-text-2 text-[14px] leading-relaxed">Some of our key projects that are bringing change in communities.</p>
            <Link to="/projects" className="btn-orange mt-5">View All Projects <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map((p) => (
              <div key={p.title} className="card-soft card-soft-hover overflow-hidden">
                <img src={p.img} alt={p.title} width={640} height={512} loading="lazy" className="w-full h-40 object-cover" />
                <div className="p-5">
                  <h3 className="text-[15px] font-bold text-navy leading-snug">{p.title}</h3>
                  <p className="mt-2 text-[13px] text-text-2 leading-relaxed">{p.desc}</p>
                  <div className="mt-3 text-[12px] font-bold text-orange">Impact: {p.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="py-10 sm:py-14 bg-[#F2EEFB]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          <div>
            <div className="eyebrow text-purple" style={{ color: "#7C3AED" }}>Success Stories</div>
            <h2 className="section-title mt-2">Stories Of Transformation</h2>
            <p className="mt-3 text-text-2 text-[14px] leading-relaxed">Real stories from real people whose lives have been changed through our initiatives.</p>
            <Link to="/blogs" className="btn-navy-outline mt-5">Read More Stories <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {stories.map((s) => (
              <div key={s.name} className="card-soft card-soft-hover p-6 relative">
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-purple/10 flex items-center justify-center" style={{ background: "rgba(124,58,237,0.1)" }}>
                  <Quote className="w-4 h-4" style={{ color: "#7C3AED" }} />
                </div>
                <img src={s.img} alt={s.name} width={512} height={512} loading="lazy" className="w-14 h-14 rounded-full object-cover" />
                <p className="mt-4 text-[13px] text-text leading-relaxed">"{s.text}"</p>
                <div className="mt-4 pt-3 border-t border-border">
                  <div className="text-[14px] font-bold text-navy">— {s.name}</div>
                  <div className="text-[12px] text-text-2">{s.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DONATION BANNER — Change a Child's Life */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-secondary/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="relative rounded-[28px] bg-gradient-to-br from-[#0B1F3A] via-[#102a4d] to-[#0B1F3A] overflow-hidden shadow-[0_30px_80px_-30px_rgba(11,31,58,0.5)]">
            {/* decorative orbs */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-orange/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-orange-2/15 blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-10 p-6 sm:p-10 lg:p-14 items-center">
              {/* LEFT */}
              <div className="text-white">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange to-orange-2 flex items-center justify-center shadow-[0_15px_40px_-10px_rgba(255,107,0,0.6)]">
                  <Heart className="w-7 h-7 text-white" fill="currentColor" />
                </div>
                <h2 className="font-display font-extrabold leading-[1.05] mt-6 text-[34px] sm:text-[44px] lg:text-[52px]">
                  Change a Child's Life<br />
                  <span className="text-orange">Today</span>
                </h2>
                <p className="mt-5 text-white/75 text-[15px] sm:text-[16px] max-w-xl leading-relaxed">
                  Your small contribution can brighten the future of thousands of children. Every rupee is not just a donation — it is hope, it is a dream.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {["₹1,000", "₹2,000", "₹3,000", "₹5,000"].map((v) => (
                    <button
                      key={v}
                      type="button"
                      className="px-6 py-2.5 rounded-full border border-white/25 text-white text-[14px] font-bold hover:bg-orange hover:border-orange transition-all hover:-translate-y-0.5"
                    >
                      {v}
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 text-white/70 text-[12px]">
                  <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-orange" /> 80G Tax Benefit</span>
                  <span className="inline-flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-orange" /> 100% Secure</span>
                  <span className="inline-flex items-center gap-1.5"><FileCheck2 className="w-4 h-4 text-orange" /> Instant Receipt</span>
                </div>
              </div>

              {/* RIGHT — Donate Form Card */}
              <div className="bg-white rounded-[24px] p-6 sm:p-8 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]">
                <div className="flex items-center gap-2.5 mb-6">
                  <Heart className="w-6 h-6 text-orange" fill="currentColor" />
                  <h3 className="font-display font-extrabold text-navy text-[22px]">Donate Now</h3>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-2" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 py-3.5 text-[14px] outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-2" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 py-3.5 text-[14px] outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-2" />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 py-3.5 text-[14px] outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <FileCheck2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-2" />
                    <input
                      type="text"
                      placeholder="PAN Number (For 80G Tax Benefit)"
                      className="w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 py-3.5 text-[14px] outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition"
                    />
                  </div>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-orange font-bold text-[15px]">₹</span>
                    <input
                      type="number"
                      defaultValue={100}
                      min={1}
                      placeholder="Amount"
                      className="w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 py-3.5 text-[14px] font-semibold text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition"
                    />
                  </div>

                  <div className="relative">
                    <select
                      className="w-full appearance-none rounded-2xl border border-orange/30 bg-orange/5 px-4 py-3.5 text-[14px] font-semibold text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition pr-10"
                      defaultValue=""
                    >
                      <option value="" disabled>Select Donation Purpose</option>
                      <option>Education for Girls</option>
                      <option>Women Empowerment</option>
                      <option>Health & Awareness</option>
                      <option>General Donation</option>
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange rotate-90 pointer-events-none" />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange to-orange-2 hover:from-orange-2 hover:to-orange text-white font-bold text-[15px] py-4 rounded-2xl shadow-[0_15px_40px_-10px_rgba(255,107,0,0.6)] transition-all hover:-translate-y-0.5"
                  >
                    <Heart className="w-5 h-5" fill="currentColor" /> Confirm Donation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECT DONATIONS — QR + Bank Transfer */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-secondary/30 to-white relative overflow-hidden">
        <div className="absolute top-20 -left-24 w-72 h-72 rounded-full bg-orange/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 -right-24 w-72 h-72 rounded-full bg-navy/5 blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white shadow-[0_8px_24px_rgba(11,31,58,0.08)] rounded-full px-5 py-2.5 border border-slate-100">
              <Building2 className="w-4 h-4 text-[#0B1F3A]" />
              <span className="text-[12px] font-extrabold tracking-[0.25em] text-[#0B1F3A] font-display">BANK TRANSFER</span>
            </div>
            <h2 className="section-title mt-5">
              Direct <span className="text-orange">Donations</span>
            </h2>
            <p className="mt-4 text-text-2 max-w-2xl mx-auto">
              You can also support us by scanning our QR code or transferring directly to our official bank account.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-7">
            {/* LEFT — Scan to Donate */}
            <div className="bg-white rounded-[28px] p-8 sm:p-10 shadow-[0_12px_40px_rgba(11,31,58,0.06)] border border-slate-100 flex flex-col items-center">
              <h3 className="font-display font-extrabold text-[26px] text-[#0B1F3A]">Scan to Donate</h3>

              {/* QR Card Mock */}
              <div className="mt-8 w-[260px] rounded-[18px] border-[3px] border-[#0B1F3A] overflow-hidden bg-white shadow-[0_18px_40px_rgba(11,31,58,0.12)]">
                {/* top: name + upi id */}
                <div className="flex items-center gap-2 p-3 border-b border-slate-200">
                  <div className="w-14 h-12 rounded bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center">
                    <div className="text-[10px] font-extrabold leading-none text-center">
                      <div className="text-sky-600">Paytm</div>
                      <div className="text-[8px] text-slate-500 my-0.5">to</div>
                      <div className="text-sky-600">UPI</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-extrabold text-slate-800 leading-tight">MAHILA CHETNA<br/>SAMITI</div>
                    <div className="text-[11px] font-bold text-slate-600 mt-1">+91 7373300737</div>
                  </div>
                </div>
                {/* QR area */}
                <div className="bg-[#00B9F1] py-4 px-3">
                  <div className="text-center text-white font-extrabold text-[14px] tracking-wide">paytm</div>
                  <div className="text-center text-white text-[9px] mt-0.5">Accepted Here</div>
                  <div className="mt-3 bg-white p-2.5 rounded-md flex items-center justify-center">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=0&data=upi%3A%2F%2Fpay%3Fpa%3Dmahilachetna%40upi%26pn%3DMahila%2520Chetna%2520Samiti"
                      alt="UPI QR Code"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="text-center text-white/90 text-[9px] mt-2">UPI ID: mahilachetna@upi</div>
                  <div className="mt-2 flex items-center justify-center gap-2 text-white text-[10px] font-extrabold">
                    <span>BHIM</span><span>›</span><span>UPI</span><span>›</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 font-bold text-[12px] px-4 py-2 rounded-full border border-emerald-100">
                <ShieldCheck className="w-4 h-4" /> Secure UPI Payment
              </div>
            </div>

            {/* RIGHT — Account Information */}
            <div className="bg-white rounded-[28px] p-8 sm:p-10 shadow-[0_12px_40px_rgba(11,31,58,0.06)] border border-slate-100">
              <div>
                <h3 className="font-display font-extrabold text-[26px] text-[#0B1F3A]">Account Information</h3>
                <span className="block mt-2 h-[3px] w-16 rounded-full bg-gradient-to-r from-orange to-orange-2" />
              </div>

              <div className="mt-7 divide-y divide-slate-100">
                {[
                  { k: "Account Name", v: "Mahila Chetna Samiti", accent: false },
                  { k: "Bank Name", v: "State Bank of India", accent: false },
                  { k: "Account No.", v: "1234567890123", accent: true },
                  { k: "IFSC Code", v: "SBIN0001234", accent: true },
                  { k: "Account Type", v: "Current Account", accent: false },
                  { k: "Branch", v: "Malhaur, Lucknow - 226028", accent: false },
                ].map((r) => (
                  <div key={r.k} className="flex items-center justify-between py-4 gap-4">
                    <span className="text-text-2 text-[14px] font-medium">{r.k}</span>
                    <span className={`font-extrabold text-[15px] font-display text-right ${r.accent ? "text-[#0B7C8C] tracking-wide" : "text-[#0B1F3A]"}`}>
                      {r.v}
                    </span>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="mt-6 rounded-[14px] bg-slate-50 border-l-4 border-orange px-5 py-4 flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange text-white flex items-center justify-center text-[12px] font-extrabold">i</div>
                <p className="text-[13px] text-slate-700 leading-relaxed">
                  Please share a screenshot of the transaction with us at{" "}
                  <span className="font-extrabold text-[#0B1F3A]">info@mahilachetnasamiti.org</span> or WhatsApp at{" "}
                  <span className="font-extrabold text-[#0B1F3A]">+91 73733 00737</span> for your receipt and tax certificate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>






      {/* WHY US */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
            <div className="eyebrow">Why Choose Us</div>
            <h2 className="section-title mt-2">We Are Committed To Real Impact</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {whyUs.map((w) => (
              <div key={w.title} className="card-soft card-soft-hover p-5 text-center">
                <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center" style={{ background: `${w.color}1A`, color: w.color }}>
                  <w.icon className="w-6 h-6" />
                </div>
                <div className="mt-3 text-[14px] font-bold text-navy leading-tight">{w.title}</div>
                <div className="mt-1.5 text-[12px] text-text-2 leading-snug">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS — full width */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#FFF7F0] via-white to-[#FFF1E5] relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-orange/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-navy/5 blur-3xl" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="eyebrow">Upcoming Events</div>
              <h2 className="section-title mt-2">Join Our Events & Be Part Of Change</h2>
              <p className="mt-3 text-text-2 max-w-xl">Participate in our workshops, camps and drives happening across India.</p>
            </div>
          <Link to="/events" className="btn-orange self-start md:self-auto">View All Events <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {[
                { d: "15", m: "Jun", y: "2024", t: "Women Awareness Workshop", l: "Lucknow, U.P.", desc: "Interactive session on women rights, financial literacy and self-defense." },
                { d: "22", m: "Jun", y: "2024", t: "Health Check-up Camp", l: "Barabanki, U.P.", desc: "Free medical check-ups, consultations and medicine distribution for villagers." },
                { d: "30", m: "Jun", y: "2024", t: "Education Support Drive", l: "Kanpur, U.P.", desc: "Distribution of books, stationery and school kits to underprivileged children." },
                { d: "08", m: "Jul", y: "2024", t: "Skill Training Program", l: "Raebareli, U.P.", desc: "Vocational training in tailoring, embroidery and digital literacy for women." },
                { d: "18", m: "Jul", y: "2024", t: "Tree Plantation Drive", l: "Lucknow, U.P.", desc: "Community-led environmental initiative to plant 500+ saplings across villages." },
                { d: "05", m: "Aug", y: "2024", t: "Legal Aid Camp", l: "Gorakhpur, U.P.", desc: "Free legal counseling and awareness on women rights and domestic laws." },
              ].map((e) => (
                <CarouselItem key={e.t} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <article className="card-soft card-soft-hover p-6 group relative overflow-hidden h-full">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange to-orange-2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                    <div className="flex items-start gap-5">
                      <div className="w-20 shrink-0 rounded-2xl overflow-hidden text-center shadow-md">
                        <div className="bg-orange text-white text-[11px] font-bold py-1 uppercase tracking-wider">{e.m}</div>
                        <div className="bg-white text-navy py-3">
                          <div className="text-[32px] font-extrabold leading-none">{e.d}</div>
                          <div className="text-[11px] text-text-2 font-semibold mt-1">{e.y}</div>
                        </div>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-[18px] font-bold text-navy leading-tight">{e.t}</h3>
                        <div className="mt-2 flex items-center gap-1.5 text-[13px] text-text-2"><MapPin className="w-3.5 h-3.5 text-orange shrink-0" /> {e.l}</div>
                      </div>
                    </div>
                    <p className="mt-4 text-[14px] text-text-2 leading-relaxed">{e.desc}</p>
                    <Link to="/events" className="mt-4 inline-flex items-center gap-1 text-[13px] text-orange font-bold group-hover:gap-2 transition-all">Register Now <ArrowRight className="w-3.5 h-3.5" /></Link>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:-left-4 top-1/2 -translate-y-1/2 h-10 w-10 border-slate-200 bg-white text-navy shadow-lg hover:bg-orange hover:text-white hover:border-orange transition-all" />
            <CarouselNext className="right-0 sm:-right-4 top-1/2 -translate-y-1/2 h-10 w-10 border-slate-200 bg-white text-navy shadow-lg hover:bg-orange hover:text-white hover:border-orange transition-all" />
          </Carousel>
        </div>
      </section>

      {/* GALLERY — full width */}
      <section className="py-16 sm:py-20 bg-[#0B1F3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #FF6B00 0%, transparent 40%), radial-gradient(circle at 80% 80%, #7C3AED 0%, transparent 40%)" }} />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="eyebrow text-orange-2" style={{ color: "#FF8C2B" }}>Gallery Preview</div>
            <h2 className="section-title mt-2 text-white">Moments Of Impact</h2>
            <p className="mt-3 text-white/70">Glimpses from our programs, events and the communities we serve every day.</p>
          </div>
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full p-1.5">
              <button
                onClick={() => setGalleryTab("photos")}
                className={`inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-sm font-bold transition-all ${
                  galleryTab === "photos"
                    ? "bg-gradient-to-r from-orange to-[#FF8C2B] text-white shadow-[0_10px_30px_-10px_rgba(255,107,0,0.7)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <ImageIcon className="w-4 h-4" /> Photos
              </button>
              <button
                onClick={() => setGalleryTab("videos")}
                className={`inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-sm font-bold transition-all ${
                  galleryTab === "videos"
                    ? "bg-gradient-to-r from-orange to-[#FF8C2B] text-white shadow-[0_10px_30px_-10px_rgba(255,107,0,0.7)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <PlayCircle className="w-4 h-4" /> Videos
              </button>
            </div>
          </div>

          {galleryTab === "photos" ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {photoItems.map((g, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className={`group relative overflow-hidden rounded-2xl ${g.h} text-left focus:outline-none focus:ring-2 focus:ring-orange`}
                >
                  <img src={g.img} alt="" loading="lazy" className={`w-full ${g.cls} object-cover transition-transform duration-700 group-hover:scale-110`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-3 left-3 right-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-white text-[13px] font-bold">Mahila Chetna Samiti</div>
                    <div className="text-white/80 text-[11px]">Community impact moment</div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {[
                { img: video1, title: "Women Health & Hygiene", duration: "3:24" },
                { img: video2, title: "Girl Child Education", duration: "2:10" },
                { img: video3, title: "Community Outreach", duration: "4:45" },
              ].map((v, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl cursor-pointer">
                  <img src={v.img} alt={v.title} loading="lazy" className="w-full h-52 sm:h-60 object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-7 h-7 text-orange ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    {v.duration}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-white text-[14px] font-bold leading-tight">{v.title}</div>
                    <div className="text-white/70 text-[11px] mt-0.5">Mahila Chetna Samiti</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Link to="/gallery" className="inline-flex items-center gap-2 bg-white text-navy rounded-[14px] px-6 py-3 font-bold hover:bg-orange hover:text-white transition">
              View Full {galleryTab === "photos" ? "Photo" : "Video"} Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* LIGHTBOX */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
              aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i === null ? i : (i - 1 + photoItems.length) % photoItems.length)); }}
              aria-label="Previous"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i === null ? i : (i + 1) % photoItems.length)); }}
              aria-label="Next"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <img
              src={photoItems[lightboxIndex].img}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="max-w-[92vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="absolute bottom-5 left-0 right-0 text-center text-white/80 text-sm">
              {lightboxIndex + 1} / {photoItems.length}
            </div>
          </div>
        )}
      </section>

      {/* TEAM MEMBERS */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-secondary/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-block">
              <span className="eyebrow italic tracking-[0.25em]">TEAM MEMBER</span>
              <span className="block h-[2px] w-12 bg-orange mx-auto mt-1.5 rounded-full" />
            </div>
            <h2 className="section-title mt-3">
              Our <span className="text-orange">Team Member</span>
            </h2>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="mt-14 px-2">
            <CarouselContent className="-ml-4 pb-4">
              {[
                { name: "Sunita Sharma", role: "Founder & Secretary", img: story1, accent: "#FF6B00" },
                { name: "Anita Verma", role: "Program Director", img: story2, accent: "#0B1F3A" },
                { name: "Rekha Singh", role: "Community Lead", img: story3, accent: "#FF8C00" },
                { name: "Priya Yadav", role: "Education Head", img: story1, accent: "#2E7D32" },
                { name: "Meena Kumari", role: "Counselor", img: story2, accent: "#FF6B00" },
                { name: "Kavita Devi", role: "Coordinator", img: story3, accent: "#0B1F3A" },
              ].map((t) => (
                <CarouselItem key={t.name} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                  <div className="group flex flex-col h-full bg-white rounded-[24px] overflow-hidden border border-slate-100 hover:border-orange/20 shadow-[0_4px_20px_rgba(11,31,58,0.03)] hover:shadow-[0_20px_40px_rgba(11,31,58,0.08)] transition-all duration-500 hover:-translate-y-2">
                    {/* Photo Container */}
                    <div className="relative overflow-hidden aspect-[4/5]">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                        {/* Social Links on Hover */}
                        <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                          <a href="https://linkedin.com/company/mahilachetnasamiti" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF6B00] backdrop-blur-md flex items-center justify-center text-white transition-colors duration-300">
                            <Linkedin className="w-4 h-4" />
                          </a>
                          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF6B00] backdrop-blur-md flex items-center justify-center text-white transition-colors duration-300">
                            <Twitter className="w-4 h-4" />
                          </a>
                          <a href="mailto:info@mahilachetnasamiti.org" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF6B00] backdrop-blur-md flex items-center justify-center text-white transition-colors duration-300">
                            <Mail className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <span className="absolute top-4 right-4 text-[10px] font-bold font-display px-3 py-1.5 rounded-full backdrop-blur-md text-white bg-black/40 tracking-wider uppercase">
                        Member
                      </span>
                    </div>

                    {/* Meta Section */}
                    <div className="p-6 text-center flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-[#0B1F3A] font-extrabold font-display text-[19px] group-hover:text-[#FF6B00] transition-colors duration-300">{t.name}</h3>
                        <span className="inline-block mt-2 text-[12px] font-bold px-3.5 py-1 rounded-full font-display uppercase tracking-wider" style={{ color: t.accent, backgroundColor: `${t.accent}15` }}>
                          {t.role}
                        </span>
                      </div>
                      {/* Decorative bottom bar inside card */}
                      <div className="w-8 h-[3px] rounded-full mx-auto mt-4 transition-all duration-500 group-hover:w-16" style={{ backgroundColor: t.accent }} />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-2 lg:-left-6 bg-white text-navy border-0 shadow-[0_8px_24px_rgba(11,31,58,0.12)] hover:bg-orange hover:text-white" />
            <CarouselNext className="hidden sm:flex -right-2 lg:-right-6 bg-white text-navy border-0 shadow-[0_8px_24px_rgba(11,31,58,0.12)] hover:bg-orange hover:text-white" />
          </Carousel>
        </div>
      </section>

      {/* VOLUNTEERS */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-secondary/40 to-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-block">
              <span className="eyebrow italic tracking-[0.25em]">OUR VOLUNTEERS</span>
              <span className="block h-[2px] w-12 bg-orange mx-auto mt-1.5 rounded-full" />
            </div>
            <h2 className="section-title mt-3">
              Our <span className="text-orange">Volunteers</span>
            </h2>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="mt-14 px-2">
            <CarouselContent className="-ml-4 pb-4">
              {[
                { name: "Ritu Sharma", role: "Field Volunteer", img: story2, accent: "#FF6B00" },
                { name: "Pooja Mishra", role: "Event Volunteer", img: story3, accent: "#0B1F3A" },
                { name: "Suman Lata", role: "Community Lead", img: story1, accent: "#FF8C00" },
                { name: "Neha Gupta", role: "Outreach", img: story2, accent: "#2E7D32" },
                { name: "Asha Rani", role: "Workshop Helper", img: story3, accent: "#0B1F3A" },
                { name: "Lakshmi Bai", role: "Awareness Lead", img: story1, accent: "#FF6B00" },
              ].map((t) => (
                <CarouselItem key={t.name} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                  <div className="group flex flex-col h-full bg-white rounded-[24px] overflow-hidden border border-slate-100 hover:border-orange/20 shadow-[0_4px_20px_rgba(11,31,58,0.03)] hover:shadow-[0_20px_40px_rgba(11,31,58,0.08)] transition-all duration-500 hover:-translate-y-2">
                    {/* Photo Container */}
                    <div className="relative overflow-hidden aspect-[4/5]">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                        {/* Social Links on Hover */}
                        <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                          <a href="https://linkedin.com/company/mahilachetnasamiti" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF6B00] backdrop-blur-md flex items-center justify-center text-white transition-colors duration-300">
                            <Linkedin className="w-4 h-4" />
                          </a>
                          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF6B00] backdrop-blur-md flex items-center justify-center text-white transition-colors duration-300">
                            <Twitter className="w-4 h-4" />
                          </a>
                          <a href="mailto:info@mahilachetnasamiti.org" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF6B00] backdrop-blur-md flex items-center justify-center text-white transition-colors duration-300">
                            <Mail className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <span className="absolute top-4 right-4 text-[10px] font-bold font-display px-3 py-1.5 rounded-full backdrop-blur-md text-white bg-black/40 tracking-wider uppercase">
                        Volunteer
                      </span>
                    </div>

                    {/* Meta Section */}
                    <div className="p-6 text-center flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-[#0B1F3A] font-extrabold font-display text-[19px] group-hover:text-[#FF6B00] transition-colors duration-300">{t.name}</h3>
                        <span className="inline-block mt-2 text-[12px] font-bold px-3.5 py-1 rounded-full font-display uppercase tracking-wider" style={{ color: t.accent, backgroundColor: `${t.accent}15` }}>
                          {t.role}
                        </span>
                      </div>
                      {/* Decorative bottom bar inside card */}
                      <div className="w-8 h-[3px] rounded-full mx-auto mt-4 transition-all duration-500 group-hover:w-16" style={{ backgroundColor: t.accent }} />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-2 lg:-left-6 bg-white text-navy border-0 shadow-[0_8px_24px_rgba(11,31,58,0.12)] hover:bg-orange hover:text-white" />
            <CarouselNext className="hidden sm:flex -right-2 lg:-right-6 bg-white text-navy border-0 shadow-[0_8px_24px_rgba(11,31,58,0.12)] hover:bg-orange hover:text-white" />
          </Carousel>
        </div>
      </section>


      {/* BLOGS — full width */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="eyebrow">Latest Blogs</div>
              <h2 className="section-title mt-2">News, Insights & Updates</h2>
              <p className="mt-3 text-text-2 max-w-xl">Stories, research and updates from the field — straight from our team and community.</p>
            </div>
            <Link to="/blogs" className="btn-navy-outline self-start md:self-auto">View All Articles <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: blog1Img, cat: "Women Empowerment", t: "Empowering Rural Women Through Skill Development Programs", d: "12 May 2024", read: "5 min read", excerpt: "How our vocational training initiatives are transforming lives in 500+ villages across India." },
              { img: blog2Img, cat: "Education", t: "The Importance of Girls Education In Modern India", d: "08 May 2024", read: "4 min read", excerpt: "Why educating girls is the most powerful tool to break the cycle of poverty." },
              { img: blog3Img, cat: "Healthcare", t: "Health Awareness: A Step Towards Better Communities", d: "03 May 2024", read: "6 min read", excerpt: "Preventive healthcare camps and how they are saving lives in remote villages." },
            ].map((b) => (
              <article key={b.t} className="group card-soft card-soft-hover overflow-hidden flex flex-col">
                <div className="relative overflow-hidden">
                  <img src={b.img} alt={b.t} loading="lazy" className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 bg-orange text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">{b.cat}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-[12px] text-text-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {b.d}</span>
                    <span className="w-1 h-1 rounded-full bg-text-2" />
                    <span>{b.read}</span>
                  </div>
                  <h3 className="mt-3 text-[18px] font-bold text-navy leading-snug group-hover:text-orange transition">{b.t}</h3>
                  <p className="mt-2 text-[14px] text-text-2 leading-relaxed flex-1">{b.excerpt}</p>
                  <Link to="/blogs" className="mt-4 inline-flex items-center gap-1 text-[13px] text-orange font-bold group-hover:gap-2 transition-all">Read Article <ArrowRight className="w-3.5 h-3.5" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* PARTNERS — auto-scrolling carousel */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F1F5F9] to-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center mb-10">
            <div className="eyebrow">Our Partners & Supporters</div>
          <h2 className="section-title mt-2">
            Our Supporting <span className="text-orange">Partners</span>
          </h2>
          <p className="mt-3 text-text-2 max-w-2xl mx-auto">
            For any queries, suggestions or collaboration — we are always here for you.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#F1F5F9] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex w-max animate-marquee gap-6 sm:gap-8">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="shrink-0 w-[180px] sm:w-[210px] h-[120px] sm:h-[140px] bg-white rounded-2xl border border-border shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-2 px-4"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-extrabold text-[18px] tracking-tight shadow-md"
                  style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}CC)` }}
                >
                  {p.initials}
                </div>
                <div className="text-[13px] font-bold text-navy text-center leading-tight">{p.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/about" className="inline-flex items-center gap-2 bg-orange text-white rounded-full px-8 py-3.5 font-bold hover:bg-orange-2 transition shadow-lg shadow-orange/30">
            View All Partners <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


      {/* SPLIT CTA */}
      <section className="grid md:grid-cols-2">
        <div className="relative bg-[#0B1F3A] text-white p-8 sm:p-10 lg:p-14 overflow-hidden">
          <img src={nariImg} alt="" width={896} height={512} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="relative">
            <h3 className="font-display font-extrabold text-[24px] sm:text-[30px]">Become A Volunteer</h3>
            <p className="mt-3 text-white/85 text-[14px] max-w-md">Your time, skills and dedication can make a meaningful difference in someone's life.</p>
            <Link to="/volunteer" className="mt-5 bg-white text-navy rounded-[14px] px-5 sm:px-6 py-3 font-bold hover:bg-secondary inline-flex items-center gap-2 text-[14px]">Apply As Volunteer <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
        <div className="relative bg-orange text-white p-8 sm:p-10 lg:p-14 overflow-hidden">
          <img src={shikshaImg} alt="" width={896} height={512} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="relative">
            <h3 className="font-display font-extrabold text-[24px] sm:text-[30px]">Join Our Movement</h3>
            <p className="mt-3 text-white/90 text-[14px] max-w-md">Become a member and contribute towards a stronger, safer and empowered society.</p>
            <Link to="/membership" className="mt-5 bg-white text-orange rounded-[14px] px-5 sm:px-6 py-3 font-bold hover:bg-secondary inline-flex items-center gap-2 text-[14px]">Become Member <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* IMPACT MAP */}
      <ImpactMapSection />



      {/* CONTACT — modern split layout */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-[#0B1F3A] via-[#102E5A] to-[#0B1F3A] overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 rounded-full px-4 py-1.5 text-orange-2 text-[12px] font-bold uppercase tracking-[0.18em]">
              <Send className="w-3.5 h-3.5" /> Get In Touch
            </div>
            <h2 className="section-title mt-4 text-white">
              We Would Love To <span className="text-orange-2">Hear From You</span>
            </h2>
            <p className="mt-3 text-white/70">
              Have questions, suggestions, or want to collaborate? Reach out — we're always here for you.
            </p>
          </div>

          {/* Main card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-[28px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden grid lg:grid-cols-[1fr_1.2fr]">
            {/* Left: info + map */}
            <div className="relative bg-gradient-to-br from-orange to-orange-2 text-white p-8 sm:p-10 flex flex-col gap-6">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <h3 className="text-[22px] sm:text-[26px] font-extrabold leading-tight">Contact Information</h3>
                <p className="mt-2 text-white/85 text-[14px]">Fill the form or reach us directly using the details below.</p>
              </div>

              <div className="relative space-y-5">
                {[
                  { icon: MapPin, title: "Visit Us", body: "330-A Nijampur Malhaur, Near Amity University New Campus, Lucknow 226028, U.P., India" },
                  { icon: Phone, title: "Call Us", body: "+91 73733 00737" },
                  { icon: Mail, title: "Email Us", body: "info@mahilachetnasamiti.org\ndonate@mahilachetnasamiti.org" },
                ].map((c) => (
                  <div key={c.title} className="flex gap-4">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-white/20 backdrop-blur border border-white/25 flex items-center justify-center">
                      <c.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">{c.title}</div>
                      <div className="text-[14px] font-semibold mt-1 whitespace-pre-line leading-relaxed">{c.body}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative mt-2">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 mb-3">Follow Us</div>
                <div className="flex gap-2">
                  {[{ I: Facebook, href: "https://facebook.com/" }, { I: Instagram, href: "https://instagram.com/" }, { I: Youtube, href: "https://youtube.com/" }, { I: Twitter, href: "https://twitter.com/" }, { I: Linkedin, href: "https://linkedin.com/company/mahilachetnasamiti" }].map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/15 hover:bg-white hover:text-orange backdrop-blur border border-white/20 flex items-center justify-center transition">
                      <s.I className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative mt-auto rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl">
                <iframe
                  title="Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=80.95%2C26.85%2C81.05%2C26.92&amp;layer=mapnik"
                  className="w-full h-[180px] border-0"
                />
              </div>
            </div>

            {/* Right: form */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-10 h-[2px] bg-orange rounded-full" />
                <span className="text-orange text-[12px] font-bold uppercase tracking-[0.18em]">Send Message</span>
              </div>
              <h3 className="text-[24px] sm:text-[30px] font-extrabold text-navy leading-tight">Let's Start A Conversation</h3>
              <p className="mt-2 text-text-2 text-[14px]">Drop us a message — we usually respond within 24 hours.</p>

              <form className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { p: "Your Name", icon: UserPlus, type: "text" },
                  { p: "Your Email", icon: Mail, type: "email" },
                  { p: "Your Phone", icon: Phone, type: "tel" },
                  { p: "Subject", icon: Sparkles, type: "text" },
                ].map((f) => (
                  <div key={f.p} className="relative group">
                    <f.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-2 group-focus-within:text-orange transition" />
                    <input
                      type={f.type}
                      placeholder={f.p}
                      className="w-full bg-secondary border border-slate-200 rounded-2xl pl-11 pr-4 py-3.5 text-[14px] placeholder:text-text-2 focus:outline-none focus:border-orange focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,107,0,0.1)] transition"
                    />
                  </div>
                ))}
                <textarea
                  placeholder="Your Message..."
                  rows={5}
                  className="sm:col-span-2 bg-secondary border border-slate-200 rounded-2xl px-4 py-3.5 text-[14px] placeholder:text-text-2 focus:outline-none focus:border-orange focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,107,0,0.1)] transition resize-none"
                />
                <button
                  type="button"
                  className="sm:col-span-2 group relative overflow-hidden bg-gradient-to-r from-orange to-orange-2 text-white rounded-2xl px-6 py-4 font-bold inline-flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(255,107,0,0.35)] hover:shadow-[0_15px_40px_rgba(255,107,0,0.5)] hover:-translate-y-0.5 transition-all"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  Send Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CAUSES PREVIEW */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#FFF7F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow">Causes We Support</div>
            <h2 className="section-title mt-2">Stand With A Cause That Matters</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
            <p className="mt-4 text-text-2">Every contribution fuels a movement. Choose a cause close to your heart and help us create lasting change.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { I: GraduationCap, title: "Girl Child Education", desc: "Books, fees and mentorship for underprivileged girls.", img: cause1Img, raised: 78 },
              { I: HeartPulse, title: "Women Health & Hygiene", desc: "Free camps, sanitary kits and maternal care.", img: cause2Img, raised: 64 },
              { I: HandHeart, title: "Livelihood & Skills", desc: "Training and micro-finance for women entrepreneurs.", img: cause3Img, raised: 52 },
            ].map(({ I, title, desc, img, raised }) => (
              <div key={title} className="group bg-white rounded-[24px] shadow-soft border border-border hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-48 overflow-hidden rounded-t-[24px]">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                </div>
                <div className="relative px-6 pb-6 pt-6">
                  <div className="absolute -top-7 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-2 to-orange text-white flex items-center justify-center shadow-xl shadow-orange/40 ring-4 ring-white">
                    <I className="w-7 h-7" strokeWidth={2.2} />
                  </div>
                  <div className="pt-6">
                    <h3 className="text-xl font-bold text-navy">{title}</h3>
                    <p className="text-text-2 text-[14.5px] mt-2 mb-5">{desc}</p>
                    <div className="mb-2 flex justify-between text-sm font-semibold">
                      <span className="text-navy">Funds Raised</span>
                      <span className="text-orange">{raised}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-orange/10 overflow-hidden mb-5">
                      <div className="h-full bg-gradient-to-r from-orange-2 to-orange rounded-full" style={{ width: `${raised}%` }} />
                    </div>
                    <div className="flex items-center gap-3">
                      <Link to="/donate" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-2 to-orange text-white px-5 py-2.5 font-semibold shadow-md shadow-orange/30 hover:-translate-y-0.5 transition">
                        <Heart className="w-4 h-4 fill-white" /> Donate
                      </Link>
                      <Link to="/causes" className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center hover:bg-orange transition shrink-0" aria-label="Read more">
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/causes" className="inline-flex items-center gap-2 bg-navy text-white font-semibold rounded-full px-7 py-3 hover:bg-orange transition">
              Explore All Causes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0B1F3A] via-[#102E5A] to-[#0B1F3A] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-16 w-80 h-80 bg-orange/20 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute -bottom-24 right-0 w-96 h-96 bg-orange-2/15 blur-3xl rounded-full" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-orange-2 font-semibold uppercase tracking-wider text-[12px]">Voices Of Change</div>
            <h2 className="section-title mt-2 text-white">What People Say About Us</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="mt-12">
            <CarouselContent className="-ml-4">
              {[
                { name: "Priya Sharma", role: "Beneficiary, Lucknow", quote: "MCSS gave me the skills and the courage to start my own tailoring unit. Today I employ 4 other women from my village.", img: story1 },
                { name: "Dr. Rajesh Kumar", role: "Partner Physician", quote: "Their health camps reach families that even government schemes miss. The impact on rural women's health is real and measurable.", img: story2 },
                { name: "Anjali Verma", role: "Volunteer", quote: "Volunteering with Mahila Chetna Samiti has been the most rewarding decision of my life. The team is transparent, passionate and rooted in community.", img: story3 },
                { name: "Sunita Yadav", role: "Scholarship Recipient", quote: "I am the first girl in my family to complete graduation. MCSS made it possible with mentorship and fee support.", img: program1 },
              ].map((t) => (
                <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 h-full flex flex-col">
                    <Quote className="w-10 h-10 text-orange-2/80" />
                    <p className="mt-4 text-white/90 leading-relaxed text-[15px] flex-1">"{t.quote}"</p>
                    <div className="mt-6 flex items-center gap-3 pt-5 border-t border-white/10">
                      <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-orange/40" />
                      <div>
                        <div className="font-display font-bold text-white">{t.name}</div>
                        <div className="text-[12px] text-white/60">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-2 bg-white text-navy border-0" />
            <CarouselNext className="hidden sm:flex -right-2 bg-white text-navy border-0" />
          </Carousel>
        </div>
      </section>

      {/* AWARDS & RECOGNITION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow">Recognition & Trust</div>
            <h2 className="section-title mt-2">Awards & Accreditations</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
            <p className="mt-4 text-text-2">Recognition that reflects 25+ years of integrity, compliance and grassroots impact.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { I: Award, title: "Best Women NGO 2024", sub: "U.P. State Recognition" },
              { I: ShieldCheck, title: "12A & 80G Certified", sub: "Income Tax Exemptions" },
              { I: BadgeCheck, title: "NITI Aayog Registered", sub: "Unique ID Verified" },
              { I: FileCheck2, title: "FCRA Compliant", sub: "Audit Trail Maintained" },
            ].map(({ I, title, sub }) => (
              <div key={title} className="group bg-white border border-border rounded-2xl p-6 text-center shadow-soft hover:-translate-y-1 hover:shadow-xl transition">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-2 to-orange text-white flex items-center justify-center shadow-md shadow-orange/30 group-hover:scale-110 transition">
                  <I className="w-8 h-8" />
                </div>
                <h3 className="mt-4 font-display font-bold text-navy text-[16px]">{title}</h3>
                <p className="text-[13px] text-text-2 mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left image */}
          <div className="relative">
            <div className="relative rounded-[24px] overflow-hidden shadow-soft">
              <img src={faqImg} alt="Members of Mahila Chetna Samiti" className="w-full h-[480px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/50 via-navy/10 to-transparent" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-orange text-white rounded-[18px] p-5 shadow-soft max-w-[220px]">
              <div className="font-display font-extrabold text-[28px] leading-none">100%</div>
              <div className="text-[12px] mt-1 opacity-95">Trusted &amp; transparent programs</div>
            </div>
            <div className="hidden md:block absolute -top-6 -right-6 bg-white rounded-[18px] p-4 shadow-soft border border-border max-w-[200px]">
              <div className="text-orange font-display font-extrabold text-[22px]">25,000+</div>
              <div className="text-[12px] text-text-2 mt-0.5">Lives Impacted Since 1997</div>
            </div>
          </div>

          {/* Right FAQ */}
          <div>
            <div className="eyebrow">Got Questions?</div>
            <h2 className="section-title mt-2">Frequently Asked <span className="text-orange">Questions</span></h2>
            <div className="mt-3 h-1 w-16 bg-orange rounded-full" />
            <p className="mt-4 text-text-2 text-[15px] leading-relaxed">Have questions about our initiatives, registrations, or how you can participate? Find quick answers below or reach out to us directly.</p>

            <div className="mt-6 space-y-3">
              {indexFaqs.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={f.q} className={`bg-white rounded-[14px] overflow-hidden transition-all border ${isOpen ? "border-orange shadow-soft" : "border-border"}`}>
                    <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[13px] flex-shrink-0 ${isOpen ? "bg-orange text-white" : "bg-orange/10 text-orange"}`}>{String(i + 1).padStart(2, "0")}</span>
                        <span className="font-semibold text-navy text-[15px]">{f.q}</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition ${isOpen ? "rotate-180 text-orange" : "text-text-2"}`} />
                    </button>
                    {isOpen && <div className="px-5 pb-5 pl-16 text-text-2 text-[14px] leading-relaxed">{f.a}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </div>
  );
}

function QRMock() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" fill="white" />
      {Array.from({ length: 100 }).map((_, i) => {
        const x = (i % 10) * 10;
        const y = Math.floor(i / 10) * 10;
        const fill = (i * 7) % 3 === 0;
        return fill ? <rect key={i} x={x} y={y} width="9" height="9" fill="#0B1F3A" /> : null;
      })}
      <rect x="0" y="0" width="30" height="30" fill="none" stroke="#0B1F3A" strokeWidth="4" />
      <rect x="70" y="0" width="30" height="30" fill="none" stroke="#0B1F3A" strokeWidth="4" />
      <rect x="0" y="70" width="30" height="30" fill="none" stroke="#0B1F3A" strokeWidth="4" />
    </svg>
  );
}

const heroSlides = [
  {
    img: nariImg,
    title: "Nari Sashaktikaran —",
    accent: "Women Empowerment",
    desc: "Mahila Chetna Samiti works for Women Empowerment, Education, Support and Safety for women, children and communities across India since 1997.",
  },
  {
    img: shikshaImg,
    title: "Shiksha —",
    accent: "Education For Every Child",
    desc: "Through Shiksha Setu and rural education programs, we bring quality learning to children in underserved villages across India.",
  },
  {
    img: sahayataImg,
    title: "Sahayata & Suraksha —",
    accent: "Support  For All",
    desc: "Free health camps, awareness drives, support services and safety programs delivered to 500+ villages across the country.",
  },
];

function HeroSlider() {
  const [i, setI] = useState(0);
  const n = heroSlides.length;
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % n), 5000);
    return () => clearInterval(t);
  }, [n]);
  const go = (d: number) => setI((p) => (p + d + n) % n);
  return (
    <section className="relative overflow-hidden bg-[#0B1F3A]">
      {heroSlides.map((s, idx) => (
        <img
          key={idx}
          src={s.img}
          alt=""
          width={1280}
          height={800}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-70" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/85 to-transparent" />
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-28 min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] flex items-center">
        <div key={i} className="max-w-xl text-white animate-fade-in">
          <h1 className="font-display font-extrabold text-[30px] sm:text-[42px] md:text-[52px] leading-[1.1] sm:leading-[1.05]">
            {heroSlides[i].title}<br />
            <span className="text-orange-2">{heroSlides[i].accent}</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-white/85 text-[14px] sm:text-[15px] leading-relaxed max-w-md">{heroSlides[i].desc}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/donate" className="btn-orange"><Heart className="w-4 h-4" /> Donate Now</Link>
            <Link to="/volunteer" className="bg-[#102E5A] text-white border border-white/20 rounded-[14px] px-5 py-3 font-semibold inline-flex items-center gap-2 hover:bg-[#173d76]">
              <UserPlus className="w-4 h-4" /> Become Volunteer
            </Link>
            <Link to="/membership" className="bg-white text-navy rounded-[14px] px-5 py-3 font-semibold inline-flex items-center gap-2 hover:bg-secondary">
              <Sparkles className="w-4 h-4 text-orange" /> Join Membership
            </Link>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={() => go(-1)} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur flex items-center justify-center text-white z-10">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={() => go(1)} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur flex items-center justify-center text-white z-10">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-orange" : "w-2 bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </section>
  );
}
