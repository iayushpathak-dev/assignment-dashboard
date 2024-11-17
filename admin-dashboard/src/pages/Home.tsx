import { useState } from "react";
import Form from "../components/Form";
import ProgressIndicator from "../components/ProgressIndicator";
import {
  address,
  basicsDetails,
  multiSelect,
  singleSelect,
} from "../components/Form/formMappings";
import Button from "../components/Button";
import { fetcher } from "../../utils/fetcher";
import { enqueueSnackbar } from "notistack";
import ThankyouComponent from "../components/ThankyouComponent";

const Home: React.FC = () => {
  const baseURL = import.meta.env.VITE_XANO_BASE_URL;

  const [steps, setSteps] = useState(1);
  const [thankyouScreen, setThankyouScreen] = useState(false);
  const [defaultData, setDefaultData] = useState({});

  const dynamicMapping: any = {
    1: basicsDetails,
    2: address,
    3: singleSelect,
    4: multiSelect,
  };

  const { layout, fields } = dynamicMapping[steps];

  const submitForm = async (values: {}) => {
    const response = await fetcher({
      url: baseURL + "/user-details",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: values,
    });

    const { success, error = "", data } = response;
    if (success && data) {
      setThankyouScreen(true);
      enqueueSnackbar("Record has been successfully submitted!", {
        variant: "success",
      });
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } else {
      enqueueSnackbar(error, {
        variant: "error",
      });
    }
  };

  const submitHandler = (data: any) => {
    setDefaultData(data);
    if (steps == 4) {
      submitForm(data);
      return;
    }
    setSteps(steps + 1);
  };

  const previousFormHandler = () => {
    if (steps == 1) {
      return;
    }
    setSteps(steps - 1);
  };

  return (
    <div className="flex items-center justify-center h-[100%]">
      <div
        style={{ boxShadow: "rgb(179 173 173 / 75%) 0px 0px 15px 0px" }}
        className="mt-[20px] sm:w-[50%] w-[90%] flex items-center justify-center sm:p-[50px] p-[20px] border border-[#bbbbbb] rounded-[8px] flex-col"
      >
        {thankyouScreen ? (
          <ThankyouComponent />
        ) : (
          <>
            <div className="flex flex-row w-[100%] justify-between items-center">
              <div
                className="w-[80px] rounded-[8px] p-[10px] text-center text-black cursor-pointer mb-[20px]"
                onClick={previousFormHandler}
              >
                back
              </div>
              <ProgressIndicator
                currentStep={steps}
                totalSteps={4}
                isSubmitted={false}
                className="mb-[20px]"
              />
            </div>

            <Form
              layout={layout}
              fields={fields}
              onSubmitForm={submitHandler}
              defaultData={Object.keys(defaultData).length ? {} : defaultData}
              action={
                <Button
                  classes="sm:w-[160px] w-[120px] sm:p-[10px] p-[5px] rounded-[10px] bg-red-500 text-white text-center sm:mt-[40px] mt-[20px] m-auto sm:m-1 sm:text-[14px] text-[12px]"
                  buttonName={steps === 4 ? "Submit" : "Continue"}
                />
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
