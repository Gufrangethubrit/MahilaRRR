import { createFileRoute, Link } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";
import { ArrowRight, Quote, MapPin } from "lucide-react";
import { stories } from "@/data/stories";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Mahila Chetna Samiti" },
      { name: "description", content: "Real stories of women and girls whose lives were transformed through Mahila Chetna Samiti." },
      { property: "og:title", content: "Success Stories — Mahila Chetna Samiti" },
      { property: "og:description", content: "Real stories of transformation." },
    ],
  }),
  component: SuccessStoriesPage,
});

function SuccessStoriesPage() {
  return (
    <>
      <SiteHeader />
      <PageHero title="Success Stories" image={heroBg} crumbs={[{ label: "Home", to: "/" }, { label: "Success Stories" }]} />
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((s) => (
              <Link
                key={s.slug}
                to="/success-stories/$slug"
                params={{ slug: s.slug }}
                className="group bg-white rounded-2xl shadow-soft overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                  <span className="absolute top-3 left-3 bg-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {s.program}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <Quote className="w-6 h-6 text-orange mb-2" />
                  <p className="text-sm text-navy/75 leading-relaxed line-clamp-3 mb-4">"{s.quote}"</p>
                  <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <div className="text-base font-bold text-navy">{s.name}</div>
                      <div className="text-xs text-navy/60 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {s.place}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-orange text-sm font-semibold group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
