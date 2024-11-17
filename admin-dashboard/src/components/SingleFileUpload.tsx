import React, { useState, useEffect } from "react";
import { FileUploadProps } from "../typeConstant";

const SingleFileUpload: React.FC<FileUploadProps> = ({
  label,
  required = false,
  onChange,
  errorMessage = "",
  className = "",
  field,
  value,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>("");

  useEffect(() => {
    if (value) {
      setFile(new File([""], value.name));
    }
  }, [value]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (
        selectedFile.type !== "application/pdf" &&
        !selectedFile.name.match(/\.(png|pdf)$/i)
      ) {
        setFileError("Please upload a PNG or PDF file.");
        setFile(null);
      } else {
        setFileError("");
        setFile(selectedFile);
        if (onChange) onChange(selectedFile, field);
      }
    } else {
      setFile(null);
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
        accept=".png,application/pdf"
        onChange={handleFileChange}
        className={`w-full px-4 py-2 text-sm border rounded-md shadow-sm outline-none 
          ${fileError ? "border-red-500" : "border-gray-300"} 
          ${file ? "bg-gray-100" : "bg-white"} 
          focus:ring-2 focus:ring-indigo-500 
          ${fileError ? "text-red-500" : "text-gray-700"}`}
      />
      {file && (
        <p className="text-sm text-gray-600 mt-2">
          Selected file: <span className="font-semibold">{file.name}</span>
        </p>
      )}
      {value && !file && (
        <p className="text-sm text-gray-600 mt-2">
          Default file: <span className="font-semibold">{value.name}</span>
        </p>
      )}
      {fileError && <span className="text-xs text-red-500">{fileError}</span>}
      {errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default SingleFileUpload;
