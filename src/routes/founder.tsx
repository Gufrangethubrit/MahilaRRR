import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, Award, HandHeart, Sparkles, Mail, Linkedin, Heart } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";
import founderImg from "@/assets/founder-portrait.jpg";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Founder — Mahila Chetna Samiti" },
      { name: "description", content: "Meet the founder of Mahila Chetna Samiti — a lifelong changemaker working for women empowerment, education, and rural upliftment since 1997." },
      { property: "og:title", content: "Founder — Mahila Chetna Samiti" },
      { property: "og:description", content: "The story behind Mahila Chetna Samiti and the founder's mission to empower women across India." },
    ],
  }),
  component: FounderPage,
});

const highlights = [
  { icon: Award, label: "27+ Years", desc: "Of dedicated service to women & rural communities" },
  { icon: HandHeart, label: "25,000+ Lives", desc: "Touched through grassroots programs" },
  { icon: Sparkles, label: "500+ Villages", desc: "Reached across Uttar Pradesh & beyond" },
];

const journey = [
  { year: "1997", title: "The Beginning", desc: "Registered Mahila Chetna Samiti with a vision to uplift women in rural Uttar Pradesh." },
  { year: "2005", title: "Education First", desc: "Launched Shiksha Setu, taking literacy and skill training to 100+ villages." },
  { year: "2014", title: "National Recognition", desc: "Honoured by state and national bodies for women empowerment initiatives." },
  { year: "2024", title: "A Movement", desc: "Today MCS reaches 25,000+ women and girls every single year." },
];

function FounderPage() {
  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />
      <PageHero
        title="Meet Our Founder"
        description="Ek aajeevan samaj sudhaarak jinka vishwaas Shiksha, Sahayata aur Suraksha ke andolan ki shuruaat bana."
        image={heroBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us", to: "/about" }, { label: "Founder" }]}
      />

      {/* Profile */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img src={founderImg} alt="Founder portrait" width={1024} height={1280} loading="lazy" className="w-full h-[520px] object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent">
                <div className="text-white">
                  <div className="text-[12px] uppercase tracking-[0.2em] text-orange-2 font-semibold">Founder & President</div>
                  <div className="text-2xl font-display font-extrabold mt-1">Smt. Sunita Sharma</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-orange/20 blur-2xl -z-10" />
            <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-navy/10 blur-3xl -z-10" />

            {/* signature card */}
            <div className="hidden md:flex absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl px-5 py-4 items-center gap-3 ring-1 ring-black/5">
              <div className="w-11 h-11 rounded-full bg-orange/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-orange fill-orange" />
              </div>
              <div>
                <div className="text-[12px] text-text-muted">Serving Since</div>
                <div className="text-navy font-bold text-lg leading-none">1997</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="text-orange font-semibold uppercase tracking-wider text-[12px]">A Word From The Founder</div>
            <h2 className="font-display font-extrabold text-navy text-[30px] sm:text-[40px] leading-[1.1] mt-2">
              "When one woman rises, an entire community rises with her."
            </h2>
            <div className="mt-5 relative pl-6">
              <Quote className="absolute -left-1 top-0 w-8 h-8 text-orange/40" />
              <p className="text-text-muted leading-relaxed">
                Born and raised in the heart of Uttar Pradesh, I grew up witnessing the silent struggles of women around me — denied
                education, denied opportunity, denied voice. In 1997, with a handful of like-minded volunteers, we started
                <span className="text-navy font-semibold"> Mahila Chetna Samiti</span> with one simple belief: every woman deserves
                the chance to write her own story.
              </p>
              <p className="text-text-muted leading-relaxed mt-4">
                Over two decades later, that belief has grown into a movement reaching across hundreds of villages — bringing
                education, livelihoods, healthcare and most importantly, dignity. But our work is far from done. I invite you to
                walk this journey with us.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-2 to-orange text-white font-semibold px-6 py-3 shadow-lg shadow-orange/30 hover:-translate-y-0.5 transition">
                <Heart className="w-4 h-4 fill-white" /> Support Our Mission
              </Link>
              <a href="mailto:info@mahilachetnasamiti.org" className="inline-flex items-center gap-2 rounded-full bg-white border border-border text-navy font-semibold px-6 py-3 hover:border-orange hover:text-orange transition">
                <Mail className="w-4 h-4" /> Write to Founder
              </a>
              <a href="#" aria-label="LinkedIn" className="w-11 h-11 rounded-full bg-white border border-border flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-14 bg-[#F7F4EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-5">
          {highlights.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition border border-border/60">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange">
                <Icon className="w-6 h-6" />
              </div>
              <div className="mt-4 font-display font-extrabold text-navy text-2xl">{label}</div>
              <div className="text-text-muted text-[14px] mt-1">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-orange font-semibold uppercase tracking-wider text-[12px]">The Journey</div>
            <h2 className="font-display font-extrabold text-navy text-[30px] sm:text-[40px] mt-2">Milestones of a Lifetime</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange/10 via-orange/40 to-orange/10 md:-translate-x-1/2" />
            <div className="space-y-8 md:space-y-14">
              {journey.map((j, i) => {
                const left = i % 2 === 0;
                return (
                  <div key={j.year} className="relative md:grid md:grid-cols-2 md:gap-10 items-center">
                    {/* node */}
                    <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-5 h-5 rounded-full bg-white border-4 border-orange shadow-[0_0_0_6px_rgba(255,107,0,0.12)] z-10" />

                    {/* card */}
                    <div className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right md:col-start-1" : "md:pl-12 md:col-start-2"}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition border border-border/60 hover:-translate-y-0.5">
                        <div className={`flex items-center gap-2 ${left ? "md:justify-end" : ""}`}>
                          <span className="inline-block bg-orange/10 text-orange font-bold px-3 py-1 rounded-full text-[12px] tracking-wider">{j.year}</span>
                        </div>
                        <h3 className="font-display font-bold text-navy text-xl mt-3">{j.title}</h3>
                        <p className="text-text-muted text-[14px] mt-2 leading-relaxed">{j.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
