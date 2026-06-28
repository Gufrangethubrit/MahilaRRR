import s1 from "@/assets/Featured Projects/SakshamWomenProject.png";
import s2 from "@/assets/Causes/GirlChildEducation.png";
import s3 from "@/assets/Causes/Livelihood&Skills.png";

export type Story = {
  slug: string;
  img: string;
  name: string;
  place: string;
  age?: number;
  program: string;
  quote: string;
  summary: string;
  story: string[];
  impact: { label: string; value: string }[];
};

export const stories: Story[] = [
  {
    slug: "sunita-devi",
    img: s1,
    name: "Sunita Devi",
    place: "Sitapur, Uttar Pradesh",
    age: 32,
    program: "Skill Development & Livelihood",
    quote:
      "From a daily-wage worker to running my own tailoring unit employing 8 women — Mahila Chetna Samiti changed my life.",
    summary:
      "A daily-wage labourer who became an entrepreneur running a tailoring unit that now employs eight women from her village.",
    story: [
      "Sunita Devi grew up in a small village in Sitapur where women rarely stepped out of their homes for work. After her husband's accident, she became the sole earner for a family of five, surviving on ₹150 a day as a daily-wage labourer.",
      "In 2021, our field team enrolled her into the 6-month tailoring and entrepreneurship program. Alongside stitching skills, she learned bookkeeping, pricing, and how to operate a Jan Dhan bank account.",
      "With a ₹25,000 micro-grant from our livelihood fund she purchased two sewing machines. Within a year she was supplying school uniforms to three local schools. Today her unit employs 8 women and earns over ₹40,000 a month.",
    ],
    impact: [
      { label: "Monthly Income", value: "₹40,000+" },
      { label: "Women Employed", value: "8" },
      { label: "Years in Program", value: "3" },
    ],
  },
  {
    slug: "priya-kumari",
    img: s2,
    name: "Priya Kumari",
    place: "Barabanki, Uttar Pradesh",
    age: 19,
    program: "Girl Child Education Scholarship",
    quote:
      "I was the first girl in my village to clear class 12. Today I am a nursing student, thanks to the scholarship program.",
    summary:
      "The first girl in her village to complete class 12, now pursuing a nursing diploma on a full scholarship.",
    story: [
      "Priya was about to be married off at 15 when our outreach worker met her family. After months of counselling, her parents agreed to let her continue her schooling.",
      "Through our scholarship program she received fees, books, a bicycle and after-school tutoring. She topped her district in the class 12 board exams.",
      "She is now in the second year of a GNM nursing diploma at a Lucknow institute and plans to return to serve her own community.",
    ],
    impact: [
      { label: "Board Exam %", value: "92%" },
      { label: "Scholarship Years", value: "5" },
      { label: "Career Goal", value: "Nurse" },
    ],
  },
  {
    slug: "rekha-shg",
    img: s3,
    name: "Rekha & SHG Members",
    place: "Hardoi, Uttar Pradesh",
    program: "Self-Help Group & Enterprise",
    quote:
      "Our self-help group started with ₹500. Today we run an organic spice brand that ships across India.",
    summary:
      "A 12-member self-help group that turned ₹500 of monthly savings into a registered organic spice brand.",
    story: [
      "Rekha and 11 women from her village formed an SHG in 2019, each contributing ₹500 a month. With our handholding they registered as a producer collective.",
      "After training in food processing, packaging and digital sales, they launched 'Maa Aanchal' — an organic spice and pickle brand sold on local marketplaces and online.",
      "The group now ships orders to 14 states, employs 22 women part-time and reinvests profits into a community library for their daughters.",
    ],
    impact: [
      { label: "Annual Turnover", value: "₹18 L" },
      { label: "States Served", value: "14" },
      { label: "Women Engaged", value: "22" },
    ],
  },
];

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}
