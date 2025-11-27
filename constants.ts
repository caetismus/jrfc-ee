import { Project, Skill, EducationItem, ExperienceItem, CertificationItem, ContactInfo } from './types';

export const ENGINEER_NAME = "James Cubito";
export const ENGINEER_ROLE = "Graduate Electrical Engineer";
export const HERO_DESCRIPTION = "Graduating Electrical Engineering student at Pamantasan ng Lungsod ng Maynila with a focus on power systems, controls, and renewable energy. Interested in gaining hands-on experience, developing technical expertise, and contributing to sustainable energy solutions. Open to opportunities for learning, collaboration, and professional growth.";

// --- CONTACT INFORMATION ---
// IMPORTANT: Upload 'viber_qr.png' to public/assets/
export const CONTACT_INFO: ContactInfo = {
  email: "jamescubito@gmail.com",
  viberQrImage: "assets/viber_qr.png", 
  linkedinUrl: "https://linkedin.com/in/jamescubito",
  linkedinDisplay: "in/jamescubito"
};

// =============================================================================
//  EDUCATION HISTORY
//  IMPORTANT: Place logo images in the 'public/assets' folder.
// =============================================================================
export const EDUCATION: EducationItem[] = [
  {
    school: "Pamantasan ng Lungsod ng Maynila",
    degree: "Bachelor of Science in Electrical Engineering",
    location: "Intramuros, Manila",
    year: "2020 - 2026",
    logo: "assets/plm.png",
    highlights: [
      "Member: PLM DOST Scholars Association",
      "Member: PLM Junior Institute of Electrical Engineers",
      "Scholar: DOST-SEI Merit 2020"
    ]
  }
];

// =============================================================================
//  EXPERIENCE / INTERNSHIPS
//  Tip: Wrap text in **double asterisks** to make it bold (e.g., **AutoCAD**)
//  IMPORTANT: Place logo images in the 'public/assets' folder.
// =============================================================================
export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Intern, Plant Performance and Asset Management",
    company: "ACEN",
    location: "Makati",
    duration: "July – Oct 2025",
    type: "Internship",
    logo: "assets/acen.png",
    description: [
      "Assisted the Plant Performance Team in consolidating operational data from multiple plant sites.",
      "Streamlined the plant downtime data collection and analysis using advanced MS Excel automation methods, reducing manual overhead and reducing entry errors.",
      "Prepared and presented daily performance reports for management using Tableau and Excel Power Query.",
      "Utilized Snowflake SQL for data extraction and analysis to support reporting accuracy.",
      "Coordinated with several solar and wind plants on submission of RCA reports on issues for team analysis.",
      "Spearheaded the successful handover of the Daily Asset Performance Report framework to the Data Management team, completing the full transition within a 1-month timeline."
    ]
  },
  {
    role: "Engineering Intern",
    company: "IRAH Solutions and Service, Inc.",
    location: "Quezon City",
    duration: "July – Aug 2024",
    type: "Internship",
    logo: "assets/irah.png",
    description: [
      "Assisted in the design and physical installation of FDAS and auxiliary systems, ensuring accurate wiring compliant with safety standards.",
      "Resolved site equipment shortages by coordinating with the main office to expedite logistics, effectively preventing project downtime.",
      "Managed onsite administrative logistics of allowance distribution to the intern team assigned to the site."
    ]
  }
];

// =============================================================================
//  CERTIFICATIONS & AWARDS
//  IMPORTANT: Place logo images in the 'public/assets' folder.
// =============================================================================
export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Lean Six Sigma Yellow Belt",
    issuer: "MF Treinamentos",
    year: "2025",
    logo: "assets/mf_treinamentos.png"
  },
  {
    title: "Electrical Installation & Maintenance NCII",
    issuer: "TESDA",
    year: "2025",
    logo: "assets/tesda.png"
  },
  {
    title: "Photovoltaic System Installation NCII",
    issuer: "eTESDA",
    year: "2025",
    logo: "assets/tesda.png"
  },
  {
    title: "Merit Scholar",
    issuer: "DOST-Science Education Institute",
    year: "2020",
    logo: "assets/dost.png"
  }
];

