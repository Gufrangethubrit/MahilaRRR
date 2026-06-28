import blogImg1 from "@/assets/Blogs/EmpoweringRuralWomen.png";
import blogImg2 from "@/assets/Blogs/ImportanceofGirlsEducation.png";
import blogImg3 from "@/assets/Blogs/HealthAwareness.png";
import blogImg4 from "@/assets/Featured Projects/SakshamWomenProject.png";
import blogImg5 from "@/assets/herosection/Shiksha.png";
import blogImg6 from "@/assets/Causes/WomenHealth&Hygiene.png";

export type Blog = {
  slug: string;
  img: string;
  tag: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string[];
  highlights?: string[];
};

export const blogs: Blog[] = [
  {
    slug: "skill-training-rural-women",
    img: blogImg1,
    tag: "Women Empowerment",
    title: "How Skill Training is Reshaping Rural Women's Lives",
    date: "Jun 18, 2026",
    author: "MCS Team",
    excerpt: "Stories from our Saksham centers where women are turning training into thriving micro-enterprises.",
    content: [
      "Across the villages of Uttar Pradesh, a quiet revolution is underway. At our Saksham skill-training centers, hundreds of women — many of them first-generation learners — are picking up tailoring machines, smartphones, and account books for the very first time.",
      "What begins as a three-month vocational course often ends with something far bigger: a home-run boutique, a small dairy enterprise, or a self-help group savings account that protects the entire family from sudden shocks.",
      "We sat down with twelve graduates of the 2025 batch. Their stories share a common thread — once a woman earns her first ₹1,000, the conversation at home changes forever. Decisions about children's education, household spending, and health begin to include her voice.",
      "This is the real measure of empowerment: not just income, but agency. And it is exactly why Mahila Chetna Samiti continues to expand the Saksham program to ten new blocks in 2026.",
    ],
    highlights: [
      "1,200+ women trained in 2025",
      "68% started a micro-enterprise within 6 months",
      "Average household income up by 42%",
    ],
  },
  {
    slug: "bridging-learning-gap",
    img: blogImg2,
    tag: "Education",
    title: "Bridging the Learning Gap: 1,000 Children, One Mission",
    date: "Jun 04, 2026",
    author: "Riya Sharma",
    excerpt: "How Shiksha Setu is bringing digital classrooms and confidence to government schools across UP.",
    content: [
      "When we entered the government primary school in Malhaur, only one in three children in Class 5 could read a Class 2 paragraph. Eighteen months later, that number is closer to nine in ten.",
      "Shiksha Setu is built around a simple idea: every child deserves a teacher who has the time, tools, and training to meet them where they are. Our remedial educators run small reading groups every morning before the regular school day begins.",
      "Digital tablets, locally-recorded audio lessons, and printed workbooks in Hindi have replaced the one-size-fits-all textbook. Parents — especially mothers — are invited into the classroom once a month to see their child read aloud.",
      "The transformation is visible not just in marks, but in posture. Children sit straighter, raise their hands faster, and ask better questions.",
    ],
    highlights: [
      "1,000+ children supported across 14 schools",
      "Reading fluency up 3x in 18 months",
      "Parent attendance at school events doubled",
    ],
  },
  {
    slug: "health-camps-lessons",
    img: blogImg3,
    tag: "Health",
    title: "120 Health Camps Later — Lessons from the Field",
    date: "May 22, 2026",
    author: "Dr. Anand",
    excerpt: "What two years of mobile health camps taught us about preventive care in rural India.",
    content: [
      "Two years, 120 camps, and over 18,000 patients later, our mobile health unit has become a familiar sight in the villages we serve. But the most important lesson has been about what we don't treat — diseases that should never have progressed this far.",
      "Hypertension, anemia, and untreated diabetes show up again and again. Awareness, not access alone, is the missing piece. So we've shifted our focus from one-day camps to ongoing community health worker training.",
      "Local women, trained as Swasthya Sakhis, now run weekly check-ins, track maternal health, and refer serious cases to district hospitals. The result: fewer emergencies, more continuity, and trust built one home visit at a time.",
    ],
    highlights: [
      "18,000+ patients screened",
      "200+ Swasthya Sakhis trained",
      "Maternal referrals up 4x",
    ],
  },
  {
    slug: "women-sarpanchs-sitapur",
    img: blogImg4,
    tag: "Leadership",
    title: "Women Sarpanchs Leading the Change in Sitapur",
    date: "May 10, 2026",
    author: "MCS Team",
    excerpt: "Trained women representatives are transforming village-level governance and accountability.",
    content: [
      "In Sitapur district, 47 women sarpanchs have completed our Panchayat Leadership Program. They are no longer signing papers placed in front of them — they are reading them, questioning them, and rewriting village priorities.",
      "From street lighting to school toilets, the agendas of gram sabhas now reflect the lived realities of women and children. And turnout at these meetings has tripled.",
    ],
    highlights: [
      "47 women sarpanchs trained",
      "Gram sabha turnout up 3x",
      "₹2.1 Cr in works re-prioritized",
    ],
  },
  {
    slug: "early-childhood-care",
    img: blogImg5,
    tag: "Child Rights",
    title: "Why Early Childhood Care Changes Everything",
    date: "Apr 28, 2026",
    author: "Neha Verma",
    excerpt: "A look inside our Bal Suraksha ECCE centers and the science behind early intervention.",
    content: [
      "The first 2,000 days of a child's life shape their brain more than any classroom ever will. Our Bal Suraksha centers are designed around this single, powerful idea.",
      "Play-based learning, nutrition tracking, and caregiver coaching come together under one roof. The result is children who arrive at primary school not just on time, but ready.",
    ],
    highlights: [
      "22 ECCE centers active",
      "1,800+ children enrolled",
      "Nutrition status improved for 76%",
    ],
  },
  {
    slug: "menstrual-hygiene-awareness",
    img: blogImg6,
    tag: "Awareness",
    title: "Menstrual Hygiene Awareness: Breaking the Silence",
    date: "Apr 12, 2026",
    author: "MCS Team",
    excerpt: "How peer-led workshops are normalizing conversations around menstruation in rural schools.",
    content: [
      "Silence is the biggest barrier to menstrual health. Our peer-led workshops in schools have flipped the script — adolescent girls now lead the sessions themselves, with boys and teachers in the same room.",
      "Distribution of reusable pads, paired with biology lessons and Q&A, has cut school absenteeism among girls by nearly a third in pilot blocks.",
    ],
    highlights: [
      "240+ schools covered",
      "School absenteeism down 30%",
      "12,000+ adolescents reached",
    ],
  },
];

export const getBlogBySlug = (slug: string) => blogs.find((b) => b.slug === slug);
