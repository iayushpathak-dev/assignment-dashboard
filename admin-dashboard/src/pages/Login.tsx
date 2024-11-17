import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthenticated, setAuthKey } from "../redux/authSlice";
import Form from "../components/Form";
import { emailMapping } from "../components/Form/formMappings";
import Button from "../components/Button";
import { fetcher } from "../../utils/fetcher";
import { enqueueSnackbar } from "notistack";
import { contentData } from "../constant";
import { LoginResponse } from "../typeConstant";

const { loginTitle } = contentData;

const { layout, fields } = (emailMapping as any) || {};

const Login: React.FC = () => {
  const [defaultData, setDefaultData] = useState({});
  const baseURL = import.meta.env.VITE_XANO_BASE_URL;

  const dispatch = useDispatch();

  const handleLogin = async (values: { email: string; password: string }) => {
    setDefaultData(values);
    const response = await fetcher<LoginResponse>({
      url: baseURL + "/auth/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: values,
    });

    const { success, error = "", data } = response;
    if (success && data) {
      enqueueSnackbar("Login Successfully", {
        variant: "success",
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
      const { authToken } = data;
      dispatch(setAuthenticated(true));
      dispatch(setAuthKey(authToken));
    } else {
      enqueueSnackbar(error, {
        variant: "error",
      });
    }
  };

  return (
    <div>
      <div className="h-[100vh] flex items-center justify-center">
        <div className="sm:w-[500px] sm:h-[500px] h-[500px] w-[90%] p-[30px] border border-[#d1cfcf] m-auto flex justify-center items-center flex-col rounded-[8px]">
          <div className="w-[100%] mb-[20px]">{loginTitle}</div>
          <Form
            layout={layout}
            fields={fields}
            onSubmitForm={handleLogin}
            defaultData={Object.keys(defaultData).length ? {} : defaultData}
            action={
              <div className="flex items-end sm:justify-between justify-around">
                <Button
                  classes="sm:w-[160px] sm:p-[10px] w-[140px] p-[5px] rounded-[10px] bg-red-500 text-white text-center sm:mt-[40px] mt-[30px] sm:text-[14px] text-[12px] cursor-pointer"
                  buttonName="Login"
                />
                <div
                  onClick={() => (window.location.href = "/forgotpassword")}
                  className="cursor-pointer ml-[30px] sm:text-[14px] text-[12px]"
                >
                  forgot password
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
