export const site = {
  name: "Vardhnam Consulting",
  tagline: "Growth Never Stops…!",
  quote: "Growth means change, and change involves risk. Stepping from the known, to the unknown.",
  vision: "To be a leading Human Capital solutions provider partnering organizations' growth.",
  address: "B-308 Parsvanath Prestige, Sector 93-A, Noida",
  phones: ["+91 98998 91107", "0120-4241067"],
  email: "devendra@vardhnamconsulting.in",
  website: "vardhnamconsulting.in",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#programs", label: "Programs" },
  { href: "#approach", label: "Approach" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "03", label: "Complementary practices" },
  { value: "04", label: "Signature programs" },
  { value: "25–30", label: "Participants per batch" },
  { value: "3", label: "Phase delivery approach" },
];

export const aboutPoints = [
  "Led by MBA and M.Psy. (HRDM) professionals from reputed institutes",
  "Hands-on experience across Public, Private and Multinational settings",
  "Strategies that build a high-performance culture through engagement",
  "Strong leadership commitment and stakeholder involvement at the core",
];

export const codes = [
  { title: "HR Code", lead: "To build", items: ["Competence", "Motivation", "Commitment", "Culture"] },
  { title: "Strategy Code", lead: "To link", items: ["Strategy", "Structure", "Performance"] },
];

export const institutionFocus = [
  "Professional Builder Programs",
  "Faculty Development Programs",
  "Building Entrepreneurial Skills",
  "Interviewing Skills",
  "Presentation Skills",
  "Mapping Suicidal Tendencies in Students",
];

export type Service = {
  id: string;
  title: string;
  summary: string;
  items: { name: string; text: string }[];
  expertise: string[];
};

export const services: Service[] = [
  {
    id: "behavioral",
    title: "Behavioral Training",
    summary:
      "Experiential soft-skills programs that ignite curious minds, maximize potential and improve on-job performance.",
    items: [
      { name: "Dreams-to-Reality", text: "Builds the right attitudes in young executives towards career and organizational life." },
      { name: "Building a 'can-do' attitude", text: "For executives driving change or handling customer interfaces." },
      { name: "Conflict Management", text: "Better team performance and interpersonal relations." },
      { name: "Taking Initiative", text: "Develops pro-activeness to tap opportunities and deliver quality." },
    ],
    expertise: ["Presentation Skills", "Selling Skills", "Voice & Accent Neutralization", "Negotiation Skills", "Customer Relationships", "Business Etiquette"],
  },
  {
    id: "strategy",
    title: "Strategy & Change Management",
    summary:
      "Assessment of HR systems and processes to find gaps, followed by hand-held implementation and ongoing support.",
    items: [
      { name: "Assessments & Surveys", text: "Identify gaps in systems and processes and the methods to bridge them." },
      { name: "Streamlining People Processes", text: "Benchmark best practices and apply advanced HR tools." },
      { name: "Designing HR Systems", text: "Establish or redefine HR strategy, systems and policies." },
    ],
    expertise: ["Performance Management", "Compensation & Benefits", "Talent Acquisition", "Assessment Centers", "Career Planning", "Coaching & Mentoring", "Employee Engagement", "Rewards & Recognition"],
  },
  {
    id: "outsourcing",
    title: "Outsourcing Solutions",
    summary:
      "End-to-end people-process management models that deliver consistent quality and lead to employee satisfaction.",
    items: [
      { name: "Training System", text: "Identify needs, plan the training calendar and deliver programs." },
      { name: "Induction & Socialization", text: "A complete induction process for new hires." },
      { name: "Executive Selection", text: "Pre-recruitment assessments for better hiring decisions." },
      { name: "Organizational Health Assessments", text: "Regular reviews that help monitor HR effectiveness." },
    ],
    expertise: ["Professional Search", "Performance Assessments", "Organization Health Surveys", "Payroll Management"],
  },
];

export type Program = {
  title: string;
  tagline: string;
  quote: string;
  duration: string;
  objectives: { name: string; text: string }[];
};

export const programs: Program[] = [
  {
    title: "Performance Feedback",
    tagline: "Creating a compelling vision towards performance",
    quote: "Treat people as if they were what they ought to be and you help them become what they are capable of being.",
    duration: "2 days · 12 hrs",
    objectives: [
      { name: "Why we hesitate", text: "Surface the blocks that prevent genuine feedback." },
      { name: "Myths & assumptions", text: "Address assumptions that shape performance management." },
      { name: "Feedback tools", text: "Understand the process, conditions and supportive structures." },
      { name: "Behavioral skills", text: "Show how positive feedback builds intrinsic motivation." },
    ],
  },
  {
    title: "Customer Interface",
    tagline: "Developing an enabling approach",
    quote: "There are no traffic jams along the extra mile.",
    duration: "1–2 days · 6–12 hrs",
    objectives: [
      { name: "Systems thinking", text: "Map the process linking customer, service and expectations." },
      { name: "Proactive approach", text: "Overcome limiting thought patterns and assumptions." },
      { name: "Behavioral competence", text: "Close the behavioral gaps critical to customer interface." },
      { name: "Demonstrate learning", text: "Learn through exercises and simulations." },
    ],
  },
  {
    title: "Building Initiative",
    tagline: "Unleash your potential by taking initiative",
    quote: "Success seems to be connected with action. Successful people keep moving.",
    duration: "1–2 days · 6–12 hrs",
    objectives: [
      { name: "Goal setting", text: "Set a goal and a realistic action plan." },
      { name: "Barriers to initiative", text: "Identify and overcome what holds managers back." },
      { name: "Attributes of initiative", text: "Assessment tools give a baseline for development." },
      { name: "Fostering initiative", text: "Assertiveness, creative thinking and self-confidence." },
    ],
  },
  {
    title: "Conflict Management",
    tagline: "Fighting flames without blazing bridges",
    quote: "Best growth and learning occur when conflict is handled honestly and constructively.",
    duration: "2 days · 12 hrs",
    objectives: [
      { name: "Understanding conflict", text: "Nature, perception, individual orientations and types." },
      { name: "Dissecting conflict", text: "Detect early signs and apply different management styles." },
      { name: "Learning the ropes", text: "Skills and strategies for handling difficult situations." },
      { name: "Demonstrate learning", text: "Practice through exercises and simulations." },
    ],
  },
];

