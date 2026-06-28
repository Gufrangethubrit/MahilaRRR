import { createFileRoute } from "@tanstack/react-router";
import { Download, Shield, Award, FileCheck2, Building2, FileText, Globe, Receipt, Landmark, ExternalLink } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";
import cert1 from "@/assets/img-certificate/certificate1.jpeg";
import cert2 from "@/assets/img-certificate/certificate2.jpeg";
import cert3 from "@/assets/img-certificate/certificate3.jpeg";
import cert4 from "@/assets/img-certificate/certificate4.jpeg";
import cert5 from "@/assets/img-certificate/certificate5.jpeg";
import cert6 from "@/assets/img-certificate/certificate6.jpeg";
import cert7 from "@/assets/img-certificate/certificate7.jpeg";
import cert8 from "@/assets/img-certificate/certificate8.jpeg";
import cert9 from "@/assets/img-certificate/certificate9.jpeg";

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [
      { title: "Documents — Mahila Chetna Samiti" },
      { name: "description", content: "Registration certificates, 12A, 80G, PAN and other legal documents of Mahila Chetna Samiti." },
      { property: "og:title", content: "Documents — Mahila Chetna Samiti" },
      { property: "og:description", content: "Transparency & compliance documents." },
    ],
  }),
  component: DocumentsPage,
});

const documents = [
  { icon: Building2, title: "Society Registration", number: "914/1997-98", desc: "Registered under the Societies Registration Act, 1860.", image: cert1, color: "#2563EB", bg: "#E6EEFB" },
  { icon: Shield, title: "12A Certificate", number: "AAJAM8783GE2021301", desc: "Tax exemption certificate under Section 12A of Income Tax Act.", image: cert2, color: "#16A34A", bg: "#E8F7EE" },
  { icon: Award, title: "80G Certificate", number: "AAJAM8783GF2021101", desc: "Donations to MCS are eligible for tax deduction under Section 80G.", image: cert3, color: "#FF6B00", bg: "#FFF1E5" },
  { icon: FileCheck2, title: "PAN Card", number: "AAJAM8783G", desc: "Permanent Account Number of the organization.", image: cert4, color: "#7C3AED", bg: "#F1EAFE" },
  { icon: FileText, title: "Annual Report 2024-25", number: "Latest", desc: "Detailed annual report of programs, impact and financials.", image: cert5, color: "#EC4899", bg: "#FCE7F3" },
  { icon: FileText, title: "Audit Report 2024-25", number: "Latest", desc: "Independently audited financial statements.", image: cert6, color: "#EAB308", bg: "#FEF9C3" },
  { icon: Globe, title: "FCRA Registration", number: "Registered", desc: "Registered under the Foreign Contribution (Regulation) Act, 2010.", image: cert7, color: "#0891B2", bg: "#E6F9FC" },
  { icon: Receipt, title: "GST Registration", number: "Registered", desc: "Registered under the Goods and Services Tax Act.", image: cert8, color: "#DC2626", bg: "#FCE8E8" },
  { icon: Landmark, title: "NITI Aayog / DARPAN", number: "Registered", desc: "Registered with NITI Aayog's DARPAN portal for NGO partnerships.", image: cert9, color: "#0B1F3A", bg: "#E8EAED" },
];

function DocumentsPage() {
  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />
      <PageHero
        title="Documents"
        accent="& Certifications"
        description="Our legal registrations, tax exemption certificates, and annual reports — published in the spirit of full transparency."
        image={heroBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Documents" }]}
      />

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="eyebrow">Transparency &amp; Compliance</div>
            <h2 className="section-title mt-2">Our Legal Documents</h2>
            <p className="mt-3 max-w-[640px] mx-auto text-text-2 text-[15px]">All our registrations and certificates are listed below. Click to download or request a copy.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((d) => (
              <div key={d.title} className="card-soft card-soft-hover p-6 flex flex-col">
                <div className="rounded-[12px] overflow-hidden mb-4 bg-gray-100">
                  <img src={d.image} alt={d.title} className="w-full h-auto object-cover" loading="lazy" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0" style={{ background: d.bg }}>
                    <d.icon className="w-5 h-5" style={{ color: d.color }} />
                  </div>
                  <div>
                    <h3 className="text-navy font-bold font-display text-[16px]">{d.title}</h3>
                    <div className="text-[11px] font-mono text-text-2">{d.number}</div>
                  </div>
                </div>
                <p className="mt-3 text-text-2 text-[13px] leading-relaxed">{d.desc}</p>
                <a href={d.image} download className="mt-auto inline-flex items-center justify-center gap-2 bg-orange/10 text-orange font-semibold text-[13px] rounded-[10px] px-4 py-2.5 hover:bg-orange hover:text-white transition w-full">
                  <Download className="w-4 h-4" /> Download
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[18px] bg-navy text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-extrabold text-[20px]">Need a verified copy?</h3>
              <p className="text-white/80 text-[14px] mt-1">Write to us and our team will share certified documents for CSR / partnership due-diligence.</p>
            </div>
            <a href="mailto:info@mahilachetnasamiti.org" className="bg-orange text-white font-bold rounded-[12px] px-6 py-3">Request Documents</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
