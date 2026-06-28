import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Gem, ShieldCheck, Users, Heart, Award, HandHeart, CheckCircle2, Linkedin, Twitter, Mail, Flag, GraduationCap, HeartPulse, Sparkles, Smile } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import aboutGroup from "@/assets/about/about.png";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Mahila Chetna Samiti" },
      { name: "description", content: "Learn about Mahila Chetna Samiti — a registered NGO since 1997 working for women empowerment, education, healthcare and rural development." },
      { property: "og:title", content: "About Us — Mahila Chetna Samiti" },
      { property: "og:description", content: "A registered NGO empowering women and communities across India since 1997." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Target, title: "Our Mission", color: "#2E8B57", bg: "#E8F5EE", desc: "Har mahila aur samuday tak shiksha, sahayata aur suraksha pahunchana, taaki ve aatmanirbhar aur sashakt ban saken." },
  { icon: Eye, title: "Our Vision", color: "#FF6B00", bg: "#FFF1E5", desc: "Ek aisa samaj banana jahan har vyakti ko samaan avsar, suraksha aur behatar jeevan ki raah mile." },
  { icon: Gem, title: "Our Values", color: "#2563EB", bg: "#E6EEFB", desc: "Sashaktikaran, imaandaari, daya, transparency, accountability aur inclusiveness — har kaam mein." },
];

const team = [
  { name: "Sunita Sharma", role: "Founder & President", img: story1, accent: "#FF6B00" },
  { name: "Anita Verma", role: "Program Director", img: story2, accent: "#0B1F3A" },
  { name: "Rekha Singh", role: "Community Lead", img: story3, accent: "#FF8C00" },
  { name: "Priya Yadav", role: "Education Head", img: story1, accent: "#2E7D32" },
];

