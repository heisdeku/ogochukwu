import React, { useState } from "react";

type CheckboxProps = {
  label?: string | JSX.Element;
  checked?: boolean;
  disabled?: boolean;
};

const Checkbox = ({ label, checked, disabled = false }: CheckboxProps) => {
  const checked_styles = `bg-primary-300 border-none`;
  const disabled_styles = `opacity-20`;
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <button
      type="button"
      className="flex items-center gap-x-2 cursor-pointer relative select-none c-checkbox"
      onClick={() => {
        setIsChecked(!isChecked);
      }}
    >
      <input
        checked={isChecked}
        className="absolute opacity-0 cursor-pointer h-full w-full c-checkbox__input"
      />
      <div
        className={`c-checbox__container rounded-[4px] h-4 w-4 flex items-center justify-center border border-gray-400 ${
          disabled && disabled_styles
        } ${!disabled && isChecked && checked_styles}`}
      >
        <svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            isChecked ? "opacity-100" : "opacity-0"
          } duration-300 ease-linear`}
        >
          <path
            d="M9 1L3.5 6.5L1 4"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {typeof label === "string" ? <p>{label}</p> : label}
    </button>
  );
};

export default Checkbox;
