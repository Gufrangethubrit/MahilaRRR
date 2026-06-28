import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Users, Sparkles, GraduationCap, HandHeart, Globe2, Mail, Upload, X, CheckCircle2 } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "sonner";
import aboutGroup from "@/assets/about-group.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Mahila Chetna Samiti" },
      { name: "description", content: "Build a meaningful career with Mahila Chetna Samiti. Explore open roles in programs, outreach, fundraising and more." },
      { property: "og:title", content: "Careers — Mahila Chetna Samiti" },
      { property: "og:description", content: "Work with purpose. Join a team transforming lives across India." },
    ],
  }),
  component: CareersPage,
});

const openings = [
  { title: "Program Manager — Women Empowerment", type: "Full-time", location: "Lucknow, UP", dept: "Programs", color: "#FF6B00" },
  { title: "Field Coordinator — Rural Outreach", type: "Full-time", location: "Bihar / Jharkhand", dept: "Field Operations", color: "#2563EB" },
  { title: "Fundraising & Partnerships Lead", type: "Full-time", location: "Lucknow / Remote", dept: "Development", color: "#16A34A" },
  { title: "Communications & Content Associate", type: "Full-time", location: "Lucknow, UP", dept: "Marketing", color: "#7C3AED" },
  { title: "Social Worker — Health & Education", type: "Full-time", location: "Lucknow, UP", dept: "Programs", color: "#EC4899" },
  { title: "Volunteer Internship Program", type: "Internship", location: "Pan India", dept: "Multiple", color: "#EAB308" },
];

const perks = [
  { icon: Heart, title: "Meaningful Impact", desc: "Every project changes real lives across rural India." },
  { icon: Users, title: "Inclusive Culture", desc: "Diverse, collaborative team where every voice counts." },
  { icon: GraduationCap, title: "Learning & Growth", desc: "Continuous training, workshops and leadership pathways." },
  { icon: Globe2, title: "Pan-India Exposure", desc: "Work across 7+ states with national-level partners." },
  { icon: Sparkles, title: "Wellness Support", desc: "Health insurance, mental wellness and flexible hours." },
  { icon: HandHeart, title: "Purpose-Driven Pay", desc: "Competitive salary aligned to the nonprofit sector." },
];

