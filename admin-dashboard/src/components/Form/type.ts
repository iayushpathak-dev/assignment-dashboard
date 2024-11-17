// types.ts
export interface Field {
  type: string;
  label: string;
  field: string;
  mandatory: number;
  placeholder?: string;
  validation?: string;
  customValidation?: (formData: Record<string, any>) => {
    isValid: boolean;
    message?: string;
  };
  options?: { value: string; display: string }[];
  inputProps?: Record<string, any>;
}

export interface FormLayout {
  heading?: string;
  description?: string;
  layout: string;
  fields: Field[];
}
