/* ------------------------------------------------------------------
   NYABIX v2 home page content
   Shared details (phone, email, case studies, testimonials) still
   come from content.js / caseStudies.js.
------------------------------------------------------------------- */

export const navV2 = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#about' },
  {
    label: 'Services',
    href: '#services',
    heading: 'Services',
    intro: 'End-to-end product engineering, from idea to launch and beyond.',
    children: [
      { label: 'AI & Machine Learning', desc: 'LLM apps, automation, analytics', href: '#services' },
      { label: 'Web Development', desc: 'Fast, scalable web platforms', href: '#services' },
      { label: 'Mobile App Development', desc: 'iOS, Android, cross-platform', href: '#services' },
      { label: 'UI/UX Design', desc: 'Research-led product design', href: '#services' },
      { label: 'DevOps & Cloud', desc: 'CI/CD, infrastructure, scaling', href: '#services' },
      { label: 'QA Automation', desc: 'Testing you can ship on', href: '#services' },
    ],
  },
  {
    label: 'Industries',
    href: '#industries',
    heading: 'Industries',
    intro: 'Domain knowledge that shortens ramp-up and reduces risk.',
    children: [
      { label: 'Healthcare', desc: 'Patient apps & clinical tools', href: '#industries' },
      { label: 'Fintech', desc: 'Payments, banking, dashboards', href: '#industries' },
      { label: 'Education', desc: 'Learning platforms & LMS', href: '#industries' },
      { label: 'Logistics', desc: 'Fleet, tracking & delivery', href: '#industries' },
      { label: 'E-commerce', desc: 'Stores, marketplaces, checkout', href: '#industries' },
      { label: 'Real Estate', desc: 'Listings, CRM & portals', href: '#industries' },
    ],
  },
  { label: 'Case Studies', href: '#work' },
  { label: 'Contact Us', href: '#contact' },
];

export const aiBanner = {
  kicker: 'NYABIX AI Lab',
  title: 'Put AI to work in your business',
  body: 'From LLM-powered assistants to predictive analytics, we help teams move from AI ideas to production features.',
  cta: 'Learn More',
};

/* Hero slider — each slide has its own colour accent (hue) and illustration */
export const slides = [
  {
    kicker: 'Custom Software Development',
    title: 'We build software that grows your business',
    body: 'Product strategy, design and engineering under one roof — from MVP to scale.',
    primary: 'Request a Quote',
    art: 'code',
    hue: 210,
  },
  {
    kicker: 'AI & Machine Learning',
    title: 'Turn your data into intelligent products',
    body: 'LLM apps, document AI, forecasting and automation built for real-world use.',
    primary: 'Explore AI',
    art: 'ai',
    hue: 225,
  },
  {
    kicker: 'Mobile App Development',
    title: 'Apps your users will love to open',
    body: 'Native and cross-platform iOS and Android apps with smooth, fast experiences.',
    primary: 'Explore More',
    art: 'mobile',
    hue: 195,
  },
  {
    kicker: 'Web Platforms & SaaS',
    title: 'Web platforms built for speed and scale',
    body: 'Dashboards, portals and SaaS products engineered with modern, proven stacks.',
    primary: 'Explore More',
    art: 'web',
    hue: 232,
  },
  {
    kicker: 'Dedicated Teams',
    title: 'Your team just got bigger',
    body: 'Vetted engineers and designers who join your workflow and ship from week one.',
    primary: 'Hire Developers',
    art: 'team',
    hue: 205,
  },
];

export const servicesV2 = [
  { title: 'AI & Machine Learning', body: 'Intelligent features, chat assistants, document AI and predictive analytics.', icon: 'ai' },
  { title: 'Web Development', body: 'High-performance websites, portals and SaaS platforms with clean architecture.', icon: 'web' },
  { title: 'Mobile App Development', body: 'iOS, Android and cross-platform apps built for speed and great reviews.', icon: 'mobile' },
  { title: 'UI/UX Design', body: 'User research, flows, prototypes and design systems that convert.', icon: 'design' },
  { title: 'DevOps & Cloud', body: 'CI/CD pipelines, cloud architecture and monitoring on AWS, Azure and GCP.', icon: 'cloud' },
  { title: 'QA Automation', body: 'Automated end-to-end, performance and regression testing for every release.', icon: 'qa' },
];

export const industries = [
  { title: 'Healthcare', body: 'Patient portals, telehealth and clinical tools built with privacy first.', icon: 'heart' },
  { title: 'Fintech', body: 'Payments, wallets and dashboards with secure, accurate data flows.', icon: 'money' },
  { title: 'Education', body: 'Learning apps and LMS platforms that keep students engaged.', icon: 'book' },
  { title: 'Logistics', body: 'Fleet tracking, route planning and driver apps that save time.', icon: 'truck' },
  { title: 'E-commerce', body: 'Online stores and marketplaces with fast, smooth checkout.', icon: 'cart' },
  { title: 'Real Estate', body: 'Listing platforms, CRMs and tenant portals.', icon: 'building' },
  { title: 'Hospitality', body: 'Booking engines, guest apps and operations tools.', icon: 'hotel' },
];

export const solutions = {
  title: 'Solutions that move your business forward',
  body: 'Whether you are launching something new or modernising what you already have, NYABIX brings the skills and the process to deliver it.',
  items: [
    { label: 'Machine Learning', icon: 'ai' },
    { label: 'Generative AI', icon: 'star' },
    { label: 'Mobile Apps', icon: 'mobile' },
    { label: 'Cloud Solutions', icon: 'cloud' },
    { label: 'UI/UX Design', icon: 'design' },
    { label: 'Data Analytics', icon: 'chart' },
    { label: 'API Integrations', icon: 'layers' },
    { label: 'Cyber Security', icon: 'lock' },
    { label: 'Digital Marketing', icon: 'megaphone' },
  ],
};

export const techStack = {
  Frontend: ['React', 'Next.js', 'Vue', 'Angular', 'TypeScript', 'Tailwind'],
  Mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase'],
  Backend: ['Node.js', 'Python', 'Django', 'FastAPI', 'Go', 'Laravel'],
  'Cloud & Data': ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'PostgreSQL'],
  'AI & ML': ['OpenAI API', 'LangChain', 'PyTorch', 'TensorFlow', 'Hugging Face', 'Pandas'],
};

/* TODO: replace with your real clients */
export const clientsV2 = ['Lumora', 'Kestrel', 'Orbitly', 'Fernway', 'Quantix', 'Helixa', 'Brightpath', 'Novanta', 'Zentro', 'Arcwell', 'Mavik', 'Solenne'];

/* TODO: replace with countries/cities you serve */
export const locations = ['Pakistan', 'United States', 'United Kingdom', 'UAE', 'Saudi Arabia', 'Canada', 'Australia'];

export const footerV2 = [
  { title: 'Services', links: [
    { label: 'AI & ML', href: '#services' }, { label: 'Web Development', href: '#services' },
    { label: 'Mobile Apps', href: '#services' }, { label: 'UI/UX Design', href: '#services' },
    { label: 'DevOps & Cloud', href: '#services' },
  ] },
  { title: 'Industries', links: [
    { label: 'Healthcare', href: '#industries' }, { label: 'Fintech', href: '#industries' },
    { label: 'Education', href: '#industries' }, { label: 'Logistics', href: '#industries' },
    { label: 'E-commerce', href: '#industries' },
  ] },
  { title: 'Company', links: [
    { label: 'About Us', href: '#about' }, { label: 'Case Studies', href: '#work' },
    { label: 'Reviews', href: '#reviews' }, { label: 'Contact', href: '#contact' },
  ] },
];
