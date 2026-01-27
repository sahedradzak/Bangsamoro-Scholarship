
export const SCHOLARSHIPS = [
    {
        id: "ahme-2026",
        title: "Access to Higher and Modern Education (AHME)",
        fullName: "Access to Higher and Modern Education Scholarship Program",
        provider: "MBHTE",
        providerFull: "Ministry of Basic, Higher & Technical Education",
        logo: "/images/providers/mbhte.png",
        amount: "₱60,000 / year",
        deadline: "May 21, 2026",
        status: "Open",
        level: "College Level",
        location: "BARMM Residents",
        fields: ["College", "Undergrad", "All Courses"],
        tags: ["College", "Undergrad", "All Courses"],
        description: "The AHME Scholarship, also known as 'Bangsamoro IQ Scholar', is MBHTE's flagship program aligned with the goal of producing One Professional per Bangsamoro Family. It supports post-conflict rehabilitation by prioritizing combatants, their families, and other vulnerable groups.",
        slots: 1400,
        slotsRemaining: 600,
        duration: "4 years (until graduation)",
        isRenewable: true,
        bgImage: "/erme-hero.jpg",
        eligibility: [
            "Senior High School (SHS) or ALS graduate from BARMM.",
            "Filipino citizen and BARMM resident.",
            "Combined annual family income not exceeding ₱400,000.",
            "Not a recipient of any other government scholarship.",
            "Priority: Combatants, children/orphans/spouses of combatants, IDPs, IPs, PWDs, children of solo parents."
        ],
        benefits: [
            "Annual Grant: ₱60,000 per academic year",
            "Release Schedule: ₱30,000 per semester (2 tranches)",
            "Covers tuition, books, living expenses, and transportation"
        ],
        requirements: [
            "Completed AHME Application Form (online via AHME Portal)",
            "PSA Birth Certificate",
            "Certificate of Residency (Barangay/Municipal)",
            "Senior High School Report Card (Form 138) or ALS Certificate",
            "Certificate of Good Moral Character",
            "2x2 ID Photo (white background)",
            "Proof of Family Income (ITR or Certificate of Indigency)"
        ],
        priorityCourses: ["All CHED-recognized courses"]
    },
    {
        id: "base-2026",
        title: "BASE Scholarship Program",
        fullName: "Bangsamoro Assistance for Science Education",
        provider: "MOST",
        providerFull: "Ministry of Science and Technology",
        logo: "/images/providers/most.png",
        amount: "₱80,000 / year",
        deadline: "March 31, 2026",
        status: "Open",
        level: "College Level",
        location: "BARMM Residents",
        fields: ["College", "Science", "Technology"],
        tags: ["College", "Science", "Technology"],
        description: "MOST's scholarship for deserving BARMM students pursuing Science and Technology courses. Provides monthly stipend support throughout the academic journey.",
        slots: 200,
        slotsRemaining: 100,
        duration: "4-5 years",
        isRenewable: true,
        eligibility: [
            "Natural-born Filipino citizen, BARMM resident for 6+ months.",
            "STEM strand SHS graduate with 85% GWA (1st sem, Grade 12).",
            "Non-STEM: Must be in Top 5% of graduating class.",
            "Family income ≤ ₱250,000/year (or ₱350,000 for 4+ children).",
            "Passer of MOST Bangsamoro Scholarship Grant Examination."
        ],
        benefits: [
            "Monthly Stipend: ₱8,000 (10 months)",
            "Annual Total: ₱80,000",
            "Direct bank deposit"
        ],
        requirements: [
            "Application Form",
            "PSA Birth Certificate",
            "Form 138 (Grade 12, 1st Semester)",
            "Income Documentation (ITR/W2/BIR Certificate)"
        ],
        priorityCourses: ["Engineering", "Computer Science", "Mathematics", "Physics", "Chemistry", "Biology", "Agriculture"]
    },
    {
        id: "base-merit-2026",
        title: "BASE-Merit Scholarship Program",
        fullName: "Bangsamoro Assistance for Science Education - Merit",
        provider: "MOST",
        providerFull: "Ministry of Science and Technology",
        logo: "/images/providers/most.png",
        amount: "₱200,000 / year",
        deadline: "March 31, 2026",
        status: "Closing Soon",
        level: "College Level",
        location: "BARMM Residents",
        fields: ["College", "Science", "Technology", "Merit-based"],
        tags: ["College", "Science", "Technology", "Merit-based"],
        description: "A highly competitive merit-based scholarship for students with exceptional aptitude in science and mathematics. This premium program aims to build a critical mass of S&T experts in the Bangsamoro region.",
        slots: 50,
        slotsRemaining: 10,
        duration: "4-5 years",
        isRenewable: true,
        eligibility: [
            "STEM strand SHS graduate with 85% GWA minimum.",
            "Non-STEM strand graduate with 90% GWA minimum.",
            "Passer of BASE-MERIT Qualifying Examination.",
            "High aptitude in science and mathematics.",
            "Willing to pursue career in S&T fields."
        ],
        benefits: [
            "Monthly Stipend: ₱20,000 (10 months)",
            "Annual Total: ₱200,000",
            "Direct bank deposit"
        ],
        requirements: [
            "Application Form",
            "Certification from Principal",
            "Form 138 (Grade 12, 1st Semester)",
            "PSA Birth Certificate"
        ],
        priorityCourses: ["Physics", "Chemistry", "Biology", "Mathematics", "Geology", "Computer Science", "Engineering"]
    },
    {
        id: "medical-2026",
        title: "Bangsamoro Medical Scholarship",
        fullName: "Bangsamoro Medical Scholarship and Return Service Program",
        provider: "MOH",
        providerFull: "Ministry of Health - BARMM",
        logo: "/images/providers/moh.png",
        amount: "Full Tuition + Allowances",
        deadline: "April 1, 2026",
        status: "Open",
        level: "Medicine / Graduate",
        location: "BARMM Residents",
        fields: ["Medicine", "Health", "Doctor of Medicine"],
        tags: ["Medicine", "Health", "Doctor of Medicine"],
        description: "Addressing the shortage of medical doctors in BARMM (1:4,000 ratio), this scholarship provides full support for Bangsamoro students pursuing Doctor of Medicine degrees with a return service obligation.",
        slots: 50,
        slotsRemaining: 40,
        duration: "4-6 years (Medical School)",
        isRenewable: true,
        eligibility: [
            "Bangsamoro resident of BARMM.",
            "Graduate of a pre-medical course.",
            "Willing to render return service in BARMM (2 years per year of scholarship).",
            "Physically and mentally fit."
        ],
        benefits: [
            "Full Tuition Coverage",
            "School Fees and Related Expenses",
            "Living Allowance"
        ],
        requirements: [
            "Pre-med Transcript of Records",
            "Health Certificate",
            "Return Service Agreement",
            "Certificate of Residency"
        ],
        priorityCourses: ["Doctor of Medicine"]
    },
    {
        id: "tesda-2026",
        title: "TVET Skills Training Grant",
        fullName: "Technical Education and Skills Development Support",
        provider: "TESDA",
        providerFull: "Technical Education and Skills Development Authority",
        logo: "/images/providers/tesda.png",
        amount: "Free Training + Allowance",
        deadline: "Rolling",
        status: "Open",
        level: "Vocational",
        location: "BARMM Residents",
        fields: ["Vocational", "Skills", "Training"],
        tags: ["Vocational", "Skills", "Training"],
        description: "Short-term technical-vocational training courses for skills development and employment. Includes national certification fees.",
        slots: 1000,
        slotsRemaining: 500,
        duration: "3-6 months",
        isRenewable: false,
        eligibility: [
            "At least 18 years old.",
            "HS Graduate or ALS Completer."
        ],
        benefits: [
            "Free Training Cost",
            "Training Support Fund (₱160/day)",
            "Free Assessment and Certification",
            "Starter Toolkit"
        ],
        requirements: [
            "Learners Profile Form",
            "ID Pictures"
        ],
        priorityCourses: ["Construction", "Automotive", "Electrical", "Tourism", "ICT"]
    },
    {
        id: "ched-2026",
        title: "Tulong Dunong Program",
        fullName: "CHED Tulong Dunong Program",
        provider: "CHED",
        providerFull: "Commission on Higher Education",
        logo: "/images/providers/ched.png",
        amount: "₱15,000 / year",
        deadline: "May 15, 2026",
        status: "Coming Soon",
        level: "College Level",
        location: "BARMM Residents",
        fields: ["College", "Financial Aid"],
        tags: ["College", "Financial Aid"],
        description: "Financial assistance for tertiary students with combined household income not exceeding ₱400,000.",
        slots: 2000,
        slotsRemaining: 2000,
        duration: "1 year (Renewable)",
        isRenewable: true,
        eligibility: [
            "Filipino citizen.",
            "Combined household income < ₱400,000."
        ],
        benefits: [
            "₱7,500 per semester"
        ],
        requirements: [
            "Proof of Income",
            "Certificate of Registration"
        ],
        priorityCourses: ["All CHED Recognized Programs"]
    },
];

