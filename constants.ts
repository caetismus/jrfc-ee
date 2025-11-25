import { Project, Skill } from './types';

export const ENGINEER_NAME = "James Cubito";
export const ENGINEER_ROLE = "Graduate Electrical Engineer";

export const PROJECTS: Project[] = [
  {
    id: 'thesis',
    title: "Project Thesis: Biofuel Production",
    subtitle: "Anaerobic Digestion of Chlorophyta Biomass Co-digested with Livestock Manure: Harnessing Biogas for Methane-Derived Electrochemical Energy Conversion in Cabuyao, Laguna",
    category: "Research",
    description: "Small-scale exploratory study on modified biomass feedstock based on algae and cattle waste for methane gas production as alternative fuel source for biogas generators.",
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
  { name: "Electrical Installation", category: "Core", details: "NCII Certified" },
  { name: "PV System Installation", category: "Core", details: "TESDA Online Certified" }
];

export const SYSTEM_INSTRUCTION = `You are a helpful AI assistant for ${ENGINEER_NAME}, a ${ENGINEER_ROLE}. 
Your goal is to answer questions about James based on his portfolio. 
Be concise, professional, and friendly.

Here is his background information:

Projects:
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n')}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.category})${s.details ? `: ${s.details}` : ''}`).join('\n')}

Education:
- Pamantasan ng Lungsod ng Maynila: BS Electrical Engineering
- De La Salle University Manila: Senior High School (STEM)

Experience:
- ACEN (Ayala Triangle): Plant Performance Intern
- IRAH Solutions: Engineering Intern

If asked about something not listed here, simply state you don't have that information.
`;