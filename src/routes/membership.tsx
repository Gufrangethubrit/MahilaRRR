import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, BookOpen, Network, Award, Megaphone, UserPlus, Check, Crown, UserCircle, FileText, ClipboardCheck, CreditCard, BadgeCheck, HandHeart, ChevronDown } from "lucide-react";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";
import aboutGroup from "@/assets/about-group.jpg";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — Mahila Chetna Samiti" },
      { name: "description", content: "Become a member of Mahila Chetna Samiti and join the movement empowering women and communities." },
      { property: "og:title", content: "Membership — Mahila Chetna Samiti" },
      { property: "og:description", content: "Join our movement of changemakers." },
    ],
  }),
  component: MembershipPage,
});

const benefits = [
  { icon: Users, title: "Be a Change Maker", desc: "Contribute to meaningful social change and community development.", color: "#FF6B00", bg: "#FFF1E5" },
  { icon: BookOpen, title: "Access to Training", desc: "Get access to exclusive training programs and workshops.", color: "#16A34A", bg: "#E8F7EE" },
  { icon: Network, title: "Community Network", desc: "Connect with like-minded people and build a strong network.", color: "#2563EB", bg: "#E6EEFB" },
  { icon: Award, title: "Certification", desc: "Receive membership certificate and recognition for your support.", color: "#EAB308", bg: "#FEF9C3" },
  { icon: Megaphone, title: "Stay Informed", desc: "Get regular updates about our programs, events and impact stories.", color: "#7C3AED", bg: "#F1EAFE" },
  { icon: UserPlus, title: "Leadership Opportunities", desc: "Be a part of leadership roles and community initiatives.", color: "#EC4899", bg: "#FCE7F3" },
];

const plans = [
  { name: "General Member", icon: UserCircle, price: "500", color: "#16A34A", btn: "bg-[#16A34A]", popular: false, perks: ["Membership ID Card", "Monthly Updates", "Event Invitations", "Participation in Programs", "Newsletter Access"] },
  { name: "Active Member", icon: Users, price: "1000", color: "#2563EB", btn: "bg-[#2563EB]", popular: true, perks: ["All General Member Benefits", "Training Programs Access", "Volunteer Opportunities", "Priority Event Registration", "Certificate of Membership"] },
  { name: "Premium Member", icon: Crown, price: "2500", color: "#FF6B00", btn: "bg-orange", popular: false, perks: ["All Active Member Benefits", "Leadership Opportunities", "Special Recognition", "CSR & Partnership Access", "Annual Report Access"] },
];

const process = [
  { icon: FileText, title: "Fill Application Form", desc: "Complete the membership form with your details.", color: "#16A34A" },
  { icon: ClipboardCheck, title: "Verification", desc: "Our team will verify your details and application.", color: "#2563EB" },
  { icon: CreditCard, title: "Membership Confirmation", desc: "Pay the membership fee and get confirmation.", color: "#7C3AED" },
  { icon: BadgeCheck, title: "Receive Membership ID", desc: "Get your membership ID card and welcome kit.", color: "#FF6B00" },
  { icon: HandHeart, title: "Be a Part of Change", desc: "Start contributing and participating in programs.", color: "#EC4899" },
];

const faqs = [
  { q: "Who can become a member?", a: "Anyone above 18 years who shares our mission of empowering women and communities can become a member." },
  { q: "Is membership fee refundable?", a: "Membership fee is non-refundable as it goes towards funding our programs and initiatives." },
  { q: "What are the benefits of membership?", a: "Members get access to training programs, networking opportunities, certification, leadership roles and more." },
  { q: "How will I receive my membership card?", a: "Your membership ID card and welcome kit will be couriered to your registered address within 15 working days." },
  { q: "How can I renew my membership?", a: "You can renew your membership annually via our online portal or by contacting our office." },
  { q: "Can I upgrade my membership plan?", a: "Yes — you can upgrade anytime by paying the difference between your current and the new plan." },
];

function MembershipPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />
      <PageHero
        title="Membership"
        description="Mahila Chetna Samiti ke saath judein aur Nari Sashaktikaran, Shiksha, Sahayata aur Suraksha ke is andolan ka hissa banein."
        image={heroBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Membership" }]}
      />

      {/* Benefits */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-secondary/30 to-white">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-orange/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-navy/10 blur-3xl" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-[12px] font-bold uppercase tracking-wider">Member Benefits</span>
            <h2 className="section-title mt-4">Why Become a Member?</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
            <p className="mt-4 text-text-2 text-[15px]">Unlock exclusive opportunities and be part of a movement that drives real change.</p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="group relative bg-white rounded-[20px] p-7 border border-border/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)] hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: b.color }}
                />
                <span
                  className="absolute top-5 right-6 text-[60px] font-black leading-none opacity-10 font-display select-none"
                  style={{ color: b.color }}
                >
                  0{i + 1}
                </span>
                <div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300"
                  style={{ background: b.bg, color: b.color }}
                >
                  <b.icon className="w-8 h-8" />
                </div>
                <h3 className="mt-5 text-navy font-bold text-[18px] font-display">{b.title}</h3>
                <p className="mt-2 text-text-2 text-[14px] leading-relaxed">{b.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-[13px] font-semibold" style={{ color: b.color }}>
                  <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">Learn more →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-secondary/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="section-title">Membership Plans</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div key={p.name} className={`relative bg-white rounded-[20px] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border ${p.popular ? "border-blue-500 ring-2 ring-blue-500/20" : "border-border"}`}>
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-navy text-white text-[11px] font-bold px-4 py-1 rounded-md uppercase">Most Popular</div>
                )}
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center text-white" style={{ background: p.color }}>
                    <p.icon className="w-7 h-7" />
                  </div>
                  <h3 className="mt-4 text-navy font-bold text-[18px] font-display">{p.name}</h3>
                  <div className="mt-3">
                    <span className="font-extrabold text-[36px] font-display" style={{ color: p.color }}>₹{p.price}</span>
                    <span className="text-text-2 text-[13px]"> / Year</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-[13.5px] text-text">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: p.color }} />{perk}
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 w-full ${p.btn} text-white font-semibold rounded-lg py-3 hover:opacity-90 transition`}>Join Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="section-title">Membership Registration Form</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-10 grid lg:grid-cols-[2fr_1fr] gap-6">
            <form className="bg-white rounded-[20px] p-7 border border-border shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-3 gap-4">
                <Field label="Full Name" placeholder="Enter your full name" required />
                <Field label="Email Address" type="email" placeholder="Enter your email" required />
                <Field label="Phone Number" placeholder="Enter your phone number" required />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <Field label="Date of Birth" type="date" />
                <Select label="Gender" options={["Select gender", "Male", "Female", "Other"]} />
                <Select label="Membership Type" required options={["Select membership type", "General", "Active", "Premium"]} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Occupation" placeholder="Enter your occupation" />
                <Field label="Address" placeholder="Enter your full address" required />
              </div>
              <label className="flex items-start gap-2 text-[13px] text-text-2 mt-2">
                <input type="checkbox" className="mt-1 accent-orange" /> I agree to the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a> and <a href="#" className="text-blue-600 hover:underline">privacy policy</a>.
              </label>
              <button type="submit" className="bg-navy text-white font-semibold rounded-lg px-6 py-3 hover:bg-navy-2 transition">Submit Application</button>
            </form>
            <div className="rounded-[20px] overflow-hidden bg-gradient-to-br from-orange/20 to-orange/5 relative flex flex-col">
              <div className="p-6 text-center">
                <h3 className="font-display font-bold text-[20px] text-navy">Together We Can<br />Create a Better Tomorrow</h3>
              </div>
              <img src={aboutGroup} alt="" className="w-full h-full object-cover flex-1 min-h-[200px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#F8FAFC] border-y border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-[#0B1F3A] font-display">Our Membership Process</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative">
            {process.map((s, i) => (
              <div key={s.title} className="text-center flex flex-col items-center group relative">
                <div className="relative mb-6">
                  {/* Icon Container with custom squircle-like smooth rounding */}
                  <div 
                    className="w-20 h-20 rounded-[28px] flex items-center justify-center text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-[3deg] shadow-lg shadow-black/5" 
                    style={{ backgroundColor: s.color }}
                  >
                    <s.icon className="w-8 h-8" strokeWidth={1.8} />
                  </div>
                  {/* Step Number Badge */}
                  <div 
                    className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white shadow-[0_3px_10px_rgba(0,0,0,0.1)] border border-slate-50 flex items-center justify-center text-[12px] font-bold" 
                    style={{ color: s.color }}
                  >
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-navy font-bold text-[17px] font-display tracking-tight group-hover:text-orange transition-colors duration-200">{s.title}</h3>
                <p className="mt-3 text-[#64748B] text-[13.5px] leading-relaxed max-w-[220px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left image */}
          <div className="relative">
            <div className="relative rounded-[24px] overflow-hidden shadow-soft">
              <img src={aboutGroup} alt="Members of Mahila Chetna Samiti" className="w-full h-[480px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/50 via-navy/10 to-transparent" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-orange text-white rounded-[18px] p-5 shadow-soft max-w-[220px]">
              <div className="font-display font-extrabold text-[28px] leading-none">100%</div>
              <div className="text-[12px] mt-1 opacity-95">Trusted &amp; transparent membership program</div>
            </div>
            <div className="hidden md:block absolute -top-6 -right-6 bg-white rounded-[18px] p-4 shadow-soft border border-border max-w-[200px]">
              <div className="text-orange font-display font-extrabold text-[22px]">10,000+</div>
              <div className="text-[12px] text-text-2 mt-0.5">Active members across India</div>
            </div>
          </div>

          {/* Right FAQ */}
          <div>
            <div className="eyebrow">Got Questions?</div>
            <h2 className="section-title mt-2">Frequently Asked <span className="text-orange">Questions</span></h2>
            <div className="mt-3 h-1 w-16 bg-orange rounded-full" />
            <p className="mt-4 text-text-2 text-[15px] leading-relaxed">Everything you need to know about becoming a member of Mahila Chetna Samiti. Can't find your answer? Reach out to us anytime.</p>

            <div className="mt-6 space-y-3">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q} className={`bg-white rounded-[14px] overflow-hidden transition-all border ${isOpen ? "border-orange shadow-soft" : "border-border"}`}>
                    <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[13px] flex-shrink-0 ${isOpen ? "bg-orange text-white" : "bg-orange/10 text-orange"}`}>{String(i + 1).padStart(2, "0")}</span>
                        <span className="font-semibold text-navy text-[15px]">{f.q}</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition ${isOpen ? "rotate-180 text-orange" : "text-text-2"}`} />
                    </button>
                    {isOpen && <div className="px-5 pb-5 pl-16 text-text-2 text-[14px] leading-relaxed">{f.a}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-[#0B1F3A] text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-extrabold text-[22px]">Join Mahila Chetna Samiti Today!</h3>
              <p className="text-white/75 text-[14px] mt-1">Your support can create a lasting impact in the lives of women and communities.</p>
            </div>
            <div className="flex gap-3">
              <Link to="/volunteer" className="bg-white text-navy font-semibold rounded-lg px-5 py-3">Become a Volunteer</Link>
              <Link to="/donate" className="btn-orange">Donate Now</Link>
            </div>
          </div>
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
function Select({ label, options, required }: { label: string; options: string[]; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-[13px] font-semibold text-navy">{label} {required && <span className="text-orange">*</span>}</span>
      <select className="mt-1.5 w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-orange bg-white">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