export const STATS = [
    { label: "Scholarships Available", value: "150+" },
    { label: "Applicants Served", value: "12,450" },
    { label: "Check Disbursed (2025)", value: "₱45M+" },
];

export const SUCCESS_STORIES = [
    {
        id: "1",
        name: "Morcid Nuno, RN",
        role: "AHME Scholar 2020-2024",
        school: "Notre Dame University",
        program: "BS Nursing",
        image: "/images/avatars/morcid-nuno-pro.png",
        quote: "The AHME scholarship didn't just fund my education—it gave me a community of mentors and fellow scholars who pushed me to excel.",
        story: "Growing up in a farming family in Maguindanao, I never thought I could afford a nursing degree. The financial burden was too great. But when I discovered the AHME scholarship, it opened a door I thought was closed forever. Beyond the tuition and allowance, the mentorship program connected me with senior nurses who guided me through the toughest parts of my clinical rotations. Today, I serve at the Cotabato Regional Hospital, giving back to the community that raised me, fully licensed and debt-free.",
        achievements: ["Passed Nursing Board Exam (Top 10%)", "Dean's Lister (8 semesters)"],
        featured: true
    },
    {
        id: "2",
        name: "Ahmed Hassan",
        role: "BASE Scholar 2021-2025",
        school: "Mindanao State University - Main",
        program: "BS Civil Engineering",
        image: "/images/avatars/ahmed-hassan.jpg",
        quote: "Science and technology are the keys to rebuilding our region. This scholarship empowered me to be part of that foundation.",
        story: "Rebuilding Marawi and other conflict-affected areas requires skilled engineers who understand the local context. The BASE-Merit program allowed me to focus entirely on my studies without worrying about laboratory fees or textbooks. My research on sustainable, low-cost housing materials for displaced communities was fully funded by the grant, and I'm now working with the Ministry of Public Works to implement some of these solutions.",
        achievements: ["Magna Cum Laude", "Best Undergraduate Thesis"],
        featured: false
    },
    {
        id: "3",
        name: "Fatima Abdullah",
        role: "TESDA Grantee 2024",
        school: "Regional Manpower Training Center",
        program: "Computer Systems Servicing NC II",
        image: "/images/student-2.png",
        quote: "You don't always need a 4-year degree to succeed. Technical skills are just as valuable.",
        story: "After high school, I couldn't afford college. I felt potentialless until I found the TVET Skills Training Grant. In just six months, I learned how to diagnose and repair computer hardware and set up networks. The toolkit they provided allowed me to start a small repair shop in my barangay. I'm now earning enough to support my siblings' education and planning to take further certifications.",
        achievements: ["NC II Certified", "Outstanding Trainee Award"],
        featured: false
    }
];

