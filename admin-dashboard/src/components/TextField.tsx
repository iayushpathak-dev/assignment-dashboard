import React from "react";
import { TextFieldProps } from "../typeConstant";

const TextField: React.FC<TextFieldProps> = ({
  label,
  type = "text",
  placeholder = "Default Value",
  value,
  defaultValue,
  onChange,
  name,
  required = false,
  disabled = false,
  classes = "",
  errorMessage = "",
  field,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${classes} max-w-[100%]`}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700 xm:text-xs xs:text-sm sm:text-base md:text-lg"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => {
          if (onChange && field) {
            onChange(e, field);
          }
        }}
        required={required}
        disabled={disabled}
        className={`w-full px-4 py-2 text-sm border rounded-md shadow-sm outline-none
          xm:text-xs xs:text-sm sm:text-base md:text-lg
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
          ${
            errorMessage
              ? "border-red-500"
              : "border-gray-300 focus:ring-2 focus:ring-indigo-500"
          }
        `}
      />
      {errorMessage && (
        <span className="text-xs text-red-500 xm:text-[10px] xs:text-xs sm:text-sm md:text-base">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default TextField;
