import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Users } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — Mahila Chetna Samiti" },
      { name: "description", content: "Explore Saksham, Shiksha Setu, Swasthya Suraksha and Gram Vikas projects transforming communities across India." },
      { property: "og:title", content: "Our Projects — Mahila Chetna Samiti" },
      { property: "og:description", content: "Impact-driven projects across India." },
    ],
  }),
  component: ProjectsPage,
});


function ProjectsPage() {
  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />
      <PageHero
        title="Our Projects"
        accent="That Make An Impact"
        description="Shiksha, Sahayata aur Suraksha ke hamaare project jo samuday ko badal rahe hain aur aatmanirbharta badha rahe hain."
        image={heroBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
      />

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="eyebrow">All Initiatives</div>
            <h2 className="section-title mt-2">Jeevan Badalne Wale Project</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Link key={p.slug} to="/projects/$slug" params={{ slug: p.slug }} className="card-soft card-soft-hover overflow-hidden group block">
                <div className="relative overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-[210px] object-cover group-hover:scale-105 transition duration-500" />
                  <span className="absolute top-3 left-3 bg-orange text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase">{p.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-navy font-bold text-[18px] font-display">{p.title}</h3>
                  <p className="mt-2 text-text-2 text-[14px] leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex items-center gap-4 text-[12px] text-text-2 border-t border-border pt-4">
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-orange" />{p.impact}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-orange" />{p.loc}</span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-orange font-semibold text-[14px]">Learn More <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-orange to-orange-2 text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-extrabold text-[26px]">Support a Project</h3>
            <p className="text-white/90 mt-2">Your contribution funds real, measurable change.</p>
          </div>
          <button className="bg-white text-orange font-bold rounded-[14px] px-6 py-3">Donate Now →</button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
