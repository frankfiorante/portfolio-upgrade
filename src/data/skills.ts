export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Kotlin", "Java", "TypeScript", "JavaScript"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    name: "Backend",
    skills: ["Spring Boot", "Spring WebFlux", "Node.js", "REST APIs", "GraphQL"],
  },
  {
    name: "Data",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Kafka"],
  },
  {
    name: "Infrastructure",
    skills: ["Docker", "Kubernetes", "GitLab", "GitHub Actions"],
  },
  {
    name: "Practices",
    skills: ["System Design", "Microservices", "TDD", "Agile", "Paired Programming"],
  },
];

export const techMarquee = [
  "Kotlin", "Java", "Spring Boot", "TypeScript", "React", "Next.js",
  "MongoDB", "PostgreSQL", "Kafka", "Redis", "Docker",
  "Kubernetes", "GraphQL", "Node.js", "Tailwind CSS", "GitHub Actions",
  "GitLab", "Microservices", "System Design",
];
