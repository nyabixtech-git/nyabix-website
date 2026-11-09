/* ------------------------------------------------------------------
   NYABIX — site content
   Every piece of text, number and list on the site lives here.
   Replace the placeholder values with your real company details.
------------------------------------------------------------------- */

export const company = {
    name: 'NYABIX',
    phone: '+92 (21) 300-NYABIX', // TODO: your phone number
    phoneHref: 'tel:+922130069224',
    email: 'contacts@nybix.com', // TODO: your email
    address: 'Dallas (USA) & Karachi (PK)', // TODO: your address
    bookingUrl: '#contact', // TODO: Calendly or booking link
};

export const navLinks = [{
        label: 'Process',
        href: '#process'
    },
    {
        label: 'About',
        href: '#why',
        children: [{
                label: 'Why NYABIX',
                href: '#why',
                desc: 'How we work and what sets us apart'
            },
            {
                label: 'Leadership',
                href: '#leadership',
                desc: 'Meet the people behind the team'
            },
            {
                label: 'Testimonials',
                href: '#testimonials',
                desc: 'What our clients say'
            },
        ],
    },
    {
        label: 'Services',
        href: '#services',
        mega: true,
        children: [{
                label: 'AI & Machine Learning',
                href: '#services',
                desc: 'Intelligent products and automation'
            },
            {
                label: 'Web Development',
                href: '#services',
                desc: 'Fast, scalable web platforms'
            },
            {
                label: 'Mobile Development',
                href: '#services',
                desc: 'iOS, Android and cross-platform'
            },
            {
                label: 'UI/UX Design',
                href: '#services',
                desc: 'Research-led product design'
            },
            {
                label: 'DevOps & Cloud',
                href: '#services',
                desc: 'Pipelines, infra and scaling'
            },
            {
                label: 'QA Automation',
                href: '#services',
                desc: 'Test suites that ship with confidence'
            },
            {
                label: 'Project Management',
                href: '#services',
                desc: 'Agile delivery you can see'
            },
            {
                label: 'Dedicated Teams',
                href: '#engagement',
                desc: 'Engineers who join your team'
            },
        ],
    },
    {
        label: 'Case Studies',
        href: '#cases'
    },
    {
        label: 'Resources',
        href: '#faq'
    },
];

export const hero = {
    eyebrow: 'Custom Software & AI Development',
    titleStart: 'Turn Your Digital Ideas Into',
    rotatingWords: ['Products', 'Platforms', 'Apps', 'Results'],
    titleEnd: 'with NYABIX',
    subtitle: 'Your team just got bigger.',
    body: 'NYABIX is a custom software development company building secure products, AI solutions and dedicated engineering teams for growing businesses.',
    primaryCta: 'Hire Dedicated Developers',
    secondaryCta: 'See Our Work',
};

/* Placeholder client names — replace with your real client logos */
export const clientLogos = ['Lumora', 'Kestrel', 'Orbitly', 'Fernway', 'Quantix', 'Helixa', 'Brightpath', 'Novanta'];

export const proofCards = {
    projects: {
        value: '120+',
        label: 'Successful Projects'
    },
    engineering: {
        title: 'Engineering excellence, measured',
        lines: [{
                value: 1500000,
                suffix: '+',
                label: 'lines of code shipped'
            },
            {
                value: 10000,
                suffix: '+',
                label: 'bugs fixed'
            },
        ],
    },
    team: {
        title: 'Dedicated Development Teams',
        body: 'Handpicked engineers working as an extension of your team.',
        initials: ['AK', 'SR', 'MH', 'ZA', 'FN'],
    },
    awards: {
        title: 'Recognition & milestones',
        body: 'Highlights of progress and industry recognition.',
        badges: ['Top Rated', 'Top Developers', 'Verified Partner', 'Award 2026'],
    },
};

/* TODO: replace with your real numbers */
export const stats = [{
        value: 48,
        suffix: ' Hrs',
        label: 'Time to resource a team'
    },
    {
        value: 24,
        suffix: ' Hrs',
        label: 'Avg client feedback turnaround'
    },
    {
        value: 4.9,
        decimals: 1,
        suffix: '',
        label: 'Client Rating'
    },
    {
        value: 5,
        suffix: '/5',
        label: 'Review Score'
    },
    {
        text: 'Daily',
        label: 'Communication Updates'
    },
    {
        value: 98,
        suffix: '%',
        label: 'Product Success Rate'
    },
    {
        value: 8,
        suffix: ' Years',
        label: 'Building software'
    },
    {
        value: 60,
        suffix: '+',
        label: 'Engineers & designers'
    },
];

/* Placeholder media names — replace with real press logos */
export const media = ['TechDaily', 'StartupWire', 'DevWeekly', 'Business Today', 'CodeTimes', 'The Product Post', 'Cloud Review', 'AI Journal'];

