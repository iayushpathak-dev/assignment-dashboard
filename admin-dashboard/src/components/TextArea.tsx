import React from "react";
import { TextAreaProps } from "../typeConstant";

const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder = "Enter text here...",
  value,
  defaultValue,
  onChange,
  name,
  required = false,
  disabled = false,
  classes = "",
  errorMessage = "",
  rows = 4,
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
      <textarea
        id={name}
        name={name}
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
        rows={rows}
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

export default TextArea;
