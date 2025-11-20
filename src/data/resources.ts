export interface Resource {
  id: number;
  name: string;
  category: 'crisis' | 'therapy' | 'support' | 'financial' | 'rabbinic';
  description: string;
  phone?: string;
  website?: string;
  email?: string;
  hours?: string;
  kosher?: boolean; // Understands frum community needs
}

export const resources: Resource[] = [
  // Crisis Resources
  {
    id: 1,
    name: "Relief Resources",
    category: "crisis",
    description: "24/7 crisis hotline for the frum community. Trained responders who understand our world. Completely confidential.",
    phone: "718-431-9501",
    website: "https://reliefhelp.org",
    hours: "24/7",
    kosher: true
  },
  {
    id: 2,
    name: "Amudim",
    category: "crisis",
    description: "Crisis intervention and support for addiction, abuse, and mental health crises in the Orthodox community.",
    phone: "646-517-0222",
    website: "https://amudim.org",
    hours: "24/7",
    kosher: true
  },
  {
    id: 3,
    name: "988 Suicide & Crisis Lifeline",
    category: "crisis",
    description: "National crisis line. Not specifically Jewish, but available 24/7 for immediate help.",
    phone: "988",
    website: "https://988lifeline.org",
    hours: "24/7",
    kosher: false
  },

  // Therapy & Mental Health
  {
    id: 4,
    name: "Relief Mental Health Referrals",
    category: "therapy",
    description: "Free referral service to connect you with frum therapists who understand the yeshiva world.",
    phone: "718-431-9501",
    email: "referrals@reliefhelp.org",
    kosher: true
  },
  {
    id: 5,
    name: "Chai Lifeline",
    category: "therapy",
    description: "Support for serious illness, including mental health support and crisis intervention for families.",
    phone: "877-242-4543",
    website: "https://chailifeline.org",
    kosher: true
  },
  {
    id: 6,
    name: "OHEL",
    category: "therapy",
    description: "Mental health services, family counseling, and crisis intervention for the Jewish community.",
    phone: "718-851-6300",
    website: "https://ohelfamily.org",
    kosher: true
  },
  {
    id: 7,
    name: "Nefesh International",
    category: "therapy",
    description: "Directory of Orthodox Jewish mental health professionals worldwide.",
    website: "https://nefesh.org",
    email: "info@nefesh.org",
    kosher: true
  },

  // Support Groups & Community
  {
    id: 8,
    name: "MASK (Mothers and Adults Seeking Knowledge)",
    category: "support",
    description: "Support for families dealing with mental illness. Parent groups, educational programs.",
    phone: "718-645-2110",
    website: "https://maskit.org",
    kosher: true
  },
  {
    id: 9,
    name: "Our Place",
    category: "support",
    description: "Drop-in center for young adults struggling with mental health. Safe, judgment-free space.",
    phone: "718-384-9134",
    website: "https://our-place.org",
    kosher: true
  },
  {
    id: 10,
    name: "Yitti Leibel Helpline",
    category: "support",
    description: "Peer support and referrals for postpartum depression and maternal mental health in the frum community.",
    phone: "718-HELP-NOW",
    website: "https://yittileibelhelpline.org",
    kosher: true
  },

  // Financial Assistance
  {
    id: 11,
    name: "Achiezer",
    category: "financial",
    description: "Financial assistance for therapy and medical expenses. Gemach for mental health treatment costs.",
    phone: "516-569-4536",
    website: "https://achiezer.org",
    kosher: true
  },
  {
    id: 12,
    name: "Misaskim",
    category: "financial",
    description: "Can help navigate insurance and connect to financial resources for treatment.",
    phone: "718-854-4548",
    website: "https://misaskim.org",
    kosher: true
  },
  {
    id: 13,
    name: "The Chessed Fund",
    category: "financial",
    description: "Crowdfunding platform used by many in the community for medical and therapy expenses.",
    website: "https://thechessedfund.com",
    kosher: true
  },

  // Rabbinic Guidance
  {
    id: 14,
    name: "Torah Therapy Foundation",
    category: "rabbinic",
    description: "Rabbinic guidance on mental health issues. Helps navigate halachic questions around treatment.",
    phone: "732-534-4062",
    website: "https://torahtherapy.org",
    kosher: true
  }
];

export const getResourcesByCategory = (category: Resource['category'] | 'all'): Resource[] => {
  if (category === 'all') return resources;
  return resources.filter(resource => resource.category === category);
};

export const categoryNames: Record<Resource['category'], string> = {
  crisis: "Crisis & Immediate Help",
  therapy: "Therapy & Mental Health Services",
  support: "Support Groups & Community",
  financial: "Financial Assistance",
  rabbinic: "Rabbinic Guidance"
};