export const programSpecifics = {
  batch: "25–30 participants",
  profile: "Managers, team leaders and functional managers with 8–10 years of experience",
  methods: ["Games", "Simulations", "Psychological assessments", "Role plays", "Case studies", "Audio-visual aids"],
};

export const phases = [
  { phase: "Phase I", title: "Plan", points: ["Identify expected outcomes", "Design training capsules", "Select tools, plan & schedule"] },
  { phase: "Phase II", title: "Support", points: ["Mentoring & coaching", "Assessment of training", "Report submission"] },
  { phase: "Phase III", title: "Deliver", points: ["Deliver the program", "Facilitate action learning", "Develop action plans"] },
];

export const kolb = [
  { step: "Experience", text: "Create an experience participants can relate to themselves." },
  { step: "Reflection", text: "Encourage participants to reflect on that experience." },
  { step: "Learning", text: "Trainers draw out learning and address behavioral issues jointly." },
  { step: "Experimenting", text: "Action learning to apply insights in real-life situations." },
];

export const methodology = ["Theory", "Practical", "Mentoring"];

export const philosophy = "We take care of those who take care of the learning needs of many, by providing them with an environment where they do not have to, but want to create, innovate and grow.";

export const teamStrengths = [
  { title: "Grounded in psychology", text: "Qualifications in psychology and business management inform our understanding of people and organizations." },
  { title: "Learning by doing", text: "Team teaching, case studies, role plays, games and simulations turn ideas into practical experience." },
  { title: "Connected to the workplace", text: "Hands-on industry and education experience helps us relate learning to real organizational challenges." },
];

export const programInsights = [
  "Timely, helpful feedback starts with understanding the barriers to open communication. This program looks beyond appraisal to develop constructive feedback conversations.",
  "Better service begins within. Supporting internal customers and colleagues helps create a more satisfying workplace and a better experience for external customers.",
  "Initiative begins with the readiness to act. Participants explore their goals, identify barriers and develop the confidence to take a practical first step.",
  "Understanding another person's perspective creates room for better outcomes. Active listening, communication and negotiation help participants handle conflict constructively.",
];

export type Member = { name: string; role: string; image: string; bio: string[]; highlights: string[] };

export const team: Member[] = [
  {
    name: "Damini Agarwal",
    role: "HR Strategist",
    image: "/images/damini-agarwal.jpeg",
    bio: [
      "A seasoned HR practitioner with experience designing and implementing people processes across IT, ITES, Education, Consulting and Manufacturing.",
      "As Head – HR of an IT/ITES organization she owned strategic planning, policy formulation and complete HR operations, helped spearhead CMMi 5 initiatives and built a training culture, then took Training & Development to external clients, making HR an independent profit centre.",
    ],
    highlights: ["MPsy, HR Development & Management — Allahabad University", "Strategic advisor on executive management teams", "Training systems & culture building"],
  },
  {
    name: "Devendra Gaur",
    role: "Business Strategy",
    image: "/images/devendra-gaur.webp",
    bio: [
      "Devendra leads Business Strategy. He is a seasoned leader with 30+ years in business strategies, from pre-school chains to coaching to the EdTech industry.",
      "A known player in public sector engagement, he is results-oriented with a proven track record of optimizing project outcomes. His core skills are in strategic project management and team leadership.",
    ],
    highlights: ["30+ years in education business strategy", "Pre-school chains · Coaching · EdTech", "Public sector engagement", "Strategic project management & team leadership"],
  },
];

export const flagship = {
  eyebrow: "A Vardhnam initiative",
  title: "Dare to Dream",
  tagline: "Impossible is nothing",
  poem: [
    "Only as high as I reach can I grow,",
    "Only as far as I seek can I go,",
    "Only as deep as I look can I see,",
    "Only as much as I dream can I be.",
  ],
  about: [
    "Dare to Dream is designed to question, test, push and challenge one's persona, so you can face and manage today's cut-throat competitive environment.",
    "Its philosophy is simple: try, try till you succeed. Many people hold immense knowledge or talent, yet never realise their dreams, held back by a negative attitude, excuses and a refusal to take responsibility for their actions.",
    "Success is a process: a series of actions, changes and phases, powered by the right attitude and skills. Everyone deserves a life of no regrets, and that choice lies in no one but us.",
  ],
  inside: [
    "Positive Attitude in Life",
    "Laws of Goal Setting",
    "Teamwork and Winning Teams",
    "Presentation Skills",
    "Communication Styles and Spoken English",
    "Know Yourself: Non-Verbal Personality Test",
    "Group Discussion and Interview Skills",
  ],
  closing: "Wishes and hopes are nothing until you take the first step towards making them something.",
  footer: "The future belongs to those who believe in their dreams",
};