const milestones = [
  { year: "1997", title: "Establishment", desc: "Mahila Chetna Samiti registered as a non-profit.", icon: Flag, bg: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  { year: "2005", title: "Shiksha Abhiyan", desc: "Shiksha Setu launched, 100+ villages tak pahunch.", icon: GraduationCap, bg: "bg-orange-50 text-orange-600 border-orange-100" },
  { year: "2012", title: "Swasthya Suraksha", desc: "Free health camps covering 500+ villages.", icon: HeartPulse, bg: "bg-blue-50 text-blue-600 border-blue-100" },
  { year: "2019", title: "Kaushal Mission", desc: "Vocational training to 10,000+ mahilayein.", icon: Sparkles, bg: "bg-purple-50 text-purple-600 border-purple-100" },
  { year: "2024", title: "25,000+ Lives", desc: "25,000+ beneficiaries across India tak pahunch.", icon: Smile, bg: "bg-rose-50 text-rose-600 border-rose-100" },
];

function AboutPage() {
  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />
      <PageHero
        title="About"
        accent="Mahila Chetna Samiti"
        description="Nari Sashaktikaran, Shiksha, Sahayata aur Suraksha ke liye 1997 se samarpit ek registered NGO."
        image={heroBg}
        eyebrow="Who We Are"
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      {/* Story */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <img src={aboutGroup} alt="Our story" className="w-full h-[440px] object-cover" />
          </div>
          <div>
            <div className="eyebrow">Our Story</div>
            <h2 className="section-title mt-2">Driven by Purpose, Powered by People</h2>
            <p className="mt-5 text-text-2 leading-relaxed">
              Mahila Chetna Samiti ki shuruaat 1997 mein Lucknow mein chhote samaj sudhaarakon ke saath hui. Hamara vishwaas hai — jab mahila uthti hai, poora samaj uske saath uthta hai. Aaj hum toda India mein shiksha, sahayata, suraksha aur kanooni sahayata pahuncha rahe hain.
            </p>
            <p className="mt-4 text-text-2 leading-relaxed">
              Har program samuday ke saath aur samuday ke liye bana hai. Hamari team mahila samoohon, schools aur panchayaton ke saath milkar kaam karti hai taaki har initiative sachcha badlaav laaye.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {["Registered NGO since 1997", "12A & 80G Certified", "25,000+ Lives Impacted", "500+ Villages Reached"].map((t) => (
                <div key={t} className="flex items-start gap-2 text-[14px] text-navy font-medium">
                  <CheckCircle2 className="w-5 h-5 text-orange shrink-0 mt-0.5" />{t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-12 bg-secondary/50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center">
            <div className="eyebrow">What Drives Us</div>
            <h2 className="section-title mt-2">Humara Mission, Vision & Values</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="card-soft card-soft-hover p-7">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: p.bg, color: p.color }}>
                  <p.icon className="w-7 h-7" />
                </div>
                <h3 className="mt-5 text-[20px] font-bold text-navy font-display">{p.title}</h3>
                <p className="mt-2 text-text-2 leading-relaxed text-[14px]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30 relative overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <span className="eyebrow italic tracking-[0.25em]">OUR JOURNEY</span>
              <span className="block h-[2px] w-12 bg-orange mx-auto mt-1.5 rounded-full" />
            </div>
            <h2 className="section-title mt-3">Milestones That Shape Us</h2>
            <p className="mt-4 text-text-2 max-w-2xl mx-auto text-[15px]">
              Ek chhoti shuruaat se lekar poor desh tak — sashaktikaran, shiksha aur samajik badlaav ka safar.
            </p>
          </div>

          <div className="relative">
            {/* Center Line for Desktop, Left Line for Mobile */}
            <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[3px] bg-slate-200 -translate-x-1/2" />
            
            <div className="space-y-12 relative">
              {milestones.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <div key={m.year} className="relative flex flex-col md:flex-row items-stretch md:justify-between">
                    {/* Left block for desktop (only for even items) */}
                    <div className={`hidden md:flex md:w-[calc(50%-40px)] items-center justify-end ${idx % 2 === 0 ? "order-1" : "order-3 opacity-0 pointer-events-none"}`}>
                      {idx % 2 === 0 && (
                        <div className="w-full text-right pr-6">
                          <span className="text-[52px] font-extrabold text-slate-200/80 font-display select-none">{m.year}</span>
                        </div>
                      )}
                    </div>

                    {/* Timeline Dot with Icon */}
                    <div className="absolute left-[30px] md:left-1/2 w-12 h-12 rounded-full border-4 border-white shadow-md flex items-center justify-center -translate-x-1/2 z-20 order-2 bg-white transition-all duration-300 group-hover:scale-110">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${m.bg.split(' ')[0]} ${m.bg.split(' ')[1]}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Right block or Card for Mobile/Desktop */}
                    <div className={`pl-[70px] md:pl-0 md:w-[calc(50%-40px)] flex items-center order-3 ${idx % 2 === 1 ? "md:order-1" : "md:order-3"}`}>
                      <div className="w-full group bg-white p-7 rounded-[24px] border border-slate-100 hover:border-orange/20 shadow-[0_4px_20px_rgba(11,31,58,0.03)] hover:shadow-[0_20px_40px_rgba(11,31,58,0.08)] transition-all duration-500 hover:-translate-y-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-orange font-extrabold text-[22px] font-display">{m.year}</span>
                          <span className="text-[12px] font-bold text-slate-400 font-display uppercase tracking-wider md:hidden">Milestone</span>
                          {/* Desktop only left side year indicator counterpart */}
                          {idx % 2 === 1 && (
                            <span className="hidden md:inline-block text-[12px] font-bold text-slate-400 font-display uppercase tracking-wider">Milestone</span>
                          )}
                        </div>
                        <h3 className="text-navy font-bold text-[19px] group-hover:text-orange transition-colors duration-300">{m.title}</h3>
                        <p className="text-text-2 text-[14px] leading-relaxed mt-2">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-block relative">
              <span className="eyebrow italic tracking-[0.25em]">TEAM MEMBER</span>
              <span className="block h-[2px] w-12 bg-orange mx-auto mt-1.5 rounded-full" />
            </div>
            <h2 className="section-title mt-3">
              Our <span className="text-orange">Team Member</span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {team.map((t) => (
              <div key={t.name} className="group flex flex-col h-full bg-white rounded-[24px] overflow-hidden border border-slate-100 hover:border-orange/20 shadow-[0_4px_20px_rgba(11,31,58,0.03)] hover:shadow-[0_20px_40px_rgba(11,31,58,0.08)] transition-all duration-500 hover:-translate-y-2">
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
                      <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF6B00] backdrop-blur-md flex items-center justify-center text-white transition-colors duration-300">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF6B00] backdrop-blur-md flex items-center justify-center text-white transition-colors duration-300">
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF6B00] backdrop-blur-md flex items-center justify-center text-white transition-colors duration-300">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Accent Corner Badge */}
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-[#0B1F3A] to-[#102E5A] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-extrabold text-[26px] sm:text-[30px]">Be Part of the Badlaav</h3>
            <p className="text-white/75 mt-2">Volunteer ya member banein aur majboot samuday banane mein madad karein.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/donate" className="btn-orange"><Heart className="w-4 h-4" /> Donate Now</Link>
            <Link to="/volunteer" className="bg-white text-navy rounded-[14px] px-5 py-3 font-semibold inline-flex items-center gap-2 hover:bg-secondary"><HandHeart className="w-4 h-4 text-orange" /> Become Volunteer</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
