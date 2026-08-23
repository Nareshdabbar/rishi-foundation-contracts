export type StudentRegistrationType =
  | "student"
  | "teacher";

export type StudentRegistrationRequest = {
  registrationType: StudentRegistrationType;

  studentName: string;
  surname: string;
  dateOfBirth: string;
  gender: string;

  teacherName?: string;

  fatherName?: string;
  motherName?: string;
  guardianName?: string;
  parentPhone?: string;
  alternatePhone?: string;
  parentEmail?: string;

  state: string;
  district: string;
  mandal: string;
  villageTown: string;

  schoolName: string;
  schoolType: string;
  currentClass: string;
  academicYear: string;
};

export type StudentRegistrationResponse = {
  success: boolean;
  data: {
    id: string;
  };
  message?: string;
};