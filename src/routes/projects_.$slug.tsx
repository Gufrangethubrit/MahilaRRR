import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MapPin, Users, Calendar, Target, CheckCircle2, Heart, Phone, Share2 } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projects_/$slug")({
  head: ({ params }) => {
    const p = getProject(params.slug);
    const title = p ? `${p.title} — Mahila Chetna Samiti` : "Project — Mahila Chetna Samiti";
    const desc = p?.desc ?? "Project details";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: p?.img },
      ],
    };
  },
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectDetailPage,
  notFoundComponent: () => (
    <div className="bg-background min-h-screen">
      <SiteHeader />
      <div className="max-w-[800px] mx-auto px-6 py-24 text-center">
        <h1 className="font-display text-4xl font-extrabold text-navy">Project not found</h1>
        <p className="mt-3 text-text-2">The project you are looking for doesn't exist.</p>
        <Link to="/projects" className="mt-6 inline-flex items-center gap-2 bg-orange text-white font-bold rounded-[14px] px-6 py-3">
          Back to Projects <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
});

function ProjectDetailPage() {
  const { project: p } = Route.useLoaderData() as { project: import("@/data/projects").Project };
  const related = projects.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />
      <PageHero
        title={p.title}
        accent={p.tag}
        description={p.desc}
        image={p.img}
        crumbs={[{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: p.title }]}
      />

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="relative rounded-[20px] overflow-hidden shadow-soft">
              <img src={p.img} alt={p.title} className="w-full h-[420px] object-cover" />
              <span className="absolute top-4 left-4 bg-orange text-white text-[11px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wide">{p.tag}</span>
            </div>

            <div className="mt-8">
              <div className="eyebrow">About The Project</div>
              <h2 className="section-title mt-2">Building real change, one community at a time</h2>
              {p.about.map((para, i) => (
                <p key={i} className="mt-4 text-text-2 leading-relaxed text-[16px]">{para}</p>
              ))}
            </div>

            {/* Objectives */}
            <div className="mt-10">
              <h3 className="font-display font-extrabold text-navy text-[24px] flex items-center gap-2">
                <Target className="w-6 h-6 text-orange" /> Objectives
              </h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {p.objectives.map((o) => (
                  <li key={o} className="flex gap-3 bg-white card-soft p-4">
                    <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-text text-[14px]">{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities */}
            <div className="mt-10">
              <h3 className="font-display font-extrabold text-navy text-[24px]">Key Activities</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {p.activities.map((a) => (
                  <div key={a.title} className="card-soft p-5 card-soft-hover">
                    <div className="w-10 h-10 rounded-full bg-orange/10 text-orange flex items-center justify-center font-bold">★</div>
                    <h4 className="mt-3 font-display font-bold text-navy text-[17px]">{a.title}</h4>
                    <p className="mt-1 text-text-2 text-[14px] leading-relaxed">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div className="mt-10">
              <h3 className="font-display font-extrabold text-navy text-[24px] flex items-center gap-2">
                <MapPin className="w-6 h-6 text-orange" /> Project Locations
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.locations.map((l) => (
                  <span key={l} className="bg-white border border-border text-text font-medium px-4 py-2 rounded-full text-[13px]">{l}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="card-soft p-6 bg-navy text-white rounded-[20px]">
              <h4 className="font-display font-extrabold text-[20px]">Project Snapshot</h4>
              <div className="mt-4 space-y-3 text-[14px]">
                <div className="flex items-center gap-3"><Calendar className="w-4 h-4 text-orange" /><span className="opacity-80">Started:</span><span className="font-semibold ml-auto">{p.started}</span></div>
                <div className="flex items-center gap-3"><Users className="w-4 h-4 text-orange" /><span className="opacity-80">Impact:</span><span className="font-semibold ml-auto">{p.impact}</span></div>
                <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-orange" /><span className="opacity-80">Reach:</span><span className="font-semibold ml-auto">{p.loc}</span></div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {p.stats.map((s) => (
                  <div key={s.label} className="bg-white/10 rounded-[12px] p-3 text-center">
                    <div className="font-display font-extrabold text-orange text-[20px]">{s.value}</div>
                    <div className="text-[11px] opacity-80 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-soft p-6 bg-gradient-to-br from-orange to-orange-2 text-white">
              <Heart className="w-8 h-8" />
              <h4 className="mt-2 font-display font-extrabold text-[22px]">Support this project</h4>
              <p className="mt-1 text-white/90 text-[14px]">Your donation directly fuels impact on the ground.</p>
              <Link to="/" className="mt-4 inline-flex items-center gap-2 bg-white text-orange font-bold rounded-[12px] px-5 py-2.5 text-[14px]">Donate Now <ArrowRight className="w-4 h-4" /></Link>
            </div>

            <div className="card-soft p-6">
              <h4 className="font-display font-extrabold text-navy text-[18px]">Get Involved</h4>
              <p className="mt-2 text-text-2 text-[13px]">Volunteer, partner, or learn more about this project.</p>
              <a href="tel:+917373300737" className="mt-4 flex items-center gap-2 text-navy font-semibold text-[14px]"><Phone className="w-4 h-4 text-orange" /> +91 73733 00737</a>
              <button className="mt-3 w-full border border-border rounded-[12px] py-2.5 font-semibold text-[14px] text-navy flex items-center justify-center gap-2"><Share2 className="w-4 h-4" /> Share Project</button>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="eyebrow">Explore More</div>
            <h2 className="section-title mt-2">Other Projects</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} to="/projects/$slug" params={{ slug: r.slug }} className="card-soft card-soft-hover overflow-hidden group block">
                <div className="relative overflow-hidden">
                  <img src={r.img} alt={r.title} className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-500" />
                  <span className="absolute top-3 left-3 bg-orange text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase">{r.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-navy font-bold text-[18px] font-display">{r.title}</h3>
                  <p className="mt-2 text-text-2 text-[14px] leading-relaxed line-clamp-2">{r.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-orange font-semibold text-[14px]">View Details <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
