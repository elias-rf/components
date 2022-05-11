import React from "react";
import Textbox, { textboxActionTypes } from "./textbox";

export const datalistActionTypes = { ...textboxActionTypes };

export type DatalistAction = {
  type: typeof datalistActionTypes.change;
  payload: { field: string; value: any };
};

interface DatalistProps {
  [prop: string]: any;
  children?: React.ReactNode;
  dispatch: (action: DatalistAction) => void;
  field: string;
  options?: { value: string; title?: string }[];
  value: any;
}

export default function Datalist({
  field,
  children,
  options,
  value,
  dispatch,
  ...others
}: DatalistProps) {
  return (
    <React.Fragment>
      <Textbox
        field={field}
        dispatch={dispatch}
        value={value}
        list={field}
        {...others}
      />
      <datalist
        id={field}
        className="w-full h-8 px-1 text-gray-700 border border-gray-400 focus:border-gray-600"
      >
        {children
          ? children
          : options?.map((opt) => (
              <option
                value={opt.value}
                key={opt.value}
              >
                {opt.title ? opt.title : opt.value}
              </option>
            ))}
      </datalist>
    </React.Fragment>
  );
}
