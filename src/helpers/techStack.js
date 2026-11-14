
const icon = (slug) =>
    `https://cdn.simpleicons.org/${slug}`;

export const technologies = [
    // Frontend
    { name: 'React', category: 'Frontend', logo: icon('react') },
    { name: 'Next.js', category: 'Frontend', logo: icon('nextdotjs') },
    { name: 'Vue', category: 'Frontend', logo: icon('vuedotjs') },
    { name: 'Angular', category: 'Frontend', logo: icon('angular') },
    { name: 'TypeScript', category: 'Frontend', logo: icon('typescript') },
    { name: 'Tailwind CSS', category: 'Frontend', logo: icon('tailwindcss') },

    // Mobile
    { name: 'React Native', category: 'Mobile', logo: icon('react') },
    { name: 'Flutter', category: 'Mobile', logo: icon('flutter') },
    { name: 'Swift', category: 'Mobile', logo: icon('swift') },
    { name: 'Kotlin', category: 'Mobile', logo: icon('kotlin') },
    { name: 'Expo', category: 'Mobile', logo: icon('expo') },
    { name: 'Firebase', category: 'Mobile', logo: icon('firebase') },

    // Backend
    { name: 'Node.js', category: 'Backend', logo: icon('nodedotjs') },
    { name: 'Python', category: 'Backend', logo: icon('python') },
    { name: 'Django', category: 'Backend', logo: icon('django') },
    { name: 'FastAPI', category: 'Backend', logo: icon('fastapi') },
    { name: 'Go', category: 'Backend', logo: icon('go') },
    { name: 'Laravel', category: 'Backend', logo: icon('laravel') },

    // Cloud & Data
    { name: 'AWS', category: 'Cloud & Data', logo: icon('amazonaws') },
    { name: 'Azure', category: 'Cloud & Data', logo: icon('microsoftazure') },
    { name: 'Google Cloud', category: 'Cloud & Data', logo: icon('googlecloud') },
    { name: 'Docker', category: 'Cloud & Data', logo: icon('docker') },
    { name: 'Kubernetes', category: 'Cloud & Data', logo: icon('kubernetes') },
    { name: 'PostgreSQL', category: 'Cloud & Data', logo: icon('postgresql') },

    // AI & ML
    { name: 'OpenAI', category: 'AI & ML', logo: 'https://svgl.app/library/openai.svg' },
    { name: 'LangChain', category: 'AI & ML', logo: icon('langchain') },
    { name: 'PyTorch', category: 'AI & ML', logo: icon('pytorch') },
    { name: 'TensorFlow', category: 'AI & ML', logo: icon('tensorflow') },
    { name: 'Hugging Face', category: 'AI & ML', logo: icon('huggingface') },
    { name: 'Pandas', category: 'AI & ML', logo: icon('pandas') },
];

export const techCategories = [
    'Frontend',
    'Mobile',
    'Backend',
    'Cloud & Data',
    'AI & ML',
];

export const getTechByCategory = (category) =>
    technologies.filter((tech) => tech.category === category);

export const getTechByName = (name) =>
    technologies.find((tech) => tech.name === name);
