import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, MapPin, ArrowRight, Megaphone } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";
import program1 from "@/assets/program-1.jpg";
import program2 from "@/assets/program-2.jpg";
import program3 from "@/assets/program-3.jpg";
import program4 from "@/assets/program-4.jpg";
import { events } from "@/data/events";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Mahila Chetna Samiti" },
      { name: "description", content: "Stay updated with our upcoming events, workshops, awareness programs and community activities." },
      { property: "og:title", content: "Events — Mahila Chetna Samiti" },
      { property: "og:description", content: "Upcoming and past events." },
    ],
  }),
  component: EventsPage,
});

const past = [
  { img: program1, title: "Self Help Group Meeting", date: "10 April 2026" },
  { img: program2, title: "Health Awareness Camp", date: "22 March 2026" },
  { img: program3, title: "Education Support Program", date: "18 February 2026" },
  { img: program4, title: "Legal Awareness Camp", date: "05 January 2026" },
];

function EventsPage() {
  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />
      <PageHero
        title="Events"
        description="Shiksha, Sahayata aur Suraksha ke hamaare events mein bhaag lein."
        image={heroBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Events" }]}
      />

      {/* Upcoming */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="eyebrow">Don't Miss Out</div>
            <h2 className="section-title mt-2">Upcoming Events</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((e) => (
              <div key={e.slug} className="card-soft card-soft-hover overflow-hidden flex flex-col">
                <Link to="/events/$slug" params={{ slug: e.slug }} className="relative block">
                  <img src={e.img} alt={e.title} className="w-full h-[180px] object-cover" />
                  <div className="absolute top-3 left-3 bg-orange text-white rounded-xl px-3 py-2 text-center leading-none shadow-lg">
                    <div className="font-extrabold text-[20px] font-display">{e.day}</div>
                    <div className="text-[10px] uppercase mt-0.5">{e.mon}</div>
                  </div>
                </Link>
                <div className="p-5 flex flex-col flex-1">
                  <Link to="/events/$slug" params={{ slug: e.slug }}>
                    <h3 className="text-navy font-bold text-[16px] font-display leading-snug hover:text-orange transition">{e.title}</h3>
                  </Link>
                  <p className="mt-2 text-text-2 text-[13px] leading-relaxed line-clamp-2">{e.desc}</p>
                  <div className="mt-4 space-y-1.5 text-[12.5px] text-text-2">
                    <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-orange" />{e.date}</div>
                    <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-orange" />{e.time}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-orange" />{e.loc}</div>
                  </div>
                  <Link to="/events/$slug" params={{ slug: e.slug }} className="mt-4 w-full border border-orange text-orange font-semibold rounded-lg py-2 text-[13px] hover:bg-orange hover:text-white transition text-center">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="eyebrow">Look Back</div>
            <h2 className="section-title mt-2">Past Events</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {past.map((e) => (
              <div key={e.title} className="card-soft card-soft-hover overflow-hidden">
                <img src={e.img} alt={e.title} className="w-full h-[180px] object-cover grayscale-[20%]" />
                <div className="p-5">
                  <h3 className="text-navy font-bold text-[16px] font-display">{e.title}</h3>
                  <div className="mt-2 flex items-center gap-2 text-[12.5px] text-text-2"><Calendar className="w-3.5 h-3.5 text-orange" />{e.date}</div>
                  <button className="mt-4 w-full border border-navy text-navy font-semibold rounded-lg py-2 text-[13px] hover:bg-navy hover:text-white transition">View Gallery</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 bg-gradient-to-r from-[#0B1F3A] to-[#102E5A] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
          <div className="w-14 h-14 rounded-full bg-orange flex items-center justify-center"><Megaphone className="w-7 h-7" /></div>
          <div>
            <h3 className="font-display font-extrabold text-[24px]">Don't Miss Our Next Event!</h3>
            <p className="text-white/75 mt-1 text-[14px]">Subscribe to our newsletter and get updates about our upcoming events and activities.</p>
          </div>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter Your Email Address" className="bg-white text-navy rounded-lg px-4 py-3 text-[13px] min-w-[260px] focus:outline-none" />
            <button type="submit" className="btn-orange whitespace-nowrap">Subscribe Now <ArrowRight className="w-4 h-4" /></button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
