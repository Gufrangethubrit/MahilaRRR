import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { events, getEvent } from "@/data/events";
import { Calendar, Clock, MapPin, Phone, User, Tag, Users, Ticket, CheckCircle2, ArrowRight, Share2, Facebook, Twitter, Linkedin, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/events_/$slug")({
  loader: ({ params }) => {
    const ev = getEvent(params.slug);
    if (!ev) throw notFound();
    return { meta: { title: ev.title, desc: ev.desc, img: ev.img } };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.meta.title ?? "Event"} — Mahila Chetna Samiti` },
      { name: "description", content: loaderData?.meta.desc ?? "" },
      { property: "og:title", content: loaderData?.meta.title ?? "Event" },
      { property: "og:description", content: loaderData?.meta.desc ?? "" },
      { property: "og:image", content: loaderData?.meta.img ?? "" },
    ],
  }),
  component: EventDetailPage,
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex items-center justify-center text-navy">Event not found.</div>
  ),
  errorComponent: () => (
    <div className="min-h-[60vh] flex items-center justify-center text-navy">Something went wrong.</div>
  ),
});

function EventDetailPage() {
  const { slug } = Route.useParams();
  const ev = getEvent(slug)!;
  const related = events.filter((e) => e.slug !== slug).slice(0, 3);

  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative bg-[#0B1F3A] text-white overflow-hidden">
        <img src={ev.img} alt={ev.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/80 to-[#0B1F3A]/40" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <nav className="flex items-center gap-1.5 text-[13px] text-white/70 mb-4">
            <Link to="/" className="hover:text-orange-2">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/events" className="hover:text-orange-2">Events</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">{ev.title}</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-orange/20 border border-orange/40 rounded-full px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-orange-2 mb-4">
            <Tag className="w-3.5 h-3.5" /> {ev.category}
          </div>
          <h1 className="font-display font-extrabold text-[34px] sm:text-[46px] md:text-[54px] leading-[1.05] max-w-3xl">{ev.title}</h1>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-white/85">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-orange-2" />{ev.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange-2" />{ev.time}</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-2" />{ev.loc}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_360px] gap-10">
          <div>
            <div className="rounded-[20px] overflow-hidden shadow-soft">
              <img src={ev.img} alt={ev.title} className="w-full h-[320px] sm:h-[420px] object-cover" />
            </div>

            {/* About */}
            <div className="mt-10">
              <h2 className="font-display font-extrabold text-[26px] text-navy">About the Event</h2>
              <div className="mt-2 h-1 w-14 bg-orange rounded-full" />
              <div className="mt-5 space-y-4 text-text-2 leading-relaxed">
                {ev.about.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-10">
              <h2 className="font-display font-extrabold text-[24px] text-navy">Event Highlights</h2>
              <div className="mt-2 h-1 w-14 bg-orange rounded-full" />
              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                {ev.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 bg-white border border-border rounded-xl px-4 py-3">
                    <CheckCircle2 className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                    <span className="text-[14px] text-navy font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Agenda */}
            <div className="mt-10">
              <h2 className="font-display font-extrabold text-[24px] text-navy">Schedule & Agenda</h2>
              <div className="mt-2 h-1 w-14 bg-orange rounded-full" />
              <div className="mt-6 relative">
                <div className="absolute left-[18px] top-1 bottom-1 w-px bg-orange/30" />
                <div className="space-y-5">
                  {ev.agenda.map((a, i) => (
                    <div key={i} className="relative pl-12">
                      <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-gradient-to-br from-orange-2 to-orange text-white flex items-center justify-center shadow-md shadow-orange/30">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div className="bg-white border border-border rounded-xl p-4 shadow-soft">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <span className="text-[12px] font-bold uppercase tracking-wider text-orange">{a.time}</span>
                          <h3 className="font-display font-bold text-navy text-[16px]">{a.title}</h3>
                        </div>
                        <p className="text-text-2 text-[14px]">{a.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Speakers */}
            <div className="mt-10">
              <h2 className="font-display font-extrabold text-[24px] text-navy">Speakers & Experts</h2>
              <div className="mt-2 h-1 w-14 bg-orange rounded-full" />
              <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {ev.speakers.map((s) => (
                  <div key={s.name} className="bg-white border border-border rounded-xl p-5 text-center shadow-soft">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-navy to-navy-2 text-white flex items-center justify-center font-bold text-xl">
                      {s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <h3 className="mt-3 font-display font-bold text-navy">{s.name}</h3>
                    <p className="text-[12.5px] text-text-2 mt-1">{s.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-10 bg-white border border-border rounded-2xl p-5 flex flex-wrap items-center gap-4 justify-between shadow-soft">
              <div className="flex items-center gap-3">
                <Share2 className="w-5 h-5 text-orange" />
                <span className="font-display font-bold text-navy">Share this event</span>
              </div>
              <div className="flex items-center gap-2">
                {[
                  { I: Facebook, label: "Facebook" },
                  { I: Twitter, label: "Twitter" },
                  { I: Linkedin, label: "LinkedIn" },
                ].map(({ I, label }) => (
                  <button key={label} aria-label={label} className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-orange transition">
                    <I className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl shadow-soft border border-border overflow-hidden sticky top-24">
              <div className="bg-gradient-to-br from-navy to-navy-2 text-white p-6">
                <div className="text-[12px] uppercase tracking-wider text-orange-2 font-semibold">Event Details</div>
                <h3 className="font-display font-extrabold text-[22px] mt-1">{ev.title}</h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { I: Calendar, l: "Date", v: ev.date },
                  { I: Clock, l: "Time", v: ev.time },
                  { I: MapPin, l: "Venue", v: ev.address },
                  { I: User, l: "Organizer", v: ev.organizer },
                  { I: Phone, l: "Contact", v: ev.contact },
                  { I: Users, l: "Capacity", v: ev.seats },
                  { I: Ticket, l: "Entry Fee", v: ev.fee },
                ].map(({ I, l, v }) => (
                  <div key={l} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-orange/10 text-orange flex items-center justify-center shrink-0">
                      <I className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11.5px] uppercase tracking-wider text-text-2 font-semibold">{l}</div>
                      <div className="text-navy font-medium text-[14px]">{v}</div>
                    </div>
                  </div>
                ))}
                <Link to="/contact" className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-2 to-orange text-white px-5 py-3 font-semibold shadow-md shadow-orange/30 hover:-translate-y-0.5 transition">
                  Register Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/donate" className="w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy text-navy px-5 py-3 font-semibold hover:bg-navy hover:text-white transition">
                  Support This Event
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="py-14 bg-secondary/50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="eyebrow">More Events</div>
              <h2 className="section-title mt-1">You May Also Like</h2>
            </div>
            <Link to="/events" className="hidden sm:inline-flex items-center gap-2 text-orange font-semibold">All Events <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((e) => (
              <Link key={e.slug} to="/events/$slug" params={{ slug: e.slug }} className="card-soft card-soft-hover overflow-hidden block group">
                <div className="relative">
                  <img src={e.img} alt={e.title} className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-orange text-white rounded-xl px-3 py-2 text-center leading-none shadow-lg">
                    <div className="font-extrabold text-[20px] font-display">{e.day}</div>
                    <div className="text-[10px] uppercase mt-0.5">{e.mon}</div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-navy font-bold text-[16px] font-display group-hover:text-orange transition">{e.title}</h3>
                  <div className="mt-2 flex items-center gap-2 text-[12.5px] text-text-2"><MapPin className="w-3.5 h-3.5 text-orange" />{e.loc}</div>
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
