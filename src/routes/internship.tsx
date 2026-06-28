import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { GraduationCap, Award, Users, Sparkles, Clock, MapPin, ArrowRight, CheckCircle2, Phone, BookOpen, Briefcase, FileText } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";
import ApplyDialog, { type ApplyContext } from "@/components/ApplyDialog";
import aboutGroup from "@/assets/about-group.jpg";

export const Route = createFileRoute("/internship")({
  head: () => ({
    meta: [
      { title: "Internship Program — Mahila Chetna Samiti" },
      { name: "description", content: "Apply for internships at Mahila Chetna Samiti. Gain real-world experience in social development, women empowerment and community work." },
      { property: "og:title", content: "Internship Program — Mahila Chetna Samiti" },
      { property: "og:description", content: "Hands-on internships across programs, research, communications and field work." },
    ],
  }),
  component: InternshipPage,
});

const tracks = [
  { title: "Social Work & Field Research", dept: "Programs", duration: "2-6 months", location: "Lucknow, UP", color: "#FF6B00" },
  { title: "Communications & Content", dept: "Marketing", duration: "3 months", location: "Remote / Hybrid", color: "#2563EB" },
  { title: "Fundraising & Partnerships", dept: "Development", duration: "3-6 months", location: "Lucknow / Remote", color: "#16A34A" },
  { title: "Education & Training", dept: "Programs", duration: "2-4 months", location: "Lucknow, UP", color: "#7C3AED" },
  { title: "Graphic Design & Photography", dept: "Creative", duration: "2-3 months", location: "Remote", color: "#EC4899" },
  { title: "Policy & Research", dept: "Research", duration: "3-6 months", location: "Remote", color: "#EAB308" },
];

const perks = [
  { icon: Award, title: "Internship Certificate", desc: "Official certificate & letter of recommendation on completion." },
  { icon: BookOpen, title: "Real Project Work", desc: "Own a project end-to-end, not just shadow." },
  { icon: Users, title: "Mentorship", desc: "Weekly 1:1s with senior team members across functions." },
  { icon: Briefcase, title: "Career Boost", desc: "Strong portfolio piece for development sector roles." },
  { icon: Sparkles, title: "Stipend", desc: "Performance-linked stipend for full-time interns." },
  { icon: GraduationCap, title: "Learning Sessions", desc: "Workshops on policy, fieldwork, fundraising and more." },
];

const eligibility = [
  "Currently pursuing or recently completed UG/PG in any discipline",
  "Strong written & verbal communication (English / Hindi)",
  "Commitment of at least 2 months, minimum 20 hours/week",
  "Passion for women empowerment and social change",
  "Self-driven, organized and team player",
];

const steps = [
  { n: 1, t: "Apply Online", d: "Send CV + a short cover note to our email." },
  { n: 2, t: "Screening Call", d: "30-min call with the program lead." },
  { n: 3, t: "Task / Interview", d: "Short task or panel interview based on the track." },
  { n: 4, t: "Offer & Onboarding", d: "Orientation, mentor assignment & project briefing." },
  { n: 5, t: "Internship Begins", d: "Hands-on work with weekly check-ins." },
];

