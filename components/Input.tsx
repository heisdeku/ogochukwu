import React, { InputHTMLAttributes, useState } from "react";

interface InputProps {
  type?: "text" | "email" | "password";
  label?: string;
  placeholder?: string;
  suffix?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ type, label, placeholder, suffix }) => {
  const [inputType, setInputType] = useState(type);
  return (
    <div className="cursor-pointer mb-6 block">
      <label className="text-sm text-base capitalize">{label}</label>
      <div className="bg-secondary-500 rounded-tiny w-full h-[51px] mt-1.6 border border-secondary-300 p-4 flex items-center">
        <input
          className="bg-[transparent] h-full text-base placeholder:font-normal shrink-0 flex-1"
          placeholder={placeholder}
          type={inputType}
        />
        {type === "password" && (
          <span
            aria-label="button"
            onClick={() =>
              inputType === "password"
                ? setInputType("text")
                : setInputType("password")
            }
            className="ml-auto text-primary-300 cursor-pointer hover:opacity-30"
          >
            {inputType === "password" ? "Show" : "Hide"}
          </span>
        )}
        {suffix}
      </div>
    </div>
  );
};

export default Input;
