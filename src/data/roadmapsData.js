// src/data/roadmapsData.js

export const careerRoadmaps = [
  {
    id: "fresher-to-fullstack",
    title: "College Fresher to Product MNC Software Engineer",
    badge: "Fresher Favorite",
    targetAudience: "B.Tech / BCA / MCA Fresh Graduates & Final Year Students",
    timeline: "6 Months",
    avgSalary: "₹7.5 - ₹18 LPA",
    difficulty: "Beginner to Advanced",
    summary: "A step-by-step master roadmap designed to beat off-campus competition, crack Tier-1 coding assessments, and build production web apps that make hiring managers hire on the spot.",
    phases: [
      {
        phase: "Phase 1: Foundations & Problem Solving (Months 1-2)",
        title: "Programming & Data Structures",
        skills: ["Java 21 / Modern JavaScript", "Object Oriented Design", "Time & Space Complexity", "Arrays, HashMaps, Two Pointers, Sliding Window"],
        milestone: "Solve 150+ LeetCode problems & crack basic coding rounds",
        projects: ["CLI-based Banking Transaction System", "Custom In-Memory Cache with LRU Eviction"]
      },
      {
        phase: "Phase 2: Enterprise Backend & Databases (Month 3)",
        title: "Spring Boot / Node.js & SQL",
        skills: ["RESTful API Architecture", "PostgreSQL / MySQL Schema Design", "JWT Authentication & Security", "ORM (Hibernate / Prisma)"],
        milestone: "Build scalable CRUD microservices with robust error handling",
        projects: ["Multi-Tenant SaaS Authentication Service with OAuth2", "E-Commerce Product & Inventory API"]
      },
      {
        phase: "Phase 3: Interactive Frontend & State Management (Month 4)",
        title: "React 19 & Modern Web Engineering",
        skills: ["React Components & Hooks", "Tailwind CSS Responsive Design", "Zustand / TanStack Query", "WebSockets for Real-Time Updates"],
        milestone: "Deliver full-stack web applications with snappy UX",
        projects: ["Live Collaboration Whiteboard / Document Editor", "Full Stack FinTech Dashboard"]
      },
      {
        phase: "Phase 4: Cloud Deployments & Off-Campus Drives (Months 5-6)",
        title: "Docker, AWS & System Design Sprints",
        skills: ["Docker Containerization", "AWS ECS & S3 Deployment", "Basic Low-Level System Design (LLD)", "Mock Technical & HR Rounds"],
        milestone: "Attend exclusive Jnan-Vexa partner MNC placement drives",
        projects: ["Deployed Full-Stack Microservices App on AWS with CI/CD", "Optimized Resume & Active Portfolio on GitHub"]
      }
    ]
  },
  {
    id: "service-to-product-switch",
    title: "Service Company to Product-Based MNC Switcher",
    badge: "High Salary Hike (150%+)",
    targetAudience: "Developers in WITCH / Services with 1-6 years experience",
    timeline: "5 Months",
    avgSalary: "₹16 - ₹32 LPA",
    difficulty: "Intermediate to High",
    summary: "Break the ceiling of legacy maintenance projects. Upgrade from monolithic legacy code to high-throughput Distributed Microservices, Kafka, Redis, and High-Level System Design (HLD).",
    phases: [
      {
        phase: "Phase 1: Modernizing Tech Stack (Month 1)",
        title: "Modern Microservices & Clean Architecture",
        skills: ["Java 21 Virtual Threads / Go / Node.js", "Clean Architecture & SOLID Principles", "Domain-Driven Design (DDD)", "Design Patterns in Real Systems"],
        milestone: "Refactor monolithic codebase into clean modular services",
        projects: ["Refactored Legacy Billing Monolith to Microservices"]
      },
      {
        phase: "Phase 2: Distributed Systems & Event-Driven Architecture (Month 2)",
        title: "Kafka, Redis & Distributed Transactions",
        skills: ["Apache Kafka Event Streaming", "Redis Distributed Caching & Rate Limiting", "Saga Pattern & Outbox Pattern", "Resilience4j & Fault Tolerance"],
        milestone: "Handle 50k requests/sec with low latency and zero data loss",
        projects: ["Real-Time Ride Hailing Matching Engine with Kafka & Redis", "Distributed Flash Sale Checkout Engine"]
      },
      {
        phase: "Phase 3: High-Level System Design (HLD) Mastery (Months 3-4)",
        title: "Architecting Scalable Systems",
        skills: ["Load Balancing & CDNs", "Database Sharding & Replication", "CAP Theorem & PACELC Tradeoffs", "Designing URL Shortener, Twitter Feed, Netflix Video Streaming"],
        milestone: "Crack Tier-1 Product Company System Design Rounds",
        projects: ["Complete Architectural Blueprint & Benchmarks for Distributed Messenger"]
      },
      {
        phase: "Phase 4: Targeted Referral Pipeline & Negotiation (Month 5)",
        title: "Interview Execution & Multiple Offer Strategy",
        skills: ["1-on-1 Mock Rounds with Staff Engineers", "Behavioral Leadership Principles (Amazon LP)", "Offer Counter-Bidding & Negotiation"],
        milestone: "Secure 2-3 competing product company offers with 150%+ hike",
        projects: ["Live Interview Simulation Series with Ex-FAANG Leads"]
      }
    ]
  },
  {
    id: "experienced-to-genai-architect",
    title: "Senior Developer to AI / LLM Solutions Architect",
    badge: "Future-Proof Leadership",
    targetAudience: "Engineers (3-10+ yrs) looking to lead AI Engineering teams",
    timeline: "4.5 Months",
    avgSalary: "₹24 - ₹48 LPA",
    difficulty: "Advanced",
    summary: "Position yourself at the forefront of the generative AI revolution. Architect end-to-end multi-agent systems, evaluate complex enterprise RAG pipelines, and guide organizations on AI adoption.",
    phases: [
      {
        phase: "Phase 1: Mathematical Foundations & Transformers (Month 1)",
        title: "Transformer Architecture & Embeddings",
        skills: ["Attention Mechanisms & Transformer Layers", "Vector Space Math & Embeddings", "FastAPI & Async AI Services", "OpenAI / Anthropic / Gemini SDKs"],
        milestone: "Understand the mathematical intuition behind modern LLMs",
        projects: ["Custom Semantic Search Engine with Hybrid Dense-Sparse Indexing"]
      },
      {
        phase: "Phase 2: Enterprise RAG Architecture (Month 2)",
        title: "Advanced Retrieval-Augmented Generation",
        skills: ["Chunking Algorithms & Metadata Filtering", "Vector Databases (Pinecone, Qdrant, Chroma)", "Cross-Encoder Reranking & Context Compression", "RAGAS Evaluation & hallucination mitigation"],
        milestone: "Build high-accuracy enterprise document intelligence systems",
        projects: ["Production Financial Audit RAG with Citation Verification"]
      },
      {
        phase: "Phase 3: Autonomous Agents & Workflows (Month 3)",
        title: "LangGraph, CrewAI & Multi-Agent Systems",
        skills: ["State Graph Orchestration with LangGraph", "Multi-Agent Collaboration with CrewAI", "Tool Calling & Code Sandbox Execution", "Human-in-the-Loop Approval Workflows"],
        milestone: "Deploy autonomous workflows that complete multi-step complex tasks",
        projects: ["Autonomous Software QA & Bug Fixing Multi-Agent System"]
      },
      {
        phase: "Phase 4: LLMOps, Fine-Tuning & Production Serving (Months 4-4.5)",
        title: "Model Governance, Quantization & Leadership",
        skills: ["LoRA / QLoRA Parameter-Efficient Fine-Tuning", "vLLM / TensorRT High-Throughput Serving", "NeMo Guardrails & Security", "AI Solution Architecture Reviews for Enterprise"],
        milestone: "Lead enterprise AI transformation initiatives and clear Principal/Architect interviews",
        projects: ["Self-Hosted Low-Latency LLM Cluster with Model Routing & Cost Optimization"]
      }
    ]
  },
  {
    id: "qa-to-cloud-devops",
    title: "Manual QA / Support to Cloud & Platform Engineer",
    badge: "Fastest Transition",
    targetAudience: "Manual Testers, Operations & Desktop Support looking for high-growth tech",
    timeline: "5 Months",
    avgSalary: "₹10 - ₹22 LPA",
    difficulty: "Beginner to Intermediate",
    summary: "Escape manual repetitive testing. Learn Linux automation, AWS cloud architecture, Docker containers, Kubernetes, and automated CI/CD pipelines to become an indispensable DevOps specialist.",
    phases: [
      {
        phase: "Phase 1: Linux & Shell Scripting (Month 1)",
        title: "Core Infrastructure Foundations",
        skills: ["Linux Shell Navigation & User Permissions", "Networking (IP, DNS, Subnets, Firewalls)", "Bash Scripting & Automation", "Git Version Control Workflows"],
        milestone: "Automate repetitive server maintenance tasks via shell scripts",
        projects: ["Automated Server Health Monitoring & Alerting Daemon"]
      },
      {
        phase: "Phase 2: AWS Cloud Architecture (Month 2)",
        title: "Provisioning & Cloud Security",
        skills: ["AWS EC2, VPC, IAM, S3, RDS", "Application Load Balancer & Auto-Scaling", "AWS Lambda & EventBridge", "CloudWatch Monitoring & Billing Alarms"],
        milestone: "Deploy highly available web architectures on AWS",
        projects: ["Three-Tier Scalable Web Application Infrastructure on AWS"]
      },
      {
        phase: "Phase 3: Containers & Kubernetes (Month 3)",
        title: "Docker & K8s Orchestration",
        skills: ["Docker Multi-Stage Builds", "Kubernetes Pods, Services, Deployments", "ConfigMaps, Secrets, Ingress Controllers", "Helm Package Manager"],
        milestone: "Manage microservices deployments across container clusters",
        projects: ["Production Kubernetes Microservices Cluster with Ingress & SSL"]
      },
      {
        phase: "Phase 4: CI/CD, Terraform & Placement Drives (Months 4-5)",
        title: "Infrastructure as Code & GitOps",
        skills: ["Terraform State & Modules", "GitHub Actions & Jenkins CI/CD", "ArgoCD GitOps Automation", "DevOps Scenario & Real-Time Production Debugging Interviews"],
        milestone: "Crack Tier-1 Cloud & DevOps placement interviews",
        projects: ["End-to-End Automated CI/CD & GitOps Pipeline Deploying to K8s"]
      }
    ]
  }
];
