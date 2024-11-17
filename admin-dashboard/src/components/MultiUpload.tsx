import React, { useState, useEffect } from "react";
import { MultiFileUploadProps } from "../typeConstant";

const MultiFileUpload: React.FC<MultiFileUploadProps> = ({
  label,
  required = false,
  onChange,
  errorMessage = "",
  className = "",
  field,
  maxFiles = 5,
  allowedFormats = ["application/pdf", "image/png"],
  value = [],
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string>("");

  useEffect(() => {
    if (value && value.length > 0) {
      const simulatedFiles = value.map((file) => new File([""], file.name));
      setFiles(simulatedFiles);
    }
  }, [value]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      let newFiles = Array.from(selectedFiles);
      let error = "";

      newFiles = newFiles.filter((file) => {
        const isValidFormat = allowedFormats.includes(file.type);
        if (!isValidFormat) {
          error = `Invalid file type: ${
            file.name
          }. Allowed formats: ${allowedFormats
            .map((format) => format.split("/")[1])
            .join(", ")}.`;
        }
        return isValidFormat;
      });

      if (files.length + newFiles.length > maxFiles) {
        error = `You can upload up to ${maxFiles} files.`;
      }

      if (error) {
        setFileError(error);
      } else {
        setFileError("");
        const updatedFiles = [...files, ...newFiles];
        setFiles(updatedFiles);

        if (onChange) {
          onChange(updatedFiles, field);
        }
      }
    }
  };

  const handleFileRemove = (fileToRemove: File) => {
    const updatedFiles = files.filter((file) => file !== fileToRemove);
    setFiles(updatedFiles);

    if (onChange) {
      onChange(updatedFiles, field);
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type="file"
        accept={allowedFormats.join(",")}
        multiple
        onChange={handleFileChange}
        className={`w-full px-4 py-2 text-sm border rounded-md shadow-sm outline-none 
          ${fileError ? "border-red-500" : "border-gray-300"} 
          ${files.length > 0 ? "bg-gray-100" : "bg-white"} 
          focus:ring-2 focus:ring-indigo-500 
          ${fileError ? "text-red-500" : "text-gray-700"}`}
      />
      {files.length > 0 && (
        <div className="mt-2 text-sm text-gray-600">
          <p>Selected files:</p>
          <ul className="list-disc pl-5">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex items-center justify-between font-semibold"
              >
                <span>{file.name}</span>
                <button
                  type="button"
                  onClick={() => handleFileRemove(file)}
                  className="text-red-500 hover:text-red-700"
                  title="Remove file"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {fileError && <span className="text-xs text-red-500">{fileError}</span>}
      {errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default MultiFileUpload;
