import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HandHeart, Users, Heart, Sparkles, Globe2, GraduationCap, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import ApplyDialog from "@/components/ApplyDialog";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";
import aboutGroup from "@/assets/about-group.jpg";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer With Us — Mahila Chetna Samiti" },
      { name: "description", content: "Join Mahila Chetna Samiti as a volunteer. Donate your time, skills and passion to empower women and communities across India." },
      { property: "og:title", content: "Volunteer With Us — Mahila Chetna Samiti" },
      { property: "og:description", content: "Become a changemaker. Volunteer with Mahila Chetna Samiti." },
    ],
  }),
  component: VolunteerPage,
});

const roles = [
  { title: "Field Volunteer", desc: "Work directly with women's groups on the ground in Lucknow and nearby villages.", color: "#FF6B00" },
  { title: "Teaching Volunteer", desc: "Tutor children, run literacy classes and skill-building sessions.", color: "#2563EB" },
  { title: "Healthcare Camp Support", desc: "Assist in medical camps, awareness drives and menstrual health workshops.", color: "#16A34A" },
  { title: "Digital & Social Media", desc: "Create stories, manage content and amplify our mission online.", color: "#7C3AED" },
  { title: "Event Volunteer", desc: "Help organize fundraisers, exhibitions and community celebrations.", color: "#EC4899" },
  { title: "Remote Volunteer", desc: "Translation, research, design, grant-writing — contribute from anywhere.", color: "#EAB308" },
];

const why = [
  { icon: Heart, title: "Make Real Impact", desc: "Touch hundreds of lives directly through your work each year." },
  { icon: Users, title: "Join a Community", desc: "Become part of a 500+ strong family of changemakers." },
  { icon: GraduationCap, title: "Gain Skills", desc: "Hands-on learning in development, leadership and field work." },
  { icon: Globe2, title: "Volunteer Anywhere", desc: "On-ground, hybrid or fully remote — your choice." },
  { icon: Sparkles, title: "Recognition", desc: "Certificates, references and felicitation at annual events." },
  { icon: HandHeart, title: "Purposeful Time", desc: "Every hour goes toward women's empowerment & education." },
];

const steps = [
  "Fill the volunteer interest form or email us",
  "Short call with our volunteer coordinator",
  "Choose a role, time commitment & location",
  "Orientation and onboarding session",
  "Start contributing & changing lives",
];

function VolunteerPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />
      <PageHero
        title="Volunteer With Us"
        description="Apna samay, hunar aur pyaar dein. Shiksha, Sahayata aur Suraksha ke is safar mein humara saath dein."
        image={heroBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Volunteer With Us" }]}
      />

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-[24px] overflow-hidden shadow-soft">
              <img src={aboutGroup} alt="Volunteers at work" className="w-full h-[460px] object-cover" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-6 bg-orange text-white rounded-[18px] p-5 shadow-soft max-w-[220px]">
              <div className="font-display font-extrabold text-[28px] leading-none">500+</div>
              <div className="text-[12px] mt-1 opacity-95">Active volunteers across 7 states</div>
            </div>
          </div>
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-[12px] font-bold uppercase tracking-wider">Be the Change</span>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-navy font-display leading-tight mt-4">Volunteers Are the <span className="text-orange">Heart</span> of Our Mission</h2>
            <div className="mt-3 h-1 w-16 bg-orange rounded-full" />
            <p className="mt-5 text-text-2 text-[15px] leading-relaxed">For 28+ years, dedicated volunteers have helped us reach women in the most underserved corners of India. Whether you have an hour a week or full-time energy, there's a place for you here.</p>
            <p className="mt-3 text-text-2 text-[15px] leading-relaxed">From the classroom to the field, from design desks to fundraising galas — your skills can change a life.</p>
            <button onClick={() => setOpen(true)} className="mt-7 inline-flex items-center gap-2 bg-navy text-white font-semibold rounded-full px-6 py-3 hover:bg-navy-2 transition">Become a Volunteer <ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-[12px] font-bold uppercase tracking-wider">Volunteer Roles</span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-navy font-display mt-4">Find Your Way to Help</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((r) => (
              <div key={r.title} className="group bg-white rounded-[20px] p-7 border border-border/60 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:rotate-[-6deg] transition-all" style={{ backgroundColor: `${r.color}15`, color: r.color }}>
                  <HandHeart className="w-7 h-7" />
                </div>
                <h3 className="mt-5 text-navy font-bold text-[18px] font-display">{r.title}</h3>
                <p className="mt-2 text-text-2 text-[14px] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-[12px] font-bold uppercase tracking-wider">Why Volunteer</span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-navy font-display mt-4">Why You'll Love It Here</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {why.map((p) => (
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

      {/* Steps */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-[12px] font-bold uppercase tracking-wider">How It Works</span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-navy font-display mt-4">5 Simple Steps to Get Started</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {steps.map((s, i) => (
              <div key={s} className="bg-white rounded-2xl border border-border p-5 flex items-start gap-4 hover:border-orange/40 hover:shadow-soft transition">
                <div className="w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center font-bold font-display flex-shrink-0">{i + 1}</div>
                <div className="flex items-center gap-2 pt-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-navy font-medium text-[15px]">{s}</span>
                </div>
              </div>
            ))}
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
              <h3 className="font-display font-extrabold text-[28px] sm:text-[34px]">Ready to Volunteer?</h3>
              <p className="mt-3 text-white/80 max-w-xl mx-auto">Write to us with a short intro and the role you're interested in. We'll get back within 48 hours.</p>
              <div className="mt-7 flex flex-wrap gap-3 justify-center">
                <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 bg-orange text-white font-semibold rounded-full px-6 py-3 hover:bg-orange-2 transition"><HandHeart className="w-4 h-4" /> Apply as Volunteer</button>
                <a href="tel:+917373300737" className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white font-semibold rounded-full px-6 py-3 hover:bg-white/20 transition"><Phone className="w-4 h-4" /> +91 73733 00737</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ApplyDialog open={open} onOpenChange={setOpen} context={{ title: "Volunteer With Mahila Chetna Samiti", badge: "Volunteer Application" }} />
      <SiteFooter />
    </div>
  );
}
