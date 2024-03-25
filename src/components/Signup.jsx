import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import OTPInput from "./OTPInput/OTPInput";
import { toast } from "react-toastify";

const CODEL = 7;

const Signup = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState(null);
  const [otp, setOtp] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      error.lname = "Username is required";
    }
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    return error;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        name: user.name,
        email: user.email,
        password: user.password,
      };
      const response = await axios.post("/api/register", formData);
      console.log(response, 'SignupSuccess')
      setIsSubmit(true);
      const generatedOtp = generateOTP();
      setOtp(generatedOtp);
      setCurrentStep(2);
      toast.success(generatedOtp, { delay: 1000, autoClose: 5000 });
    } catch (error) {
      console.error("Error during registration:", error);
      setFormErrors(validateForm(user));
    }
  };

  const handleVerification = (enteredOTP) => {
    if (!enteredOTP) {
      setError("Please enter the OTP.");
      return;
    }
    if (otp === enteredOTP) {
      navigate("/login", { user });

    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  const generateOTP = () => {
    return Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(CODEL, "0");
  };
  const StepOne = (
    <div className="step-one">
      <section className="flex justify-center py-10">
        <div className="px-14 pt-10 pb-32 border border-[#c1c1c1] rounded-[20px] w-full mx-4 md:w-[576px]">
          <form onSubmit={handleSubmit} aria-label="signup-form">
            <h1 className="pb-8 font-bold text-center h1">
              Create your account
            </h1>
            <div className="flex flex-col gap-8 mb-10">
              <div className="flex flex-col items-start gap-y-2">
                <label
                  htmlFor="name"
                  className="text-base font-medium cursor-pointer"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full p-4 bg-transparent border border-[#c1c1c1] rounded-lg outline-none autofill:bg-slate-50"
                  placeholder="Enter"
                  autoComplete="name"
                  aria-autocomplete="inline"
                  onChange={changeHandler}
                  value={user.name}
                />
              </div>
              <div className="flex flex-col items-start gap-y-2">
                <label
                  htmlFor="email"
                  className="text-base font-medium cursor-pointer"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full p-4 bg-transparent border border-[#c1c1c1] rounded-lg outline-none autofill:bg-slate-50"
                  placeholder="Enter"
                  autoComplete="email"
                  aria-autocomplete="inline"
                  onChange={changeHandler}
                  value={user.email}
                />
              </div>
              <div className="flex flex-col items-start gap-y-2">
                <label
                  htmlFor="password"
                  className="text-base font-medium cursor-pointer"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="w-full p-4 bg-transparent border border-[#c1c1c1] rounded-lg outline-none autofill:bg-slate-50"
                  placeholder="Enter"
                  autoComplete="password"
                  aria-autocomplete="inline"
                  onChange={changeHandler}
                  value={user.password}
                />
              </div>
            </div>
            <button className="w-full px-1 py-5 text-white uppercase bg-black border-2 border-black rounded-md hover:text-black hover:bg-white">
              Create account
            </button>
            <p className="text-base text-[#333] text-center pt-12">
              Have an Account?{" "}
              <a href="/login" className="font-medium text-black">
                Login
              </a>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
  const StepTwo = (
    <div className="step-two">
      <section className="flex justify-center py-10">
        <div className="px-14 pt-10 pb-14 border border-[#c1c1c1] rounded-[20px] w-full mx-4 md:w-[576px]">
          <OTPInput correctOTP={otp} onVerify={handleVerification} error={error} numInputs={CODEL} email={user.email} />
        </div>
      </section>
    </div>
  );

  switch (currentStep) {
    case 1:
      return (<div className="signup-container">{StepOne}</div>)
    case 2:
      return (<div className="signup-container">{StepTwo}</div>);
    default:
      break;
  }
};

export default Signup;
