import img1 from "@/assets/Our Programs/WomenEmpowermentProgram.png";
import img2 from "@/assets/Causes/GirlChildEducation.png";
import img3 from "@/assets/Our Programs/HealthSafetyCampaign.png";
import img4 from "@/assets/Causes/WomenHealth&Hygiene.png";
import img5 from "@/assets/Causes/Livelihood&Skills.png";
import img6 from "@/assets/herosection/NariSashaktikaran.png";
import { Heart, Users, GraduationCap, Shield, Stethoscope, Sprout, type LucideIcon } from "lucide-react";

export type Cause = {
  slug: string;
  title: string;
  desc: string;
  img: string;
  I: LucideIcon;
  raised: number;
  beneficiaries: string;
  goal: string;
  raisedAmt: string;
  about: string[];
  objectives: string[];
  impact: { label: string; value: string }[];
  locations: string[];
};

export const causes: Cause[] = [
  {
    slug: "women-empowerment",
    title: "Women Empowerment",
    desc: "Skill training, self-help groups and leadership development for rural women.",
    img: img1, I: Users, raised: 84, beneficiaries: "12,000+",
    goal: "₹50 Lakhs", raisedAmt: "₹42 Lakhs",
    about: [
      "Mahila Chetna Samiti has been working since 1997 to empower rural women across Uttar Pradesh through skill development, financial literacy and self-help groups.",
      "Our flagship empowerment program equips women with vocational skills, leadership training and access to micro-credit — enabling them to become entrepreneurs and decision makers in their families and communities.",
    ],
    objectives: [
      "Train 5,000 women annually in vocational skills",
      "Form & strengthen 500+ self-help groups",
      "Provide market linkages to women-led enterprises",
      "Build leadership capacity at panchayat level",
    ],
    impact: [
      { label: "Women Trained", value: "12,000+" },
      { label: "SHGs Formed", value: "540" },
      { label: "Entrepreneurs", value: "1,850" },
      { label: "Districts Reached", value: "18" },
    ],
    locations: ["Lucknow", "Sitapur", "Barabanki", "Hardoi", "Unnao"],
  },
  {
    slug: "girl-child-education",
    title: "Girl Child Education",
    desc: "Scholarships, learning kits and bridge schools for first-generation learners.",
    img: img2, I: GraduationCap, raised: 67, beneficiaries: "8,500+",
    goal: "₹35 Lakhs", raisedAmt: "₹23.4 Lakhs",
    about: [
      "Every girl deserves a school bench. Our education initiative removes barriers — fees, distance, child marriage, household responsibilities — that keep girls out of classrooms.",
      "Through scholarships, bridge schools, after-school tuition and mentorship, we help first-generation learners stay in school and dream bigger.",
    ],
    objectives: [
      "Sponsor education of 2,000 girls per year",
      "Run 25 bridge schools for out-of-school children",
      "Distribute learning kits and uniforms",
      "Counsel families against early marriage",
    ],
    impact: [
      { label: "Girls Sponsored", value: "8,500+" },
      { label: "Bridge Schools", value: "25" },
      { label: "Retention Rate", value: "94%" },
      { label: "College Enrolments", value: "320" },
    ],
    locations: ["Lucknow", "Sonbhadra", "Gonda", "Bahraich"],
  },
  {
    slug: "safety-anti-trafficking",
    title: "Safety & Anti-Trafficking",
    desc: "Awareness, rescue and rehabilitation programs across vulnerable districts.",
    img: img3, I: Shield, raised: 52, beneficiaries: "3,200+",
    goal: "₹40 Lakhs", raisedAmt: "₹20.8 Lakhs",
    about: [
      "We work at the frontline against human trafficking — running awareness drives, supporting rescue operations alongside the police, and providing safe shelter, counselling and legal aid to survivors.",
      "Our anti-trafficking task force operates across vulnerable border and source districts of Uttar Pradesh.",
    ],
    objectives: [
      "Conduct 500+ awareness sessions a year",
      "Run a 24x7 helpline for women in distress",
      "Support rescue & rehabilitation operations",
      "Provide legal aid and counselling to survivors",
    ],
    impact: [
      { label: "Lives Protected", value: "3,200+" },
      { label: "Rescues Supported", value: "240" },
      { label: "Awareness Sessions", value: "1,800" },
      { label: "Legal Cases Won", value: "85" },
    ],
    locations: ["Lucknow", "Gorakhpur", "Maharajganj", "Lakhimpur"],
  },
  {
    slug: "health-nutrition",
    title: "Health & Nutrition",
    desc: "Maternal health camps, nutrition support and adolescent wellness drives.",
    img: img4, I: Stethoscope, raised: 73, beneficiaries: "15,000+",
    goal: "₹60 Lakhs", raisedAmt: "₹43.8 Lakhs",
    about: [
      "Our mobile health clinics and community camps bring essential maternal, child and adolescent health services to villages that lack reliable primary healthcare.",
      "From iron tablets and nutrition kits to full-day specialist camps — every intervention is designed for the most underserved.",
    ],
    objectives: [
      "Run weekly health camps in 50 villages",
      "Deliver nutrition kits to pregnant women",
      "Train ASHAs and community health workers",
      "Drive adolescent menstrual hygiene awareness",
    ],
    impact: [
      { label: "Beneficiaries", value: "15,000+" },
      { label: "Camps Held", value: "620" },
      { label: "ASHAs Trained", value: "480" },
      { label: "Hygiene Kits", value: "22,000" },
    ],
    locations: ["Sitapur", "Hardoi", "Barabanki", "Unnao"],
  },
  {
    slug: "livelihood-agriculture",
    title: "Livelihood & Agriculture",
    desc: "Organic farming, micro-enterprise and market linkage for rural families.",
    img: img5, I: Sprout, raised: 41, beneficiaries: "6,400+",
    goal: "₹45 Lakhs", raisedAmt: "₹18.4 Lakhs",
    about: [
      "We support rural families to build sustainable livelihoods through organic farming practices, micro-enterprise development and direct market linkages — improving incomes while protecting soil and ecology.",
      "Farmer Producer Organizations (FPOs) led by women farmers are central to our model.",
    ],
    objectives: [
      "Promote organic & natural farming",
      "Build 20 women-led FPOs",
      "Provide skill & micro-enterprise training",
      "Create direct-to-consumer market linkages",
    ],
    impact: [
      { label: "Families Supported", value: "6,400+" },
      { label: "FPOs Built", value: "20" },
      { label: "Income Growth", value: "+38%" },
      { label: "Acres Organic", value: "1,250" },
    ],
    locations: ["Hardoi", "Sitapur", "Lakhimpur"],
  },
  {
    slug: "elderly-differently-abled",
    title: "Elderly & Differently-abled",
    desc: "Care, dignity kits and inclusion programs for the most vulnerable.",
    img: img6, I: Heart, raised: 38, beneficiaries: "2,100+",
    goal: "₹30 Lakhs", raisedAmt: "₹11.4 Lakhs",
    about: [
      "Our inclusion program supports the elderly and differently-abled with dignity kits, mobility aids, health check-ups, pensions and community-based rehabilitation.",
      "We work closely with families and local government to ensure access to entitlements they are eligible for.",
    ],
    objectives: [
      "Distribute dignity & mobility aid kits",
      "Run monthly health & eye care camps",
      "Help access government pensions & schemes",
      "Build community-based rehabilitation circles",
    ],
    impact: [
      { label: "People Supported", value: "2,100+" },
      { label: "Mobility Aids", value: "340" },
      { label: "Pensions Linked", value: "780" },
      { label: "Health Camps", value: "120" },
    ],
    locations: ["Lucknow", "Barabanki", "Unnao"],
  },
];

export function getCause(slug: string) {
  return causes.find((c) => c.slug === slug);
}
