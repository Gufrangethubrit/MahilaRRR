import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Shield, BadgeCheck, Receipt, Users, GraduationCap, Stethoscope, Sprout, CreditCard, Building2, IndianRupee, CheckCircle2 } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Mahila Chetna Samiti" },
      { name: "description", content: "Donate to Mahila Chetna Samiti and help empower women, educate children and transform rural communities. 80G tax exemption available." },
      { property: "og:title", content: "Donate — Mahila Chetna Samiti" },
      { property: "og:description", content: "Your contribution creates lasting change. Tax-exempt under 80G." },
    ],
  }),
  component: DonatePage,
});

const amounts = [500, 1000, 2500, 5000, 10000, 25000];

const causes = [
  { icon: GraduationCap, title: "Educate a Child", amount: "₹2,500/year", color: "#2563EB" },
  { icon: Users, title: "Skill a Woman", amount: "₹5,000/year", color: "#FF6B00" },
  { icon: Stethoscope, title: "Health Camp Kit", amount: "₹1,500", color: "#16A34A" },
  { icon: Sprout, title: "Rural Livelihood", amount: "₹10,000", color: "#7C3AED" },
];

const trust = [
  { icon: Shield, title: "100% Secure", desc: "Encrypted, PCI-compliant payments." },
  { icon: BadgeCheck, title: "80G Tax Benefit", desc: "Save up to 50% in taxes on every donation." },
  { icon: Receipt, title: "Instant Receipt", desc: "Auto-mailed receipt for your records." },
];

