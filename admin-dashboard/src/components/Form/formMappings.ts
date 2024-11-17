export const basicsDetails = {
  layout: "grid-cols-1",
  fields: [
    {
      type: "text",
      label: "User Name",
      field: "name",
      mandatory: true,
      className: "md:col-span-1 col-span-2 grid-rows-3",
      placeholder: "Enter User Name",
    },
    {
      type: "email",
      label: "Email",
      field: "email",
      mandatory: true,
      className: "md:col-span-1 col-span-2 grid-rows-3",
      placeholder: "Enter Email Address",
      validation: "email",
    },
    {
      type: "mobile",
      label: "Mobile No.",
      field: "mobile_number",
      mandatory: true,
      className: "md:col-span-1 col-span-2 grid-rows-3",
      placeholder: "Enter Mobile Number",
      validation: "mobile",
    },
  ],
};

export const address = {
  layout: "md:grid-cols-2 grid-cols-1",
  fields: [
    {
      type: "textArea",
      label: "Address Line 1",
      field: "address_1",
      mandatory: true,
      className: "md:col-span-1 col-span-2 grid-rows-3",
      placeholder: "Enter Address Line 1",
    },
    {
      type: "textArea",
      label: "Address Line 2",
      field: "address_2",
      mandatory: true,
      className: "md:col-span-1 col-span-2 grid-rows-3",
      placeholder: "Enter Address Line 2",
    },
    {
      type: "text",
      label: "City",
      field: "city",
      mandatory: true,
      className: "md:col-span-1",
      placeholder: "Enter City",
    },
    {
      type: "text",
      label: "State",
      field: "state",
      mandatory: true,
      className: "md:col-span-1",
      placeholder: "Enter State",
    },
    {
      type: "number",
      label: "Pincode",
      field: "pincode",
      mandatory: true,
      className: "col-span-1",
      placeholder: "Enter Pincode",
    },
    {
      type: "text",
      label: "Country",
      field: "country",
      mandatory: true,
      className: "col-span-1",
      placeholder: "Enter Country",
    },
  ],
};

export const singleSelect = {
  layout: "grid-cols-1",
  fields: [
    {
      type: "file",
      label: "Single File",
      field: "single_file",
      mandatory: true,
      className: "md:col-span-1 col-span-2 grid-rows-3",
      placeholder: "Select Country",
    },
  ],
};

export const multiSelect = {
  layout: "grid-cols-1",
  fields: [
    {
      type: "multiFile",
      label: "Multi File",
      field: "multi_file",
      mandatory: true,
      className: "md:col-span-1 col-span-2 grid-rows-3",
      placeholder: "Select Country",
    },
    {
      type: "location",
    },
  ],
};

export const emailMapping = {
  layout: "grid-cols-1",
  fields: [
    {
      type: "email",
      label: "Email",
      field: "email",
      mandatory: true,
      placeholder: "Enter Email Address",
      validation: "email",
    },
    {
      type: "password",
      label: "Password",
      field: "password",
      mandatory: true,
      placeholder: "Enter Password",
      validation: "password",
    },
  ],
};

export const forgotPasswordMapping = {
  layout: "grid-cols-1",
  fields: [
    {
      type: "password",
      label: "Password",
      field: "password",
      mandatory: true,
      placeholder: "Enter Password",
      validation: "password",
    },
    {
      type: "password",
      label: "Confirm Password",
      field: "confirm_password",
      mandatory: true,
      placeholder: "Enter Confirm Password",
      validation: "password",
    },
  ],
};
