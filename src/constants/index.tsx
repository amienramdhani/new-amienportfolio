/**
 * @copyright 2025 Muhammad Amien Ramdhani
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  Facebook,
  FileText,
  Github,
  Globe,
  Home,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MessageCircle,
  // Palette,
  // Rocket,
  Settings,
  // Smartphone,
  User,
  Youtube,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  {
    label: 'Reviews',
    link: '#testimonials',
    icon: MessageCircle,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Facebook,
    label: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100009495925995',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    link: 'https://www.instagram.com/amien_ramdhani/',
  },
  {
    icon: Linkedin,
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/muhammad-amien-ramdhani-5a5621169/',
  },
  {
    icon: Github,
    label: 'Github',
    link: 'https://github.com/amienramdhani',
  },
  {
    icon: Youtube,
    label: 'Youtube',
    link: 'https://www.youtube.com/channel/UCKRQ3iGqsU25RUaAsVbMizQ',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: 'https://i.imgur.com/3QPkwii.png',
    title: 'Instroke (Stroke Prediction)',
    tags: ['Data', 'Analysis'],
    projectLink: 'https://github.com/amienramdhani/Instroke_Capstone',
  },
  {
    imgSrc: 'https://i.ibb.co.com/LS6PCdT/Screenshot-200.png',
    title: 'API for Music App',
    tags: ['API', 'Development'],
    projectLink: 'https://documenter.getpostman.com/view/9938344/2sA3XY5cm3',
  },
  {
    imgSrc: 'https://i.ibb.co.com/W5Dtrp1/Screenshot-206.png',
    title: 'Perpustar app',
    tags: ['APP', 'Development'],
    projectLink: 'https://perpustar.vercel.app/',
  },
  {
    imgSrc: 'https://i.ibb.co.com/2YCkr5Cr/Screenshot-2026-02-15-195555.png',
    title: 'Laravel Mini Drama SASS',
    tags: ['APP', 'Development'],
    projectLink: 'https://github.com/amienramdhani/laravel-dramaapp-bwa',
  },
  {
    imgSrc: 'https://i.ibb.co.com/4ZTLwNvx/Screenshot-2026-02-15-200630.png',
    title: 'Point Of Sales App',
    tags: ['APP', 'Development'],
    projectLink: 'https://github.com/amienramdhani/Point-of-Sales',
  },
  {
    imgSrc: 'https://i.imgur.com/HQvVtgd.png',
    title: 'Data Science Employee',
    tags: ['Data', 'Analysis'],
    projectLink: 'https://github.com/amienramdhani/employee-data-science',
  },
  {
    imgSrc: 'https://i.imgur.com/ZvbkmJv.png',
    title: 'Data Science Education',
    tags: ['Data', 'Analysis'],
    projectLink: 'https://educationds-amienramdhani.streamlit.app/',
  },
];

const education: ExperienceType[] = [
  {
    year: '2020 – 2024',
    title: 'Bachelor of Computer Science',
    institute: 'Sekolah Tinggi Teknologi Terpadu Nurul Fikri (STTNF)',
    desc: 'Focused on Database Management,Data Science, and web application.',
  },
  {
    year: '2024',
    title: 'Full Stack Web Development Bootcamp',
    institute: 'Sanbercode Bootcamp',
    desc: 'Explored advanced design systems, motion design, and real-world projects.',
  },
  {
    year: '2019 – 2020',
    title: 'Software Development',
    institute: 'Pesantren Teknologi Informasi Komunikasi (PeTIK)',
    desc: 'Learned modern JavaScript, PHP, Java, C++,and responsive UI patterns through real-world projects.',
  },
];

const experience: ExperienceType[] = [
  {
    year: 'July 2025 – September 2025',
    title: 'No Code Low Code Developer',
    institute: 'PT. Global Infotech Solution',
    desc: 'Developed internal enterprise applications using HCL VoltMX and Outsystems no-code/low-code platforms to improve operational efficiency and collaboration across teams.',
  },
  {
    year: 'February 2025 – August 2025',
    title: 'Mentor Laskar AI',
    institute: 'Freelance (Laskar AI and Dicoding)',
    desc: 'Membantu 25 peserta Laskar AI dalam pembuatan pembelajaran Data dan Machine Learning, membantu project capstone',
  },
  {
    year: 'January 2025 – March 2025',
    title: 'Freelance web developer',
    institute: 'Freelance / Remote Work',
    desc: 'Development of dental diary application features using Laravel, including debugging and error correction.',
  },
  {
    year: 'September 2024 – January 2025',
    title: 'Backend Developer Intern',
    institute: 'Journal1zadv',
    desc: 'Creating an Attendance Application using Laravel and cron jobs to send attendance reports to email every day.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'Python',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
  },
  {
    label: 'Laravel',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg',
  },
  {
    label: 'Vue',
    imgSrc: 'https://www.svgrepo.com/show/452130/vue.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
  },
  {
    label: 'PHP',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/php-6.svg',
  },
  {
    label: 'Excel',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/excel-4.svg',
  },
  {
    label: 'MySQL',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg',
  },
];

const services: ServiceType[] = [
  // {
  //   title: 'Brand Identity',
  //   desc: 'I craft modern visual identities that help brands stand out through strong typography, colors, and minimal design.',
  //   projects: '32 Projects',
  //   icon: <Palette className='h-6 w-6 text-green-400' />,
  // },
  {
    title: 'Data Analysis',
    desc: 'Performing data analysis using Python, including data cleaning, visualization, and machine learning to extract insights and support decision-making.',
    projects: '2+ Projects',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Web Development',
    desc: 'Building high-performance, SEO-friendly websites using Laravel, Go and modern web technologies.',
    projects: '5+ Projects',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  // {
  //   title: 'Mobile App Design',
  //   desc: 'Creating pixel-perfect app interfaces optimized for both iOS and Android devices with smooth usability.',
  //   projects: '21 Projects',
  //   icon: <Smartphone className='h-6 w-6 text-green-400' />,
  // },
  // {
  //   title: 'Product Launch Strategy',
  //   desc: 'Helping startups prepare their digital products for launch with design systems, marketing pages, and assets.',
  //   projects: '15 Projects',
  //   icon: <Rocket className='h-6 w-6 text-green-400' />,
  // },
];

const statsData: StatsType[] = [
  {
    number: '5+',
    label: 'Happy Clients',
  },
  {
    number: '01+',
    label: 'Years Of Experience',
  },
  {
    number: '10+',
    label: 'Projects Done',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager at Instant Design',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};