function InternshipPage() {
  const [applyCtx, setApplyCtx] = useState<ApplyContext | null>(null);
  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />
      <PageHero
        title="Internship"
        description="Learn. Lead. Leave a mark. Join our structured internship program and build a meaningful career in the social sector."
        image={heroBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Internship" }]}
      />

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-[12px] font-bold uppercase tracking-wider">Start Your Journey</span>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-navy font-display leading-tight mt-4">Build a Career That <span className="text-orange">Builds India</span></h2>
            <div className="mt-3 h-1 w-16 bg-orange rounded-full" />
            <p className="mt-5 text-text-2 text-[15px] leading-relaxed">Our internship program is designed for students and early-career professionals who want hands-on experience in the development sector. You'll work on real projects, with real teams, creating real impact — not coffee runs.</p>
            <p className="mt-3 text-text-2 text-[15px] leading-relaxed">Choose your track, your duration, and your location. Whether you join us in Lucknow or remotely from anywhere in India, you'll graduate with skills, stories and a network.</p>
            <button onClick={() => setApplyCtx({ title: "Internship Program — Mahila Chetna Samiti", badge: "Internship Application" })} className="mt-7 inline-flex items-center gap-2 bg-navy text-white font-semibold rounded-full px-6 py-3 hover:bg-navy-2 transition">Apply Now <ArrowRight className="w-4 h-4" /></button>
          </div>
          <div className="relative">
            <div className="rounded-[24px] overflow-hidden shadow-soft">
              <img src={aboutGroup} alt="Interns at work" className="w-full h-[460px] object-cover" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-navy text-white rounded-[18px] p-5 shadow-soft max-w-[220px]">
              <div className="font-display font-extrabold text-[28px] leading-none text-orange">200+</div>
              <div className="text-[12px] mt-1 opacity-95">Interns trained across India since 2018</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-[12px] font-bold uppercase tracking-wider">Internship Tracks</span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-navy font-display mt-4">Pick Your Path</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-12 space-y-4">
            {tracks.map((j) => (
              <div key={j.title} className="group bg-white border border-border rounded-[18px] p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-orange/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${j.color}15`, color: j.color }}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: j.color }}>{j.dept}</span>
                    <h3 className="text-navy font-bold text-[18px] font-display mt-0.5">{j.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-[13px] text-text-2">
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {j.duration}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {j.location}</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setApplyCtx({ title: j.title, type: j.duration, location: j.location, badge: "Internship Application" })} className="inline-flex items-center gap-2 bg-navy text-white font-semibold rounded-full px-5 py-2.5 hover:bg-orange transition whitespace-nowrap">Apply <ArrowRight className="w-4 h-4" /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-[12px] font-bold uppercase tracking-wider">What You Get</span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-navy font-display mt-4">More Than Just an Internship</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="group bg-white rounded-[20px] p-7 border border-border/60 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-orange/10 text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-white group-hover:rotate-[-6deg] transition-all">
                  <p.icon className="w-7 h-7" />
                </div>
                <h3 className="mt-5 text-navy font-bold text-[18px] font-display">{p.title}</h3>
                <p className="mt-2 text-text-2 text-[14px] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility + Process */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-[24px] p-8 border border-border shadow-soft">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center"><FileText className="w-6 h-6" /></div>
              <h3 className="text-[24px] font-extrabold text-navy font-display">Eligibility</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {eligibility.map((e) => (
                <li key={e} className="flex items-start gap-3 text-[14.5px] text-text-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-[24px] p-8 border border-border shadow-soft">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center"><Briefcase className="w-6 h-6" /></div>
              <h3 className="text-[24px] font-extrabold text-navy font-display">Application Process</h3>
            </div>
            <ol className="mt-6 space-y-4">
              {steps.map((s) => (
                <li key={s.n} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center font-bold font-display flex-shrink-0">{s.n}</div>
                  <div>
                    <div className="text-navy font-bold text-[15px]">{s.t}</div>
                    <div className="text-text-2 text-[13.5px] mt-0.5">{s.d}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-navy via-navy-2 to-navy text-white p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="relative">
              <h3 className="font-display font-extrabold text-[28px] sm:text-[34px]">Apply for the Internship Program</h3>
              <p className="mt-3 text-white/80 max-w-xl mx-auto">Send your CV with the subject line "Internship — [Track Name]" and a short cover note.</p>
              <div className="mt-7 flex flex-wrap gap-3 justify-center">
                <button onClick={() => setApplyCtx({ title: "Internship Program — Mahila Chetna Samiti", badge: "Internship Application" })} className="inline-flex items-center gap-2 bg-orange text-white font-semibold rounded-full px-6 py-3 hover:bg-orange-2 transition"><GraduationCap className="w-4 h-4" /> Apply Now</button>
                <a href="tel:+917373300737" className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white font-semibold rounded-full px-6 py-3 hover:bg-white/20 transition"><Phone className="w-4 h-4" /> +91 73733 00737</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ApplyDialog open={!!applyCtx} onOpenChange={(o) => !o && setApplyCtx(null)} context={applyCtx} />
      <SiteFooter />
    </div>
  );
}
