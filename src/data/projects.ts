export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  category: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  metrics?: string;
}

export const projects: Project[] = [
  {
    id: 'enterprise-platform',
    title: 'Enterprise SaaS Platform',
    description: 'Multi-tenant SaaS platform serving 50k+ users with real-time collaboration and advanced analytics.',
    problem:
      "Legacy monolith couldn't scale to meet enterprise demand — deployments took hours and new features required full releases.",
    solution:
      'Architected event-driven microservices with Kotlin/Spring Boot, React frontend, and MongoDB. Implemented domain-driven design with CQRS, reducing deployment time by 90% and enabling per-service scaling.',
    tech: ['Kotlin', 'Spring Boot', 'React', 'TypeScript', 'MongoDB', 'Kafka', 'Docker', 'Kubernetes'],
    category: ['Backend', 'Frontend', 'Architecture'],
    featured: true,
    metrics: '50k+ users · 99.9% uptime · 90% faster deploys',
  },
  {
    id: 'api-gateway',
    title: 'High-Performance API Gateway',
    description:
      'Custom API gateway handling 10M+ requests/day with intelligent rate limiting, auth, and observability.',
    problem:
      'Disparate services had no unified entry point, making security enforcement, rate limiting, and monitoring inconsistent.',
    solution:
      'Built a reactive API gateway with Spring WebFlux and Kotlin coroutines. Implemented JWT auth, per-client rate limiting, circuit breakers, and distributed tracing with OpenTelemetry.',
    tech: ['Kotlin', 'Spring WebFlux', 'Redis', 'PostgreSQL', 'OpenTelemetry', 'Prometheus', 'Grafana'],
    category: ['Backend', 'Infrastructure'],
    featured: true,
    metrics: '10M+ req/day · <5ms p99 latency · 0 security incidents',
  },
  {
    id: 'developer-portal',
    title: 'Developer Documentation Portal',
    description: 'Interactive API documentation and developer portal with live code playgrounds and SDK generation.',
    problem:
      'External developers struggled to integrate with the platform API — poor docs caused a 60% support ticket spike.',
    solution:
      'Built a Next.js documentation portal with MDX, interactive API explorers using OpenAPI specs, and automated SDK generation in multiple languages.',
    tech: ['Next.js', 'TypeScript', 'MDX', 'OpenAPI', 'React', 'Tailwind CSS'],
    category: ['Frontend', 'Developer Experience'],
    featured: true,
    metrics: '40% fewer support tickets · 2x faster integrations',
  },
  {
    id: 'data-pipeline',
    title: 'Real-Time Analytics Pipeline',
    description:
      'Stream processing pipeline ingesting and transforming millions of events per hour for business intelligence.',
    problem:
      'Business insights were 24 hours stale due to batch ETL processes — data-driven decisions were impossible in real time.',
    solution:
      'Designed event streaming architecture with Kafka, stream processing with Kafka Streams in Kotlin, and real-time dashboards. Replaced nightly batch jobs with continuous processing.',
    tech: ['Kotlin', 'Kafka', 'Kafka Streams', 'ClickHouse', 'Docker', 'Kubernetes'],
    category: ['Backend', 'Data', 'Infrastructure'],
    featured: false,
    metrics: '5M events/hour · <500ms end-to-end latency',
  },
  {
    id: 'design-system',
    title: 'Engineering Design System',
    description:
      'Component library and design system used across 8 product teams with full TypeScript support and Storybook docs.',
    problem:
      '8 teams building the same components independently, creating inconsistent UX and duplicating 30% of frontend work.',
    solution:
      'Designed and led a unified component library with React, TypeScript, and Radix UI primitives. Shipped Storybook documentation, automated visual regression testing, and a contribution workflow.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Storybook', 'Chromatic'],
    category: ['Frontend', 'Developer Experience'],
    featured: false,
    metrics: '8 teams · 120+ components · 35% faster UI development',
  },
];
