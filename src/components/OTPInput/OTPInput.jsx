import React, { useRef, useEffect, useState } from "react";

function OTPInput({ numInputs, correctOTP, onVerify, error, email }) {
  const [otp, setOtp] = useState(new Array(numInputs).fill(""));
  const [otpError, setOtpError] = useState(error);
  const otpBoxReference = useRef([]);

  useEffect(() => {
    const enteredOTP = otp.join("");
    if (enteredOTP !== "" && enteredOTP !== correctOTP) {
      setOtpError("❌ Wrong OTP Please Check Again");
    } else {
      setOtpError(null);
    }
  }, [otp, correctOTP, numInputs]);

  function handleChange(value, index) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);
    if (value && index < numInputs - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  function handleBackspaceAndEnter(e, index) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < numInputs - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  function handleVerify(e) {
    e.preventDefault();
    const enteredOTP = otp.join("");
    onVerify(enteredOTP);
  }
  function hideEmail(email) {
    // Split the email address into username and domain parts
    const [username, domain] = email.split("@");

    // Check if username has more than 3 characters
    if (username.length > 3) {
      // Hide characters after the 3rd character with asterisks
      const hiddenChars = username.substring(3).replace(/./g, "*");
      return `${username.substring(0, 3)}${hiddenChars}@${domain}`;
    } else {
      return email; // Return the original email if username length is less than or equal to 3
    }
  }

  // Example usage
  const hiddenEmail = hideEmail(email);
  console.log(hiddenEmail); // Output: e****e@example.com

  return (
    <div className="step-two">
      <form
        onSubmit={(e) => handleVerify(e)}
        aria-label="otp-verification-form"
      >
        <h1 className="pb-8 font-bold text-center h1">
          Verify your email
        </h1>
        <p className="pb-12 text-base text-center">
          Enter the 8 digit code you have received on <br />
          <strong className="font-medium">{hiddenEmail}</strong>
        </p>
        <div className="flex flex-col items-start mb-12 gap-y-2">
          <label
            htmlFor="name"
            className="text-base font-medium cursor-pointer"
          >
            Code
          </label>
          <div className="flex items-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                ref={(reference) =>
                  (otpBoxReference.current[index] = reference)
                }
                className="text-lg font-medium w-full text-center p-4 bg-transparent border border-[#c1c1c1] rounded-lg outline-none autofill:bg-slate-50"
              />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-1 py-5 text-white uppercase bg-black border-2 border-black rounded-md hover:text-black hover:bg-white"
        >
          Verify
        </button>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default OTPInput;

OTPInput.defaultProps = {
  numInputs: 6,
};
