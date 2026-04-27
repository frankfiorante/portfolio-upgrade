export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    company: 'Hyatt Hotels Corporation',
    role: 'Product Engineer – Full Stack',
    period: 'Summer 2021 — Present',
    location: 'Chicago, IL',
    description: 'Full-stack development on enterprise hospitality platforms serving guests globally.',
    highlights: [
      'Improved Kotlin and Java Spring Boot RESTful APIs and microservices',
      'Created new scalable Next.js TypeScript web application utilizing client and server-side rendering',
      'Upgraded existing JavaScript web applications to incorporate Azure AD Authentication',
      'Setup testing to reach maximum coverage for new and existing web and Spring Boot applications',
      'Leveraged continuous integration pipelines to safely deploy new releases of applications',
      'Arranged databases for Spring Boot microservices using MongoDB and PostgreSQL',
      'Mentored, trained, and on-boarded new developers',
      'Delivered features using Test Driven Development, Pair Programming, and Agile methodology',
    ],
    tech: ['Kotlin', 'Java', 'Spring Boot', 'Next.js', 'TypeScript', 'React', 'MongoDB', 'PostgreSQL'],
  },
  {
    company: 'HCSC: Blue Cross Blue Shield of Illinois',
    role: 'Software Developer',
    period: 'Summer 2019 — Summer 2021',
    location: 'Chicago, IL',
    description: 'Full-stack development and team lead for the digital portfolio.',
    highlights: [
      'Developed Java Spring Boot RESTful APIs and microservices',
      'Produced scalable React TypeScript web applications utilizing various backend APIs',
      'Team lead / anchor for full stack development team in digital portfolio',
      'Managed offshore team members using code reviews, walkthroughs, demos, and pull requests',
      'Deployed APIs and proxies via Concourse and Jenkins CI/CD to Pivotal Cloud Foundry (PCF)',
      'Established MuleSoft 4 Gateway Proxies to control internal/external traffic within the network',
      'Created fully scalable MuleSoft Process REST APIs capable of complex business logic',
      'Configured application monitoring in Dynatrace to catch key metrics and analytics',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'MuleSoft', 'Concourse', 'Jenkins', 'Pivotal Cloud Foundry'],
  },
  {
    company: 'HCSC: Blue Cross Blue Shield of Illinois',
    role: 'Associate Developer Intern',
    period: 'Summer 2018 — Fall 2019',
    location: 'Chicago, IL',
    description: 'Built an MVC web application using agile methodology and XP practices.',
    highlights: [
      'Utilized a Model-View-Controller architectural pattern to create an online web application',
      'Created software allowing clients, brokers, and account executives to schedule health events',
      'Followed agile methodology to complete user stories through weekly sprints',
      'Worked in an extreme programming space, incorporating paired programming techniques',
      'Presented the final product to high-level executives including the CIO',
    ],
    tech: ['Java', 'JavaScript', 'HTML', 'SCSS', 'Jenkins'],
  },
];

export const education = {
  degree: 'B.S. Information Technology',
  school: 'DePaul University',
  year: '2019',
};
