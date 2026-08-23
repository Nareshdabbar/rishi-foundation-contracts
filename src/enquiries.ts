export type CreateEnquiryRequest = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type EnquiryStatus =
  | "NEW"
  | "IN_PROGRESS"
  | "RESOLVED"
  | "CLOSED";

export type Enquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: EnquiryStatus;
  createdAt: string;
  updatedAt: string;
};

export type CreateEnquiryResponse = {
  success: true;
  data: {
    id: string;
    status: EnquiryStatus;
    created_at: string;
  };
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

export type UpdateEnquiryRequest = {
  status?: EnquiryStatus;
  subject?: string;
  message?: string;
};