import { createFileRoute, Link } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";
import { Heart, ArrowRight } from "lucide-react";
import { causes } from "@/data/causes";

export const Route = createFileRoute("/causes")({
  head: () => ({
    meta: [
      { title: "Causes We Support — Mahila Chetna Samiti" },
      { name: "description", content: "Explore the causes Mahila Chetna Samiti champions — women empowerment, education, health, safety and livelihood." },
      { property: "og:title", content: "Causes We Support — Mahila Chetna Samiti" },
      { property: "og:description", content: "Explore the causes we champion across India." },
    ],
  }),
  component: CausesPage,
});

function CausesPage() {
  return (
    <>
      <SiteHeader />
      <PageHero title="Causes We Support" description="Shiksha, Sahayata aur Suraksha ke liye hamaare causes — aapke dil ke kareeb cause chunein." image={heroBg} crumbs={[{ label: "Home", to: "/" }, { label: "Causes" }]} />
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {causes.map(({ I, img, title, desc, raised, beneficiaries, slug }) => (
              <article
                key={slug}
                className="group bg-white rounded-[24px] shadow-soft border border-border hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <Link to="/causes/$slug" params={{ slug }} className="relative h-52 overflow-hidden rounded-t-[24px] block">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/95 text-navy text-[11px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-lg">
                    {beneficiaries} lives
                  </div>
                </Link>

                <div className="relative px-6 pb-6 pt-6">
                  {/* Icon - floats over the image edge */}
                  <div className="absolute -top-7 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-2 to-orange text-white flex items-center justify-center shadow-xl shadow-orange/40 ring-4 ring-white">
                    <I className="w-7 h-7" strokeWidth={2.2} />
                  </div>

                  <div className="pt-6">
                    <Link to="/causes/$slug" params={{ slug }}>
                      <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-orange transition">{title}</h3>
                    </Link>
                    <p className="text-navy/70 text-[15px] mb-5">{desc}</p>

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
                      <Link to="/causes/$slug" params={{ slug }} className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center hover:bg-orange transition shrink-0" aria-label="Read more">
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
