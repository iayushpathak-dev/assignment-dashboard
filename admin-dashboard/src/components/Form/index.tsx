type FieldType = "email" | "mobile" | "number" | "password";
interface Field {
  type: string;
  label?: string;
  field?: any;
  mandatory?: boolean | number;
  className?: string;
  placeholder: string;
  emailValidation?: boolean;
  validation?: FieldType;
  options?: { value: string; display: string }[];
}

interface FormLayout {
  layout: string;
  fields: Field[];
  action?: any;
  onSubmitForm?: any;
  defaultData?: any;
}

import { useState } from "react";
import styles from "./index.module.css";
import InputFields from "./InputFields";
import { AppContext } from "../../AppContext";
import { validateField } from "../../../utils/utilities";

export default function Form({
  layout,
  fields,
  action,
  onSubmitForm,
  defaultData,
}: FormLayout) {
  const [formData, setFormData] = useState(defaultData);
  const [validateData, setValidateData] = useState<Record<string, any>>({});
  const onInputChange = (
    field: string,
    value: any,
    maxLength?: string
  ): any => {
    if (
      maxLength &&
      typeof value === "string" &&
      value.length > Number(maxLength)
    ) {
      return;
    }
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);
    if (validateData[field]) {
      delete validateData[field];
    }
  };

  const isValid = () => {
    const isDataValidate: Record<string, string> = {};

    fields.forEach((item) => {
      const { mandatory, validation, field, label } = item;
      const value = formData[field as keyof typeof formData];

      // Mandatory field check
      if (!value && mandatory) {
        isDataValidate[field] = `${label} is mandatory`;
      }

      // Validation check
      if (value && validation) {
        if (!validateField({ type: validation, value })) {
          if (validation === "password") {
            isDataValidate[field] = `${label} should be 8 digits/characters`;
          } else {
            isDataValidate[field] = `${label} is not valid`;
          }
        }
      }
    });
    if (Object.keys(isDataValidate).length > 0) {
      setValidateData(isDataValidate);
      return false;
    } else {
      setValidateData({});
      return true;
    }
  };

  const onSubmit = async () => {
    if (isValid()) {
      onSubmitForm && onSubmitForm(formData);
    }
  };

  return (
    <AppContext.Provider
      value={{
        onSubmit: onSubmit,
        formData,
      }}
    >
      <div className={"flex flex-col f16 w-[100%]"}>
        <div className={`${styles.formContainer} bgWhite flex-1 w-[100%]`}>
          <div className={`formLayout w-[100%] gap-[24px] grid ${layout}`}>
            {fields.map((items, index) => {
              const { type, placeholder, field, options } = items;

              return (
                <div key={index}>
                  <InputFields
                    type={type}
                    placeholder={placeholder}
                    onInputChange={onInputChange}
                    field={field}
                    options={options}
                    value={formData[field as keyof typeof formData]}
                    errorMessage={validateData[field]}
                  />
                </div>
              );
            })}
          </div>
          {action}
        </div>
      </div>
    </AppContext.Provider>
  );
}