// =============================================================================
//  ACADEMIC PROJECTS
// =============================================================================
export const ACADEMIC_PROJECTS: Project[] = [
  {
    id: 'thesis',
    title: "Project Thesis: Biofuel Production",
    subtitle: "Anaerobic Digestion of Chlorophyta Biomass Co-digested with Livestock Manure: Harnessing Biogas for Methane-Derived Electrochemical Energy Conversion in Cabuyao, Laguna",
    category: "Research",
    description: "Small-scale exploratory study project on a modified biomass feedstock based on algae and cattle waste mixture for methane gas production as alternative fuel source for biogas generators.",
    technologies: ["Biomass Feedstock", "Renewable Energy", "Research Methodology"]
  },
  {
    id: 'salestrackr',
    title: "AquaSales: Python-Based Sales Tracking System",
    category: "Software",
    description: "Developed a digital tracking system to tabulate daily sales and stock of a water refilling station, increasing daily productivity and efficiency.",
    technologies: ["Python", "Data Management", "Efficiency Optimization"]
  },
  {
    id: 'xl-fault-calc',
    title: "Excel-based Symmetrical Fault Calculator",
    category: "Power Systems",
    description: "Developed a fault calculator for three-phase faults based on configurable number of buses and line parameters using Z-bus method.",
    technologies: ["MS Excel", "Power System Analysis", "Z-bus Method"]
  },
  {
    id: 'relay-table-game',
    title: "Relay-based 4-Player Button Table for Gameshow",
    category: "Power Electronics",
    description: "Developed an extendable four-player gameshow system using relays connected to switches, LEDs, and buttons. The first player to press their button lights up their corresponding LED, disabling the remaining LEDs.",
    technologies: ["Relay Logic", "Circuit Design", "Hardware Prototyping"]
  },
  {
    id: 'transformer',
    title: "230/120V 100VA Transformer",
    category: "AC Machines",
    description: "Constructed a DIY wire-wound shell-type transformer using separate components and materials with specified VA rating; calculated necessary winding ratio for voltage output.",
    technologies: ["Transformer Design", "Winding Calculations", "Fabrication"]
  },
  {
    id: 'dc-supply',
    title: "DC Power Supply",
    category: "Power Electronics",
    description: "Constructed an adjustable DC power supply from scratch with various electronic components; designed a self-etched rectifier as a component.",
    technologies: ["PCB Etching", "Power Electronics", "Component Assembly"]
  },
  {
    id: 'sumobot',
    title: "Arduino-based Sumobot",
    category: "Robotics",
    description: "Developed a small sumobot using arduino microprocessor utilizing various sensors for use in college organized sumobot competition, ranked 3rd for EE department.",
    technologies: ["Arduino", "Sensors", "C++", "Robotics"]
  },
  {
    id: 'shs-capstone',
    title: "Research Capstone: Statistical Correlational Study",
    subtitle: "Statistical Analysis of Psychological Health and GWA of DLSU 118 STEM Students",
    category: "Research",
    description: "Conducted and analyzed a statistical correlational study of GWA and mental health of university senior high school STEM students in DLSU Manila.",
    technologies: ["Statistical Analysis", "Data Correlation", "Academic Research"]
  }
];

// =============================================================================
//  PERSONAL PROJECTS
// =============================================================================
export const PERSONAL_PROJECTS: Project[] = [
  {
    id: 'xl-fault-calc',
    title: "Excel-based Symmetrical Fault Calculator",
    category: "Power Systems",
    description: "(Under development) Fault-type selectable and parameter configurable n-bus electrical fault calculator built using python and python libraries utilizing Z-bus method. Created to better understand electrical faults and cross-check answers. ",
    technologies: ["Python", "Numpy", "Power System Analysis", "Z-bus Method"]
  }
];

// =============================================================================
//  SKILLS
// =============================================================================
export const SKILLS: Skill[] = [
  { name: "Microsoft Office Suite", category: "Software", details: "Excel, Word, Powerpoint, Teams" },
  { name: "Google Workspace", category: "Software", details: "Drive, Docs, Sheets, Slides" },
  { name: "Operating Systems", category: "Software", details: "Windows, Linux" },
  { name: "AutoCAD", category: "Software" },
  { name: "MATLAB", category: "Programming", details: "Working Knowledge" },
  { name: "PowerWorld Simulator", category: "Software" },
  { name: "DIALux evo", category: "Software" },
  { name: "PowerBI", category: "Software" },
  { name: "Snowflake SQL", category: "Software" },
  { name: "Python", category: "Programming", details: "Working Knowledge" },
  { name: "SQL", category: "Programming", details: "Working Knowledge" },
  { name: "C/C++", category: "Programming", details: "Basic Knowledge" },
  { name: "Arduino", category: "Core" },
  { name: "Electrical Circuits", category: "Core" },
  { name: "Electrical Machines", category: "Core" },
  { name: "Electrical Design and Illumination", category: "Core" },
  { name: "Power Plant Design", category: "Core" },
];
