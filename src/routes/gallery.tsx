import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Image as ImageIcon, Play } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/herosection/NariSashaktikaran.png";
import photo1 from "@/assets/Causes/GirlChildEducation.png";
import photo2 from "@/assets/Blogs/HealthAwareness.png";
import photo3 from "@/assets/herosection/NariSashaktikaran.png";
import photo4 from "@/assets/Causes/Livelihood&Skills.png";
import photo5 from "@/assets/Blogs/EmpoweringRuralWomen.png";
import photo6 from "@/assets/herosection/Shiksha.png";
import photo7 from "@/assets/Causes/WomenHealth&Hygiene.png";
import photo8 from "@/assets/herosection/Sahayata.png";
import vid1 from "@/assets/Causes/WomenHealth&Hygiene.png";
import vid2 from "@/assets/Blogs/ImportanceofGirlsEducation.png";
import vid3 from "@/assets/herosection/Sahayata.png";
import vid4 from "@/assets/Blogs/EmpoweringRuralWomen.png";
import vid5 from "@/assets/Causes/GirlChildEducation.png";
import vid6 from "@/assets/herosection/Shiksha.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Mahila Chetna Samiti" },
      { name: "description", content: "Photos and videos from our programs, events and community work." },
      { property: "og:title", content: "Gallery — Mahila Chetna Samiti" },
      { property: "og:description", content: "Moments of impact from our journey." },
    ],
  }),
  component: GalleryPage,
});

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];
const videos = [
  { img: vid1, title: "Women Leadership Summit 2025", dur: "3:24" },
  { img: vid2, title: "Education for Every Child", dur: "5:10" },
  { img: vid3, title: "Health Camp Highlights", dur: "2:45" },
  { img: vid4, title: "Skill Training Stories", dur: "4:02" },
  { img: vid5, title: "Voices of Change", dur: "6:18" },
  { img: vid6, title: "Rural Development Impact", dur: "3:55" },
];

function GalleryPage() {
  const [tab, setTab] = useState<"photos" | "videos">("photos");
  return (
    <div className="bg-background text-text font-sans">
      <SiteHeader />
      <PageHero
        title="Gallery"
        description="Glimpses from our programs, events and community moments — captured in photos and videos."
        image={heroBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex justify-center">
            <div className="inline-flex p-1 bg-secondary rounded-full border border-border">
              <button onClick={() => setTab("photos")} className={`px-6 py-2.5 rounded-full text-[14px] font-semibold inline-flex items-center gap-2 transition ${tab === "photos" ? "bg-gradient-to-r from-orange to-orange-2 text-white shadow" : "text-navy"}`}>
                <ImageIcon className="w-4 h-4" /> Photos
              </button>
              <button onClick={() => setTab("videos")} className={`px-6 py-2.5 rounded-full text-[14px] font-semibold inline-flex items-center gap-2 transition ${tab === "videos" ? "bg-gradient-to-r from-orange to-orange-2 text-white shadow" : "text-navy"}`}>
                <Play className="w-4 h-4" /> Videos
              </button>
            </div>
          </div>

          {tab === "photos" ? (
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((p, i) => (
                <div key={i} className="relative overflow-hidden rounded-2xl group aspect-square">
                  <img src={p} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                    <span className="text-white font-semibold text-[13px]">Moment of Impact</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((v) => (
                <div key={v.title} className="card-soft card-soft-hover overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img src={v.img} alt={v.title} className="w-full h-[200px] object-cover" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition shadow-xl">
                        <Play className="w-7 h-7 text-orange fill-orange ml-1" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] font-semibold px-2 py-0.5 rounded">{v.dur}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-navy font-semibold text-[15px] font-display">{v.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
