/**
 * Isi layout MOBILE (lebar ≤ 820px). Teks di sini sama dengan panel desktop di `content/sections/*`.
 * Jika Anda mengubah teks di desktop, ubah juga di sini agar tampilan HP ikut berubah.
 * Gambar tetap satu sumber: `content/images.ts`.
 */

/** HP (portrait) / tablet kecil, plus HP landscape (layar sentuh pendek). Samakan dengan @media di app/mobile.css. */
export const MOBILE_QUERY = "(max-width: 820px), (pointer: coarse) and (max-height: 500px)";

export const NAV = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "skills", label: "Skills", icon: "bolt" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "certificates", label: "Certificates", icon: "award" },
  { id: "projects", label: "Projects", icon: "grid" },
  { id: "english-task", label: "English Task", icon: "book" },
  { id: "contact", label: "Contact", icon: "mail" },
] as const;

export type IconName = (typeof NAV)[number]["icon"];

export const LINKS = {
  github: "https://github.com/NessStudio",
  linkedin: "https://www.linkedin.com/in/nendisetiawan/",
  instagram: "https://www.instagram.com/nendistwn_/",
  email: "nendisetiawan10@gmail.com",
};

export const HOME = {
  tagTop: "Tech Enthusiast",
  tagRing: "Available for Work",
  hi: "Hi, I'm",
  role: "✦ Informatics Student",
  first: "NENDI B.",
  last: "SETIAWAN",
  tagline: "Data Science, Machine Learning & AI Enthusiast",
  school: "Universitas Ahmad Dahlan · Yogyakarta",
  stats: [
    { big: "3+", small: "Years", note: "Learning & Build" },
    { big: "5+", small: "Projects", note: "Have Been Complete" },
  ],
};

export const ABOUT = {
  paragraphs: [
    "I am an undergraduate Informatics student at Universitas Ahmad Dahlan with a strong interest in Artificial Intelligence, Machine Learning, and Data Science. I enjoy exploring how technology and data can be used to solve real-world problems.",
    "I have worked on various projects involving data analysis, data visualization, machine learning, and website development. Beyond technology, I am also passionate about graphic design, where I combine creativity and visual storytelling to create engaging and meaningful designs.",
  ],
  highlights: [
    { icon: "bolt", text: "Multiple Projects Completed", tone: "yellow" },
    { icon: "award", text: "Data Science & AI Enthusiast", tone: "cyan" },
    { icon: "grid", text: "Graphic Design & Web Development", tone: "pink" },
  ],
  edu: { kicker: "EDUCATION", school: "UNIVERSITAS AHMAD DAHLAN", degree: "Bachelor's Degree · Informatics", years: "2023 – Present" },
};

export interface SkillGroup {
  title: string;
  tone: "violet" | "yellow" | "cyan" | "navy";
  items: [string, string][];
}

export const SKILLS = {
  intro: "Versatile developer specializing in Data Science, Web Development, and UI/UX Design",
  groups: [
    {
      title: "Programming Language",
      tone: "violet",
      items: [["Python", "2 yrs"], ["C++", "2 yrs"], ["JavaScript", "2 yrs"], ["Java", "1 yr"], ["SQL", "2.5 yrs"], ["Kotlins", "1 yr"]],
    },
    {
      title: "Hard Skills",
      tone: "yellow",
      items: [
        ["NumPy & Pandas", "2 yrs"], ["TensorFlow", "0.5 yrs"], ["Scikit-Learn", "1.5 yrs"], ["Data Cleaning", "1 yr"],
        ["Data Visualization", "1 yr"], ["Motion Graphic", "2.5 yrs"], ["Typography", "2.5 yrs"], ["UI/UX Design", "2 yrs"],
      ],
    },
    {
      title: "Tools",
      tone: "cyan",
      items: [["Git & GitHub", "2 yrs"], ["Google Colab", "2 yrs"], ["React", "0.5 yrs"], ["Jupyter Notebook", "1 yr"], ["Canva", "4 yrs"], ["Figma", "2 yrs"]],
    },
    {
      title: "Soft Skills",
      tone: "navy",
      items: [["Problem Solving", "3 yrs"], ["Analysis", "2 yrs"], ["Team Collaboration", "3 yrs"], ["Adaptibility", "3 yrs"], ["Data Storytelling", "1 yr"]],
    },
  ] as SkillGroup[],
};

export const EXPERIENCE = {
  intro:
    "Driven by continuous learning, my experience spans leading end-to-end web projects, analyzing complex system needs, and guiding students in programming and computational logic.",
  total: "04",
  totalLabel: "TOTAL EXPERIENCE",
  items: [
    {
      date: "22 Sep – 02 Feb 2026",
      span: "6 Months",
      role: "Laboratory Assistant of Data Structures & Programming Fundamentals",
      org: "Universitas Ahmad Dahlan · Yogyakarta",
      desc: "Mentored students in programming fundamentals and data structures (Arrays, Linked Lists, Stacks, Queues, and Trees). Conducted code reviews, lab grading, and debugging support.",
      tag: "Academic",
    },
    {
      date: "10 Mar – 04 Aug 2025",
      span: "6 Months",
      role: "Laboratory Assistant of Algorithms & Web Development",
      org: "Universitas Ahmad Dahlan · Yogyakarta",
      desc: "Guided algorithmic problem-solving, complexity analysis, and web application development (Frontend & Backend). Evaluated practical assignments and semester projects.",
      tag: "Academic",
    },
    {
      date: "10 Mar – 04 Aug 2025",
      span: "6 Months",
      role: "Teaching Assistant of Discrete Mathematics",
      org: "Universitas Ahmad Dahlan · Yogyakarta",
      desc: "Assisted teaching proposition logic, set theory, graph theory, and combinatorics. Designed practice problems and graded student evaluations.",
      tag: "Academic",
    },
    {
      date: "15 May – 17 Jul 2026",
      span: "3 Months",
      role: "Project Manager",
      org: "CodeBloom · Yogyakarta",
      desc: "Led a flower-shop web project, gathered requirements, designed UML/ERD, managed timelines, and coordinated the team.",
      tag: "Academic",
    },
  ],
};