export const services = [{
        tab: 'AI & ML',
        title: 'Artificial Intelligence',
        body: 'Build intelligent software with machine learning, analytics, automation and production-grade MLOps. We work across modern model providers, Python data stacks and cloud-native pipelines.',
        tags: ['LLM apps', 'Computer vision', 'Predictive analytics', 'MLOps'],
        icon: 'ai',
    },
    {
        tab: 'Web Development',
        title: 'Web Development',
        body: 'Fast, accessible and scalable web platforms — from marketing sites to complex SaaS dashboards — built with React, Next.js, Node and modern APIs.',
        tags: ['React / Next.js', 'Node.js', 'SaaS platforms', 'APIs'],
        icon: 'web',
    },
    {
        tab: 'Mobile Development',
        title: 'Mobile Development',
        body: 'Native and cross-platform apps for iOS and Android that feel smooth, load fast and are built to grow with your users.',
        tags: ['iOS', 'Android', 'React Native', 'Flutter'],
        icon: 'mobile',
    },
    {
        tab: 'UI/UX Design',
        title: 'UI/UX Design',
        body: 'Research-led product design: user flows, wireframes, prototypes and design systems that make complex products feel simple.',
        tags: ['Product discovery', 'Prototyping', 'Design systems', 'Usability'],
        icon: 'design',
    },
    {
        tab: 'DevOps & Cloud',
        title: 'DevOps & Cloud',
        body: 'Automated CI/CD, infrastructure as code and cloud architecture on AWS, Azure and GCP, so you can release often and scale safely.',
        tags: ['AWS / Azure / GCP', 'CI/CD', 'Kubernetes', 'Monitoring'],
        icon: 'cloud',
    },
    {
        tab: 'QA Automation',
        title: 'QA Automation',
        body: 'Automated and manual testing that catches issues early — end-to-end suites, performance testing and release confidence on every sprint.',
        tags: ['E2E testing', 'Performance', 'Regression', 'Test strategy'],
        icon: 'qa',
    },
    {
        tab: 'Project Management',
        title: 'Project Management',
        body: 'Agile delivery with sprint planning, clear reporting and a single point of contact, so you always know progress, scope and budget.',
        tags: ['Scrum', 'Roadmaps', 'Reporting', 'Stakeholder updates'],
        icon: 'pm',
    },
];

export const engagement = {
    title: 'Engagement Models & Specialized Expertise',
    intro: 'Flexible ways to work with us — whether you need a full product built, extra hands on your team, or a long-term development partner.',
    cards: [{
            title: 'Industry-Focused Product Development',
            body: 'Build compliant, reliable software for regulated industries. We deliver secure, scalable products for healthcare, finance and education.',
            listTitle: 'What we deliver',
            list: ['Healthcare platforms built for compliance', 'Fintech systems & payment workflows', 'EdTech and learning platforms', 'Analytics, integrations & domain features'],
        },
        {
            title: 'Hire Dedicated Developers',
            body: 'Scale your team quickly with vetted engineers who plug straight into your workflow and tools, with predictable delivery from day one.',
            listTitle: 'Who you can hire',
            list: ['Full-stack & backend developers', 'QA automation specialists', 'UI/UX designers & product experts', 'Cloud & DevOps engineers', 'Mobile engineers (iOS, Android, cross-platform)'],
        },
        {
            title: 'Software Development Outsourcing',
            body: 'Hand off a whole project and keep full visibility. Our outsourcing model pairs strong engineering with structured agile delivery.',
            listTitle: 'Benefits',
            list: ['Cost-optimized engineering capacity', 'Round-the-clock development cycles', 'Security, governance & code quality', 'Full visibility via agile dashboards'],
        },
    ],
    cta: 'Talk to Our Experts',
};

export const whyUs = {
    title: 'Why NYABIX',
    intro: 'A team built for speed, accountability and long-term success.',
    items: [{
            title: 'Experience Across Industries',
            body: 'From healthcare to fintech to education, we bring domain knowledge that shortens ramp-up and reduces risk.',
            icon: 'shield'
        },
        {
            title: 'Clear Strategy, Global Engineering',
            body: 'Product thinking and direct communication from our leads, backed by an engineering team that scales with you.',
            icon: 'globe'
        },
        {
            title: 'Specialized, High-Caliber Talent',
            body: 'Engineers fluent in modern frameworks, cloud-native architecture, automation and security who keep velocity consistent.',
            icon: 'star'
        },
        {
            title: 'Transparent, Agile Delivery',
            body: 'Sprint planning, code reviews, velocity tracking and live dashboards — you always know where things stand.',
            icon: 'chart'
        },
    ],
    cta: 'Get a Custom Development Plan',
};

