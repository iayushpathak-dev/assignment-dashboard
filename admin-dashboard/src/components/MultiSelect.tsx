// TODO: its not used currently need some more configuration.

import React, { useState, useEffect, useRef } from "react";
import { CustomMultiSelectProps } from "../typeConstant";

const CustomMultiSelect: React.FC<CustomMultiSelectProps> = ({
  label,
  options,
  required = false,
  onChange,
  errorMessage = "",
  className = "",
  maxSelections = 5,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    } else {
      if (selectedOptions.length < maxSelections) {
        setSelectedOptions([...selectedOptions, value]);
      }
    }
    if (onChange) onChange(selectedOptions);
  };

  const removeSelectedItem = (value: string) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== value));
    if (onChange) onChange(selectedOptions);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`flex flex-col gap-2 relative ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div
        className={`w-full p-2 border rounded-md shadow-sm cursor-pointer ${
          errorMessage ? "border-red-500" : "border-gray-300"
        } ${selectedOptions.length === 0 ? "bg-white" : "bg-gray-100"}`}
        onClick={toggleDropdown}
      >
        <div className="flex flex-wrap gap-2">
          {selectedOptions.map((option) => (
            <span
              key={option}
              className="flex items-center gap-1 px-2 py-1 bg-indigo-500 text-white rounded-md"
            >
              {options.find((opt) => opt.value === option)?.label}
              <button
                type="button"
                className="text-white text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  removeSelectedItem(option);
                }}
              >
                &times;
              </button>
            </span>
          ))}
        </div>
        {selectedOptions.length === 0 && (
          <span className="text-gray-400">Select options</span>
        )}
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute mt-1 w-full bg-white shadow-lg rounded-md max-h-60 overflow-y-auto z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`p-2 cursor-pointer hover:bg-indigo-100 ${
                selectedOptions.includes(option.value) ? "bg-indigo-200" : ""
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}

      {errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default CustomMultiSelect;
