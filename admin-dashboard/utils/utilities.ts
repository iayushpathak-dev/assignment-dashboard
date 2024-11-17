type FieldType = "email" | "mobile" | "number" | "password";

interface ValidateFieldParams {
  type: FieldType;
  value: string;
}

export const validateField = ({
  type,
  value,
}: ValidateFieldParams): boolean => {
  let regex: RegExp;

  switch (type) {
    case "email":
      regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(String(value).toLowerCase());
    case "mobile":
      regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
      return regex.test(value);
    case "number":
      regex = /^[0-9]+$/;
      return regex.test(value);
    case "password":
      return value.length >= 5;
    default:
      return false;
  }
};
