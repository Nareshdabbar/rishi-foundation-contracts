export type StudentRegistrationType =
  | "student"
  | "teacher";

/**
 * Data submitted when creating a student/teacher registration.
 */
export type StudentRegistrationRequest = {
  registrationType: StudentRegistrationType;

  studentName: string;
  surname: string;
  dateOfBirth: string;
  gender: string;

  teacherName?: string;
  teacherPhone?: string;

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
  pincode: string;

  schoolName: string;
  schoolType: string;
  currentClass: string;
  academicYear: string;

  note?: string;
};

/**
 * Complete registration record returned by the API.
 */
export type StudentRegistration = {
  id: string;

  registrationType: StudentRegistrationType;

  studentName: string;
  surname: string;
  dateOfBirth: string;
  gender: string;

  teacherName: string | null;
  teacherPhone: string | null;

  fatherName: string | null;
  motherName: string | null;
  guardianName: string | null;

  parentPhone: string | null;
  alternatePhone: string | null;
  parentEmail: string | null;

  state: string;
  district: string;
  mandal: string;
  villageTown: string;
  pincode: string;

  schoolName: string;
  schoolType: string;
  currentClass: string;
  academicYear: string;

  note: string | null;

  created_at: string;
  updated_at: string;
};

/**
 * Data submitted when updating an existing registration.
 */
export type UpdateStudentRegistrationRequest =
  StudentRegistrationRequest;

/**
 * Common API error response.
 */
export type StudentRegistrationErrorResponse = {
  success: false;
  message: string;
  errors?: {
    field: string;
    message: string;
  }[];
};

/**
 * Create registration response.
 */
export type StudentRegistrationResponse =
  | {
      success: true;
      data: {
        id: string;
      };
      message?: string;
    }
  | StudentRegistrationErrorResponse;

/**
 * Get all registrations response.
 */
export type StudentRegistrationListResponse =
  | {
      success: true;
      data: StudentRegistration[];
      message?: string;
    }
  | StudentRegistrationErrorResponse;

/**
 * Get a single registration response.
 */
export type StudentRegistrationDetailResponse =
  | {
      success: true;
      data: StudentRegistration;
      message?: string;
    }
  | StudentRegistrationErrorResponse;

/**
 * Update registration response.
 */
export type UpdateStudentRegistrationResponse =
  | {
      success: true;
      data: StudentRegistration;
      message?: string;
    }
  | StudentRegistrationErrorResponse;

/**
 * Delete registration response.
 */
export type DeleteStudentRegistrationResponse =
  | {
      success: true;
      data: {
        id: string;
      };
      message?: string;
    }
  | StudentRegistrationErrorResponse;

/**
 * Registration count response.
 */
export type StudentRegistrationCountResponse =
  | {
      success: true;
      data: {
        count: number;
      };
      message?: string;
    }
  | StudentRegistrationErrorResponse;