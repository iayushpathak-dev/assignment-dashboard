import React, { useContext } from "react";
import { AppContext } from "../AppContext";

interface ButtonProps {
  buttonName: string;
  classes?: string;
}
interface FormData {
  [key: string]: any;
}

interface AppContextType {
  formData: FormData;
  onSubmit: (data: FormData) => void;
}

const Button: React.FC<ButtonProps> = ({ buttonName, classes }) => {
  const { formData, onSubmit } = useContext(AppContext) as AppContextType;

  return (
    <div
      className={`${classes} cursor-pointer`}
      onClick={() => onSubmit(formData)}
    >
      {buttonName}
    </div>
  );
};

export default Button;
