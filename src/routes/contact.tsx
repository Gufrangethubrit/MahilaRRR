import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Send, Heart, Handshake, UserPlus, Gift, ShieldCheck, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";
import office1 from "@/assets/Featured Projects/SakshamWomenProject.png";
import office2 from "@/assets/Featured Projects/ShikshaSetuProject.png";
import office3 from "@/assets/Featured Projects/GramVikasInitiative.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Mahila Chetna Samiti" },
      { name: "description", content: "Get in touch with Mahila Chetna Samiti. Reach our offices in Lucknow, Jaipur and Bhopal." },
      { property: "og:title", content: "Contact Us — Mahila Chetna Samiti" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: ContactPage,
});

const info = [
  { icon: Phone, title: "Call Us", lines: ["+91 73733 00737", "Mon - Sat: 9:00 AM - 6:00 PM"], color: "#FF6B00", bg: "#FFF1E5" },
  { icon: Mail, title: "Email Us", lines: ["info@mahilachetnasamiti.org", "We reply within 24 hours"], color: "#16A34A", bg: "#E8F7EE" },
  { icon: MapPin, title: "Visit Us", lines: ["330-A Nijampur Malhaur", "Lucknow – 226028, U.P."], color: "#7C3AED", bg: "#F1EAFE" },
  { icon: Clock, title: "Office Hours", lines: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"], color: "#2563EB", bg: "#E6EEFB" },
];

const offices = [
  { img: office1, label: "Head Office", city: "Lucknow", addr: "330-A Nijampur Malhaur, Lucknow – 226028", phone: "+91 73733 00737", mail: "lucknow@mahilachetnasamiti.org", color: "#7C3AED" },
  { img: office2, label: "Regional Office", city: "Jaipur, Rajasthan", addr: "456-A, Empowerment Hub, Jaipur – 302001", phone: "+91 87654 32109", mail: "jaipur@mahilachetnasamiti.org", color: "#16A34A" },
  { img: office3, label: "Field Office", city: "Bhopal, Madhya Pradesh", addr: "789, Seva Bhavan, Bhopal – 462001", phone: "+91 76543 21098", mail: "bhopal@mahilachetnasamiti.org", color: "#FF6B00" },
];

const help = [
  { icon: Heart, title: "General Inquiries", desc: "Have a question about our work? We're happy to help.", color: "#EC4899", bg: "#FCE7F3" },
  { icon: Handshake, title: "Partnerships", desc: "Let's collaborate for greater impact in communities.", color: "#16A34A", bg: "#E8F7EE" },
  { icon: UserPlus, title: "Volunteer With Us", desc: "Join our team of passionate changemakers across the country.", color: "#7C3AED", bg: "#F1EAFE" },
  { icon: Gift, title: "Donations", desc: "Your support helps us empower more lives every day.", color: "#FF6B00", bg: "#FFF1E5" },
];

function ContactPage() {
  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />
      <PageHero
        eyebrow="Contact Us"
        title="We'd Love To"
        accent="Hear From You!"
        description="Have questions, ideas, or want to get involved? Reach out — we're here to make a difference together."
        image={heroBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      {/* Info cards */}
      <section className="-mt-12 relative z-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {info.map((c) => (
            <div key={c.title} className="bg-white border border-border rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex gap-3 items-start">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: c.bg, color: c.color }}>
                <c.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-navy font-bold text-[15px] font-display">{c.title}</div>
                {c.lines.map((l) => <div key={l} className="text-text-2 text-[12.5px]">{l}</div>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8">
          <div>
            <div className="eyebrow">Get In Touch</div>
            <h2 className="section-title mt-2">Send Us a Message</h2>
            <div className="mt-3 h-1 w-16 bg-orange rounded-full" />
            <p className="mt-4 text-text-2 text-[14px]">Fill out the form and our team will get back to you shortly.</p>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" placeholder="Enter your full name" required />
                <Field label="Email Address" type="email" placeholder="Enter your email" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Phone Number" placeholder="Enter your phone number" />
                <label className="block">
                  <span className="text-[13px] font-semibold text-navy">Subject <span className="text-orange">*</span></span>
                  <select className="mt-1.5 w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[14px] bg-white focus:outline-none focus:border-orange">
                    <option>Select a subject</option><option>General Inquiry</option><option>Partnership</option><option>Volunteer</option><option>Donation</option>
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="text-[13px] font-semibold text-navy">Message <span className="text-orange">*</span></span>
                <textarea rows={5} placeholder="Write your message here..." className="mt-1.5 w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-orange" />
              </label>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <button type="submit" className="btn-orange"><Send className="w-4 h-4" /> Send Message</button>
                <span className="text-[12.5px] text-text-2 flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-green-600" /> Your information is safe with us.</span>
              </div>
            </form>
          </div>
          <div className="rounded-[20px] overflow-hidden border border-border min-h-[420px] shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <iframe
              title="Mahila Chetna Samiti Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=80.94%2C26.83%2C81.04%2C26.93&layer=mapnik&marker=26.88%2C80.99"
              className="w-full h-full min-h-[420px] border-0"
            />
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 bg-secondary/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="section-title">Our Offices</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {offices.map((o) => (
              <div key={o.city} className="card-soft card-soft-hover overflow-hidden">
                <img src={o.img} alt={o.city} className="w-full h-[180px] object-cover" />
                <div className="p-6">
                  <div className="font-bold font-display text-[18px]" style={{ color: o.color }}>{o.label}</div>
                  <div className="text-navy font-semibold mt-1">{o.city}</div>
                  <div className="mt-3 space-y-1.5 text-[13px] text-text-2">
                    <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-orange flex-shrink-0" />{o.addr}</div>
                    <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-orange" />{o.phone}</div>
                    <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-orange" />{o.mail}</div>
                  </div>
                  <button className="mt-5 w-full text-white font-semibold rounded-lg py-2.5" style={{ background: o.color }}>Get Directions →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help */}
      <section className="py-16 bg-orange/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="section-title">We're Here to Help</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {help.map((h) => (
              <div key={h.title} className="text-center p-4">
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center" style={{ background: h.bg, color: h.color }}>
                  <h.icon className="w-7 h-7" />
                </div>
                <h3 className="mt-4 text-navy font-bold text-[15px] font-display">{h.title}</h3>
                <p className="mt-2 text-text-2 text-[12.5px] leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-gradient-to-r from-[#0B1F3A] to-[#102E5A] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center"><Mail className="w-6 h-6" /></div>
          <div>
            <h3 className="font-display font-extrabold text-[22px]">Stay Connected</h3>
            <p className="text-white/75 text-[14px]">Subscribe to our newsletter to get the latest updates on our programs and initiatives.</p>
          </div>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" className="bg-white text-navy rounded-lg px-4 py-3 text-[13px] min-w-[260px] focus:outline-none" />
            <button type="submit" className="btn-orange whitespace-nowrap">Subscribe <ArrowRight className="w-4 h-4" /></button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, type = "text", placeholder, required }: { label: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-[13px] font-semibold text-navy">{label} {required && <span className="text-orange">*</span>}</span>
      <input type={type} placeholder={placeholder} className="mt-1.5 w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-orange" />
    </label>
  );
}
