import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ArrowRight, User } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";
import { blogs } from "@/data/blogs";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Blogs — Mahila Chetna Samiti" },
      { name: "description", content: "Stories, insights and updates from the field — read the latest blogs from Mahila Chetna Samiti." },
      { property: "og:title", content: "Blogs — Mahila Chetna Samiti" },
      { property: "og:description", content: "Stories from the field." },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />
      <PageHero
        title="Our Blogs"
        accent="Stories From The Field"
        description="Insights, updates and stories from our programs and the communities we serve."
        image={heroBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Blogs" }]}
      />

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="eyebrow">Latest Articles</div>
            <h2 className="section-title mt-2">Read Our Latest Stories</h2>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((b) => (
              <Link
                key={b.slug}
                to="/blogs/$slug"
                params={{ slug: b.slug }}
                className="card-soft card-soft-hover overflow-hidden group block"
              >
                <div className="relative overflow-hidden">
                  <img src={b.img} alt={b.title} className="w-full h-[210px] object-cover group-hover:scale-105 transition duration-500" />
                  <span className="absolute top-3 left-3 bg-orange text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase">{b.tag}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[12px] text-text-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-orange" />{b.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-orange" />{b.author}</span>
                  </div>
                  <h3 className="mt-3 text-navy font-bold text-[18px] font-display leading-snug group-hover:text-orange transition">{b.title}</h3>
                  <p className="mt-2 text-text-2 text-[14px] leading-relaxed line-clamp-3">{b.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-orange font-semibold text-[14px]">Read More <ArrowRight className="w-4 h-4" /></span>
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
