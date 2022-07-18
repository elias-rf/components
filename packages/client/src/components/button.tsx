import React from "react";
import { twMerge } from "tailwind-merge";

export const buttonActionTypes: { click: "CLICK" } = { click: "CLICK" };
export type ButtonAction = {
  type: typeof buttonActionTypes.click;
  payload: { name: string };
};

type ButtonProps = {
  [prop: string]: any;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  dispatch?: (action: ButtonAction) => void;
  name?: string;
};

function createClick(name: string = "") {
  return { type: buttonActionTypes.click, payload: { name } };
}

/**
 * Component Button
 *
 * @param {*} { children, onClick, disabled, className, ...other } Props
 * @returns {*} component
 */
export function Button({
  children,
  dispatch = () => {},
  disabled = false,
  className,
  name,
  ...other
}: ButtonProps) {
  function handleClick() {
    dispatch(createClick(name));
  }

  return (
    <button
      className={twMerge(
        "rounded w-full h-8 px-4 font-normal text-center text-black transition duration-200 ease-in bg-gray-300 border-gray-300 hover:bg-gray-400 focus:border-gray-400",
        disabled ? "opacity-50 cursor-not-allowed hover:bg-gray-300" : null,
        className
      )}
      disabled={disabled}
      onClick={handleClick}
      name={name}
      {...other}
    >
      {children}
    </button>
  );
}
