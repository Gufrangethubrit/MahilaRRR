import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import { ArrowRight, MapPin, Quote, Heart, Share2 } from "lucide-react";
import { getStory, stories } from "@/data/stories";

export const Route = createFileRoute("/success-stories_/$slug")({
  loader: ({ params }) => {
    const s = getStory(params.slug);
    if (!s) throw notFound();
    return { slug: s.slug, name: s.name };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Story"} — Success Stories` },
      { name: "description", content: `Read the transformation story of ${loaderData?.name}.` },
    ],
  }),
  component: StoryDetail,
  notFoundComponent: () => (
    <>
      <SiteHeader />
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold text-navy mb-4">Story not found</h1>
        <Link to="/success-stories" className="text-orange font-semibold">← Back to stories</Link>
      </div>
      <SiteFooter />
    </>
  ),
});

function StoryDetail() {
  const { slug } = Route.useParams();
  const story = getStory(slug)!;
  const related = stories.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <SiteHeader />
      <PageHero
        title={story.name}
        image={story.img}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Success Stories", to: "/success-stories" },
          { label: story.name },
        ]}
      />

      <section className="py-16 bg-cream">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-soft border border-border overflow-hidden">
            <img src={story.img} alt={story.name} className="w-full h-80 object-cover" />
            <div className="p-8">
              <span className="inline-block bg-orange/10 text-orange text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {story.program}
              </span>
              <h2 className="text-3xl font-bold text-navy mb-2">{story.name}</h2>
              <div className="flex items-center gap-2 text-navy/60 mb-6">
                <MapPin className="w-4 h-4" /> {story.place}
                {story.age && <span>· Age {story.age}</span>}
              </div>

              <div className="bg-navy text-white p-6 rounded-xl mb-8 relative">
                <Quote className="w-10 h-10 text-orange mb-3" />
                <p className="text-lg italic leading-relaxed">"{story.quote}"</p>
              </div>

              <h3 className="text-xl font-bold text-navy mb-3">Her Journey</h3>
              <div className="space-y-4 text-navy/80 leading-relaxed">
                {story.story.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {story.impact.map((m) => (
                  <div key={m.label} className="bg-cream rounded-xl p-4 text-center border border-border">
                    <div className="text-2xl font-extrabold text-orange">{m.value}</div>
                    <div className="text-xs text-navy/70 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl shadow-soft border border-border p-6">
              <h4 className="font-bold text-navy mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-orange" /> Power More Stories
              </h4>
              <p className="text-sm text-navy/70 mb-4">
                Your donation helps women like {story.name.split(" ")[0]} transform their lives.
              </p>
              <Link to="/donate" className="block w-full text-center bg-orange text-white font-semibold py-3 rounded-lg hover:bg-orange/90">
                Donate Now
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-soft border border-border p-6">
              <h4 className="font-bold text-navy mb-3 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-orange" /> Share This Story
              </h4>
              <div className="flex gap-2 text-sm">
                {["Facebook", "Twitter", "WhatsApp"].map((p) => (
                  <button key={p} className="flex-1 border border-border rounded-lg py-2 hover:bg-cream text-navy">
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h3 className="text-2xl font-bold text-navy mb-6">More Stories</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((s) => (
              <Link
                key={s.slug}
                to="/success-stories/$slug"
                params={{ slug: s.slug }}
                className="group bg-cream rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all"
              >
                <img src={s.img} alt={s.name} className="w-full h-44 object-cover group-hover:scale-105 transition-transform" />
                <div className="p-5">
                  <div className="font-bold text-navy">{s.name}</div>
                  <div className="text-xs text-navy/60 mb-2">{s.place}</div>
                  <span className="text-orange text-sm font-semibold inline-flex items-center gap-1">
                    Read story <ArrowRight className="w-4 h-4" />
                  </span>
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
