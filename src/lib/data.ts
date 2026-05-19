import type { Project, Skill, Experience } from '@/types';

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Nebula Dashboard',
    description: 'A real-time analytics dashboard with customizable widgets, dark mode, and drag-and-drop layout.',
    tags: ['React', 'TypeScript', 'D3', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
    link: '#',
    repo: '#',
  },
  {
    id: 'p2',
    title: 'Pulse Music',
    description: 'A minimal music streaming web app with offline playlists, equalizer, and lyric sync.',
    tags: ['Next.js', 'Web Audio API', 'Zustand'],
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80&auto=format&fit=crop',
    link: '#',
    repo: '#',
  },
  {
    id: 'p3',
    title: 'Orbit CRM',
    description: 'Lightweight CRM for indie founders with pipeline tracking, email integration, and reports.',
    tags: ['React', 'Node', 'Postgres'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 'p4',
    title: 'Forge UI Kit',
    description: 'An open-source accessible React component library used by 3k+ developers worldwide.',
    tags: ['React', 'Radix', 'Storybook'],
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80&auto=format&fit=crop',
    repo: '#',
  },
  {
    id: 'p5',
    title: 'Trailblaze',
    description: 'A hiking route planner with elevation profiles, GPX export, and offline maps.',
    tags: ['React Native', 'Mapbox'],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 'p6',
    title: 'Lume',
    description: 'AI-powered note taking app that organizes ideas into mind maps automatically.',
    tags: ['React', 'OpenAI', 'Vite'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80&auto=format&fit=crop',
    link: '#',
  },
];

export const skills: Skill[] = [
  { name: 'TypeScript', level: 95 },
  { name: 'React / Next.js', level: 92 },
  { name: 'Node.js', level: 85 },
  { name: 'UI / UX Design', level: 80 },
  { name: 'GraphQL', level: 75 },
  { name: 'AWS / Docker', level: 70 },
];

export const experience: Experience[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Stripe',
    period: '2023 — Present',
    description: 'Leading the design systems team. Shipping high-performance billing UIs used by millions.',
  },
  {
    role: 'Product Engineer',
    company: 'Linear',
    period: '2021 — 2023',
    description: 'Built collaborative real-time features and refined the core issue tracking experience.',
  },
  {
    role: 'Software Engineer',
    company: 'Vercel',
    period: '2019 — 2021',
    description: 'Worked on the Next.js team. Improved build performance and developer ergonomics.',
  },
  {
    role: 'Freelance Developer',
    company: 'Self-employed',
    period: '2017 — 2019',
    description: 'Designed and built web apps for early-stage startups across fintech and healthcare.',
  },
];
