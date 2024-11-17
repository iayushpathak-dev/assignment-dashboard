// TODO: its not used currently need some more configuration.

import React from "react";
import { SingleSelectProps } from "../typeConstant";

const SingleSelect: React.FC<SingleSelectProps> = ({
  label,
  options = [],
  placeholder = "Select an option",
  value = "",
  onChange,
  name,
  required = false,
  disabled = false,
  className = "",
  errorMessage = "",
  field,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className} max-w-[100%]`}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700 xm:text-xs xs:text-sm sm:text-base md:text-lg"
        >
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
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
          text-gray-700
        `}
      >
        <option value="" disabled className="text-gray-400">
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-gray-700"
          >
            {option.display}
          </option>
        ))}
      </select>
      {errorMessage && (
        <span className="text-xs text-red-500 xm:text-[10px] xs:text-xs sm:text-sm md:text-base">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default SingleSelect;
