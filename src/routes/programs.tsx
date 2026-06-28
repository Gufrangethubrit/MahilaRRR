import { createFileRoute } from "@tanstack/react-router";
import { HandHeart, BookOpen, HeartPulse, GraduationCap, Leaf, Scale, ArrowRight, Users, Home as HomeIcon, Award } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";
import progFeatured1 from "@/assets/Our Programs/WomenEmpowermentProgram.png";
import progFeatured2 from "@/assets/Our Programs/EducationSupportInitiative.png";
import progFeatured3 from "@/assets/Our Programs/HealthSafetyCampaign.png";
import story1 from "@/assets/story-1.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — Mahila Chetna Samiti" },
      { name: "description", content: "Explore our programs in women empowerment, education, health, skill development, environment and legal awareness." },
      { property: "og:title", content: "Our Programs — Mahila Chetna Samiti" },
      { property: "og:description", content: "Programs creating real change for women, children and communities." },
    ],
  }),
  component: ProgramsPage,
});

const focus = [
  { icon: HandHeart, title: "Nari Sashaktikaran", desc: "Mahilaon mein aatmvishwas, hunar aur avsar badhana.", color: "#EC4899", bg: "#FCE7F3" },
  { icon: BookOpen, title: "Shiksha (Education)", desc: "Grameen bachhon ko gunvatta shiksha aur sansaadhan pahunchana.", color: "#16A34A", bg: "#E8F7EE" },
  { icon: HeartPulse, title: "Sahayata (Support)", desc: "Swasthya, poshan aur suraksha ke liye sahayata karyakram.", color: "#7C3AED", bg: "#F1EAFE" },
  { icon: GraduationCap, title: "Suraksha (Safety)", desc: "Mahilaon aur bachhon ke liye suraksha aur kanooni adhikar.", color: "#FF6B00", bg: "#FFF1E5" },
  { icon: Leaf, title: "Environment", desc: "Saaf, hara aur sustainable environment ke liye kaam.", color: "#2563EB", bg: "#E6EEFB" },
  { icon: Scale, title: "Legal Rights", desc: "Samuday ko kanooni adhikaron aur nyaay ke baare mein shikshit karna.", color: "#0F766E", bg: "#CCFBF1" },
];

const featured = [
  { img: progFeatured1, title: "Nari Sashaktikaran Karyakram", desc: "Mahilaon mein netritva, aatmvishwas aur hunar badhane ke liye training aur mentorship.", stats: [["1200+", "Women Trained"], ["15+", "Batches"], ["8", "States"]], color: "#EC4899" },
  { img: progFeatured2, title: "Shiksha Setu", desc: "Grameen bachhon ki shiksha aur learning resources tak pahunch badhana.", stats: [["5000+", "Children"], ["50+", "Schools"], ["20+", "Villages"]], color: "#16A34A" },
  { img: progFeatured3, title: "Swasthya Suraksha", desc: "Health camps aur awareness programs ke through swasthya samuday banana.", stats: [["8000+", "People"], ["100+", "Camps"], ["25+", "Villages"]], color: "#7C3AED" },
];

const impact = [
  { icon: Users, num: "25,000+", label: "Lives Impacted", color: "#EC4899", bg: "#FCE7F3" },
  { icon: BookOpen, num: "100+", label: "Programs Running", color: "#16A34A", bg: "#E8F7EE" },
  { icon: HomeIcon, num: "500+", label: "Villages Reached", color: "#FF6B00", bg: "#FFF1E5" },
  { icon: Award, num: "100+", label: "Active Volunteers", color: "#2563EB", bg: "#E6EEFB" },
];

function ProgramsPage() {
  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />
      <PageHero
        title="Our Programs"
        accent="Empowering Lives."
        description="Shiksha, Sahayata aur Suraksha ke liye bane hamaare karyakram jo samuday mein sachcha badlaav laate hain."
        image={heroBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Programs" }]}
      />

      {/* Focus areas */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="eyebrow">What We Do</div>
            <h2 className="section-title mt-2">Hamare Focus Areas</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {focus.map((f) => (
              <div key={f.title} className="card-soft card-soft-hover p-7 text-center">
                <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center" style={{ background: f.bg, color: f.color }}>
                  <f.icon className="w-8 h-8" />
                </div>
                <h3 className="mt-5 text-[18px] font-bold text-navy font-display">{f.title}</h3>
                <p className="mt-2 text-text-2 text-[14px] leading-relaxed">{f.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold" style={{ color: f.color }}>
                  Explore Programs <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="eyebrow">Highlights</div>
            <h2 className="section-title mt-2">Khaas Karyakram</h2>
          </div>
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <div key={p.title} className="card-soft card-soft-hover overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-[220px] object-cover" />
                <div className="p-6">
                  <h3 className="text-navy font-bold text-[18px] font-display">{p.title}</h3>
                  <p className="mt-2 text-text-2 text-[14px] leading-relaxed">{p.desc}</p>
                  <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                    {p.stats.map(([n, l]) => (
                      <div key={l}>
                        <div className="font-extrabold text-navy font-display">{n}</div>
                        <div className="text-[11px] text-text-2 mt-0.5">{l}</div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 w-full border-2 rounded-[12px] py-2.5 font-semibold text-[14px] hover:bg-secondary transition" style={{ borderColor: p.color, color: p.color }}>
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="rounded-[24px] bg-gradient-to-r from-[#0B1F3A] to-[#102E5A] text-white p-8 sm:p-12 grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
            <div>
              <h3 className="font-display font-extrabold text-[28px]">Milkar Badlaav Laana</h3>
              <p className="text-white/75 mt-2 text-[14px]">Har program badlaav ki lehrein paida karta hai jo jeevan aur samuday ko badalta hai.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {impact.map((s) => (
                <div key={s.label} className="bg-white text-navy rounded-2xl p-5 text-center">
                  <div className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center" style={{ background: s.bg, color: s.color }}>
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div className="mt-3 font-extrabold text-[22px] font-display">{s.num}</div>
                  <div className="text-text-2 text-[12px]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="eyebrow">Real Voices</div>
            <h2 className="section-title mt-2">Success Stories</h2>
          </div>
          <div className="mt-10 grid lg:grid-cols-[2fr_1fr] gap-6 items-stretch">
            <div className="card-soft p-8 flex gap-5 items-center">
              <img src={story1} alt="Sunita Devi" className="w-24 h-24 rounded-full object-cover ring-4 ring-orange/20" />
              <div>
                <p className="text-text-2 italic leading-relaxed">"Joining the leadership program changed my life. Today, I run my own tailoring unit and support my family with pride and confidence."</p>
                <div className="mt-3 font-bold text-navy">— Sunita Devi</div>
                <div className="text-[12px] text-text-2">Program Beneficiary, Rajasthan</div>
              </div>
            </div>
            <div className="rounded-[20px] bg-[#0B1F3A] text-white p-7 flex flex-col justify-center">
              <h4 className="font-display font-bold text-[20px]">Share Your Story</h4>
              <p className="text-white/75 text-[13px] mt-2">Your story can inspire and bring hope to many others.</p>
              <button className="btn-orange mt-5 w-fit">Share Your Story →</button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