function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof openings[number] | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const resume = data.get("resume") as File | null;
    if (!name || !email || !phone) { toast.error("Please fill all required fields"); return; }
    if (!resume || resume.size === 0) { toast.error("Please upload your resume"); return; }
    if (resume.size > 5 * 1024 * 1024) { toast.error("Resume must be under 5MB"); return; }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Application submitted! We'll get back to you soon.");
      setSelectedJob(null);
      setFileName("");
      form.reset();
    }, 900);
  };

  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />
      <PageHero
        title="Careers"
        description="Build a career that matters. Join a passionate team driving change for women and communities across India."
        image={heroBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Careers" }]}
      />

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-[24px] overflow-hidden shadow-soft">
              <img src={aboutGroup} alt="Team at work" className="w-full h-[460px] object-cover" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-6 bg-orange text-white rounded-[18px] p-5 shadow-soft max-w-[220px]">
              <div className="font-display font-extrabold text-[28px] leading-none">120+</div>
              <div className="text-[12px] mt-1 opacity-95">Team members & field staff across India</div>
            </div>
          </div>
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-[12px] font-bold uppercase tracking-wider">Work With Purpose</span>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-navy font-display leading-tight mt-4">Help Us Build a More <span className="text-orange">Equitable</span> India</h2>
            <div className="mt-3 h-1 w-16 bg-orange rounded-full" />
            <p className="mt-5 text-text-2 text-[15px] leading-relaxed">At Mahila Chetna Samiti, careers are not just jobs — they are commitments to lasting change. We are looking for changemakers who bring empathy, expertise and energy to everything they do.</p>
            <p className="mt-3 text-text-2 text-[15px] leading-relaxed">Whether you are a seasoned program leader or just starting out, you'll find space to grow, lead and contribute.</p>
            <a href="#openings" className="mt-7 inline-flex items-center gap-2 bg-navy text-white font-semibold rounded-full px-6 py-3 hover:bg-navy-2 transition">View Open Positions <ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>
      </section>

      {/* Why join */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-[12px] font-bold uppercase tracking-wider">Why Join Us</span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-navy font-display mt-4">A Workplace Built on Impact</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Openings */}
      <section id="openings" className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-[12px] font-bold uppercase tracking-wider">Current Openings</span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-navy font-display mt-4">Join the Movement</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-12 space-y-4">
            {openings.map((j) => (
              <div key={j.title} className="group bg-white border border-border rounded-[18px] p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-orange/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${j.color}15`, color: j.color }}>
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: j.color }}>{j.dept}</span>
                    <h3 className="text-navy font-bold text-[18px] font-display mt-0.5">{j.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-[13px] text-text-2">
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {j.type}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {j.location}</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setSelectedJob(j)} className="inline-flex items-center gap-2 bg-navy text-white font-semibold rounded-full px-5 py-2.5 hover:bg-orange transition whitespace-nowrap">Apply Now <ArrowRight className="w-4 h-4" /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-navy via-navy-2 to-navy text-white p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="relative">
              <h3 className="font-display font-extrabold text-[28px] sm:text-[34px]">Don't see your role?</h3>
              <p className="mt-3 text-white/80 max-w-xl mx-auto">We're always looking for great people. Send us your CV and we'll reach out when something opens up.</p>
              <a href="mailto:info@mahilachetnasamiti.org" className="mt-7 inline-flex items-center gap-2 bg-orange text-white font-semibold rounded-full px-6 py-3 hover:bg-orange-2 transition">
                <Mail className="w-4 h-4" /> info@mahilachetnasamiti.org
              </a>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedJob} onOpenChange={(o) => { if (!o) { setSelectedJob(null); setFileName(""); } }}>
        <DialogContent className="w-[calc(100vw-1.5rem)] max-w-lg p-0 overflow-hidden border-0 rounded-[20px] max-h-[92vh] overflow-y-auto [&>button]:bg-white/15 [&>button]:text-white [&>button]:rounded-full [&>button]:p-1.5 [&>button]:opacity-100 [&>button:hover]:bg-white/25">
          <div className="bg-gradient-to-br from-navy to-navy-2 text-white p-5 sm:p-6 relative">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange/30 blur-3xl rounded-full" />
            <span className="inline-block px-3 py-1 rounded-full bg-orange text-white text-[10px] font-bold uppercase tracking-wider">Apply Now</span>
            <DialogHeader className="mt-3 space-y-1 text-left">
              <DialogTitle className="text-white font-display text-[18px] sm:text-[22px] leading-tight pr-8">{selectedJob?.title}</DialogTitle>
              <DialogDescription className="text-white/70 text-[12px] sm:text-[13px] flex flex-wrap gap-3">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedJob?.type}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {selectedJob?.location}</span>
              </DialogDescription>
            </DialogHeader>
          </div>
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 bg-white">
            <div>
              <label className="text-[12px] font-semibold text-navy uppercase tracking-wider">Full Name *</label>
              <input name="name" required maxLength={100} className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-[14px] focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20" placeholder="Your full name" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="min-w-0">
                <label className="text-[12px] font-semibold text-navy uppercase tracking-wider">Email *</label>
                <input type="email" name="email" required maxLength={120} className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-[14px] focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20" placeholder="you@email.com" />
              </div>
              <div className="min-w-0">
                <label className="text-[12px] font-semibold text-navy uppercase tracking-wider">Phone *</label>
                <input type="tel" name="phone" required maxLength={15} className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-[14px] focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20" placeholder="+91 ..." />
              </div>
            </div>
            <div>
              <label className="text-[12px] font-semibold text-navy uppercase tracking-wider">City / Location</label>
              <input name="city" maxLength={80} className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-[14px] focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20" placeholder="Lucknow" />
            </div>
            <div>
              <label className="text-[12px] font-semibold text-navy uppercase tracking-wider">Cover Note</label>
              <textarea name="message" rows={3} maxLength={500} className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-[14px] focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20" placeholder="Tell us briefly why you're a great fit..." />
            </div>
            <div>
              <label className="text-[12px] font-semibold text-navy uppercase tracking-wider">Resume * (PDF/DOC, max 5MB)</label>
              <label className="mt-1.5 flex items-center gap-3 w-full max-w-full rounded-xl border-2 border-dashed border-slate-300 px-3 sm:px-4 py-3 cursor-pointer hover:border-orange hover:bg-orange/5 transition overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-orange/10 text-orange flex items-center justify-center shrink-0">
                  {fileName ? <CheckCircle2 className="w-5 h-5" /> : <Upload className="w-5 h-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-navy truncate">{fileName || "Click to upload resume"}</div>
                  <div className="text-[11px] text-text-2">PDF, DOC or DOCX</div>
                </div>
                {fileName && (
                  <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setFileName(""); }} className="shrink-0 w-7 h-7 rounded-full hover:bg-slate-100 flex items-center justify-center">
                    <X className="w-4 h-4 text-text-2" />
                  </button>
                )}
                <input type="file" name="resume" accept=".pdf,.doc,.docx" required className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} />
              </label>
            </div>
            <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-2 bg-orange text-white font-semibold rounded-full px-6 py-3 hover:bg-orange-2 transition disabled:opacity-60">
              {submitting ? "Submitting..." : <>Submit Application <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>
        </DialogContent>
      </Dialog>

      <SiteFooter />
    </div>
  );
}
