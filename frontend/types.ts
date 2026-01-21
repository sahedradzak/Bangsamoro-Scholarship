
export interface Scholarship {
  id: string;
  name: string;
  provider: string;
  providerId: string;
  amount: string;
  deadline: string;
  level: string;
  status: 'Open' | 'Closing' | 'Closed' | 'Coming Soon';
  courses: string[];
  location: string;
  description: string;
  benefits: string[];
  eligibility: string[];
  requirements: string[];
  faqs?: { q: string; a: string }[];
  slots?: { total: number; remaining: number };
  duration?: string;
  renewable?: boolean;
}

export interface Provider {
  id: string;
  name: string;
  slug: string;
  logo: string;
  type: string;
  website: string;
  about: string;
  mission?: string;
  statistics: {
    activePrograms: number;
    activeScholars: number;
    disbursedAmount: string;
  };
  contact: {
    address: string;
    email: string;
    phone: string;
  };
}

export interface SuccessStory {
  id: string;
  name: string;
  role: string;
  story: string;
  photo: string;
  field: string;
  year: string;
  program: string;
  school: string;
  achievements?: string[];
}

export interface Announcement {
  id: string;
  text: string;
  isNew: boolean;
}

export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ENTITY_ADMIN = 'ENTITY_ADMIN',
  STAFF = 'STAFF',
  SCHOLAR = 'SCHOLAR',
  APPLICANT = 'APPLICANT',
  GUEST = 'GUEST'
}
