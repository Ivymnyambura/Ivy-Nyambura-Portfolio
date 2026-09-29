export interface ProjectMeta {
  label: string;
  value: string;
}

export interface Project {
  index: string;
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  technologies: string[];
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  meta: ProjectMeta[];
  featured: boolean;
  accentHue: string;
}

export const projects: Project[] = [
  {
    index: '01',
    slug: 'facetally-fras',
    title: 'FACETALLY / FRAS',
    subtitle: 'Facial-Recognition Attendance Platform',
    year: '2025',
    role: 'Lead Developer · UI/UX Design',
    technologies: ['Facial Recognition', 'Hedera', 'React', 'TypeScript', 'Node.js'],
    description:
      'A facial-recognition attendance platform designed to automate student attendance tracking — replacing manual roll calls with a seamless, identity-verified check-in flow.',
    problem:
      'Manual attendance is slow, prone to proxy attendance, and generates no lasting record of value. Institutions need a way to verify who was physically present without adding friction.',
    solution:
      'FRAS captures and matches facial signatures at the point of entry, logging attendance automatically. A Hedera-based "Proof of Presence" concept rewards verified attendance with an immutable, tamper-resistant record.',
    outcome:
      'A working exploration of biometric attendance and blockchain-verified presence — demonstrating how identity, automation, and distributed ledgers can converge into a single, trustworthy student experience.',
    meta: [
      { label: 'Type', value: 'Capstone / Research' },
      { label: 'Scope', value: 'Full-Stack · Design' },
      { label: 'Status', value: 'In Development' },
    ],
    featured: true,
    accentHue: '197, 255, 61',
  },
  {
    index: '02',
    slug: 'jirani-mart',
    title: 'JIRANI-MART',
    subtitle: 'Supermarket & Bakery E-Commerce',
    year: '2024',
    role: 'Frontend · UI/UX',
    technologies: ['React', 'TypeScript', 'Tailwind', 'REST API'],
    description:
      'A modern supermarket and bakery e-commerce concept focused on clean shopping experiences — from product discovery to checkout.',
    problem: 'Local grocery shopping online is cluttered, slow, and visually overwhelming. Shoppers struggle to find what they need quickly.',
    solution:
      'Jirani-Mart strips the interface back to essentials: generous product imagery, a calm cart flow, and a checkout that respects the user\'s time.',
    outcome:
      'A concept that proves e-commerce for everyday goods can feel considered and calm rather than noisy and transactional.',
    meta: [
      { label: 'Type', value: 'Concept Project' },
      { label: 'Scope', value: 'Frontend · Design' },
      { label: 'Status', value: 'Concept' },
    ],
    featured: false,
    accentHue: '200, 200, 195',
  },
  {
    index: '03',
    slug: 'akida-sports-club',
    title: 'AKIDA SPORTS CLUB',
    subtitle: 'Club Management System',
    year: '2025',
    role: 'Full-Stack · UI/UX',
    technologies: ['Java', 'JavaFX', 'MySQL', 'Figma'],
    description:
      'A desktop management system for members, teams, equipment, events, and payments — bringing every club operation under one roof.',
    problem: 'Sports clubs juggle spreadsheets, paper records, and disconnected tools to manage members, gear, and events. Data is lost; payments are missed.',
    solution:
      'Akida consolidates membership, team rosters, equipment inventory, event scheduling, and payment tracking into a single desktop application with a clear, navigable interface.',
    outcome:
      'A functional management tool that reduces administrative overhead and gives club operators a single source of truth.',
    meta: [
      { label: 'Type', value: 'Desktop Application' },
      { label: 'Scope', value: 'Full-Stack · Design' },
      { label: 'Status', value: 'Completed' },
    ],
    featured: false,
    accentHue: '180, 180, 175',
  },
];
