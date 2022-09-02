import { IEvent } from "@er/types";
import React from "react";
import { twMerge } from "tailwind-merge";

type TButtonProps = {
  [prop: string]: any;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  name?: string;
  onClick?: (e: IEvent) => void;
};

/**
 * Component Button
 */
export function Button(props: TButtonProps) {
  const {
    children,
    disabled = false,
    className,
    onClick = () => null,
    name = "",
    ...other
  } = props;

  function handleClick(e: React.SyntheticEvent) {
    onClick({
      name,
      value: children,
      targetProps: props,
      targetName: "Button",
      eventName: "click",
      event: e,
    });
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
      {...other}
    >
      {children}
    </button>
  );
}
