import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Calendar, User, ArrowRight, ArrowLeft, Tag, Share2,
  Facebook, Twitter, Linkedin, Clock, MessageCircle, Eye,
  Heart, Bookmark, Quote, CheckCircle2, Mail,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { blogs, getBlogBySlug } from "@/data/blogs";

export const Route = createFileRoute("/blogs/$slug")({
  head: ({ params }) => {
    const b = getBlogBySlug(params.slug);
    const title = b ? `${b.title} — MCS Blog` : "Blog — Mahila Chetna Samiti";
    const desc = b?.excerpt ?? "Read stories from the field.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(b ? [{ property: "og:image", content: b.img }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="bg-background text-text font-sans">
      <SiteHeader />
      <div className="max-w-[900px] mx-auto px-6 py-24 text-center">
        <h1 className="section-title">Blog not found</h1>
        <p className="text-text-2 mt-3">The article you're looking for doesn't exist.</p>
        <Link to="/blogs" className="btn-primary inline-flex mt-6">Back to Blogs</Link>
      </div>
      <SiteFooter />
    </div>
  ),
  component: BlogDetailPage,
  loader: ({ params }) => {
    const blog = getBlogBySlug(params.slug);
    if (!blog) throw notFound();
    return { blog };
  },
});

function BlogDetailPage() {
  const { blog } = Route.useLoaderData();
  const related = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3);
  const readTime = Math.max(3, Math.round(blog.content.join(" ").split(" ").length / 200));
  const categories = Array.from(new Set(blogs.map((b) => b.tag)));

  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />

      {/* HERO */}
      <section className="relative bg-navy text-white overflow-hidden">
        <img src={blog.img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/80 to-navy" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-orange/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-orange/10 blur-3xl" />

        <div className="relative max-w-[1180px] mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <nav className="text-[13px] text-white/70 mb-6 flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-orange">Home</Link><span>/</span>
            <Link to="/blogs" className="hover:text-orange">Blogs</Link><span>/</span>
            <span className="text-orange">{blog.tag}</span>
          </nav>

          <span className="inline-flex items-center gap-2 bg-orange text-white text-[12px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md">
            <Tag className="w-3.5 h-3.5" />{blog.tag}
          </span>

          <h1 className="font-display font-extrabold text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.15] mt-5 max-w-4xl">
            {blog.title}
          </h1>

          <p className="mt-5 text-white/85 text-[17px] max-w-3xl leading-relaxed">{blog.excerpt}</p>

          <div className="mt-7 flex flex-wrap items-center gap-5 text-[14px] text-white/80">
            <span className="flex items-center gap-2"><User className="w-4 h-4 text-orange" /><b className="text-white">{blog.author}</b></span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-orange" />{blog.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange" />{readTime} min read</span>
            <span className="flex items-center gap-2"><Eye className="w-4 h-4 text-orange" />2.4k views</span>
            <span className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-orange" />12 comments</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_340px] gap-10">
          <article>
            {/* Featured image */}
            <div className="rounded-[24px] overflow-hidden shadow-soft border border-slate-100">
              <img src={blog.img} alt={blog.title} className="w-full h-[300px] sm:h-[460px] object-cover" />
            </div>

            {/* Action bar */}
            <div className="mt-6 flex items-center justify-between flex-wrap gap-4 border-y border-slate-200 py-4">
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 text-[14px] text-text-2 hover:text-orange transition">
                  <Heart className="w-4 h-4" /> 248 Likes
                </button>
                <button className="flex items-center gap-2 text-[14px] text-text-2 hover:text-orange transition">
                  <Bookmark className="w-4 h-4" /> Save
                </button>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-text-2">
                <Share2 className="w-4 h-4" /> Share:
                <a href="#" className="w-9 h-9 rounded-full bg-navy text-white grid place-items-center hover:bg-orange transition"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-9 h-9 rounded-full bg-navy text-white grid place-items-center hover:bg-orange transition"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="w-9 h-9 rounded-full bg-navy text-white grid place-items-center hover:bg-orange transition"><Linkedin className="w-4 h-4" /></a>
              </div>
            </div>

            {/* Article body */}
            <div className="mt-10">
              <p className="text-[20px] sm:text-[22px] leading-[1.55] text-navy font-display font-semibold border-l-4 border-orange pl-5">
                {blog.content[0]}
              </p>

              <div className="mt-8 space-y-6 text-[17px] text-text-2 leading-[1.85]">
                {blog.content.slice(1).map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Pull quote */}
              <figure className="my-10 relative bg-orange/5 border-l-4 border-orange rounded-r-2xl p-7">
                <Quote className="w-10 h-10 text-orange/40 absolute top-4 right-5" />
                <blockquote className="text-[18px] sm:text-[20px] font-display font-semibold text-navy italic leading-snug">
                  "When a woman earns her first rupee, the conversation at home changes forever — and so does the future of her family."
                </blockquote>
                <figcaption className="mt-3 text-[13px] font-semibold text-orange uppercase tracking-wider">— {blog.author}</figcaption>
              </figure>

              {/* Highlights */}
              {blog.highlights && (
                <div className="mt-10 rounded-2xl p-7 bg-gradient-to-br from-navy to-[#0a1830] text-white shadow-soft">
                  <div className="eyebrow text-orange">Impact at a glance</div>
                  <h3 className="font-display font-bold text-[22px] mt-2">Key Highlights</h3>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                    {blog.highlights.map((h: string) => (
                      <li key={h} className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                        <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                        <span className="text-[15px]">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-6">
                <span className="text-[13px] font-semibold text-navy">Tags:</span>
                {[blog.tag, "MCS", "Empowerment", "India", "NGO"].map((t) => (
                  <span key={t} className="text-[12px] px-3 py-1.5 rounded-full bg-slate-100 text-text hover:bg-orange hover:text-white cursor-pointer transition">#{t}</span>
                ))}
              </div>

              {/* Author card */}
              <div className="mt-10 card-soft p-6 flex gap-5 items-start">
                <div className="w-20 h-20 rounded-full bg-orange grid place-items-center text-white font-bold text-[22px] font-display flex-shrink-0">
                  {blog.author.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-wider text-orange font-bold">Written by</div>
                  <div className="font-display font-bold text-navy text-[20px]">{blog.author}</div>
                  <p className="text-text-2 text-[14px] mt-2 leading-relaxed">
                    Part of the Mahila Chetna Samiti field team — documenting stories of change from villages across Uttar Pradesh and beyond.
                  </p>
                  <div className="flex gap-2 mt-3">
                    <a href="#" className="w-8 h-8 rounded-full bg-navy/5 text-navy grid place-items-center hover:bg-orange hover:text-white transition"><Facebook className="w-3.5 h-3.5" /></a>
                    <a href="#" className="w-8 h-8 rounded-full bg-navy/5 text-navy grid place-items-center hover:bg-orange hover:text-white transition"><Twitter className="w-3.5 h-3.5" /></a>
                    <a href="#" className="w-8 h-8 rounded-full bg-navy/5 text-navy grid place-items-center hover:bg-orange hover:text-white transition"><Linkedin className="w-3.5 h-3.5" /></a>
                  </div>
                </div>
              </div>

              {/* Prev / Next */}
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <Link to="/blogs" className="card-soft p-5 hover:border-orange border border-transparent transition group">
                  <div className="text-[12px] text-text-2 flex items-center gap-1"><ArrowLeft className="w-3.5 h-3.5" /> Previous</div>
                  <div className="font-display font-bold text-navy mt-1 group-hover:text-orange line-clamp-2">All Articles</div>
                </Link>
                <Link to="/blogs/$slug" params={{ slug: related[0].slug }} className="card-soft p-5 hover:border-orange border border-transparent transition group sm:text-right">
                  <div className="text-[12px] text-text-2 flex items-center gap-1 sm:justify-end">Next <ArrowRight className="w-3.5 h-3.5" /></div>
                  <div className="font-display font-bold text-navy mt-1 group-hover:text-orange line-clamp-2">{related[0].title}</div>
                </Link>
              </div>

              {/* Comment form */}
              <div className="mt-12">
                <h3 className="font-display font-bold text-navy text-[22px]">Leave a Comment</h3>
                <p className="text-text-2 text-[14px] mt-1">Your email address will not be published.</p>
                <form className="mt-5 grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-lg border border-slate-200 focus:border-orange outline-none text-[14px]" />
                  <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-lg border border-slate-200 focus:border-orange outline-none text-[14px]" />
                  <textarea rows={5} placeholder="Write your comment..." className="sm:col-span-2 px-4 py-3 rounded-lg border border-slate-200 focus:border-orange outline-none text-[14px]" />
                  <button type="button" className="btn-primary sm:col-span-2 justify-self-start">Post Comment</button>
                </form>
              </div>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="card-soft p-6 bg-gradient-to-br from-navy to-[#0a1830] text-white">
              <h3 className="font-display font-bold text-[20px]">Support Our Mission</h3>
              <p className="text-white/80 text-[14px] mt-2">Your contribution helps us reach more women and children every day.</p>
              <Link to="/" className="btn-primary inline-flex mt-4">Donate Now</Link>
            </div>

            <div className="card-soft p-6">
              <h3 className="font-display font-bold text-navy text-[18px]">Categories</h3>
              <ul className="mt-3 space-y-2">
                {categories.map((t) => (
                  <li key={t} className="flex items-center justify-between text-[14px] text-text-2 hover:text-orange cursor-pointer transition border-b border-slate-100 pb-2 last:border-0">
                    <span>{t}</span>
                    <span className="text-[11px] bg-orange/10 text-orange font-bold px-2 py-0.5 rounded-full">{blogs.filter(b => b.tag === t).length}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-soft p-6">
              <h3 className="font-display font-bold text-navy text-[18px]">Recent Posts</h3>
              <ul className="mt-4 space-y-4">
                {blogs.slice(0, 4).map((b) => (
                  <li key={b.slug}>
                    <Link to="/blogs/$slug" params={{ slug: b.slug }} className="flex gap-3 group">
                      <img src={b.img} alt={b.title} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
                      <div>
                        <div className="text-[11px] text-text-2">{b.date}</div>
                        <div className="text-[13px] font-semibold text-navy leading-snug group-hover:text-orange line-clamp-2">{b.title}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-soft p-6 text-center bg-orange/5 border border-orange/20">
              <Mail className="w-8 h-8 text-orange mx-auto" />
              <h3 className="font-display font-bold text-navy text-[18px] mt-3">Subscribe to Newsletter</h3>
              <p className="text-text-2 text-[13px] mt-1">Get the latest stories in your inbox.</p>
              <input type="email" placeholder="Your email" className="mt-3 w-full px-3 py-2.5 rounded-lg border border-slate-200 focus:border-orange outline-none text-[13px]" />
              <button className="btn-primary w-full justify-center mt-2">Subscribe</button>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-16 bg-surface-2">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="eyebrow">Keep Reading</div>
            <h2 className="section-title mt-2">Related Stories</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((b) => (
              <Link key={b.slug} to="/blogs/$slug" params={{ slug: b.slug }} className="card-soft card-soft-hover overflow-hidden group block">
                <div className="relative overflow-hidden">
                  <img src={b.img} alt={b.title} className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-500" />
                  <span className="absolute top-3 left-3 bg-orange text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase">{b.tag}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[12px] text-text-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-orange" />{b.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-orange" />{b.author}</span>
                  </div>
                  <h3 className="mt-2 text-navy font-bold text-[17px] font-display leading-snug line-clamp-2 group-hover:text-orange transition">{b.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-orange font-semibold text-[14px]">Read More <ArrowRight className="w-4 h-4" /></span>
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
