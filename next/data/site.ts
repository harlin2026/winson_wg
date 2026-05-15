export type NavItem = {
  label: string;
  href: string;
};

export type Business = {
  title: string;
  image: string;
  href: string;
};

export type FooterGroup = {
  title: string;
  links: NavItem[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Businesses", href: "/our-businesses" },
  { label: "Media Centre", href: "/media-centre/details" },
  { label: "Join Us", href: "/join-us" }
];

export const businesses: Business[] = [
  {
    title: "Information Technology Services",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80",
    href: "/our-businesses"
  },
  {
    title: "Corporate Solutions",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80",
    href: "/our-businesses"
  },
  {
    title: "Project Management",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80",
    href: "/our-businesses"
  },
  {
    title: "Catering",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80",
    href: "/our-businesses"
  },
  {
    title: "Engineering",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80",
    href: "/our-businesses"
  },
  {
    title: "Entertainment",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=700&q=80",
    href: "/our-businesses"
  }
];

export const footerGroups: FooterGroup[] = [
  {
    title: "About Us",
    links: [
      { label: "Group Overview", href: "/about-us#overview" },
      { label: "Our Philosophy", href: "/about-us#philosophy" },
      { label: "Group Culture", href: "/about-us#culture" },
      { label: "Group Structure", href: "/about-us#management" },
      { label: "Milestones", href: "/about-us#milestones" }
    ]
  },
  {
    title: "Our Businesses",
    links: businesses.map((business) => ({ label: business.title, href: business.href }))
  },
  {
    title: "Media Centre",
    links: [
      { label: "Latest News", href: "/media-centre/details" },
      { label: "Important Notes", href: "/media-centre/details" }
    ]
  },
  {
    title: "Join us",
    links: [
      { label: "Talent Concept", href: "/join-us#concept" },
      { label: "Join Our Team", href: "/join-us#jobs" }
    ]
  }
];

export const contact = {
  email: "info@winson-group.com",
  phone: "+853 2896 3473",
  address: "Em Macau, Alameda Dr. Carlos D'assumpcao N 258, Praca Kin Heng Long, Heng Hoi Kuok, Kin Fu Kuok L11"
};

export const heroImages = {
  about: "/images/about-hero.png",
  businesses: "/images/business-hero.jpg",
  media: "/images/media-hero.png",
  join: "/images/join-hero.jpg"
};

export const jobs = [
  {
    title: "Legal & Secretarial | Administration Assistant",
    location: "Macau",
    department: "Headquarters"
  },
  {
    title: "IT | Senior Network Engineer",
    location: "Zhuhai",
    department: "Information Technology"
  },
  {
    title: "IT | Assistant System Manager / Senior System Engineer",
    location: "Zhuhai Hengqin",
    department: "Information Technology",
    responsibilities: [
      "Build and maintain the on-premise data center",
      "Evaluate new technologies and participate in server farm revamp with vendors",
      "Provide prompt production support for different business units",
      "Responsible for maintenance, configuration, and reliable operation of computer systems",
      "Troubleshoot hardware and software errors by running diagnostics and documenting resolutions",
      "Plan and execute infrastructure upgrade projects",
      "Collaborate with cross-functional teams to deliver solutions on time and within budget",
      "Provide production support on 7 x 24 basis"
    ],
    requirements: [
      "Bachelor Degree in Computer Science, Information Technology or relevant disciplines",
      "Hands-on experience with Oracle, MSSQL, MySQL or similar databases",
      "Virtualization experience with VMware, Hyper-V or similar platforms",
      "Knowledge of network management, including routing, switching, and firewalls",
      "Sound knowledge of Microsoft Active Directory, Microsoft Exchange and O365",
      "Good command of written and spoken English and Chinese"
    ]
  }
];

export const newsDetail = {
  title: "News Title 2",
  date: "2025-08-36",
  image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
  paragraphs: [
    "The devastating fire at Tai Po Wang Fuk Court has left our entire Hong Kong community in mourning. Our deepest and most sincere condolences go to the brave firefighter who lost his life in the line of duty and the residents who tragically passed away.",
    "Winson Group stands united with the community to provide care and support to the affected residents, helping them through this difficult time. Understanding that the most urgent current need for affected residents is daily necessities, the foundation swiftly responded by donating and delivering essential supplies.",
    "This fire has rendered numerous families homeless. To support the affected residents and stand with them on the long road ahead as they rebuild their lives, we will provide new mattresses to nearly 2,000 households as follow-up support.",
    "In the face of disaster, let us stand united. We wish everyone safety and strength."
  ]
};
