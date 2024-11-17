import Location from "../Location";
import MobileWithCountryCode from "../MobileWithCountryCode";
import MultiFileUpload from "../MultiUpload";
import SingleFileUpload from "../SingleFileUpload";
import SingleSelect from "../SingleSelect";
import TextArea from "../TextArea";
import TextField from "../TextField";

interface InputFieldProps {
  type: string;
  classes?: string;
  field: string;
  placeholder?: string;
  options?: { value: string; display: string }[];
  value: any;
  onInputChange: (
    field: string,
    value?: any,
    maxLength?: string
  ) => boolean | string;
  errorMessage?: string;
}

export default function InputFields({
  type,
  placeholder,
  options = [],
  onInputChange,
  field,
  errorMessage,
  value,
}: InputFieldProps) {
  switch (type) {
    case "text":
      return (
        <TextField
          onChange={(e, field) => onInputChange(field, e.target.value)}
          field={field}
          classes=""
          type={type}
          placeholder={placeholder}
          errorMessage={errorMessage}
          value={value}
        />
      );

    case "password":
      return (
        <TextField
          onChange={(e, field) => onInputChange(field, e.target.value)}
          field={field}
          classes=""
          type={type}
          placeholder={placeholder}
          errorMessage={errorMessage}
          value={value}
        />
      );

    case "email":
      return (
        <TextField
          onChange={(e, field) => onInputChange(field, e.target.value)}
          field={field}
          classes=""
          type={type}
          placeholder={placeholder}
          errorMessage={errorMessage}
          value={value}
        />
      );

    case "number":
      return (
        <TextField
          onChange={(e, field) => onInputChange(field, e.target.value)}
          field={field}
          classes=""
          type={type}
          placeholder={placeholder}
          errorMessage={errorMessage}
          value={value}
        />
      );

    case "mobile":
      return (
        <MobileWithCountryCode
          onChange={(e, field) => onInputChange(field, e.target.value)}
          field={field}
          placeholder={placeholder}
          errorMessage={errorMessage}
          value={value}
        />
      );

    case "textArea":
      return (
        <TextArea
          onChange={(e, field) => onInputChange(field, e.target.value)}
          field={field}
          classes=""
          placeholder={placeholder}
          errorMessage={errorMessage}
          value={value}
        />
      );

    case "select":
      if (!options || options.length === 0) {
        console.error("Options are required for select type fields.");
        return null;
      }
      return (
        <SingleSelect
          onChange={(e, field) => onInputChange(field, e.target.value)}
          options={options}
          placeholder={placeholder}
          field={field}
          errorMessage={errorMessage}
          value={value}
        />
      );

    case "file":
      return (
        <SingleFileUpload
          onChange={(val, field) => onInputChange(field, val)}
          field={field}
          errorMessage={errorMessage}
          value={value}
        />
      );

    case "multiFile":
      return (
        <MultiFileUpload
          onChange={(val, field) => onInputChange(field, val)}
          field={field}
          errorMessage={errorMessage}
          value={value}
        />
      );

    case "location":
      return <Location />;
  }
}
