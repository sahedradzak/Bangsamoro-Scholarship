# Overview

This document outlines the software architecture for the **Bangsamoro Scholarship Portal (BSP)** at [`scholarships.bangsamoro.site`](http://scholarships.bangsamoro.site). The architecture is designed to support the portal's three pillars (Matchmaking, Community, LMS) and multi-tenant model as defined in the [Software Users ](https://www.notion.so/Software-Users-2ef516e0923d80b9accff22edc6152fe?pvs=21) document.

---

# High-Level Architecture

## System Context Diagram

```jsx
┌─────────────────────────────────────────────────────────────────────────────┐
│                           EXTERNAL ACTORS                                    │
├─────────────┬─────────────┬─────────────┬─────────────┬─────────────────────┤
│  Applicants │   Entities  │  Verifiers  │   Admins    │   Public/Guests     │
└──────┬──────┴──────┬──────┴──────┬──────┴──────┬──────┴──────────┬──────────┘
       │             │             │             │                 │
       └─────────────┴─────────────┴─────────────┴─────────────────┘
                                   │
                          ┌────────▼────────┐
                          │  GoDaddy DNS    │
                          │  (CNAME Record) │
                          └────────┬────────┘
                                   │
                          ┌────────▼────────┐
                          │ Railway Proxy   │
                          │ (SSL, LB, DDoS) │
                          └────────┬────────┘
                                   │
       ┌───────────────────────────┼───────────────────────────┐
       │                           │                           │
┌──────▼──────┐           ┌────────▼────────┐         ┌────────▼────────┐
│  Web App    │           │   API Gateway   │         │  Mobile App     │
│(nginx+Next) │           │    (REST API)   │         │  (React Native) │
└─────────────┘           └────────┬────────┘         └─────────────────┘
                                   │
                                   │
                  ┌────────────────┼────────────────┐
                  │                │                │
          ┌───────▼───────┐  ┌────▼────┐  ┌───────▼───────┐
          │ Django API    │  │  Celery  │  │ Railway Cron  │
          │  (Gunicorn)   │  │ (Worker) │  │(Scheduled Jobs)│
          └───────┬───────┘  └────┬────┘  └───────┬───────┘
                  │                │                │
                  └────────────────┼────────────────┘
                                   │
            ┌────────────┼────────────┐
            │            │            │
     ┌──────▼──────┐   ┌────▼────┐   ┌────▼────┐
     │   pgvector   │   │  Redis   │   │ Buckets  │
     │ (PostgreSQL) │   │ (Cache)  │   │  (S3)    │
     └─────────────┘   └──────────┘   └──────────┘
              │                │
              └──RAILWAY SERVICES──┘
```

---

# Architecture Principles

| Principle | Description |
| --- | --- |
| **Multi-Tenancy** | Single codebase serving multiple scholarship-granting entities with data isolation |
| **Modularity** | Loosely coupled modules aligned with the three pillars |
| **API-First** | Backend exposes RESTful APIs consumed by web and mobile clients |
| **Scalability** | Horizontal scaling through containerization and microservices |
| **Security-First** | Defense in depth with encryption, RBAC, and audit logging |
| **Mobile-First** | Responsive design prioritizing mobile users in BARMM |
| **Offline-Ready** | Progressive Web App (PWA) capabilities for limited connectivity |

---

# Multi-Tenant Architecture

## Tenant Model

The BSP uses a **shared database with tenant ID isolation** model for cost-effectiveness while maintaining data security.

```jsx
┌─────────────────────────────────────────────────────────────────┐
│                     SHARED DATABASE                              │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │  MBHTE   │  │   MOST   │  │   MOH    │  │  Future  │        │
│  │ tenant_id│  │ tenant_id│  │ tenant_id│  │  Tenant  │        │
│  │  = 001   │  │  = 002   │  │  = 003   │  │   ...    │        │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘        │
├─────────────────────────────────────────────────────────────────┤
│  Row-Level Security (RLS) enforces data isolation per tenant   │
└─────────────────────────────────────────────────────────────────┘
```

## Tenant Identification

| Method | Implementation |
| --- | --- |
| **URL Path** | [`](http://scholarships.bangsamoro.site/mbhte)[scholarships.bangsamoro.site/mbhte`](http://scholarships.bangsamoro.site/mbhte`) |
| **Subdomain** (future) | [`mbhte.scholarships.bangsamoro.site`](http://mbhte.scholarships.bangsamoro.site) |
| **Tenant ID** | Every database record includes `tenant_id` foreign key |
| **Row-Level Security** | PostgreSQL RLS policies enforce tenant isolation |

---

# Module Architecture

## Core Modules (Three Pillars)

### Module 1: Scholarship Matchmaking

```
┌─────────────────────────────────────────────────────────┐
│                 MATCHMAKING MODULE                       │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ Scholarship │  │ Application │  │   Search &  │     │
│  │  Listings   │  │  Pipeline   │  │  Discovery  │     │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘     │
│         │                │                │             │
│  ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼──────┐     │
│  │  Program    │  │  Workflow   │  │ Recommend-  │     │
│  │  CRUD       │  │  Engine     │  │ ation Engine│     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
└─────────────────────────────────────────────────────────┘
```

**Components:**

- **Scholarship Service** — CRUD for scholarship programs
- **Application Service** — Application submission and tracking
- **Search Service** — PostgreSQL full-text / pgvector-powered search
- **Recommendation Engine** — Gemini embeddings + pgvector (Phase 5)
- **Notification Service** — Deadline reminders, status updates

### Module 2: Scholar Profiles & Community

```
┌─────────────────────────────────────────────────────────┐
│                 COMMUNITY MODULE                         │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │   Profile   │  │  Networking │  │    Feed &   │     │
│  │  Management │  │  & Messaging│  │   Groups    │     │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘     │
│         │                │                │             │
│  ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼──────┐     │
│  │  Portfolio  │  │ Connection  │  │  Content    │     │
│  │  Builder    │  │   Graph     │  │  Service    │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
└─────────────────────────────────────────────────────────┘
```

**Components:**

- **Profile Service** — User profile CRUD
- **Portfolio Service** — Document/achievement uploads
- **Connection Service** — Social graph management
- **Messaging Service** — Real-time chat (WebSocket)
- **Feed Service** — Activity feed and posts
- **Group Service** — Community management

### Module 3: Scholar Support Services

```
┌─────────────────────────────────────────────────────────┐
│                   SUPPORT MODULE                         │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │     LMS     │  │  Resources  │  │  Mentorship │     │
│  │   Engine    │  │   Library   │  │   Matching  │     │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘     │
│         │                │                │             │
│  ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼──────┐     │
│  │   Course    │  │   Content   │  │   Pairing   │     │
│  │  Progress   │  │    CMS      │  │  Algorithm  │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
└─────────────────────────────────────────────────────────┘
```

**Components:**

- **LMS Service** — Course delivery and tracking
- **Content Service** — Resource management (CMS)
- **Mentorship Service** — Mentor-mentee matching
- **Progress Tracker** — Learning analytics

---

## Entity Management Module (Multi-Tenant)

```
┌─────────────────────────────────────────────────────────┐
│              ENTITY MANAGEMENT MODULE                    │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │   Tenant    │  │    Staff    │  │  Branding   │     │
│  │  Onboarding │  │ Management  │  │   Config    │     │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘     │
│         │                │                │             │
│  ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼──────┐     │
│  │   Scholar   │  │  Reporting  │  │  Financial  │     │
│  │  Monitoring │  │  Analytics  │  │   Tracking  │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
└─────────────────────────────────────────────────────────┘
```

**Components:**

- **Tenant Service** — Entity registration and configuration (Django app)
- **Auth/Permissions** — Role-based access via Django's auth system + django-guardian
- **Monitoring Service** — Scholar progress tracking (Django app)
- **Finance Service** — Disbursement tracking (Django app)
- **Analytics Service** — Tenant-specific reports (Django app)

---

## Platform Administration Module

```
┌─────────────────────────────────────────────────────────┐
│                ADMIN MODULE (MoroTech)                   │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │   Master    │  │   Content   │  │   Support   │     │
│  │  Dashboard  │  │ Moderation  │  │  Helpdesk   │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │   System    │  │   Audit     │  │  Partner    │     │
│  │  Monitoring │  │    Logs     │  │   CRM       │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
└─────────────────────────────────────────────────────────┘
```

---

# Technology Stack

## Recommended Stack

| Layer | Technology | Rationale |
| --- | --- | --- |
| **Frontend** | nginx + Next.js (Latest Stable) + TypeScript + TanStack Query + Tailwind CSS + shadcn/ui | nginx reverse proxy for static files/caching, SSR for SEO, App Router, type safety |
| **Mobile** | React Native / Expo + TypeScript | Code sharing with web, type safety, cross-platform |
| **Backend** | Django 6 (Python) | Batteries-included, robust ORM, admin panel, security-first |
| **API** | Django REST Framework + drf-spectacular | RESTful API with auto-generated OpenAPI schema for TypeScript client generation |
| **Database** | pgvector (Railway) | PostgreSQL with vector extension — ACID, RLS, JSON, similarity search |
| **Cache** | Redis (Railway) | Session management, caching, pub/sub |
| **Search** | PostgreSQL Full-Text / Meilisearch | Full-text search for scholarships |
| **File Storage** | Railway Buckets (S3-compatible) | Document uploads, presigned URLs, native Railway integration |
| **Message Queue** | Django-Q2 / Celery with Redis | Async processing, notifications |
| **Real-time** | Django Channels (WebSocket) | Chat, notifications |
| **Auth** | Django Allauth / NextAuth.js | OAuth, MFA, session management |
| **PaaS/Hosting** | Railway | Simplified deployment, managed services, auto-scaling |
| **CI/CD** | GitHub Actions + Railway | Automated testing and deployment on push |
| **Monitoring** | Railway Metrics + Sentry | Performance monitoring, error tracking |
| **Logging** | Railway Logs + Logtail | Centralized logging |

## Railway Ecosystem Services

| Service | Purpose |  |
| --- | --- | --- |
| **Railway pgvector** | PostgreSQL with vector extension, managed backups, similarity search |  |
| **Railway Redis** | Caching, sessions, task queues |  |
| **Railway Buckets** | S3-compatible object storage for documents, images, user uploads |  |
| **Railway Cron** | Scheduled tasks (deadline reminders, reports) |  |
| **Railway Private Networking** | Secure service-to-service communication |  |

---

# Database Architecture

## Entity-Relationship Overview

```
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│   USERS     │       │   TENANTS   │       │SCHOLARSHIPS │
│─────────────│       │─────────────│       │─────────────│
│ id          │       │ id          │       │ id          │
│ email       │       │ name        │◄──────│ tenant_id   │
│ role        │       │ slug        │       │ title       │
│ profile_id  │       │ branding    │       │ criteria    │
│ tenant_id   │──────►│ settings    │       │ deadline    │
└──────┬──────┘       └─────────────┘       └──────┬──────┘
       │                                          │
       │              ┌─────────────┐              │
       │              │APPLICATIONS │              │
       │              │─────────────│              │
       └─────────────►│ id          │◄─────────────┘
                      │ user_id     │
                      │ scholarship │
                      │ status      │
                      │ documents   │
                      └─────────────┘
```

## Vector Search Architecture

pgvector is enabled from day one to support future AI features without database migration.

```sql
-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Example: Scholarship embeddings for semantic search (Gemini text-embedding-004 = 768 dimensions)
ALTER TABLE scholarships ADD COLUMN embedding vector(768);

-- Example: Profile embeddings for recommendations
ALTER TABLE profiles ADD COLUMN skills_embedding vector(768);

-- HNSW index for fast approximate nearest neighbor search
CREATE INDEX ON scholarships USING hnsw (embedding vector_cosine_ops);
CREATE INDEX ON profiles USING hnsw (skills_embedding vector_cosine_ops);
```

**Vector-enabled tables (embeddings populated in Phase 5):**

- `scholarships.embedding` — Semantic search for scholarship descriptions
- `profiles.skills_embedding` — Profile matching and mentor recommendations
- `posts.embedding` — Community content discovery
- `courses.embedding` — LMS content recommendations

## Key Tables

| Table | Description |
| --- | --- |
| `tenants` | Scholarship-granting entities |
| `users` | All user accounts (applicants, staff, admins) |
| `profiles` | Extended user information (academic, skills) |
| `scholarships` | Scholarship programs |
| `applications` | Application submissions |
| `documents` | Uploaded files with verification status |
| `evaluations` | Application scoring and reviews |
| `scholars` | Approved scholars and monitoring data |
| `disbursements` | Financial transactions |
| `notifications` | User notifications |
| `audit_logs` | System activity logs |
| `connections` | Social connections between users |
| `messages` | Direct messages |
| `posts` | Community feed content |
| `courses` | LMS course content |
| `progress` | Learning progress tracking |

## Multi-Tenant Data Isolation

```sql
-- Example: Row-Level Security Policy
CREATE POLICY tenant_isolation ON scholarships
  FOR ALL
  USING (tenant_id = current_setting('app.current_tenant')::uuid);

-- Every query automatically filtered by tenant
SET app.current_tenant = 'mbhte-uuid-here';
SELECT * FROM scholarships; -- Only MBHTE scholarships returned
```

---

# Security Architecture

## Authentication & Authorization

```jsx
┌─────────────────────────────────────────────────────────┐
│                 SECURITY LAYERS                          │
├─────────────────────────────────────────────────────────┤
│  Layer 1: Network Security                               │
│  • Railway HTTP Proxy with DDoS protection              │
│  • Automatic TLS/SSL certificates                       │
│  • Rate limiting via Django middleware                  │
├─────────────────────────────────────────────────────────┤
│  Layer 2: Authentication                                 │
│  • JWT tokens (access + refresh)                        │
│  • OAuth 2.0 (Google, Facebook)                         │
│  • MFA via OTP (email/SMS)                              │
│  • Session management with Redis                        │
├─────────────────────────────────────────────────────────┤
│  Layer 3: Authorization                                  │
│  • Role-Based Access Control (RBAC)                     │
│  • Tenant-level permissions                             │
│  • Resource-level permissions                           │
│  • API key management for integrations                  │
├─────────────────────────────────────────────────────────┤
│  Layer 4: Data Security                                  │
│  • Encryption at rest (AES-256)                         │
│  • Row-Level Security in PostgreSQL                     │
│  • PII masking in logs                                  │
│  • Secure file storage with signed URLs                 │
├─────────────────────────────────────────────────────────┤
│  Layer 5: Audit & Compliance                             │
│  • Comprehensive audit logging                          │
│  • DPA 2012 compliance                                  │
│  • Regular security audits                              │
└─────────────────────────────────────────────────────────┘
```

## Role Hierarchy

| Role | Scope | Permissions |
| --- | --- | --- |
| **Super Admin** | Platform-wide | Full access to all features and data |
| **Content Moderator** | Platform-wide | Review/approve content, manage listings |
| **Support Staff** | Platform-wide | User support, view tickets, limited data |
| **Entity Admin** | Tenant-specific | Manage entity settings, staff, programs |
| **Entity Evaluator** | Tenant-specific | Review applications, add evaluations |
| **Entity Finance** | Tenant-specific | Manage disbursements, financial reports |
| **Entity Viewer** | Tenant-specific | View-only access to entity data |
| **Verification Partner** | Institution-specific | Verify enrollment, submit grades |
| **Applicant** | Own data | Apply, track applications, manage profile |
| **Public** | None | Browse scholarships, register |

---

# API Architecture

## API Design

| Endpoint Pattern | Example | Description |
| --- | --- | --- |
| `/api/v1/scholarships` | GET, POST | Scholarship CRUD |
| `/api/v1/scholarships/:id` | GET, PUT, DELETE | Single scholarship |
| `/api/v1/applications` | GET, POST | Applications |
| `/api/v1/tenants/:slug/*` | Entity-scoped | Tenant-specific endpoints |
| `/api/v1/users/me` | GET, PUT | Current user profile |
| `/api/v1/schema` | GET | OpenAPI schema (for TS client generation) |

## API Gateway Features

- **Rate Limiting** — Prevent abuse
- **Request Validation** — Schema validation
- **Authentication** — JWT verification
- **Tenant Resolution** — Extract tenant from URL/header
- **Caching** — Response caching for common queries
- **Logging** — Request/response logging

---

# Deployment Architecture

## Production Environment (Railway)

The production environment runs entirely on Railway with GoDaddy DNS for domain management.

**Traffic Flow:**

1. **GoDaddy DNS** — [`scholarships.bangsamoro.site`](http://scholarships.bangsamoro.site) CNAME points to Railway
2. **Railway HTTP Proxy** — Handles SSL/TLS termination, load balancing, and DDoS protection
3. **Application Services** — nginx + Next.js (frontend), Django API (backend), Celery (worker)
4. **Data Services** — pgvector (database), Redis (cache), Buckets (storage)
5. **Private Network** — All services communicate via `*.railway.internal` hostnames

## Environments

| Environment | Purpose | URL |
| --- | --- | --- |
| **Development** | Local development | [`localhost:3000`](http://localhost:3000) |
| **Staging** | Testing before production | [`staging.scholarships.bangsamoro.site`](http://staging.scholarships.bangsamoro.site) |
| **Production** | Live system | [`scholarships.bangsamoro.site`](http://scholarships.bangsamoro.site) |

---

# Scalability Strategy

## Horizontal Scaling

| Component | Scaling Strategy |
| --- | --- |
| **Next.js Frontend** | nginx reverse proxy + Node.js, Railway replicas |
| **Django API** | Railway replicas, Gunicorn workers |
| **Database** | Railway pgvector scaling, connection pooling (PgBouncer) |
| **Cache** | Railway Redis with persistence |
| **Search** | PostgreSQL GIN indexes, optional Meilisearch service |
| **Storage** | Railway Buckets (S3-compatible, auto per-environment) |
| **Background Jobs** | Celery workers with Railway scaling |

## Performance Optimizations

- **Database indexing** on frequently queried columns
- **Query optimization** with EXPLAIN ANALYZE
- **Response caching** for scholarship listings
- **Image optimization** and lazy loading
- **Code splitting** for frontend bundles
- **CDN caching** for static assets

---

# Project Structure

The project uses a **monorepo** structure with separate directories for frontend, backend, and shared resources. The structure is designed to support the portal's **three pillars** (Matchmaking, Community, LMS) and **multi-tenant architecture** as defined in the [Software Users ](https://www.notion.so/Software-Users-2ef516e0923d80b9accff22edc6152fe?pvs=21) and [Software Requirements](https://www.notion.so/Software-Requirements-2ef516e0923d80e5ae3ce18622f6d9ff?pvs=21) documents.

## Repository Layout

```
bsp/
├── frontend/                # Next.js web application
├── backend/                 # Django REST API
├── mobile/                  # React Native app (Phase 5)
├── shared/                  # Shared types and utilities
│   └── types/               # TypeScript types shared between frontend/mobile
├── docs/                    # Documentation
│   ├── api/                 # API documentation
│   ├── architecture/        # Architecture decision records
│   └── user-guides/         # User manuals
├── scripts/                 # Build and deployment scripts
│   ├── [setup.sh](http://setup.sh)             # Local environment setup
│   ├── [seed-db.py](http://seed-db.py)           # Database seeding
│   └── [backup.sh](http://backup.sh)            # Backup scripts
├── .github/                 # GitHub Actions workflows
│   └── workflows/
│       ├── ci.yml           # Continuous integration
│       ├── cd-staging.yml   # Deploy to staging
│       └── cd-production.yml # Deploy to production
├── docker-compose.yml       # Local development stack
├── docker-compose.test.yml  # Testing environment
├── railway.toml             # Railway deployment config
├── .env.example             # Environment variables template
└── [README.md](http://README.md)
```

---

## Frontend Structure (Next.js)

Organized around the three pillars with tenant-scoped routing for multi-tenant support.

```
frontend/
├── public/                  # Static assets
│   ├── images/
│   ├── fonts/
│   └── favicon.ico
├── src/
│   ├── app/                 # App Router pages
│   │   ├── (auth)/          # Auth routes
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── forgot-password/
│   │   │   └── verify-email/
│   │   ├── (public)/        # Public pages (FR-7.1)
│   │   │   ├── scholarships/    # Public scholarship directory
│   │   │   ├── success-stories/ # Testimonials
│   │   │   └── about/
│   │   ├── (dashboard)/     # Protected applicant routes
│   │   │   ├── profile/         # Scholar profile (FR-2.1)
│   │   │   ├── applications/    # Application tracking (FR-1.2)
│   │   │   ├── community/       # Feed, connections (FR-2.2, FR-2.3)
│   │   │   ├── learning/        # LMS access (FR-3.1)
│   │   │   ├── messages/        # Direct messaging
│   │   │   └── settings/
│   │   ├── [tenant]/        # Tenant-scoped routes (FR-4.1)
│   │   │   ├── scholarships/    # Entity scholarship listings
│   │   │   ├── apply/           # Application forms
│   │   │   └── admin/           # Entity admin dashboard
│   │   │       ├── programs/        # Scholarship management (FR-1.3)
│   │   │       ├── applications/    # Application review (FR-1.3.5)
│   │   │       ├── scholars/        # Scholar monitoring (FR-4.3)
│   │   │       ├── disbursements/   # Financial tracking
│   │   │       ├── reports/         # Analytics (FR-4.4)
│   │   │       └── settings/        # Entity config
│   │   ├── admin/           # MoroTech super admin (FR-6.1)
│   │   │   ├── tenants/         # Tenant management
│   │   │   ├── users/           # User management
│   │   │   ├── moderation/      # Content moderation
│   │   │   ├── support/         # Helpdesk (FR-6.2)
│   │   │   └── analytics/       # Platform-wide analytics
│   │   ├── verifier/        # Verification partner portal (FR-5.1)
│   │   │   ├── requests/        # Verification queue
│   │   │   └── history/         # Verification history
│   │   ├── api/             # API routes (NextAuth handlers)
│   │   ├── layout.tsx
│   │   └── page.tsx         # Landing page
│   ├── components/          # React components
│   │   ├── ui/              # shadcn/ui base components
│   │   ├── forms/           # Form components (application forms, etc.)
│   │   ├── layouts/         # Layout components (sidebars, navbars)
│   │   ├── features/        # Feature-specific components
│   │   │   ├── scholarships/    # Scholarship cards, filters
│   │   │   ├── applications/    # Application status, timeline
│   │   │   ├── profiles/        # Profile cards, portfolio
│   │   │   ├── community/       # Feed posts, connections
│   │   │   ├── lms/             # Course cards, progress
│   │   │   └── admin/           # Admin dashboards, charts
│   │   └── shared/          # Shared components (modals, toasts)
│   ├── hooks/               # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useTenant.ts
│   │   └── useApplications.ts
│   ├── lib/                 # Utility functions
│   │   ├── api/             # API client (generated from OpenAPI)
│   │   ├── auth.ts          # Auth utilities
│   │   ├── tenant.ts        # Tenant context utilities
│   │   └── utils.ts
│   ├── providers/           # Context providers
│   │   ├── AuthProvider.tsx
│   │   ├── TenantProvider.tsx
│   │   └── QueryProvider.tsx
│   ├── stores/              # State management (Zustand)
│   │   ├── userStore.ts
│   │   └── applicationStore.ts
│   ├── styles/              # Global styles
│   │   └── globals.css
│   └── types/               # TypeScript types
├── nginx/                   # nginx configuration
│   └── nginx.conf
├── Dockerfile
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Backend Structure (Django)

Django apps organized by domain, aligned with the three pillars and functional requirements.

```
backend/
├── config/                      # Django project configuration
│   ├── settings/
│   │   ├── [base.py](http://base.py)              # Shared settings
│   │   ├── [development.py](http://development.py)       # Local dev settings
│   │   ├── [staging.py](http://staging.py)           # Staging environment
│   │   └── [production.py](http://production.py)        # Production settings
│   ├── [urls.py](http://urls.py)                  # Root URL configuration
│   ├── [wsgi.py](http://wsgi.py)                  # WSGI entry point
│   ├── [asgi.py](http://asgi.py)                  # ASGI entry point (WebSocket)
│   └── [celery.py](http://celery.py)                # Celery configuration
│
├── apps/                        # Django applications
│   │
│   ├── core/                    # Shared utilities
│   │   ├── [mixins.py](http://mixins.py)            # TenantMixin, AuditMixin
│   │   ├── [permissions.py](http://permissions.py)       # Custom DRF permissions
│   │   ├── [pagination.py](http://pagination.py)        # Pagination classes
│   │   ├── [middleware.py](http://middleware.py)        # Tenant middleware
│   │   └── [exceptions.py](http://exceptions.py)        # Custom exceptions
│   │
│   ├── accounts/                # User authentication (All users)
│   │   ├── [models.py](http://models.py)            # User, Role models
│   │   ├── [managers.py](http://managers.py)          # Custom user manager
│   │   ├── [views.py](http://views.py)             # Auth views (login, register, MFA)
│   │   ├── [serializers.py](http://serializers.py)
│   │   ├── [signals.py](http://signals.py)           # Post-registration signals
│   │   └── [oauth.py](http://oauth.py)             # Google/Facebook OAuth (INT-3)
│   │
│   ├── tenants/                 # Multi-tenant management (FR-4.1)
│   │   ├── [models.py](http://models.py)            # Tenant, TenantConfig, TenantBranding
│   │   ├── [views.py](http://views.py)             # Tenant admin views
│   │   ├── [serializers.py](http://serializers.py)
│   │   └── [middleware.py](http://middleware.py)        # Tenant resolution middleware
│   │
│   │   # ═══════════════════════════════════════════════════════
│   │   # PILLAR 1: SCHOLARSHIP MATCHMAKING (FR-1)
│   │   # ═══════════════════════════════════════════════════════
│   │
│   ├── scholarships/            # Scholarship programs (FR-1.1, FR-1.3)
│   │   ├── [models.py](http://models.py)            # Scholarship, EligibilityCriteria
│   │   ├── [views.py](http://views.py)             # Scholarship CRUD, search
│   │   ├── [serializers.py](http://serializers.py)
│   │   ├── [filters.py](http://filters.py)           # Search and filter logic
│   │   └── [recommendations.py](http://recommendations.py)   # Recommendation engine (FR-1.1.6)
│   │
│   ├── applications/            # Application submissions (FR-1.2)
│   │   ├── [models.py](http://models.py)            # Application, ApplicationStatus
│   │   ├── [views.py](http://views.py)             # Submit, track, withdraw
│   │   ├── [serializers.py](http://serializers.py)
│   │   ├── [workflow.py](http://workflow.py)          # Application state machine
│   │   └── [validators.py](http://validators.py)        # Document validation
│   │
│   ├── evaluations/             # Application review (FR-1.3.5-7)
│   │   ├── [models.py](http://models.py)            # Evaluation, Scorecard, EvaluationCriteria
│   │   ├── [views.py](http://views.py)             # Evaluator views
│   │   ├── [serializers.py](http://serializers.py)
│   │   └── [scoring.py](http://scoring.py)           # Scoring algorithms
│   │
│   │   # ═══════════════════════════════════════════════════════
│   │   # PILLAR 2: SCHOLAR PROFILES & COMMUNITY (FR-2)
│   │   # ═══════════════════════════════════════════════════════
│   │
│   ├── profiles/                # Scholar profiles (FR-2.1)
│   │   ├── [models.py](http://models.py)            # Profile, Education, Skill, Achievement
│   │   ├── [views.py](http://views.py)             # Profile CRUD
│   │   ├── [serializers.py](http://serializers.py)
│   │   └── [portfolio.py](http://portfolio.py)         # Portfolio management
│   │
│   ├── community/               # Social features (FR-2.2, FR-2.3)
│   │   ├── [models.py](http://models.py)            # Connection, Post, Group, Endorsement
│   │   ├── [views.py](http://views.py)             # Feed, connections, groups
│   │   ├── [serializers.py](http://serializers.py)
│   │   └── [feed.py](http://feed.py)              # Activity feed logic
│   │
│   ├── messaging/               # Direct messaging (FR-2.2.3)
│   │   ├── [models.py](http://models.py)            # Conversation, Message
│   │   ├── [views.py](http://views.py)             # Message API
│   │   ├── [serializers.py](http://serializers.py)
│   │   └── [consumers.py](http://consumers.py)         # WebSocket consumers
│   │
│   │   # ═══════════════════════════════════════════════════════
│   │   # PILLAR 3: SCHOLAR SUPPORT SERVICES (FR-3)
│   │   # ═══════════════════════════════════════════════════════
│   │
│   ├── lms/                     # Learning management (FR-3.1)
│   │   ├── [models.py](http://models.py)            # Course, Module, Lesson, Progress
│   │   ├── [views.py](http://views.py)             # Course access, progress tracking
│   │   ├── [serializers.py](http://serializers.py)
│   │   └── [certificates.py](http://certificates.py)      # Certificate generation
│   │
│   ├── resources/               # Academic resources (FR-3.2)
│   │   ├── [models.py](http://models.py)            # Resource, Category
│   │   ├── [views.py](http://views.py)             # Resource library
│   │   └── [serializers.py](http://serializers.py)
│   │
│   ├── mentorship/              # Mentorship matching (FR-3.3)
│   │   ├── [models.py](http://models.py)            # Mentor, Mentee, MentorshipSession
│   │   ├── [views.py](http://views.py)             # Matching, scheduling
│   │   ├── [serializers.py](http://serializers.py)
│   │   └── [matching.py](http://matching.py)          # Matching algorithm
│   │
│   │   # ═══════════════════════════════════════════════════════
│   │   # ENTITY & SCHOLAR MANAGEMENT (FR-4)
│   │   # ═══════════════════════════════════════════════════════
│   │
│   ├── scholars/                # Scholar monitoring (FR-4.3)
│   │   ├── [models.py](http://models.py)            # Scholar, AcademicRecord, Compliance
│   │   ├── [views.py](http://views.py)             # Monitoring dashboard
│   │   ├── [serializers.py](http://serializers.py)
│   │   └── [compliance.py](http://compliance.py)        # Compliance checking
│   │
│   ├── disbursements/           # Financial tracking (FR-4.3.2)
│   │   ├── [models.py](http://models.py)            # Disbursement, DisbursementSchedule
│   │   ├── [views.py](http://views.py)             # Finance views
│   │   ├── [serializers.py](http://serializers.py)
│   │   └── [reports.py](http://reports.py)           # Financial reports
│   │
│   │   # ═══════════════════════════════════════════════════════
│   │   # VERIFICATION & SUPPORT (FR-5, FR-6)
│   │   # ═══════════════════════════════════════════════════════
│   │
│   ├── verifications/           # Academic verification (FR-5.1)
│   │   ├── [models.py](http://models.py)            # VerificationRequest, VerificationPartner
│   │   ├── [views.py](http://views.py)             # Partner portal views
│   │   ├── [serializers.py](http://serializers.py)
│   │   └── [workflow.py](http://workflow.py)          # Verification workflow
│   │
│   ├── support/                 # Helpdesk & support (FR-6.2)
│   │   ├── [models.py](http://models.py)            # Ticket, TicketResponse
│   │   ├── [views.py](http://views.py)             # Support ticket views
│   │   └── [serializers.py](http://serializers.py)
│   │
│   │   # ═══════════════════════════════════════════════════════
│   │   # SHARED SERVICES
│   │   # ═══════════════════════════════════════════════════════
│   │
│   ├── documents/               # File management
│   │   ├── [models.py](http://models.py)            # Document, DocumentType
│   │   ├── [views.py](http://views.py)             # Upload, download, presigned URLs
│   │   ├── [serializers.py](http://serializers.py)
│   │   └── [storage.py](http://storage.py)           # S3/Railway Buckets integration
│   │
│   ├── notifications/           # Notifications (INT-1.1, INT-1.2)
│   │   ├── [models.py](http://models.py)            # Notification, NotificationPreference
│   │   ├── [views.py](http://views.py)             # Notification API
│   │   ├── [serializers.py](http://serializers.py)
│   │   ├── [email.py](http://email.py)             # Email service (SendGrid)
│   │   ├── [sms.py](http://sms.py)               # SMS gateway
│   │   └── [tasks.py](http://tasks.py)             # Celery tasks for async notifications
│   │
│   └── analytics/               # Reporting & analytics (FR-4.4, FR-6.1.3)
│       ├── [models.py](http://models.py)            # Report, Metric
│       ├── [views.py](http://views.py)             # Dashboard data
│       ├── [serializers.py](http://serializers.py)
│       ├── [aggregations.py](http://aggregations.py)      # Data aggregation
│       └── [exports.py](http://exports.py)           # PDF/Excel export
│
├── api/
│   └── v1/
│       ├── [urls.py](http://urls.py)              # API URL routing
│       └── [schema.py](http://schema.py)            # drf-spectacular OpenAPI config
│
├── templates/                   # Email templates
│   ├── email/
│   │   ├── welcome.html
│   │   ├── application_status.html
│   │   ├── deadline_reminder.html
│   │   └── disbursement_notice.html
│   └── pdf/                     # PDF report templates
│       ├── scholar_report.html
│       └── analytics_report.html
│
├── tests/                       # Test suite
│   ├── [conftest.py](http://conftest.py)              # Pytest fixtures
│   ├── factories/               # Model factories
│   ├── unit/                    # Unit tests
│   └── integration/             # Integration tests
│
├── requirements/
│   ├── base.txt                 # Shared dependencies
│   ├── development.txt          # Dev tools (pytest, black, etc.)
│   └── production.txt           # Production dependencies
│
├── Dockerfile
├── [manage.py](http://manage.py)
└── pyproject.toml
```

---

## Django App Standard Structure

Each Django app follows a consistent structure:

```
app_name/
├── __init__.py
├── [models.py](http://models.py)          # Database models with TenantMixin
├── [views.py](http://views.py)           # DRF ViewSets and APIViews
├── [serializers.py](http://serializers.py)     # DRF serializers
├── [urls.py](http://urls.py)            # URL routing
├── [admin.py](http://admin.py)           # Django admin configuration
├── [filters.py](http://filters.py)         # django-filter FilterSets (optional)
├── [permissions.py](http://permissions.py)     # Custom permissions (optional)
├── [signals.py](http://signals.py)         # Django signals (optional)
├── [tasks.py](http://tasks.py)           # Celery async tasks (optional)
└── tests/
    ├── __init__.py
    ├── test_[models.py](http://models.py)
    ├── test_[views.py](http://views.py)
    └── test_[serializers.py](http://serializers.py)
```

---

## App-to-Requirement Mapping

| Django App | Pillar | Functional Requirements |
| --- | --- | --- |
| `scholarships` | Matchmaking | FR-1.1 (Listings), FR-1.3 (Program Management) |
| `applications` | Matchmaking | FR-1.2 (Application Management) |
| `evaluations` | Matchmaking | FR-1.3.5-7 (Review Workflow, Scorecards) |
| `profiles` | Community | FR-2.1 (Scholar Profiles) |
| `community` | Community | FR-2.2 (Networking), FR-2.3 (Community Features) |
| `messaging` | Community | FR-2.2.3 (Direct Messaging) |
| `lms` | Support | FR-3.1 (Learning Management) |
| `resources` | Support | FR-3.2 (Academic Resources) |
| `mentorship` | Support | FR-3.3 (Mentorship & Support) |
| `tenants` | Multi-Tenant | FR-4.1 (Tenant Management), FR-4.2 (Entity Admin) |
| `scholars` | Multi-Tenant | FR-4.3 (Scholar Monitoring) |
| `disbursements` | Multi-Tenant | FR-4.3.2 (Disbursement Tracking) |
| `analytics` | Multi-Tenant | FR-4.4 (Reporting & Analytics) |
| `verifications` | Verification | FR-5.1 (Verification Functions) |
| `support` | Admin | FR-6.2 (Support Functions) |
| `notifications` | Shared | INT-1.1 (Email), INT-1.2 (SMS) |
| `documents` | Shared | INT-1.4 (Cloud Storage) |

---

## Key Configuration Files

| File | Purpose |
| --- | --- |
| `railway.toml` | Railway deployment configuration for all services |
| `docker-compose.yml` | Local development stack (PostgreSQL, Redis, services) |
| `docker-compose.test.yml` | Isolated testing environment |
| `.github/workflows/` | CI/CD pipelines (test, lint, deploy to staging/production) |
| `frontend/nginx/nginx.conf` | nginx reverse proxy config for Next.js |
| `backend/config/settings/` | Environment-specific Django settings |
| `backend/config/[celery.py](http://celery.py)` | Celery worker configuration for async tasks |
| `.env.example` | Environment variables template |

---

# Development Phases

## Phase 1: MVP (Pillar 1 - Matchmaking)

- User registration and authentication
- Basic profile management
- Scholarship listings and search
- Application submission and tracking
- Entity dashboard for application review
- Basic notifications

## Phase 2: Multi-Tenant & Entity Features

- Tenant onboarding and configuration
- Branded sub-portals
- Role-based access control per tenant
- Advanced application workflows
- Scholar monitoring
- Reporting and analytics

## Phase 3: Community Features (Pillar 2)

- Enhanced profiles with portfolios
- Connection and networking
- Messaging system
- Community feed and groups
- Alumni network

## Phase 4: LMS & Support (Pillar 3)

- Learning management system
- Course content delivery
- Mentorship matching
- Academic resources library
- Webinars and workshops

## Phase 5: Advanced Features

- Recommendation engine (Gemini embeddings + pgvector similarity search)
- Mobile app (React Native)
- External system integrations
- Analytics dashboards