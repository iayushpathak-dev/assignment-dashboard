import React, { useState } from "react";
import { PhoneFieldProps } from "../typeConstant";

const MobileWithCountryCode: React.FC<PhoneFieldProps> = ({
  label,
  placeholder = "Enter phone number",
  value,
  defaultValue,
  onChange,
  name,
  required = false,
  disabled = false,
  className = "",
  errorMessage = "",
  field,
}) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");

  const countryCodes = [
    { code: "+1", country: "USA" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
  ];

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryCode(e.target.value);
  };

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

      <div className="flex gap-2">
        <select
          value={selectedCountryCode}
          onChange={handleCountryCodeChange}
          disabled={disabled}
          className="w-24 px-4 py-2 text-sm border rounded-md shadow-sm outline-none bg-white focus:ring-2 focus:ring-indigo-500"
        >
          {countryCodes.map((country) => (
            <option key={country.code} value={country.code}>
              {country.code}
            </option>
          ))}
        </select>

        <input
          id={name}
          name={name}
          type="tel"
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
      </div>

      {errorMessage && (
        <span className="text-xs text-red-500 xm:text-[10px] xs:text-xs sm:text-sm md:text-base">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default MobileWithCountryCode;