export const PARTNERS = [
    { code: "MBHTE", name: "Ministry of Basic, Higher & Technical Education", logo: "/images/providers/mbhte.png" },
    { code: "MOST", name: "Ministry of Science & Technology", logo: "/images/providers/most.png" },
    { code: "MOH", name: "Ministry of Health", logo: "/images/providers/moh.png" },
    { code: "CHED", name: "Commission on Higher Education", logo: "/images/providers/ched.png" },
    { code: "TESDA", name: "Technical Education and Skills Development Authority", logo: "/images/providers/tesda.png" },
];

export const FAQS = [
    {
        question: "How do I apply for a scholarship?",
        answer: "First, create an account on the portal. Once registered, complete your profile along with your educational background. Browse the available scholarships, and click 'Apply' on programs you are eligible for. You will need to upload digital copies of required documents."
    },
    {
        question: "What documents do I need?",
        answer: "Common requirements include your PSA Birth Certificate, Transcript of Records or Form 138/137, Certificate of Residency from your Barangay or Municipality, and a 2x2 ID photo. Specific scholarships may require additional documents like an ITR or Health Certificate."
    },
    {
        question: "Can I apply for multiple scholarships?",
        answer: "Yes, you can apply for multiple scholarships, but you generally cannot accept more than one government-funded scholarship at the same time to ensure fair access for all students (double-dipping is usually prohibited)."
    },
    {
        question: "How will I know if I am accepted?",
        answer: "You can track your application status in real-time through your Applicant Dashboard. You will also receive notifications via email and SMS at key stages of the review process."
    },
    {
        question: "Is there an age limit?",
        answer: "Most undergraduate scholarships do not have a strict age limit as long as you meet the academic requirements, but some specific youth programs may limit applicants to 15-30 years old. Check the specific eligibility criteria for each program."
    }
];

