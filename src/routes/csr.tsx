import { createFileRoute } from "@tanstack/react-router";
import { Building2, Handshake, Target, TrendingUp, Award, FileCheck, Users, Heart, ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";
import aboutGroup from "@/assets/about-group.jpg";

export const Route = createFileRoute("/csr")({
  head: () => ({
    meta: [
      { title: "CSR Collaboration — Mahila Chetna Samiti" },
      { name: "description", content: "Partner with Mahila Chetna Samiti for impactful CSR initiatives in women empowerment, education, health and rural development." },
      { property: "og:title", content: "CSR Collaboration — Mahila Chetna Samiti" },
      { property: "og:description", content: "Create lasting social impact through strategic CSR partnerships." },
    ],
  }),
  component: CSRPage,
});

const focus = [
  { icon: Users, title: "Women Empowerment", desc: "Skill training, livelihoods and SHG programs reaching 50,000+ women.", color: "#FF6B00" },
  { icon: Target, title: "Education & Skilling", desc: "Schools, scholarships and digital literacy in underserved communities.", color: "#2563EB" },
  { icon: Heart, title: "Health & Nutrition", desc: "Maternal health, anaemia control and community health camps.", color: "#16A34A" },
  { icon: Building2, title: "Rural Development", desc: "Water, sanitation and sustainable village infrastructure projects.", color: "#7C3AED" },
];

const why = [
  { icon: FileCheck, title: "12A & 80G Certified", desc: "Full tax-exemption benefits under Income Tax Act." },
  { icon: Award, title: "27+ Years of Impact", desc: "Established in 1997 with a strong delivery record." },
  { icon: TrendingUp, title: "Measurable Outcomes", desc: "Data-driven reporting with quarterly impact dashboards." },
  { icon: Handshake, title: "End-to-End Execution", desc: "From design to last-mile delivery — we manage it all." },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "Understand your CSR goals, focus areas and budget." },
  { step: "02", title: "Custom Proposal", desc: "Tailored project design aligned to Schedule VII activities." },
  { step: "03", title: "MoU & Onboarding", desc: "Documentation, compliance and project kick-off." },
  { step: "04", title: "Implementation", desc: "Field execution with milestone-based monitoring." },
  { step: "05", title: "Impact Reporting", desc: "Transparent reports, audits and visit opportunities." },
];

function CSRPage() {
  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />
      <PageHero
        title="CSR Collaboration"
        description="Partner with us to create scalable, measurable social impact aligned with your corporate values and CSR mandate."
        image={heroBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "CSR Collaboration" }]}
      />

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-[12px] font-bold uppercase tracking-wider">Corporate Partnerships</span>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-navy font-display leading-tight mt-4">Turn Your CSR Spend Into <span className="text-orange">Lasting Change</span></h2>
            <div className="mt-3 h-1 w-16 bg-orange rounded-full" />
            <p className="mt-5 text-text-2 text-[15px] leading-relaxed">Mahila Chetna Samiti is an implementation partner of choice for leading corporates, foundations and PSUs. We design and deliver CSR projects that align with Schedule VII of the Companies Act, 2013.</p>
            <ul className="mt-6 space-y-3">
              {["Compliant with Companies Act, 2013 & CSR Rules", "Quarterly progress reports & utilization certificates", "Site visits and direct beneficiary access", "Co-branding opportunities & employee engagement"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[14.5px] text-text">
                  <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />{t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-[24px] overflow-hidden shadow-soft">
              <img src={aboutGroup} alt="CSR field work" className="w-full h-[480px] object-cover" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-orange text-white rounded-[18px] p-5 shadow-soft max-w-[220px]">
              <div className="font-display font-extrabold text-[28px] leading-none">₹15Cr+</div>
              <div className="text-[12px] mt-1 opacity-95">CSR funds deployed across India</div>
            </div>
            <div className="hidden md:block absolute -top-6 -right-6 bg-white rounded-[18px] p-4 shadow-soft border border-border max-w-[200px]">
              <div className="text-navy font-display font-extrabold text-[22px]">40+</div>
              <div className="text-[12px] text-text-2 mt-0.5">Corporate partners & funders</div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-[12px] font-bold uppercase tracking-wider">Focus Areas</span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-navy font-display mt-4">Where Your CSR Creates Impact</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focus.map((f) => (
              <div key={f.title} className="group bg-white rounded-[20px] p-7 border border-border/60 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform" style={{ backgroundColor: `${f.color}15`, color: f.color }}>
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="mt-5 text-navy font-bold text-[18px] font-display">{f.title}</h3>
                <p className="mt-2 text-text-2 text-[14px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-[12px] font-bold uppercase tracking-wider">Why Partner With Us</span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-navy font-display mt-4">A Trusted CSR Implementation Partner</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {why.map((w, i) => (
              <div key={w.title} className="relative bg-white rounded-[20px] p-7 border border-border/60 hover:border-orange/40 transition-all">
                <span className="absolute top-4 right-5 text-[44px] font-black leading-none opacity-10 font-display text-orange select-none">0{i + 1}</span>
                <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center">
                  <w.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-navy font-bold text-[17px] font-display">{w.title}</h3>
                <p className="mt-2 text-text-2 text-[14px] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-[12px] font-bold uppercase tracking-wider">How It Works</span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-navy font-display mt-4">Our Partnership Process</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center group">
                <div className="w-20 h-20 mx-auto rounded-[28px] bg-gradient-to-br from-orange to-orange-2 text-white flex items-center justify-center font-display font-extrabold text-[24px] shadow-lg shadow-orange/30 group-hover:scale-110 group-hover:rotate-[3deg] transition-all">
                  {p.step}
                </div>
                <h3 className="mt-5 text-navy font-bold text-[16px] font-display">{p.title}</h3>
                <p className="mt-2 text-text-2 text-[13px] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-navy via-navy-2 to-navy text-white p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="relative grid md:grid-cols-[2fr_1fr] gap-8 items-center">
              <div>
                <h3 className="font-display font-extrabold text-[28px] sm:text-[34px]">Let's design a CSR project together.</h3>
                <p className="mt-3 text-white/80 max-w-xl">Reach out to our partnerships team for a custom proposal aligned to your CSR objectives.</p>
              </div>
              <div className="space-y-3">
                <a href="mailto:info@mahilachetnasamiti.org" className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur rounded-2xl px-5 py-4 transition">
                  <Mail className="w-5 h-5 text-orange" />
                  <span className="text-white text-[14px] break-all">info@mahilachetnasamiti.org</span>
                </a>
                <a href="tel:+917373300737" className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur rounded-2xl px-5 py-4 transition">
                  <Phone className="w-5 h-5 text-orange" />
                  <span className="text-white font-semibold">+91 73733 00737</span>
                </a>
                <a href="/contact" className="inline-flex w-full items-center justify-center gap-2 bg-orange text-white font-semibold rounded-2xl px-6 py-4 hover:bg-orange-2 transition">Partner With Us <ArrowRight className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