export const CERTIFICATES = {
  intro: "Verified credentials & awards reflecting my technical growth.",
  count: "10+ CERTIFICATES",
  items: [
    { n: 1, logo: "cert-1", issuer: "DICODING × DBS FOUNDATION", name: "Coding Camp 2026: Data Scientist", date: "21 Jul 2026", tone: "navy" },
    { n: 2, logo: "cert-2", issuer: "GOOGLE FOR EDUCATION", name: "Siswa Tersertifikasi Gemini", date: "—", tone: "yellow" },
    { n: 3, logo: "cert-3", issuer: "UNIVERSITAS AHMAD DAHLAN", name: "Asisten Praktikum 2025/2026", date: "30 Jan 2026", tone: "teal" },
    { n: 4, logo: "cert-4", issuer: "UNIVERSITAS AHMAD DAHLAN", name: "Asisten Praktikum 2024/2025", date: "30 Aug 2025", tone: "teal" },
    { n: 5, logo: "cert-5", issuer: "DICODING INDONESIA", name: "Belajar Machine Learning untuk Pemula", date: "3 Apr 2026", tone: "navy" },
    { n: 6, logo: "cert-6", issuer: "DICODING INDONESIA", name: "Belajar Dasar Data Science", date: "18 Feb 2026", tone: "pink" },
  ],
};

export const PROJECTS = {
  all: { label: "View all projects ↗", href: LINKS.github },
  items: [
    {
      img: "project-1",
      featured: true,
      meta: "Website · 2026",
      title: "Redesign & maintenance of the SMK Muhammadiyah 1 Playen website",
      desc: "Upgraded and maintained SMK Muhammadiyah 1 Playen's web presence with a modern UI design, optimized performance, and seamless access to school announcements and student services.",
      tags: ["WordPress", "PHP", "UI/UX Design"],
      links: [
        { label: "Visit Web ↗", href: "https://muspla.sch.id/", primary: true },
        { label: "GitHub", href: LINKS.github, primary: false },
      ],
      tone: "navy",
    },
    {
      img: "project-2",
      featured: false,
      meta: "Data Science · 2026",
      title: "Pathora Dashboard",
      desc: "An analytical dashboard developed using Streamlit and Python to simplify complex data exploration and visualization.",
      tags: ["Streamlit", "Python", "Data Analytics"],
      links: [{ label: "GitHub ↗", href: LINKS.github, primary: true }],
      tone: "yellow",
    },
    {
      img: "project-3",
      featured: false,
      meta: "UI/UX Design · 2024",
      title: "Vroomy UI/UX Design",
      desc: "An intuitive and sleek user interface designed in Figma for Vroomy, a conceptual luxury car rental platform.",
      tags: ["Figma", "UI/UX Design", "Prototyping"],
      links: [
        {
          label: "Prototype ↗",
          href: "https://www.figma.com/proto/kcEly3r0vFax5UAlp87gYz/Responsi-APPl?node-id=49-627&p=f&t=9u4Yb1BKxj0xxVIA-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=38%3A186&show-proto-sidebar=1",
          primary: true,
        },
      ],
      tone: "blue",
    },
  ],
};

export const ENGLISH = {
  items: [
    {
      title: "Professional Writing for Online Shopping",
      desc: "A professional assignment document containing an analysis of online shopping texts and a detailed personal experience with e-commerce platforms.",
      tags: ["Text", "Professional Writting", "E-commerce"],
      href: "https://docs.google.com/document/d/1jNAPgyHsLfljDtuGPxuHcXc9WxA9IzWHP0jr07YyC0A/edit?usp=sharing",
    },
    {
      title: "Self Introduction",
      desc: "A personal video presentation introducing my background, academic journey, skills, and future career goals in English.",
      tags: ["Video", "Self Introduction", "English Presentation"],
      href: "https://drive.google.com/file/d/1LLDPHp3WTW-8kg8ImRazxjdTl6lOcbBv/view?usp=sharing",
    },
    {
      title: "Thesis Background & English Journal",
      desc: "A video presentation explaining the research background and critical analysis of an international English academic journal",
      tags: ["Video", "Thesis Background", "Journal Review"],
      href: "https://drive.google.com/drive/folders/1utei0Wj6463enp-YNolrCYk7zseVwszs?usp=sharing",
    },
  ],
};

export const CONTACT = {
  lead: "Got a project in mind, a job opportunity, or just want to say hi? My inbox is always open. Let's build something amazing together!",
  location: "DIY, INDONESIA",
  formTag: "MESSAGE.FORM",
  fields: [
    { id: "name", label: "NAME", placeholder: "[Your name]", type: "text" },
    { id: "email", label: "EMAIL", placeholder: "[you@email.com]", type: "email" },
    { id: "subject", label: "SUBJECT", placeholder: "[Message subject]", type: "text" },
  ],
  messageLabel: "MESSAGE",
  messagePlaceholder: "[Write your message here...]",
  send: "Send message",
};
