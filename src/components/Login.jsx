import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import "../App.css";

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { email, password } = formData;
    const errors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format";
    }

    // Password validation
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 4) {
      errors.password = "Password must be at least 4 characters long";
    } else if (password.length > 10) {
      errors.password = "Password cannot exceed 10 characters";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post("/api/login", formData);
        toast.success("Login Success");
        // Redirect or perform any action after successful login
        setToken(response.data.token);
        localStorage.setItem("userToken", response.data.token);
        navigate("/");
      } catch (error) {
        toast.error("Error during login");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="flex justify-center py-10">
      <div className="px-14 pt-10 pb-32 border border-[#c1c1c1] rounded-[20px] w-full mx-4 md:w-[576px]">
        <form onSubmit={handleSubmit} aria-label="signin-form">
          <div className="text-center">
            <h1 className="font-bold text-center pb-9 h1">Login</h1>
            <h2 className="pb-3 text-2xl font-bold text-center">
              Welcome back to ECOMMERCE
            </h2>
            <p className="pb-8 text-base">The next gen business marketplace</p>
          </div>
          <div className="flex flex-col gap-8 mb-10">
            <fieldset className="flex flex-col items-start gap-y-2">
              <label
                htmlFor="email"
                className="text-base font-medium cursor-pointer"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full p-4 bg-transparent border border-[#c1c1c1] rounded-lg outline-none autofill:bg-slate-50"
                placeholder="Enter"
                autoComplete="email"
                aria-autocomplete="inline"
                onChange={handleOnChange}
                value={formData.email}
              />
              {errors.email && (
                <small className="text-sm text-red-500">{errors.email}</small>
              )}
            </fieldset>
            {/* Password field */}
            <fieldset className="flex flex-col items-start gap-y-2">
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
                autoComplete="current-password"
                aria-autocomplete="inline"
                onChange={handleOnChange}
                value={formData.password}
              />
              {errors.password && (
                <small className="text-sm text-red-500">
                  {errors.password}
                </small>
              )}
            </fieldset>
          </div>
          <button className="w-full px-1 py-5 text-white uppercase bg-black border-2 border-black rounded-md hover:text-black hover:bg-white">
            Login
          </button>
          <hr className="my-7 bg-[#c1c1c1c1]" />
          <p className="text-base text-[#333] text-center">
            Don’t have an Account?{" "}
            <a href="/register" className="font-medium text-black">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