export const POSTS = [
    {
        id: "post-1",
        author: {
            name: "MBHTE Official",
            avatar: "/images/providers/mbhte.png",
            role: "Admin",
            badge: "Announcement"
        },
        content: "Important: Disbursement Schedule Update\n\nFebruary allowances will be released on Feb 10-15. Please ensure your bank details are updated in your profile. Contact support if you have concerns.",
        timestamp: "2 hours ago",
        likes: 45,
        comments: 12,
        isOfficial: true
    },
    {
        id: "post-2",
        author: {
            name: "Maria Santos",
            avatar: "/avatars/maria.jpg",
            role: "AHME Scholar · BS Nursing",
            badge: ""
        },
        content: "Just passed my Nursing Board Exam! 🎉 Thank you MBHTE and all the mentors who supported me through this journey. #AHMEScholar #ProudBangsamoro",
        image: "/images/posts/graduation.jpg",
        timestamp: "5 hours ago",
        likes: 128,
        comments: 34,
        isOfficial: false
    },
    {
        id: "post-3",
        author: {
            name: "Dr. Ahmed Researcher",
            avatar: "/avatars/ahmed-mentor.jpg",
            role: "Industry Professional",
            badge: "Mentor"
        },
        content: "🎓 Reminder for STEM scholars: Registration for the upcoming Research Methods workshop is now open. Limited slots available!",
        link: {
            text: "View Course Details",
            url: "/dashboard/learning/courses/course-1"
        },
        timestamp: "1 day ago",
        likes: 67,
        comments: 8,
        isOfficial: false
    }
];

export const SCHOLARS_DIRECTORY = [
    {
        id: "scholar-1",
        name: "Morcid Nuno, RN",
        avatar: "/images/avatars/morcid-nuno-pro.png",
        program: "BS Nursing",
        school: "Notre Dame University",
        type: "AHME Scholar",
        batch: "2024",
        status: "Active",
        location: "Cotabato City",
        about: "Passionate about healthcare and serving the Bangsamoro community.",
        achievements: ["Dean's Lister", "Quiz Bee Champion"]
    },
    {
        id: "scholar-2",
        name: "Ahmed Hassan",
        avatar: "/images/avatars/ahmed-hassan.jpg",
        program: "BS Civil Engineering",
        school: "Mindanao State University - Main",
        type: "BASE Scholar",
        batch: "2025",
        status: "Active",
        location: "Marawi City",
        about: "Aspiring structural engineer.",
        achievements: ["Magna Cum Laude"]
    },
    {
        id: "scholar-3",
        name: "Fatima Abdullah",
        avatar: "/images/student-3.png",
        program: "BS Information Technology",
        school: "Mindanao State University - Main",
        type: "BASE Scholar",
        batch: "2026",
        status: "Active",
        location: "Iligan City",
        about: "Tech enthusiast and developer.",
        achievements: ["Hackathon Winner"]
    },
    {
        id: "scholar-4",
        name: "Omar Macaraya",
        avatar: "/images/student-4.png",
        program: "BS Secondary Education",
        school: "Western Mindanao State University",
        type: "TES Scholar",
        batch: "2025",
        status: "Active",
        location: "Zamboanga City",
        about: "Future educator.",
        achievements: []
    }
];

export const GROUPS = [
    {
        id: "group-1",
        name: "STEM Scholars BARMM",
        category: "Academic",
        description: "Official group for STEM scholarship recipients in BARMM",
        members: 456,
        postsToday: 12,
        isOfficial: true,
        image: "/images/groups/stem.jpg"
    },
    {
        id: "group-2",
        name: "Cotabato City Scholars",
        category: "Regional",
        description: "Scholars from Cotabato City",
        members: 89,
        postsToday: 3,
        isOfficial: false,
        image: "/images/groups/cotabato.jpg"
    },
    {
        id: "group-3",
        name: "Health Sciences Connect",
        category: "Academic",
        description: "For medical, nursing, and allied health scholars",
        members: 234,
        postsToday: 5,
        isOfficial: false,
        image: "/images/groups/health.jpg"
    }
];

