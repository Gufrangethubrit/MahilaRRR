import { createFileRoute, Link } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";
import cf1 from "@/assets/Causes/GirlChildEducation.png";
import cf2 from "@/assets/Causes/WomenHealth&Hygiene.png";
import cf3 from "@/assets/herosection/NariSashaktikaran.png";
import cf4 from "@/assets/Causes/Livelihood&Skills.png";
import { Heart, Target, Users, Clock, MapPin, Share2 } from "lucide-react";

export const Route = createFileRoute("/crowd-funding")({
  head: () => ({
    meta: [
      { title: "Crowd Funding Campaigns — Mahila Chetna Samiti" },
      { name: "description", content: "Back active crowd funding campaigns that transform lives of women and children across India." },
      { property: "og:title", content: "Crowd Funding Campaigns — Mahila Chetna Samiti" },
      { property: "og:description", content: "Back active campaigns transforming lives." },
    ],
  }),
  component: CrowdFundingPage,
});

const campaigns = [
  { title: "Educate 500 Girls in Rural UP", desc: "Scholarships, books and bridge classes for first-generation girl learners.", img: cf1, location: "Sitapur, UP", goal: 1500000, raised: 985000, donors: 412, days: 22, tag: "Education" },
  { title: "Mobile Health Clinic for Tribal Belt", desc: "A fully equipped van delivering maternal & child healthcare to remote villages.", img: cf2, location: "Sonbhadra, UP", goal: 2500000, raised: 1320000, donors: 287, days: 45, tag: "Health" },
  { title: "Safe Shelter for Rescued Women", desc: "Round-the-clock shelter, counselling and legal aid for survivors.", img: cf3, location: "Lucknow, UP", goal: 1800000, raised: 720000, donors: 198, days: 38, tag: "Safety" },
  { title: "Vocational Training for 1000 Women", desc: "Tailoring, beautician and digital literacy with assured market linkage.", img: cf4, location: "Barabanki, UP", goal: 1200000, raised: 1050000, donors: 534, days: 12, tag: "Livelihood" },
];

function fmt(n: number) {
  if (n >= 100000) return "₹" + (n / 100000).toFixed(1).replace(/\.0$/, "") + " L";
  return "₹" + n.toLocaleString("en-IN");
}

function CrowdFundingPage() {
  return (
    <>
      <SiteHeader />
      <PageHero title="Crowd Funding Campaigns" image={heroBg} crumbs={[{ label: "Home", to: "/" }, { label: "Crowd Funding" }]} />
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-7">
            {campaigns.map((c) => {
              const pct = Math.round((c.raised / c.goal) * 100);
              return (
                <article
                  key={c.title}
                  className="group bg-white rounded-[24px] overflow-hidden shadow-soft border border-border hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wide bg-orange text-white px-3 py-1.5 rounded-full shadow-lg">● Live</span>
                      <span className="text-[11px] font-bold uppercase tracking-wide bg-white/95 text-navy px-3 py-1.5 rounded-full">{c.tag}</span>
                    </div>
                    <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 text-navy flex items-center justify-center hover:bg-orange hover:text-white transition">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white text-sm">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{c.location}</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2 leading-snug group-hover:text-orange transition">{c.title}</h3>
                    <p className="text-navy/70 text-[15px] mb-5">{c.desc}</p>

                    <div className="mb-2 flex justify-between items-end text-sm">
                      <span className="font-bold text-navy text-lg">{fmt(c.raised)}</span>
                      <span className="text-navy/60">of {fmt(c.goal)}</span>
                    </div>
                    <div className="relative h-2.5 rounded-full bg-orange/10 overflow-hidden mb-5">
                      <div className="h-full bg-gradient-to-r from-orange-2 to-orange rounded-full" style={{ width: `${pct}%` }} />
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                      <div className="rounded-xl bg-cream py-3">
                        <Target className="w-4 h-4 mx-auto text-orange mb-1" />
                        <div className="text-sm font-bold text-navy">{pct}%</div>
                        <div className="text-[11px] text-navy/60">Funded</div>
                      </div>
                      <div className="rounded-xl bg-cream py-3">
                        <Users className="w-4 h-4 mx-auto text-orange mb-1" />
                        <div className="text-sm font-bold text-navy">{c.donors}</div>
                        <div className="text-[11px] text-navy/60">Donors</div>
                      </div>
                      <div className="rounded-xl bg-cream py-3">
                        <Clock className="w-4 h-4 mx-auto text-orange mb-1" />
                        <div className="text-sm font-bold text-navy">{c.days}</div>
                        <div className="text-[11px] text-navy/60">Days left</div>
                      </div>
                    </div>

                    <Link to="/donate" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-2 to-orange text-white px-6 py-3.5 font-semibold shadow-lg shadow-orange/30 hover:-translate-y-0.5 transition">
                      <Heart className="w-4 h-4 fill-white" /> Contribute Now
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
