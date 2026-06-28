import program1 from "@/assets/program-1.jpg";
import program2 from "@/assets/program-2.jpg";
import program3 from "@/assets/program-3.jpg";
import program4 from "@/assets/program-4.jpg";

export type EventItem = {
  slug: string;
  img: string;
  day: string;
  mon: string;
  title: string;
  desc: string;
  date: string;
  time: string;
  loc: string;
  address: string;
  organizer: string;
  contact: string;
  category: string;
  seats: string;
  fee: string;
  about: string[];
  highlights: string[];
  agenda: { time: string; title: string; detail: string }[];
  speakers: { name: string; role: string }[];
  status: "upcoming" | "past";
};

export const events: EventItem[] = [
  {
    slug: "free-health-checkup-camp",
    img: program3,
    day: "25", mon: "May",
    title: "Free Health Checkup Camp",
    desc: "Join our free health checkup camp and get expert consultation and medicines.",
    date: "25 May 2026", time: "10:00 AM - 4:00 PM",
    loc: "Community Center, Lucknow",
    address: "Community Center, Nijampur Malhaur, Lucknow, Uttar Pradesh",
    organizer: "Mahila Chetna Samiti",
    contact: "+91 73733 00737",
    category: "Health",
    seats: "300 Beneficiaries",
    fee: "Free",
    about: [
      "A full-day free health checkup camp for women, children and elderly community members in partnership with leading hospitals and certified doctors.",
      "Services include general physician consultation, blood pressure and sugar screening, eye checkup, gynaecology consultation and free medicines for diagnosed conditions.",
    ],
    highlights: [
      "Free general & gynaec consultation",
      "BP, sugar and BMI screening",
      "Free medicines on the spot",
      "Health awareness session for women",
      "Referral to government schemes",
    ],
    agenda: [
      { time: "10:00 AM", title: "Registration & Token", detail: "On-site registration and ID verification." },
      { time: "10:30 AM", title: "General Checkup Begins", detail: "Vitals, BP, sugar and BMI screening counters." },
      { time: "12:00 PM", title: "Specialist Consultation", detail: "Gynaec, paediatric and eye consultation." },
      { time: "02:00 PM", title: "Awareness Session", detail: "Talk on hygiene, nutrition and women health." },
      { time: "03:30 PM", title: "Medicine Distribution", detail: "Free medicines as per prescription." },
    ],
    speakers: [
      { name: "Dr. Anjali Verma", role: "Gynaecologist" },
      { name: "Dr. Rakesh Singh", role: "General Physician" },
      { name: "Dr. Neha Sharma", role: "Paediatrician" },
    ],
    status: "upcoming",
  },
  {
    slug: "tree-plantation-drive",
    img: program4, day: "05", mon: "Jun",
    title: "Tree Plantation Drive",
    desc: "Let's come together to plant more trees and create a greener tomorrow.",
    date: "05 June 2026", time: "09:00 AM - 12:00 PM",
    loc: "Village Green Area, Lucknow",
    address: "Village Green Area, Malhaur, Lucknow, Uttar Pradesh",
    organizer: "Mahila Chetna Samiti",
    contact: "+91 73733 00737",
    category: "Environment",
    seats: "200 Volunteers",
    fee: "Free",
    about: [
      "On World Environment Day, join hands with us to plant 1000+ saplings across community spaces, schools and roadside zones.",
      "All saplings, tools and refreshments are provided. Bring your family and contribute to a greener Lucknow.",
    ],
    highlights: [
      "1000+ saplings to be planted",
      "Free tools and refreshments",
      "Certificate for every volunteer",
      "Eco-pledge & awareness walk",
    ],
    agenda: [
      { time: "09:00 AM", title: "Volunteer Check-in", detail: "Registration and team allocation." },
      { time: "09:30 AM", title: "Inaugural Address", detail: "Welcome by Founder & Chief Guest." },
      { time: "10:00 AM", title: "Plantation Begins", detail: "Team-wise sapling plantation." },
      { time: "11:30 AM", title: "Eco-Pledge", detail: "Group pledge and photo session." },
    ],
    speakers: [
      { name: "Mrs. Sunita Mishra", role: "Founder, MCSS" },
      { name: "Shri R. K. Pandey", role: "Forest Officer" },
    ],
    status: "upcoming",
  },
  {
    slug: "women-awareness-workshop",
    img: program1, day: "15", mon: "Jun",
    title: "Women Awareness Workshop",
    desc: "Awareness session on women rights, health, hygiene and empowerment.",
    date: "15 June 2026", time: "11:00 AM - 2:00 PM",
    loc: "Community Hall, Lucknow",
    address: "Community Hall, Nijampur Malhaur, Lucknow",
    organizer: "Mahila Chetna Samiti",
    contact: "+91 73733 00737",
    category: "Empowerment",
    seats: "150 Women",
    fee: "Free",
    about: [
      "An interactive workshop designed to educate women on their legal rights, menstrual hygiene, mental health and financial independence.",
      "Includes Q&A with lawyers, doctors and successful women entrepreneurs from the region.",
    ],
    highlights: [
      "Legal rights & POSH awareness",
      "Menstrual hygiene kit distribution",
      "Mental health open session",
      "Bank account & micro-finance guidance",
    ],
    agenda: [
      { time: "11:00 AM", title: "Welcome & Ice-breaker", detail: "Introductions and warm-up." },
      { time: "11:30 AM", title: "Know Your Rights", detail: "Session by legal expert." },
      { time: "12:30 PM", title: "Health & Hygiene", detail: "Doctor-led interactive session." },
      { time: "01:30 PM", title: "Success Stories", detail: "Talk by women entrepreneurs." },
    ],
    speakers: [
      { name: "Adv. Priya Saxena", role: "Women's Rights Lawyer" },
      { name: "Dr. Meera Joshi", role: "Public Health Expert" },
    ],
    status: "upcoming",
  },
  {
    slug: "skill-development-training",
    img: program2, day: "28", mon: "Jun",
    title: "Skill Development Training",
    desc: "Free skill training for women and youth to build a better future.",
    date: "28 June 2026", time: "10:00 AM - 1:00 PM",
    loc: "Training Center, Lucknow",
    address: "MCSS Training Center, Malhaur, Lucknow",
    organizer: "Mahila Chetna Samiti",
    contact: "+91 73733 00737",
    category: "Livelihood",
    seats: "100 Participants",
    fee: "Free",
    about: [
      "A hands-on skill development bootcamp covering tailoring, beautician basics, computer literacy and spoken English.",
      "Participants receive a participation certificate and placement support through our network of partners.",
    ],
    highlights: [
      "Hands-on training kits",
      "Government-recognised certificate",
      "Placement assistance",
      "Stipend for top performers",
    ],
    agenda: [
      { time: "10:00 AM", title: "Orientation", detail: "Course overview and goal setting." },
      { time: "10:30 AM", title: "Skill Tracks", detail: "Parallel tracks: tailoring, beauty, computer, English." },
      { time: "12:30 PM", title: "Live Demo & Practice", detail: "Trainer-led practical sessions." },
    ],
    speakers: [
      { name: "Ms. Kavita Rao", role: "Master Trainer" },
      { name: "Mr. Arun Tiwari", role: "Placement Partner" },
    ],
    status: "upcoming",
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