function DonatePage() {
  const [amount, setAmount] = useState<number>(2500);
  const [custom, setCustom] = useState<string>("");
  const [freq, setFreq] = useState<"once" | "monthly">("once");

  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />
      <PageHero
        title="Donate"
        description="Your contribution fuels real change — every rupee empowers women, educates children and uplifts communities across India."
        image={heroBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Donate" }]}
      />

      {/* Donation form */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.1fr_1fr] gap-10">
          {/* Left content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-[12px] font-bold uppercase tracking-wider">Make a Difference</span>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-navy font-display leading-tight mt-4">Every Rupee You Give <span className="text-orange">Changes a Life</span></h2>
            <div className="mt-3 h-1 w-16 bg-orange rounded-full" />
            <p className="mt-5 text-text-2 text-[15px] leading-relaxed">For over 27 years, Mahila Chetna Samiti has worked tirelessly to empower women and uplift rural India. Your donation directly supports our programs in education, livelihoods, health and women's safety.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {causes.map((c) => (
                <div key={c.title} className="bg-white border border-border rounded-[16px] p-5 flex items-center gap-4 hover:shadow-soft hover:-translate-y-0.5 transition-all">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${c.color}15`, color: c.color }}>
                    <c.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-navy text-[15px] font-display">{c.title}</div>
                    <div className="text-[13px] text-text-2 mt-0.5">{c.amount}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {trust.map((t) => (
                <div key={t.title} className="bg-white border border-border rounded-[16px] p-5 text-center">
                  <t.icon className="w-7 h-7 text-orange mx-auto" />
                  <div className="font-bold text-navy mt-2 text-[14px] font-display">{t.title}</div>
                  <div className="text-[12px] text-text-2 mt-1 leading-relaxed">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-[24px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-border h-fit lg:sticky lg:top-28">
            <div className="text-center pb-5 border-b border-border">
              <Heart className="w-10 h-10 text-orange mx-auto fill-orange/20" />
              <h3 className="font-display font-extrabold text-[22px] text-navy mt-2">Donate Now</h3>
              <p className="text-[13px] text-text-2 mt-1">Quick, secure & 80G eligible</p>
            </div>

            {/* Frequency */}
            <div className="mt-6 grid grid-cols-2 gap-2 bg-secondary/40 rounded-full p-1">
              {(["once", "monthly"] as const).map((f) => (
                <button key={f} onClick={() => setFreq(f)} className={`py-2.5 rounded-full text-[13px] font-bold transition ${freq === f ? "bg-orange text-white shadow" : "text-navy"}`}>
                  {f === "once" ? "One-Time" : "Monthly"}
                </button>
              ))}
            </div>

            {/* Amounts */}
            <label className="mt-6 block text-[13px] font-semibold text-navy">Choose Amount</label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {amounts.map((a) => (
                <button key={a} onClick={() => { setAmount(a); setCustom(""); }} className={`py-3 rounded-xl border text-[14px] font-bold transition ${amount === a && !custom ? "border-orange bg-orange text-white" : "border-border text-navy hover:border-orange"}`}>
                  ₹{a.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="mt-3 relative">
              <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-2" />
              <input
                type="number"
                value={custom}
                onChange={(e) => { setCustom(e.target.value); setAmount(Number(e.target.value) || 0); }}
                placeholder="Custom amount"
                className="w-full pl-9 pr-3 py-3 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:border-orange"
              />
            </div>

            {/* Form */}
            <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full border border-slate-200 rounded-xl px-3 py-3 text-[14px] focus:outline-none focus:border-orange" />
              <div className="grid grid-cols-2 gap-3">
                <input type="email" placeholder="Email" className="w-full border border-slate-200 rounded-xl px-3 py-3 text-[14px] focus:outline-none focus:border-orange" />
                <input type="tel" placeholder="Mobile" className="w-full border border-slate-200 rounded-xl px-3 py-3 text-[14px] focus:outline-none focus:border-orange" />
              </div>
              <input type="text" placeholder="PAN (for 80G receipt)" className="w-full border border-slate-200 rounded-xl px-3 py-3 text-[14px] focus:outline-none focus:border-orange" />

              <button type="submit" className="w-full bg-gradient-to-r from-orange to-orange-2 text-white font-bold rounded-xl py-4 hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg shadow-orange/30">
                <Heart className="w-5 h-5 fill-white" /> Donate ₹{(amount || 0).toLocaleString()}{freq === "monthly" ? " / month" : ""}
              </button>
              <p className="text-center text-[11.5px] text-text-2 flex items-center justify-center gap-1.5 pt-1">
                <Shield className="w-3.5 h-3.5" /> Secured by industry-standard encryption
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Bank details */}
      <section className="py-16 bg-[#F8FAFC] border-y border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-[12px] font-bold uppercase tracking-wider">Bank Transfer</span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-navy font-display mt-4">Direct Donation Details</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-orange rounded-full" />
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-[20px] p-7 border border-border shadow-soft">
              <div className="flex items-center gap-3">
                <Building2 className="w-7 h-7 text-orange" />
                <h3 className="font-display font-bold text-navy text-[19px]">Bank Account</h3>
              </div>
              <dl className="mt-5 space-y-3 text-[14px]">
                <Row k="Account Name" v="Mahila Chetna Samiti" />
                <Row k="Account No." v="XXXXXXXXXXXX" />
                <Row k="IFSC Code" v="SBIN0000000" />
                <Row k="Bank" v="State Bank of India" />
                <Row k="Branch" v="Lucknow, UP" />
              </dl>
            </div>
            <div className="bg-white rounded-[20px] p-7 border border-border shadow-soft">
              <div className="flex items-center gap-3">
                <CreditCard className="w-7 h-7 text-orange" />
                <h3 className="font-display font-bold text-navy text-[19px]">Tax Exemption</h3>
              </div>
              <dl className="mt-5 space-y-3 text-[14px]">
                <Row k="PAN" v="AAJAM8783G" />
                <Row k="12A" v="AAJAM8783GE2021301" />
                <Row k="80G" v="AAJAM8783GF2021101" />
                <Row k="Registration" v="914/1997-98" />
              </dl>
              <div className="mt-5 flex items-start gap-2 bg-orange/5 border border-orange/20 rounded-xl p-3 text-[12.5px] text-text-2">
                <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" /> All donations qualify for 50% tax exemption under Section 80G.
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-dashed border-border pb-2">
      <dt className="text-text-2">{k}</dt>
      <dd className="font-semibold text-navy text-right">{v}</dd>
    </div>
  );
}
