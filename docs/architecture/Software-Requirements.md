# Overview

This document outlines the software requirements for the **Bangsamoro Scholarship Portal (BSP)** at [`scholarships.bangsamoro.site`](http://scholarships.bangsamoro.site). Requirements are organized based on the portal's three pillars and user types as defined in the [Software Users ](https://www.notion.so/Software-Users-2ef516e0923d80b9accff22edc6152fe?pvs=21) document.

---

# Functional Requirements

## Pillar 1: Scholarship Matchmaking (Jobstreet-like)

### FR-1.1 Scholarship Listings

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-1.1.1 | System shall display all active scholarship programs in a searchable directory | Must Have |
| FR-1.1.2 | System shall allow filtering by eligibility criteria (course, GWA, income, location, priority group) | Must Have |
| FR-1.1.3 | System shall allow sorting by deadline, amount, and relevance | Should Have |
| FR-1.1.4 | System shall display scholarship details (benefits, requirements, deadlines, slots) | Must Have |
| FR-1.1.5 | System shall show application status indicators (open, closing soon, closed) | Must Have |
| FR-1.1.6 | System shall provide a recommendation engine suggesting scholarships based on user profile | Could Have |

### FR-1.2 Application Management (Applicants)

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-1.2.1 | System shall allow applicants to apply to multiple scholarships with a single profile | Must Have |
| FR-1.2.2 | System shall support document upload (PDF, images) with file size limits | Must Have |
| FR-1.2.3 | System shall validate required documents before submission | Must Have |
| FR-1.2.4 | System shall allow saving draft applications | Should Have |
| FR-1.2.5 | System shall track application status (submitted, under review, shortlisted, approved, rejected) | Must Have |
| FR-1.2.6 | System shall send notifications for status changes and deadlines | Must Have |
| FR-1.2.7 | System shall provide a deadline calendar with reminders | Should Have |
| FR-1.2.8 | System shall allow applicants to withdraw applications before evaluation | Should Have |

### FR-1.3 Scholarship Program Management (Entities)

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-1.3.1 | System shall allow entities to create and publish scholarship programs | Must Have |
| FR-1.3.2 | System shall support custom eligibility criteria configuration | Must Have |
| FR-1.3.3 | System shall allow setting application periods (open/close dates) | Must Have |
| FR-1.3.4 | System shall support slot limits and auto-closing when filled | Should Have |
| FR-1.3.5 | System shall provide application review workflow (received → screening → evaluation → decision) | Must Have |
| FR-1.3.6 | System shall allow bulk application processing (approve/reject multiple) | Should Have |
| FR-1.3.7 | System shall support evaluation scorecards with configurable criteria | Could Have |
| FR-1.3.8 | System shall generate applicant shortlists based on filters | Should Have |

---

## Pillar 2: Scholar Profiles & Community (LinkedIn-like)

### FR-2.1 Scholar Profiles

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-2.1.1 | System shall allow users to create comprehensive academic profiles | Must Have |
| FR-2.1.2 | System shall support profile sections: education, skills, achievements, certifications, extracurriculars | Must Have |
| FR-2.1.3 | System shall allow uploading portfolio items (projects, papers, certificates) | Should Have |
| FR-2.1.4 | System shall display scholarship history (applied, awarded, completed) | Must Have |
| FR-2.1.5 | System shall support profile visibility settings (public, connections only, private) | Should Have |
| FR-2.1.6 | System shall allow profile verification badges for confirmed scholars | Could Have |

### FR-2.2 Networking & Connections

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-2.2.1 | System shall allow users to send and accept connection requests | Should Have |
| FR-2.2.2 | System shall suggest connections based on course, school, or scholarship program | Could Have |
| FR-2.2.3 | System shall support direct messaging between connected users | Should Have |
| FR-2.2.4 | System shall allow users to follow scholarship entities for updates | Should Have |
| FR-2.2.5 | System shall maintain an alumni network directory | Could Have |

### FR-2.3 Community Features

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-2.3.1 | System shall provide a community feed for posts and updates | Could Have |
| FR-2.3.2 | System shall allow creating and joining groups (by course, program, interest) | Could Have |
| FR-2.3.3 | System shall support discussion forums with threads and replies | Could Have |
| FR-2.3.4 | System shall allow endorsements for skills from connections | Could Have |
| FR-2.3.5 | System shall support sharing achievements and milestones | Could Have |

---

## Pillar 3: Scholar Support Services (LMS-like)

### FR-3.1 Learning Management System

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-3.1.1 | System shall provide access to online courses and tutorials | Could Have |
| FR-3.1.2 | System shall track learning progress and completion | Could Have |
| FR-3.1.3 | System shall support video content, documents, and quizzes | Could Have |
| FR-3.1.4 | System shall issue certificates of completion | Could Have |

### FR-3.2 Academic Resources

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-3.2.1 | System shall provide downloadable study guides and reviewers | Should Have |
| FR-3.2.2 | System shall host scholarship application workshops and guides | Should Have |
| FR-3.2.3 | System shall provide FAQs and how-to articles | Must Have |

### FR-3.3 Mentorship & Support

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-3.3.1 | System shall support mentor-mentee matching | Could Have |
| FR-3.3.2 | System shall provide career guidance resources | Could Have |
| FR-3.3.3 | System shall link to mental health and wellness resources | Could Have |

---

## Multi-Tenant Platform (Entity Management)

### FR-4.1 Tenant Management

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-4.1.1 | System shall support multiple scholarship-granting entities as separate tenants | Must Have |
| FR-4.1.2 | System shall provide branded sub-portals per entity (e.g., `/mbhte`, `/dost`) | Should Have |
| FR-4.1.3 | System shall isolate tenant data while sharing common applicant pool | Must Have |
| FR-4.1.4 | System shall support custom branding (logo, colors) per tenant | Could Have |

### FR-4.2 Entity Administration

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-4.2.1 | System shall support role-based access control (admin, evaluator, finance, viewer) | Must Have |
| FR-4.2.2 | System shall allow entities to manage their own users | Must Have |
| FR-4.2.3 | System shall provide entity-specific dashboards and analytics | Must Have |
| FR-4.2.4 | System shall support organization profile management | Must Have |

### FR-4.3 Scholar Monitoring

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-4.3.1 | System shall track enrolled scholars' academic progress | Should Have |
| FR-4.3.2 | System shall manage disbursement schedules and records | Should Have |
| FR-4.3.3 | System shall monitor compliance with scholarship conditions | Should Have |
| FR-4.3.4 | System shall generate scholar performance reports | Should Have |

### FR-4.4 Reporting & Analytics

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-4.4.1 | System shall generate reports on application volume and trends | Must Have |
| FR-4.4.2 | System shall provide demographic analytics on applicants | Should Have |
| FR-4.4.3 | System shall track approval rates and processing times | Should Have |
| FR-4.4.4 | System shall export reports in PDF and Excel formats | Should Have |

---

## Academic Verification Partners

### FR-5.1 Verification Functions

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-5.1.1 | System shall allow institutions to register as verification partners | Should Have |
| FR-5.1.2 | System shall provide a verification request queue for partner institutions | Should Have |
| FR-5.1.3 | System shall support digital document submission for verification | Should Have |
| FR-5.1.4 | System shall allow batch verification processing | Could Have |
| FR-5.1.5 | System shall track verification history and audit trail | Should Have |

---

## Platform Administration (MoroTech)

### FR-6.1 Super Admin Functions

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-6.1.1 | System shall provide master admin dashboard for platform management | Must Have |
| FR-6.1.2 | System shall allow managing all users, entities, and configurations | Must Have |
| FR-6.1.3 | System shall provide platform-wide analytics and reports | Must Have |
| FR-6.1.4 | System shall support content moderation and approval workflows | Must Have |

### FR-6.2 Support Functions

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-6.2.1 | System shall provide helpdesk ticketing system | Should Have |
| FR-6.2.2 | System shall allow user impersonation for support purposes | Could Have |
| FR-6.2.3 | System shall maintain activity logs for auditing | Must Have |

---

## Peripheral Users

### FR-7.1 Public Access

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-7.1.1 | System shall allow browsing scholarships without login | Must Have |
| FR-7.1.2 | System shall provide public statistics on scholarships available | Should Have |
| FR-7.1.3 | System shall display success stories and testimonials | Should Have |
| FR-7.1.4 | System shall provide easy registration flow | Must Have |

### FR-7.2 Educator Portal

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-7.2.1 | System shall provide downloadable scholarship announcements | Should Have |
| FR-7.2.2 | System shall allow bulk information requests for schools | Could Have |
| FR-7.2.3 | System shall provide educator resource hub | Could Have |

---

# Non-Functional Requirements

## NFR-1 Performance

| ID | Requirement | Target |
| --- | --- | --- |
| NFR-1.1 | Page load time | < 3 seconds |
| NFR-1.2 | API response time | < 500ms (95th percentile) |
| NFR-1.3 | Concurrent users supported | 10,000+ |
| NFR-1.4 | File upload size limit | 10MB per file |
| NFR-1.5 | Search results response | < 2 seconds |

## NFR-2 Scalability

| ID | Requirement | Target |
| --- | --- | --- |
| NFR-2.1 | Horizontal scaling capability | Auto-scale based on load |
| NFR-2.2 | Database scalability | Support 1M+ user records |
| NFR-2.3 | Multi-tenant isolation | Complete data separation |
| NFR-2.4 | Peak load handling | 5x normal traffic during deadlines |

## NFR-3 Security

| ID | Requirement | Target |
| --- | --- | --- |
| NFR-3.1 | Data encryption | AES-256 at rest, TLS 1.3 in transit |
| NFR-3.2 | Authentication | Multi-factor authentication support |
| NFR-3.3 | Authorization | Role-based access control (RBAC) |
| NFR-3.4 | Data Privacy | DPA 2012 compliant |
| NFR-3.5 | Session management | Secure tokens, auto-logout |
| NFR-3.6 | Audit logging | All sensitive actions logged |
| NFR-3.7 | Vulnerability management | Regular security audits |

## NFR-4 Availability & Reliability

| ID | Requirement | Target |
| --- | --- | --- |
| NFR-4.1 | System uptime | 99.5% availability |
| NFR-4.2 | Backup frequency | Daily automated backups |
| NFR-4.3 | Disaster recovery | RTO < 4 hours, RPO < 1 hour |
| NFR-4.4 | Failover capability | Automatic failover for critical services |

## NFR-5 Usability

| ID | Requirement | Target |
| --- | --- | --- |
| NFR-5.1 | Mobile responsiveness | Fully responsive design |
| NFR-5.2 | Accessibility | WCAG 2.1 AA compliance |
| NFR-5.3 | Language support | English, Filipino (future: Meranaw, Maguindanaon) |
| NFR-5.4 | Browser support | Chrome, Firefox, Safari, Edge (latest 2 versions) |
| NFR-5.5 | Offline capability | Basic offline access for mobile app |

## NFR-6 Maintainability

| ID | Requirement | Target |
| --- | --- | --- |
| NFR-6.1 | Code documentation | Comprehensive API documentation |
| NFR-6.2 | Deployment | CI/CD pipeline with automated testing |
| NFR-6.3 | Monitoring | Real-time performance and error monitoring |
| NFR-6.4 | Logging | Centralized logging with search capability |

---

# Integration Requirements

## INT-1 External Systems

| ID | System | Purpose | Priority |
| --- | --- | --- | --- |
| INT-1.1 | Email Service (SendGrid/SES) | Notifications and communications | Must Have |
| INT-1.2 | SMS Gateway | OTP and urgent notifications | Should Have |
| INT-1.3 | Payment Gateway | Processing fees (if applicable) | Could Have |
| INT-1.4 | Cloud Storage (S3/GCS) | Document and file storage | Must Have |
| INT-1.5 | Analytics (Google Analytics) | Usage tracking | Should Have |

## INT-2 Government Systems (Future)

| ID | System | Purpose | Priority |
| --- | --- | --- | --- |
| INT-2.1 | PhilSys | National ID verification | Could Have |
| INT-2.2 | PSA | Birth certificate verification | Could Have |
| INT-2.3 | DepEd LIS | Student records verification | Could Have |
| INT-2.4 | CHED Student Database | Higher education verification | Could Have |

## INT-3 Social/Authentication

| ID | System | Purpose | Priority |
| --- | --- | --- | --- |
| INT-3.1 | Google OAuth | Social login | Should Have |
| INT-3.2 | Facebook OAuth | Social login | Could Have |
| INT-3.3 | SSO (SAML/OIDC) | Enterprise single sign-on for entities | Could Have |

---

# Data Requirements

## DR-1 Data Entities

- **Users** — Applicants, entity staff, admins, verification partners
- **Profiles** — Academic information, skills, achievements, portfolio
- **Scholarships** — Programs, criteria, benefits, deadlines
- **Applications** — Submissions, documents, status, evaluations
- **Entities** — Organizations, branding, staff, programs
- **Documents** — Uploaded files, verification status
- **Notifications** — Alerts, reminders, messages
- **Audit Logs** — System activities, user actions

## DR-2 Data Retention

| Data Type | Retention Period |
| --- | --- |
| Active user data | Indefinite while active |
| Inactive user data | 5 years after last activity |
| Application records | 10 years |
| Financial records | 10 years |
| Audit logs | 7 years |
| Session data | 30 days |

---

# Constraints & Assumptions

## Constraints

- Must comply with the Data Privacy Act of 2012 (DPA)
- Must be accessible in areas with limited internet connectivity
- Initial budget constraints may limit advanced features to later phases
- Must support low-end devices common in BARMM

## Assumptions

- Scholarship-granting entities will provide accurate program information
- Applicants have access to basic internet and devices
- Partner institutions will cooperate with verification processes
- MoroTech will provide ongoing support and maintenance