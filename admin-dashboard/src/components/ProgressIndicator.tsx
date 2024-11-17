import React from "react";
import { ProgressIndicatorProps } from "../typeConstant";

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep = 2,
  totalSteps = 2,
  isSubmitted = false,
  className = "",
}) => {
  const progress = isSubmitted
    ? 100
    : ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div className="flex items-center justify-between w-full text-sm font-medium text-gray-700">
        <span>
          Step {currentStep} of {totalSteps}
        </span>
        <span>{isSubmitted ? "Submitted" : "In Progress"}</span>
      </div>

      <div className="relative sm:w-[200px] w-[100%] h-2 bg-gray-200 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressIndicator;
