// src/data/coursesData.js

export const coursesData = [
  {
    id: "full-stack-java-ai",
    number: "Course 01",
    title: "Enterprise Full Stack Java & Generative AI",
    badge: "Most Popular",
    category: "Full Stack",
    targetAudience: "Freshers & Working Professionals",
    duration: "6 Months (Weekday / Weekend)",
    mode: "Hybrid / Online Live",
    avgPackage: "8.5 - 18 LPA",
    rating: 4.9,
    reviewsCount: 1240,
    shortDesc: "Master enterprise Java 21, Spring Boot 3, Microservices, React 19, Docker, AWS, and build AI-powered enterprise applications using LangChain4j & Spring AI.",
    fullDesc: "This industry-designed program is engineered to take you from foundational programming to architecting scalable enterprise systems. You will build end-to-end microservices, implement distributed caching with Redis, deploy on AWS using Docker & Kubernetes, and integrate Generative AI capabilities into enterprise workflows.",
    tags: ["Java 21", "Spring Boot", "Microservices", "React 19", "AWS", "Spring AI", "Docker"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
    highlights: [
      "100% Placement Assistance with 450+ MNC Partners",
      "5 Real-World Enterprise Capstone Projects",
      "1-on-1 Mock Interviews with Ex-Amazon & Oracle Architects",
      "Spring AI & LangChain4j GenAI Integration Module"
    ],
    curriculum: [
      { week: "Weeks 1-4", title: "Core Java 21 & Advanced Data Structures", topics: ["OOPs Deep Dive", "Collections Framework", "Streams API & Concurrency", "Memory Management & JVM Internals"] },
      { week: "Weeks 5-8", title: "Spring Boot 3, Hibernate & RESTful APIs", topics: ["Spring Core & DI", "Spring Data JPA & Hibernate", "REST API Best Practices", "Spring Security 6 & OAuth2/JWT"] },
      { week: "Weeks 9-12", title: "Microservices Architecture & Distributed Systems", topics: ["API Gateway & Service Discovery", "Kafka & RabbitMQ Messaging", "Resilience4j & Circuit Breaker", "Redis Distributed Caching"] },
      { week: "Weeks 13-16", title: "Modern Frontend with React 19 & Tailwind", topics: ["React Hooks & Context", "State Management (Redux/Zustand)", "Responsive UI Design", "Full Stack Integration"] },
      { week: "Weeks 17-20", title: "Cloud DevOps (AWS), Docker & CI/CD Pipelines", topics: ["Docker Containerization", "Kubernetes Orchestration", "AWS ECS, RDS, S3", "GitHub Actions CI/CD"] },
      { week: "Weeks 21-24", title: "Generative AI Integration & Placement Sprint", topics: ["Spring AI & Vector DBs (Chroma/Pinecone)", "RAG (Retrieval-Augmented Generation)", "Live Mock Interviews", "Resume Audit & Direct MNC Referrals"] }
    ],
    projects: [
      "FinTech Real-Time Payment Settlement Engine with Kafka & Spring Boot",
      "AI-Powered Smart CRM with Vector Search & Spring AI Copilot",
      "Healthcare Appointment Booking SaaS with Microservices Architecture"
    ],
    fee: "₹45,000",
    emi: "₹4,500/mo (No-cost EMI available)"
  },
  {
    id: "genai-llm-data-science",
    number: "Course 02",
    title: "Applied Generative AI, LLMs & Agentic AI",
    badge: "High Demand",
    category: "AI & Data Science",
    targetAudience: "Software Engineers (1-8 yrs) & Aspiring AI Engineers",
    duration: "4.5 Months",
    mode: "Online Live + Weekend Labs",
    avgPackage: "14 - 32 LPA",
    rating: 4.95,
    reviewsCount: 890,
    shortDesc: "Build production-grade GenAI apps, Autonomous Agents, Multi-Agent Workflows, RAG pipelines, fine-tune LLMs, and deploy on scalable cloud infrastructure.",
    fullDesc: "Generative AI is reshaping the global tech ecosystem. This intensive program gives you deep hands-on expertise in Prompt Engineering, LangChain, LlamaIndex, CrewAI, AutoGen, Vector Databases, Fine-tuning Open Source Models (Llama 3, Mistral), and deploying low-latency LLM microservices.",
    tags: ["LangChain", "Llama 3", "CrewAI", "RAG Pipelines", "Vector DBs", "Python", "FastAPI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    highlights: [
      "Build 4 Autonomous AI Agent Systems using CrewAI & LangGraph",
      "Production RAG with Hybrid Search & Semantic Caching",
      "Fine-Tuning Open Source LLMs with LoRA / QLoRA",
      "Direct Referrals to High-Growth AI Startups & Tier-1 MNCs"
    ],
    curriculum: [
      { week: "Weeks 1-3", title: "Advanced Python & PyTorch for GenAI", topics: ["Async Python & FastAPI", "PyTorch Tensors & Neural Nets", "Embeddings & Vector Math", "Tokenization & Transformers Architecture"] },
      { week: "Weeks 4-7", title: "LLM Fundamentals, Prompting & LangChain", topics: ["Zero/Few-Shot & CoT Prompting", "LangChain Core & LCEL", "Memory Systems & Tool Calling", "Structured Outputs & JSON Schema"] },
      { week: "Weeks 8-11", title: "Advanced RAG & Vector Database Architecture", topics: ["Document Parsing & Chunking Strategies", "Vector Embeddings & Pinecone/Milvus", "Hybrid Search (Dense + Sparse)", "Reranking & RAG Evaluation (RAGAS)"] },
      { week: "Weeks 12-15", title: "Autonomous Agents & Multi-Agent Orchestration", topics: ["LangGraph State Machines", "CrewAI & Multi-Agent Collaboration", "Web Browsing & Code Execution Agents", "Human-in-the-Loop Safeguards"] },
      { week: "Weeks 16-18", title: "Model Fine-Tuning, Guardrails & Production Deploy", topics: ["LoRA / QLoRA with Unsloth & HuggingFace", "NeMo Guardrails & Prompt Injection Defense", "vLLM / Ollama Low-Latency Serving", "Mock AI Architecture Interviews"] }
    ],
    projects: [
      "Enterprise Multi-Agent Research Assistant with LangGraph & Web Search",
      "HIPAA-Compliant Medical RAG with Hybrid Search & Citation Tracking",
      "Domain-Fine-Tuned Customer Support LLM with Real-Time Guardrails"
    ],
    fee: "₹52,000",
    emi: "₹5,200/mo (No-cost EMI available)"
  },
  {
    id: "mern-nextjs-cloud",
    number: "Course 03",
    title: "Full Stack MERN & Next.js 15 Cloud Native",
    badge: "Trending",
    category: "Full Stack",
    targetAudience: "Students, Career Switchers & Frontend Devs",
    duration: "5 Months",
    mode: "Classroom / Online",
    avgPackage: "7 - 16 LPA",
    rating: 4.88,
    reviewsCount: 1100,
    shortDesc: "Master MongoDB, Express.js, React 19, Node.js, Next.js 15 App Router, TypeScript, Tailwind CSS, GraphQL, and AWS Cloud deployments.",
    fullDesc: "Learn full-stack JavaScript from the ground up to production readiness. From database schema design to serverless edge functions in Next.js 15, authentication with NextAuth/Clerk, real-time WebSockets, and stateful cloud infrastructure.",
    tags: ["React 19", "Next.js 15", "Node.js", "TypeScript", "MongoDB", "Tailwind", "AWS"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    highlights: [
      "TypeScript from Day 1 across Frontend & Backend",
      "Next.js 15 Server Components, Server Actions & Turbopack",
      "Real-Time Chat & Notification System with Socket.IO",
      "Complete Portfolio Review & GitHub Optimization"
    ],
    curriculum: [
      { week: "Weeks 1-4", title: "Modern JavaScript (ES2024) & TypeScript", topics: ["Async/Await & Event Loop", "TypeScript Generics & Types", "DOM & Web APIs", "Functional Programming Patterns"] },
      { week: "Weeks 5-8", title: "React 19 & State Architectures", topics: ["React Compiler & Actions", "Custom Hooks & Performance", "Zustand & TanStack Query", "Tailwind CSS & Shadcn UI Components"] },
      { week: "Weeks 9-12", title: "Backend API Engineering with Node & Express", topics: ["REST API Architecture", "MongoDB Aggregations & Mongoose", "JWT, Cookies & Role-based Auth", "Rate Limiting & Security Middlewares"] },
      { week: "Weeks 13-16", title: "Next.js 15 Full-Stack & Serverless", topics: ["App Router & Server Components", "Server Actions & Optimistic UI", "PostgreSQL with Prisma / Drizzle ORM", "Stripe Payment Gateway Integration"] },
      { week: "Weeks 17-20", title: "DevOps, Testing & Career Placement", topics: ["Docker for Node Apps", "CI/CD Deployment to AWS / Vercel", "Jest & Playwright E2E Testing", "System Design & HR Mock Drives"] }
    ],
    projects: [
      "Collaborative Real-Time Project Management Tool (Trello/Linear clone)",
      "Multi-Vendor E-Commerce Platform with Next.js 15 & Stripe",
      "Social Community Platform with Live Video/Audio Rooms"
    ],
    fee: "₹42,000",
    emi: "₹4,200/mo"
  },
  {
    id: "cloud-devops-kubernetes",
    number: "Course 04",
    title: "Cloud Engineering, DevOps & Platform Engineering",
    badge: "Highest Salary Switch",
    category: "Cloud & DevOps",
    targetAudience: "System Admins, QA Engineers & Backend Devs (2+ Yrs)",
    duration: "5 Months",
    mode: "Weekend Live Masterclasses",
    avgPackage: "12 - 28 LPA",
    rating: 4.92,
    reviewsCount: 760,
    shortDesc: "Master AWS & Azure Cloud, Terraform (IaC), Docker, Kubernetes (K8s), ArgoCD, Prometheus/Grafana, Jenkins & GitHub Actions CI/CD pipelines.",
    fullDesc: "Elevate your career into the high-demand domain of DevOps and Platform Engineering. You will build zero-downtime automated deployment pipelines, orchestrate microservices clusters in Kubernetes, write resilient Infrastructure as Code with Terraform, and implement comprehensive observability.",
    tags: ["AWS Cloud", "Kubernetes", "Terraform", "Docker", "CI/CD", "ArgoCD", "Prometheus"],
    image: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?w=800&auto=format&fit=crop&q=80",
    highlights: [
      "Hands-on Labs on live AWS enterprise accounts",
      "Production-grade K8s Multi-Cluster setup",
      "GitOps with ArgoCD & Infrastructure as Code with Terraform",
      "DevOps Interview Preparation with Senior Cloud Architects"
    ],
    curriculum: [
      { week: "Weeks 1-4", title: "Linux Administration, Networking & Shell Scripting", topics: ["Linux Kernel & CLI Mastery", "TCP/IP, DNS, SSL/TLS, VPC Networking", "Bash & Python Automation", "Git & Trunk-Based Development"] },
      { week: "Weeks 5-8", title: "AWS Core Services & Cloud Architecture", topics: ["EC2, VPC, IAM, S3, RDS, DynamoDB", "Route53 & CloudFront CDN", "AWS Lambda & Serverless", "Well-Architected Framework"] },
      { week: "Weeks 9-12", title: "Docker & Container Orchestration with Kubernetes", topics: ["Multi-Stage Dockerfiles", "Pod, Deployment, Service, Ingress", "StatefulSets & Persistent Volumes", "Helm Charts & K8s Security"] },
      { week: "Weeks 13-16", title: "Infrastructure as Code (Terraform) & CI/CD", topics: ["Terraform State & Modules", "Jenkins & GitHub Actions Workflows", "GitOps Continuous Delivery with ArgoCD", "SonarQube & Security Scanners"] },
      { week: "Weeks 17-20", title: "SRE Observability & Placement Boot Camp", topics: ["Prometheus, Grafana & Loki", "Distributed Tracing with OpenTelemetry", "Chaos Engineering Principles", "Scenario-based MNC Interviews"] }
    ],
    projects: [
      "Automated End-to-End GitOps Pipeline with ArgoCD & K8s on AWS EKS",
      "Multi-Region High-Availability Infrastructure Provisioned via Terraform",
      "Centralized Observability Stack for Microservices with Prometheus & Grafana"
    ],
    fee: "₹48,000",
    emi: "₹4,800/mo"
  },
  {
    id: "data-engineering-analytics",
    number: "Course 05",
    title: "Big Data Engineering & Cloud Data Warehousing",
    badge: "MNC Favorite",
    category: "Data & Analytics",
    targetAudience: "Engineers, SQL Developers, BI Specialists",
    duration: "4.5 Months",
    mode: "Hybrid Live",
    avgPackage: "10 - 24 LPA",
    rating: 4.89,
    reviewsCount: 620,
    shortDesc: "Master Apache Spark, PySpark, Snowflake, Databricks, Kafka streaming, dbt, Apache Airflow, and Cloud Data Lakehouse architecture on AWS/Azure.",
    fullDesc: "Data is the lifeblood of modern enterprise decisions and AI models. This curriculum trains you to design petabyte-scale data pipelines, build modern lakehouse architectures using Databricks and Snowflake, and orchestrate complex ETL workflows with Airflow.",
    tags: ["PySpark", "Snowflake", "Databricks", "Kafka", "Airflow", "dbt", "AWS S3"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    highlights: [
      "Process Multi-Gigabyte Real-Time Streams with PySpark & Kafka",
      "Enterprise Snowflake & Databricks Lakehouse Design",
      "dbt Data Modeling & Data Quality Frameworks",
      "Data Engineer Coding & SQL Problem-Solving Round Prep"
    ],
    curriculum: [
      { week: "Weeks 1-3", title: "Advanced SQL & Python for Data Engineering", topics: ["Window Functions, CTEs & Query Tuning", "Data Structures & Algorithms for Data", "Pandas, NumPy & Polars", "Data Modeling & Normalization"] },
      { week: "Weeks 4-7", title: "Distributed Processing with Apache Spark & PySpark", topics: ["Spark RDD, DataFrame & SQL", "Spark Architecture & Catalyst Optimizer", "Memory Tuning & Partitioning", "Delta Lake Essentials"] },
      { week: "Weeks 8-11", title: "Cloud Data Warehousing with Snowflake", topics: ["Snowflake Architecture & Virtual Warehouses", "Time Travel, Zero-Copy Cloning", "Snowpipe Automated Ingestion", "Streams & Tasks for CDC"] },
      { week: "Weeks 12-15", title: "Streaming Data & Pipeline Orchestration", topics: ["Apache Kafka Producers & Consumers", "Real-Time Ingestion into Data Lake", "Apache Airflow DAG Scheduling", "dbt Transformations & Tests"] },
      { week: "Weeks 16-18", title: "Enterprise Capstone & Placement Rounds", topics: ["End-to-End Medallion Architecture", "Data Governance & Cataloging", "Live Technical Interview Simulations", "Direct MNC Referral Pipeline"] }
    ],
    projects: [
      "Real-Time E-Commerce Clickstream Analytics Pipeline with Kafka & Spark",
      "Financial Transactions Medallion Lakehouse on Databricks & Snowflake",
      "Automated End-to-End Orchestrated ETL with Apache Airflow & dbt"
    ],
    fee: "₹46,000",
    emi: "₹4,600/mo"
  },
  {
    id: "sdet-automation-testing",
    number: "Course 06",
    title: "SDET & Automation Testing (Selenium, Playwright & API)",
    badge: "Fast Track Placements",
    category: "Testing & QA",
    targetAudience: "Freshers & Manual QA wanting to switch to Automation / SDET",
    duration: "4 Months",
    mode: "Classroom / Online",
    avgPackage: "6.5 - 15 LPA",
    rating: 4.87,
    reviewsCount: 940,
    shortDesc: "Transform from manual QA to high-paid SDET. Master Java/Python, Selenium 4, Playwright, RestAssured API Automation, Cypress, and CI/CD testing.",
    fullDesc: "Organizations need SDETs who can write robust test frameworks from scratch. Master modern test automation tooling including Selenium WebDriver, Playwright for ultra-fast browser automation, RestAssured for microservice APIs, and Jenkins CI/CD integration.",
    tags: ["Playwright", "Selenium 4", "Java SDET", "RestAssured", "Cypress", "Jenkins", "Cucumber"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    highlights: [
      "Build 3 Industry-Standard Test Frameworks from Scratch",
      "Full API Test Automation Suite with RestAssured",
      "Next-Gen Fast Browser Testing with Microsoft Playwright",
      "Direct Referral Access to top 30+ QA Consulting MNCs"
    ],
    curriculum: [
      { week: "Weeks 1-3", title: "Programming Essentials for SDET (Java/Python)", topics: ["OOPs Concepts for Frameworks", "Collections, File I/O, JSON Parsing", "Exception Handling & Clean Code", "Git for Test Engineers"] },
      { week: "Weeks 4-7", title: "Selenium 4 & Page Object Model (POM)", topics: ["Locators, Dynamic XPaths & CSS", "WebDriver Architecture & Synchronization", "TestNG Framework & Assertions", "Data-Driven Testing with Apache POI"] },
      { week: "Weeks 8-11", title: "Next-Gen Automation with Microsoft Playwright", topics: ["Playwright Architecture & Auto-Waiting", "Multi-Browser & Mobile Emulation", "Network Interception & API Mocking", "Playwright Trace Viewer & Reports"] },
      { week: "Weeks 12-14", title: "API Automation with RestAssured & Postman", topics: ["HTTP Methods & Status Codes", "JSON Schema Validation & Serialization", "OAuth & Token Authentication Testing", "Performance Testing with JMeter basics"] },
      { week: "Weeks 15-16", title: "CI/CD Integration & Placement Drives", topics: ["Cucumber BDD Integration", "Running Tests in Docker & Jenkins Pipelines", "SDET Technical Coding Rounds", "Interview Practice with Hiring Managers"] }
    ],
    projects: [
      "Hybrid Automation Framework with Selenium, TestNG & Extent Reports",
      "Modern Enterprise E2E Test Suite Built with Playwright & TypeScript",
      "RestAssured API Automation Framework with OAuth2 & Reporting"
    ],
    fee: "₹38,000",
    emi: "₹3,800/mo"
  }
];
