import program1 from "@/assets/program-1.jpg";
import program2 from "@/assets/program-2.jpg";
import program3 from "@/assets/program-3.jpg";
import program4 from "@/assets/program-4.jpg";

export type Project = {
  slug: string;
  img: string;
  title: string;
  desc: string;
  impact: string;
  loc: string;
  tag: string;
  started: string;
  about: string[];
  objectives: string[];
  activities: { title: string; desc: string }[];
  stats: { label: string; value: string }[];
  locations: string[];
};

export const projects: Project[] = [
  {
    slug: "saksham-women-project",
    img: program1,
    title: "Saksham Women Project",
    desc: "Empowering women through skill training, leadership and entrepreneurship support.",
    impact: "2,500+ Women",
    loc: "8 States",
    tag: "Women",
    started: "2015",
    about: [
      "Saksham is our flagship initiative focused on building economic independence for women from marginalized communities. Through structured skill-development programs, mentorship, and market linkages, we help women turn talent into livelihood.",
      "From tailoring and handicrafts to digital literacy and micro-entrepreneurship, Saksham equips women with the tools, training, and confidence to lead their families and communities.",
    ],
    objectives: [
      "Provide vocational and digital skill training to women aged 18–45",
      "Facilitate self-help groups and micro-finance access",
      "Build leadership capacity through workshops and mentorship",
      "Create sustainable market linkages for women entrepreneurs",
    ],
    activities: [
      { title: "Skill Training Centers", desc: "Hands-on training in tailoring, beauty, computers, and crafts across 12 centers." },
      { title: "Entrepreneurship Bootcamps", desc: "Business basics, finance literacy, and pitch coaching for aspiring founders." },
      { title: "Leadership Circles", desc: "Monthly mentor-led circles building confidence and community leadership." },
      { title: "Market Linkages", desc: "Connecting women-led micro-enterprises to local buyers and exhibitions." },
    ],
    stats: [
      { label: "Women Trained", value: "2,500+" },
      { label: "Self-Help Groups", value: "120" },
      { label: "States Active", value: "8" },
      { label: "Years Running", value: "10+" },
    ],
    locations: ["Lucknow", "Kanpur", "Varanasi", "Patna", "Bhopal", "Jaipur", "Delhi NCR", "Mumbai"],
  },
  {
    slug: "shiksha-setu-project",
    img: program2,
    title: "Shiksha Setu Project",
    desc: "Supporting education for children in rural and underserved areas across India.",
    impact: "1,000+ Children",
    loc: "50+ Schools",
    tag: "Education",
    started: "2017",
    about: [
      "Shiksha Setu bridges the learning gap for children in rural and slum communities. We partner with government schools, run learning centers, and provide scholarships to ensure no child is left behind.",
      "Our holistic approach combines academic support, digital learning, sports, and life skills to nurture confident, curious learners.",
    ],
    objectives: [
      "Improve literacy and numeracy outcomes in rural schools",
      "Provide books, uniforms, and scholarships to needy students",
      "Introduce digital classrooms in government schools",
      "Train teachers in modern child-centric pedagogy",
    ],
    activities: [
      { title: "Learning Centers", desc: "After-school remedial learning support for grades 1–8." },
      { title: "Digital Classrooms", desc: "Smart boards and tablets in 30+ partner schools." },
      { title: "Scholarship Drive", desc: "Annual scholarships for girls completing secondary education." },
      { title: "Teacher Training", desc: "Pedagogy workshops for 200+ government school teachers." },
    ],
    stats: [
      { label: "Children Supported", value: "1,000+" },
      { label: "Partner Schools", value: "50+" },
      { label: "Teachers Trained", value: "200+" },
      { label: "Scholarships Given", value: "350" },
    ],
    locations: ["Lucknow", "Sitapur", "Hardoi", "Barabanki", "Unnao"],
  },
  {
    slug: "swasthya-suraksha-project",
    img: program3,
    title: "Swasthya Suraksha Project",
    desc: "Free health check-up camps and awareness drives for villages and communities.",
    impact: "5,000+ Beneficiaries",
    loc: "120+ Camps",
    tag: "Health",
    started: "2018",
    about: [
      "Swasthya Suraksha brings preventive and primary healthcare to villages with little or no access to medical services. Our mobile camps offer free check-ups, medicines, and specialist consultations.",
      "We also run awareness drives on hygiene, maternal health, nutrition, and menstrual care to build healthier communities from the ground up.",
    ],
    objectives: [
      "Conduct free health and eye check-up camps in remote villages",
      "Distribute essential medicines and hygiene kits",
      "Run awareness drives on maternal, child, and menstrual health",
      "Link patients to government health schemes and hospitals",
    ],
    activities: [
      { title: "Mobile Health Camps", desc: "Weekly camps with general physicians, gynaecologists and pediatricians." },
      { title: "Eye & Dental Camps", desc: "Free screening, spectacles, and basic dental care for villagers." },
      { title: "Awareness Drives", desc: "Nukkad nataks and workshops on hygiene and maternal health." },
      { title: "Hygiene Kit Distribution", desc: "Sanitary pads, soaps, and hygiene kits for women and adolescents." },
    ],
    stats: [
      { label: "Beneficiaries", value: "5,000+" },
      { label: "Camps Held", value: "120+" },
      { label: "Doctors Volunteered", value: "85" },
      { label: "Villages Covered", value: "60+" },
    ],
    locations: ["Lucknow Rural", "Sitapur", "Raebareli", "Bahraich", "Gonda"],
  },
  {
    slug: "gram-vikas-initiative",
    img: program4,
    title: "Gram Vikas Initiative",
    desc: "Working for sustainable rural development, livelihoods and infrastructure.",
    impact: "40+ Villages",
    loc: "5 Districts",
    tag: "Rural",
    started: "2016",
    about: [
      "Gram Vikas is our integrated rural development program working with village panchayats to build sustainable livelihoods, infrastructure, and self-governance.",
      "From clean water and sanitation to farmer training and women-led cooperatives, we co-create village-level solutions with the community.",
    ],
    objectives: [
      "Promote sustainable agriculture and farmer collectives",
      "Improve access to clean water and sanitation",
      "Strengthen panchayat-level governance and women's participation",
      "Build village infrastructure with community partnership",
    ],
    activities: [
      { title: "Farmer Training", desc: "Organic farming and crop-diversification workshops." },
      { title: "WASH Program", desc: "Toilet construction, water filters, and hygiene campaigns." },
      { title: "Cooperative Building", desc: "Women-led dairy and handicraft cooperatives." },
      { title: "Panchayat Capacity", desc: "Training for elected women representatives." },
    ],
    stats: [
      { label: "Villages", value: "40+" },
      { label: "Districts", value: "5" },
      { label: "Farmers Trained", value: "1,200" },
      { label: "Cooperatives", value: "18" },
    ],
    locations: ["Sitapur", "Hardoi", "Barabanki", "Unnao", "Raebareli"],
  },
  {
    slug: "bal-suraksha-mission",
    img: program2,
    title: "Bal Suraksha Mission",
    desc: "Child safety, nutrition and early-childhood development programs.",
    impact: "3,000+ Children",
    loc: "30+ Centers",
    tag: "Children",
    started: "2019",
    about: [
      "Bal Suraksha Mission protects and nurtures children from vulnerable communities through nutrition support, early-childhood education, and child-rights awareness.",
      "We work closely with anganwadis, schools, and parents to ensure every child gets a safe, nourished, and joyful start to life.",
    ],
    objectives: [
      "Combat malnutrition through supplementary nutrition programs",
      "Run early-childhood learning centers for ages 3–6",
      "Train parents and caregivers on child rights and safety",
      "Rescue and rehabilitate children in distress",
    ],
    activities: [
      { title: "Nutrition Kits", desc: "Monthly nutrition support for malnourished children." },
      { title: "ECCE Centers", desc: "Play-based learning centers for pre-schoolers." },
      { title: "Child Safety Workshops", desc: "Good touch / bad touch, online safety sessions." },
      { title: "Rescue & Rehab", desc: "Working with CWC to rescue children in distress." },
    ],
    stats: [
      { label: "Children Reached", value: "3,000+" },
      { label: "Centers", value: "30+" },
      { label: "Nutrition Kits", value: "12,000" },
      { label: "Workshops", value: "240" },
    ],
    locations: ["Lucknow", "Kanpur", "Varanasi", "Allahabad"],
  },
  {
    slug: "sakhi-legal-aid",
    img: program1,
    title: "Sakhi Legal Aid",
    desc: "Free legal counseling and rights awareness for women across UP and beyond.",
    impact: "1,200+ Cases",
    loc: "5 States",
    tag: "Legal",
    started: "2014",
    about: [
      "Sakhi Legal Aid provides free legal counseling, paralegal support, and rights awareness to women facing domestic violence, harassment, and discrimination.",
      "Our network of lawyers, counselors, and trained paralegals stands with survivors at every step — from FIRs to courtrooms to rehabilitation.",
    ],
    objectives: [
      "Provide free legal counseling and representation to women",
      "Raise awareness on women's legal rights and POSH Act",
      "Train paralegal volunteers in every district",
      "Partner with police and CWC for survivor support",
    ],
    activities: [
      { title: "Legal Helpline", desc: "24x7 helpline for women in distress." },
      { title: "Counseling Centers", desc: "Free in-person legal and emotional counseling." },
      { title: "Rights Workshops", desc: "Awareness sessions in schools, colleges, and panchayats." },
      { title: "Paralegal Training", desc: "Training village women as paralegal volunteers." },
    ],
    stats: [
      { label: "Cases Handled", value: "1,200+" },
      { label: "States", value: "5" },
      { label: "Paralegals Trained", value: "180" },
      { label: "Workshops", value: "500+" },
    ],
    locations: ["Lucknow", "Delhi", "Patna", "Bhopal", "Jaipur"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
