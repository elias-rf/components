import PropTypes from "prop-types";
import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps {
  onChange: ({ field, value }: { field: string; value: string }) => void;
  field: string;
  className?: string;
  value: string;
  [prop: string]: any;
}

/**
 *
 * @param {{ onChange, field, className, value, ...others }} param0
 * @returns {JSX.Element}
 */
export default function Input({
  onChange,
  field,
  className,
  value,
  ...others
}: InputProps) {
  const handleOnChange = (e: any) => {
    onChange({ field, value: e.target.value });
  };

  return (
    <input
      value={value}
      onChange={handleOnChange}
      name={field}
      aria-label={field}
      className={twMerge(
        "w-full px-2 py-1 border-2 focus:border-gray-600",
        className
      )}
      {...others}
    />
  );
}
