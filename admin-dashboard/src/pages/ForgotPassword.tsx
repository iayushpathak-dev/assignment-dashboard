import Button from "../components/Button";
import Form from "../components/Form";
import { forgotPasswordMapping } from "../components/Form/formMappings";
import { enqueueSnackbar } from "notistack";
import { contentData } from "../constant";
import { useState } from "react";

const { forgotPasswordTitle } = contentData;
const ForgotPassword: React.FC = () => {
  const { layout, fields } = forgotPasswordMapping as any;
  const [defaultData, setDefaultData] = useState({});

  const resetPasswordHandler = (data: any) => {
    //TODO: if need api just call api and pass data.

    setDefaultData(data);
    const { password, confirm_password } = data || {};
    if (password !== confirm_password) {
      enqueueSnackbar("Password and confirm password should be same", {
        variant: "error",
      });
    }
    console.log("forgot password data>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", data);
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="sm:w-[500px] sm:h-[500px] h-[100%] w-[100%] p-[30px] border border-[#d1cfcf] m-auto flex justify-center items-center flex-col rounded-[8px]">
        <div className="w-[100%] mb-[20px]">{forgotPasswordTitle}</div>
        <Form
          layout={layout}
          fields={fields}
          onSubmitForm={resetPasswordHandler}
          defaultData={Object.keys(defaultData).length ? {} : defaultData}
          action={
            <div className="flex items-end sm:justify-between justify-start">
              <Button
                classes="sm:w-[160px] sm:p-[10px] w-[140px] p-[5px] rounded-[10px] bg-red-500 text-white text-center sm:mt-[40px] mt-[30px] sm:text-[14px] text-[12px] cursor-pointer"
                buttonName="Reset Password"
              />
              <div
                onClick={() => (window.location.href = "/login")}
                className="cursor-pointer ml-[30px] sm:text-[14px] text-[12px]"
              >
                back
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
