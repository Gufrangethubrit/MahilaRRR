import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { MapPin, Users, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import topo from "@/assets/india-states.topo.json";

type Stat = {
  id: string;
  name: string;
  focus: string;
  lives: string;
  projects: string;
  volunteers: string;
  desc: string;
};

const STATES: Record<string, Stat> = {
  UP: { id: "UP", name: "Uttar Pradesh", focus: "Education & Employment", lives: "32K+", projects: "18", volunteers: "4,200", desc: "Mahila Chetna Samiti teams in Uttar Pradesh are working closely with local communities, driving programs on education & employment and building a stronger grassroots network every day." },
  DL: { id: "DL", name: "Delhi NCR", focus: "Skill & Legal Aid", lives: "8K+", projects: "9", volunteers: "1,100", desc: "Urban skill centres and legal aid desks supporting women navigating city challenges with dignity and confidence." },
  BR: { id: "BR", name: "Bihar", focus: "Safety & Literacy", lives: "12K+", projects: "11", volunteers: "1,800", desc: "Adult literacy circles and women safety awareness drives reaching deep into rural panchayats across the state." },
  MP: { id: "MP", name: "Madhya Pradesh", focus: "Self-Help Groups", lives: "9K+", projects: "8", volunteers: "1,300", desc: "Building economic resilience through SHGs, micro-finance training and craft-based livelihood programs." },
  RJ: { id: "RJ", name: "Rajasthan", focus: "Health & Nutrition", lives: "6K+", projects: "6", volunteers: "900", desc: "Mobile health camps and nutrition awareness reaching the most remote villages of the Thar region." },
  MH: { id: "MH", name: "Maharashtra", focus: "Vocational Training", lives: "4K+", projects: "4", volunteers: "650", desc: "Vocational and digital skill training preparing women for sustainable urban and semi-urban employment." },
  JH: { id: "JH", name: "Jharkhand", focus: "Tribal Empowerment", lives: "5K+", projects: "5", volunteers: "780", desc: "Empowering tribal women through education, forest-rights awareness and indigenous craft preservation." },
};

const ACTIVE_IDS = Object.keys(STATES);

export default function IndiaImpactMap() {
  const [active, setActive] = useState<Stat>(STATES.UP);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* LEFT — Info panel */}
        <div key={active.id} className="animate-fade-in">
          <div className="inline-flex items-center gap-2 text-orange font-bold uppercase tracking-[0.2em] text-[12px]">
            <MapPin className="w-4 h-4" /> State Spotlight
          </div>
          <h2 className="mt-3 font-display font-extrabold text-navy text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.05]">
            {active.name}
          </h2>
          <p className="mt-2 text-slate-500 text-[18px] sm:text-[20px]">{active.focus}</p>

          <div className="mt-7 grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: Users, v: active.lives, l: "Lives" },
              { icon: Briefcase, v: active.projects, l: "Projects" },
              { icon: GraduationCap, v: active.volunteers, l: "Volunteers" },
            ].map((s) => (
              <div key={s.l} className="bg-orange/[0.07] rounded-2xl p-4 sm:p-5 transition-all hover:bg-orange/10 hover:-translate-y-1">
                <s.icon className="w-5 h-5 text-orange" />
                <div className="mt-3 font-display font-extrabold text-orange text-[22px] sm:text-[28px] leading-none">{s.v}</div>
                <div className="mt-1.5 text-slate-500 font-semibold text-[11px] tracking-wider uppercase">{s.l}</div>
              </div>
            ))}
          </div>

          <p className="mt-7 text-slate-600 leading-relaxed text-[15px] sm:text-[16px] max-w-lg">{active.desc}</p>

          <div className="mt-7 inline-flex items-center gap-2 text-slate-400 font-semibold uppercase tracking-[0.18em] text-[12px]">
            Tip: hover a state on the map <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* RIGHT — Map */}
        <div className="relative">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 900, center: [82, 23] }}
            width={500}
            height={550}
            style={{ width: "100%", height: "auto" }}
          >
            <Geographies geography={topo as any}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const id = geo.id as string;
                  const isActive = id === active.id;
                  const isInteractive = ACTIVE_IDS.includes(id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => isInteractive && setActive(STATES[id])}
                      onClick={() => isInteractive && setActive(STATES[id])}
                      style={{
                        default: {
                          fill: isActive ? "#FF6B00" : isInteractive ? "#FFE3CC" : "#EEF1F5",
                          stroke: "#B8C0CC",
                          strokeWidth: 0.5,
                          outline: "none",
                          transition: "fill 0.25s ease",
                          cursor: isInteractive ? "pointer" : "default",
                        },
                        hover: {
                          fill: isInteractive ? "#FF6B00" : "#EEF1F5",
                          stroke: "#0B1F3A",
                          strokeWidth: 0.8,
                          outline: "none",
                          cursor: isInteractive ? "pointer" : "default",
                        },
                        pressed: { fill: "#FF6B00", outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </section>
  );
}
