export const enquirySubjects = [
  "volunteer",
  "donate",
  "sponsor",
  "partner",
  "supporter",
  "student-support",
  "general",
] as const;

export type EnquirySubject =
  (typeof enquirySubjects)[number];

export const enquiryStatuses = [
  "NEW",
  "IN_PROGRESS",
  "RESOLVED",
  "CLOSED",
] as const;

export type EnquiryStatus =
  (typeof enquiryStatuses)[number];

export type CreateEnquiryRequest = {
  name: string;
  email: string;
  phone: string;
  subject: EnquirySubject;
  message: string;
};

export type UpdateEnquiryRequest = {
  status: EnquiryStatus;
};

export type Enquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: EnquirySubject;
  message: string;
  status: EnquiryStatus;
  created_at: string;
  updated_at: string;
};

export type CreateEnquiryResponse = {
  success: true;
  data: Pick<
    Enquiry,
    "id" | "status" | "created_at"
  >;
  message: string;
};

export type EnquiryResponse = {
  success: true;
  data: Enquiry;
};

export type EnquiryListResponse = {
  success: true;
  data: Enquiry[];
};