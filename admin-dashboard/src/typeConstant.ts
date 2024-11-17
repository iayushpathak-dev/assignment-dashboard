export interface PriceDetails {
  name: string;
  mobile_no: number;
  email: string;
  password: string;
}

export interface LoginResponse {
  authToken: string;
}
export interface TextFieldProps {
  label?: string;
  type: "text" | "password" | "email" | "number";
  classes?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
    maxLength?: number
  ) => void;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  errorMessage?: string;
  field?: string;
}

export interface TextAreaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    field: string,
    maxLength?: number
  ) => void;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  classes?: string;
  errorMessage?: string;
  rows?: number;
  field: string;
}

export interface SingleSelectProps {
  label?: string;
  options?: { value: string; display: string }[];
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>, field: string) => void;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  errorMessage?: string;
  field: string;
}

export interface FileUploadProps {
  label?: string;
  required?: boolean;
  onChange?: (file: File | null, field: string) => void;
  errorMessage?: string;
  className?: string;
  field: string;
  value?: { name: string };
}

export interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  isSubmitted: boolean;
  className?: string;
}

export interface MultiFileUploadProps {
  label?: string;
  required?: boolean;
  onChange?: (files: File[], field: string, maxLength?: number) => void;
  errorMessage?: string;
  className?: string;
  field: string;
  maxFiles?: number;
  allowedFormats?: string[];
  value?: { name: string }[];
}

export interface CustomMultiSelectProps {
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
  onChange?: (selectedValues: string[]) => void;
  errorMessage?: string;
  className?: string;
  maxSelections?: number;
}

export interface PhoneFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
    maxLength?: number
  ) => void;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  errorMessage?: string;
  field: string;
}