export const processSteps = [{
        title: 'Discover',
        body: 'Understand goals, users and technical requirements',
        icon: 'search'
    },
    {
        title: 'Design',
        body: 'Wireframes, prototypes and UI alignment before build',
        icon: 'pen'
    },
    {
        title: 'Develop',
        body: 'Modular, scalable engineering with agile best practice',
        icon: 'code'
    },
    {
        title: 'Deploy',
        body: 'Cloud-ready pipelines for frequent, safe releases',
        icon: 'rocket'
    },
    {
        title: 'Support',
        body: 'Monitoring, enhancements and long-term maintenance',
        icon: 'life'
    },
];

/* TODO: replace with your real leadership team */
export const leadership = [{
        name: 'Founder Name',
        role: 'Founder & CEO',
        bio: 'Add a short bio: years of experience, what they lead, and the vision behind NYABIX.',
        initials: 'FN'
    },
    {
        name: 'Partner Name',
        role: 'Managing Partner',
        bio: 'Add a short bio: the teams they run, notable products, and how they drive delivery.',
        initials: 'PN'
    },
];

/* TODO: replace with your real projects */
export const caseStudies = [{
        tag: 'Healthcare',
        title: 'Patient Portal Platform',
        body: 'A secure portal for appointments, records and messaging.',
        metric: '3x',
        metricLabel: 'faster bookings',
        hue: 210
    },
    {
        tag: 'Fintech',
        title: 'Payments Dashboard',
        body: 'Real-time transaction monitoring for a growing payments startup.',
        metric: '40%',
        metricLabel: 'less manual review',
        hue: 225
    },
    {
        tag: 'EdTech',
        title: 'Learning Management App',
        body: 'A mobile-first LMS with live classes and progress tracking.',
        metric: '50k+',
        metricLabel: 'active learners',
        hue: 195
    },
    {
        tag: 'Logistics',
        title: 'Fleet Tracking System',
        body: 'Live GPS tracking, route planning and driver apps.',
        metric: '25%',
        metricLabel: 'fuel savings',
        hue: 235
    },
    {
        tag: 'AI',
        title: 'Document AI Assistant',
        body: 'An AI assistant that reads, sorts and summarises documents.',
        metric: '80%',
        metricLabel: 'time saved',
        hue: 205
    },
];

/* TODO: replace with genuine reviews from your clients */
export const testimonials = Array.from({
    length: 8
}, (_, i) => ({
    name: `Client Name ${i + 1}`,
    role: 'Role, Company',
    text: 'Add a real review from one of your clients here — two or three sentences about working with NYABIX and the results you delivered.',
    initials: `C${i + 1}`,
}));

export const ctaBand = {
    title: "Ready to Build What's Next?",
    body: 'Whether you want to hire dedicated developers, partner on a new product, or fully outsource development, NYABIX is ready to help you build what comes next.',
    cta: 'Find Your Software Solution',
};

export const faqs = [{
        q: 'Why should I choose NYABIX for custom software development?',
        a: 'We combine strong engineering, flexible engagement models and a business-first approach. We learn your goals, recommend the right technology and deliver software aligned with how your business grows.'
    },
    {
        q: 'What software development services does NYABIX provide?',
        a: 'Custom software, web and mobile apps, SaaS products, cloud applications, AI development, UI/UX design, QA automation and dedicated development teams — from discovery and prototyping through launch and ongoing improvement.'
    },
    {
        q: 'Should we build custom software or use an off-the-shelf tool?',
        a: 'Custom software makes sense when existing tools cannot support your workflows, integrations or growth plans. We can review your requirements and tell you honestly whether custom, customised or off-the-shelf is the better path.'
    },
    {
        q: 'When should a company modernize its existing applications?',
        a: 'When legacy systems start limiting performance, security, integrations or new features. We assess your current stack and plan a step-by-step modernization rather than a risky full rewrite.'
    },
    {
        q: 'Is offshore development cost-effective?',
        a: 'Yes. It gives you access to skilled engineers without the overhead of growing an in-house team, and our project management, QA and communication processes keep quality high.'
    },
    {
        q: 'Can NYABIX scale our team as our needs change?',
        a: 'Yes. You can add or reduce engineers as your roadmap changes, and we adjust team composition across technologies without you repeating the hiring process.'
    },
    {
        q: 'How do you price custom software projects?',
        a: 'Cost depends on scope, complexity, integrations, team size and timeline. After a short discovery call we provide a clear estimate based on your specific requirements.'
    },
    {
        q: 'Can NYABIX take over an existing project?',
        a: 'Yes. We review the codebase, architecture and documentation first, then agree a practical roadmap for continuing or improving the project.'
    },
];

export const footer = {
    blurb: 'Custom software, AI and dedicated engineering teams for ambitious businesses.',
    columns: [{
            title: 'Services',
            links: ['AI & ML', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'DevOps & Cloud', 'QA Automation']
        },
        {
            title: 'Company',
            links: ['About', 'Process', 'Case Studies', 'Careers', 'Contact']
        },
        {
            title: 'Resources',
            links: ['Blog', 'FAQ', 'Privacy Policy', 'Terms of Service']
        },
    ],
};