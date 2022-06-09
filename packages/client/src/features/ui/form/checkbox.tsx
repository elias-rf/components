import React from "react";
import { twMerge } from "tailwind-merge";

export const checkboxActionTypes: { change: "CHANGE" } = { change: "CHANGE" };

type CheckboxAction = {
  type: typeof checkboxActionTypes.change;
  payload: { field: string; value: any };
};

type CheckboxProps = {
  [prop: string]: any;
  className?: string;
  dispatch: (action: CheckboxAction) => void;
  field: string;
  value: boolean;
};

function createChange(field: string = "", value: any) {
  return { type: checkboxActionTypes.change, payload: { field, value } };
}

export default function Checkbox({
  dispatch,
  field,
  className,
  value,
  ...others
}: CheckboxProps) {
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(createChange(field, event.target.checked));
  }

  return (
    <input
      type="checkbox"
      checked={value}
      onChange={handleOnChange}
      name={field}
      aria-label={field}
      id={field}
      className={twMerge(
        "cursor-pointer focus:ring-red-500 h-6 w-6 text-red-600 border-red-300",
        className
      )}
      {...others}
    />
  );
}
