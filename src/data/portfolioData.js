export const profile = {
  name: "Yash Rane",
  role: "Full Stack Developer",
  focus: ["Java", "Spring Boot", "React"],
  location: "Bangalore, India",
  status: "open to opportunities",
  tagline:
    "I’m a Full Stack Developer focused on building robust backend applications with Java and Spring Boot. I design RESTful APIs, work with relational databases, and connect them with modern React applications to build scalable, practical, and user-centered solutions.",
};

export const contact = {
  email: "yashsrane1818@gmail.com",
  phone: "+91 70195 75272",
  linkedin: "https://www.linkedin.com/in/yash-rane701988378",
  github: "https://github.com/yashrane1810",
  resumeFile: "/Yash_Rane_Resume.pdf",
};

export const experience = [
  {
    role: "Full Stack Developer Intern",
    org: "Risk Guard Enterprise Solutions (RGES India)",
    location: "Hyderabad, India",
    period: "Sep 2025 – Dec 2025",
    points: [
      "Developed and enhanced full-stack web applications using Java, Spring Boot 3, Spring Data JPA and MySQL.",
      "Designed and implemented RESTful APIs and integrated backend services with frontend components.",
      "Performed CRUD operations and managed data persistence using Hibernate and MySQL.",
      "Applied MVC architecture and followed clean, maintainable coding practices.",
      "Collaborated with the team using Git in an Agile development environment.",
    ],
  },
  {
    role: "Full Stack Development Training",
    org: "Self-directed / structured training program",
    location: "",
    period: "",
    points: [
      "Built and tested REST APIs with Spring Boot, validated using Postman.",
      "Developed backend modules with Spring Data JPA and Hibernate for database interaction.",
      "Implemented frontend integration with backend services.",
    ],
  },
];

export const projects = [
  {
    method: "GET",
    path: "/projects/movie-booking-system",
    name: "Movie Ticket Booking System",
    description:
      "A web application for booking and managing movie tickets — listings, seat selection, booking and cancellation, all backed by relational data.",
    stack: ["Java", "Spring Boot 3", "Spring Data JPA", "Hibernate", "MySQL"],
    link: "https://github.com/yashrane1810/Movie-booking-System",
    status: "200 OK",
  },
  {
    method: "GET",
    path: "/projects/mute-patient-assistant",
    name: "AI-Based Silent Communication System for ICU Patients",
    description:
      "Real-time hand-gesture recognition so non-verbal ICU and mute patients can select predefined requests without needing to speak.",
    stack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    link: "https://github.com/yashrane1810/mute-patient-assistant-mouse",
    status: "200 OK",
  },
  {
    method: "PATCH",
    path: "/projects/riskguard-website",
    name: "RiskGuard Company Website Enhancement",
    description:
      "Enhanced and maintained RGES's official website — fixed UI components, integrated REST APIs and optimized data flow.",
    stack: ["Java", "Spring Boot 3", "Spring MVC", "Spring Data JPA", "MySQL"],
    link: null,
    status: "internal",
  },
];

export const skills = [
  { category: "Languages", items: ["Java", "JavaScript", "Python"] },
  { category: "Frontend", items: ["HTML5", "CSS3", "React.js", "Bootstrap 5"] },
  {
    category: "Backend",
    items: ["Spring Boot 3", "Spring Data JPA", "Hibernate", "RESTful APIs"],
  },
  { category: "Databases", items: ["MySQL", "PostgreSQL"] },
  {
    category: "Tools",
    items: [
      "Git",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
      "Eclipse / STS",
      "PyCharm",
    ],
  },
  { category: "Also exploring", items: ["OpenCV (basic)", "Machine learning basics"] },
];

export const education = {
  degree: "Bachelor of Engineering, Computer Science",
  school: "Jain College of Engineering",
  location: "Belagavi, Karnataka, India",
  period: "2022 – 2026",
};

export const certificates = [
  "Java Programming Fundamentals",
  "JavaScript Fundamentals",
  "HTML5, CSS3 & Web Fundamentals",
  "MySQL Database Fundamentals",
  "React.js Development",
  "Generative AI Fundamentals",
];

export const extras = [
  "Finalist, Inceptrix Hackathon — Jain University, Bengaluru",
  "NCC Guard of Honour Commander during an Air Commodore's visit",
  "Represented Uttara Kannada District at the NCC Divisional Level",
  "Attended NCC ATC and Pre-RDC camps",
  "State-level boxer, Dasara Sports",
];

export const sections = [
  { id: "overview", label: "Overview" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