export const EVENTS = [
    {
        id: "event-1",
        title: "Research Methods Workshop",
        organizer: "STEM Scholars BARMM",
        date: "Jan 25, 2026",
        time: "2:00 PM",
        type: "Online (Zoom)",
        registered: 45,
        capacity: 50,
        image: "/images/events/research.jpg",
        description: "Learn the fundamentals of academic research."
    },
    {
        id: "event-2",
        title: "Career Fair: Government Opportunities",
        organizer: "MBHTE Official",
        date: "Jan 30, 2026",
        time: "9:00 AM",
        type: "BARMM Govt Center",
        registered: 120,
        capacity: 200,
        image: "/images/events/career.jpg",
        description: "Explore career opportunities in the Bangsamoro Government."
    },
    {
        id: "event-3",
        title: "Scholar Networking Night",
        organizer: "All BARMM Scholars",
        date: "Jan 31, 2026",
        time: "6:00 PM",
        type: "Online (Google Meet)",
        registered: 78,
        capacity: 100,
        image: "/images/events/networking.jpg",
        description: "Meet and connect with fellow scholars."
    }
];

export const COURSES = [
    {
        id: "course-1",
        title: "Research Methods 101",
        category: "Academic",
        thumbnail: "/images/courses/research.jpg",
        duration: "5 hours",
        rating: 4.8,
        reviews: 234,
        enrolled: 1245,
        instructor: "Dr. Amina Research",
        tags: ["Academic", "Research", "Writing"],
        description: "Master the fundamentals of academic research with this comprehensive course designed specifically for BARMM scholars.",
        modules: [
            { title: "Introduction to Research", lessons: 5 },
            { title: "Literature Review", lessons: 4 },
            { title: "Data Collection", lessons: 5 },
            { title: "Data Analysis", lessons: 4 },
            { title: "Research Presentation", lessons: 3 }
        ],
        progress: 65
    },
    {
        id: "course-2",
        title: "Academic Writing Mastery",
        category: "Academic",
        thumbnail: "/images/courses/writing.jpg",
        duration: "4 hours",
        rating: 4.9,
        reviews: 189,
        enrolled: 890,
        instructor: "Prof. Sarah Pen",
        tags: ["Writing", "English", "Communication"],
        description: "Improve your academic writing skills properly.",
        modules: [],
        progress: 0
    },
    {
        id: "course-3",
        title: "Financial Literacy Basics",
        category: "Life Skills",
        thumbnail: "/images/courses/finance.jpg",
        duration: "3 hours",
        rating: 4.7,
        reviews: 156,
        enrolled: 2000,
        instructor: "Mr. Peso Wise",
        tags: ["Finance", "Budgeting", "Life Skills"],
        description: "Learn how to manage your finances effectively.",
        modules: [],
        progress: 0
    },
    {
        id: "course-4",
        title: "Job Interview Skills Pro",
        category: "Career",
        thumbnail: "/images/courses/interview.jpg",
        duration: "2 hours",
        rating: 4.9,
        reviews: 312,
        enrolled: 1500,
        instructor: "HR Manager Jane",
        tags: ["Career", "Interview", "Soft Skills"],
        description: "Ace your job interviews with confidence.",
        modules: [],
        progress: 0
    }
];

export const MENTORS = [
    {
        id: "mentor-1",
        name: "Dr. Amina Research",
        role: "PhD in Education Research",
        institution: "MSU-IIT",
        expertise: ["Research", "Education", "Social Sciences"],
        rating: 4.9,
        sessions: 120,
        avatar: "/avatars/amina.jpg",
        availability: "Mon, Wed, Fri"
    },
    {
        id: "mentor-2",
        name: "Engr. Rashid Build",
        role: "Civil Engineer",
        institution: "DPWH-BARMM",
        expertise: ["Engineering", "Project Management", "Construction"],
        rating: 4.8,
        sessions: 85,
        avatar: "/avatars/rashid.jpg",
        availability: "Sat, Sun"
    }
];

