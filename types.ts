
export interface Scholarship {
  id: string;
  name: string;
  department: string;
  category: string;
  amount: string;
  deadline: string;
  eligibility: string;
}

export interface Announcement {
  id: string;
  text: string;
  isNew: boolean;
}

export enum UserRole {
  STUDENT = 'STUDENT',
  ADMIN = 'ADMIN',
  INSTITUTION = 'INSTITUTION'
}