export const TENANTS = [
    {
        id: "mbhte",
        name: "MBHTE-BARMM",
        fullName: "Ministry of Basic, Higher & Technical Education",
        slug: "mbhte",
        status: "Active",
        logo: "/images/providers/mbhte.png",
        staffCount: 12,
        programCount: 3,
        scholarCount: 1240,
        disbursed: "₱8.5M",
        health: "Healthy",
        appCount: 1240,
        created: "Jan 2024"
    },
    {
        id: "most",
        name: "MOST-BARMM",
        fullName: "Ministry of Science & Technology",
        slug: "most",
        status: "Active",
        logo: "/images/providers/most.png",
        staffCount: 8,
        programCount: 2,
        scholarCount: 890,
        disbursed: "₱4.2M",
        health: "Healthy",
        appCount: 890,
        created: "Feb 2024"
    },
    {
        id: "moh",
        name: "MOH-BARMM",
        fullName: "Ministry of Health",
        slug: "moh",
        status: "Active",
        logo: "/images/providers/moh.png",
        staffCount: 5,
        programCount: 1,
        scholarCount: 420,
        disbursed: "₱1.8M",
        health: "Review",
        appCount: 420,
        created: "Mar 2024"
    },
    {
        id: "tesda",
        name: "TESDA-BARMM",
        fullName: "Technical Education & Skills Development Authority",
        slug: "tesda",
        status: "Onboarding",
        logo: "/images/providers/tesda.png",
        staffCount: 2,
        programCount: 0,
        scholarCount: 0,
        disbursed: "₱0M",
        health: "Healthy",
        appCount: 315,
        created: "Jan 2026"
    }
];

export const PLATFORM_USERS = [
    {
        id: "u1",
        name: "Admin User",
        email: "admin@morotech.ph",
        role: "Super Admin",
        tenant: "Platform",
        status: "Active",
        lastActive: "10 mins ago",
        avatar: "/avatars/admin.jpg"
    },
    {
        id: "u2",
        name: "Maria Santos",
        email: "maria.santos@email.com",
        role: "Applicant",
        tenant: "MBHTE",
        status: "Active",
        lastActive: "2 hours ago",
        avatar: "/avatars/maria.jpg"
    },
    {
        id: "u3",
        name: "Entity Admin",
        email: "admin@mbhte.gov.ph",
        role: "Staff",
        tenant: "MBHTE",
        status: "Active",
        lastActive: "1 day ago",
        avatar: "/avatars/mbhte-admin.jpg"
    }
];

export const SUPPORT_TICKETS = [
    {
        id: "1234",
        title: "Cannot upload documents",
        requester: "Juan Dela Cruz",
        role: "Applicant",
        entity: "MBHTE",
        priority: "High",
        status: "Escalated",
        timestamp: "2 hours ago",
        description: "I'm trying to upload my Certificate of Good Moral but it keeps showing an error."
    },
    {
        id: "1235",
        title: "Application status not updating",
        requester: "Maria Santos",
        role: "Applicant",
        entity: "MBHTE",
        priority: "Medium",
        status: "In Progress",
        timestamp: "5 hours ago",
        assignedTo: "Support Agent 1"
    },
    {
        id: "1236",
        title: "How to reset password?",
        requester: "Ahmed Hassan",
        role: "Applicant",
        entity: "MOST",
        priority: "Low",
        status: "Open",
        timestamp: "1 day ago"
    }
];

export const AUDIT_LOGS = [
    {
        id: "log1",
        action: "USER_LOGIN",
        user: "admin@morotech.ph",
        timestamp: "Jan 21, 10:30 AM",
        details: "IP: 203.xxx.xxx.xxx · Device: Chrome/Windows",
        level: "Info"
    },
    {
        id: "log2",
        action: "APPLICATION_APPROVED",
        user: "evaluator@mbhte.gov.ph",
        timestamp: "Jan 21, 10:15 AM",
        details: "Application: #AHME-2026-0042 (Maria Santos) · Entity: MBHTE",
        level: "Warning"
    },
    {
        id: "log3",
        action: "PERMISSION_CHANGED",
        user: "admin@morotech.ph",
        timestamp: "Jan 21, 9:45 AM",
        details: "Target: staff@mbhte.gov.ph · Added 'Disbursement Approval' permission",
        level: "Critical"
    }
];

