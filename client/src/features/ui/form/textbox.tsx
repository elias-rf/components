import React, { useEffect } from "react";
import { Dispatch } from "../../../types";
import isEmpty from "../../../utils/is/is-empty";

export const textboxActionTypes: { change: "CHANGE" } = { change: "CHANGE" };

export type TextboxAction = {
  type: typeof textboxActionTypes.change;
  payload: { field: string; value: any };
};

type TextboxProps = {
  [prop: string]: any;
  dispatch: (action: TextboxAction) => void;
  field: string;
  list?: string;
  value: any;
};

function createChange(field: string = "", value: any) {
  return { type: textboxActionTypes.change, payload: { field, value } };
}

/**
 *
 *
 * @export
 * @param {{ field:string, onChange:()=>{field:string, value:string}, value:string|number, others: any }}
 * @return {React.ReactNode}
 */
export default function Textbox({
  field,
  dispatch,
  value,
  list,
  inputRef,
  ...others
}: TextboxProps) {
  const [valueAux, setValueAux] = React.useState("");

  useEffect(() => {
    if (isEmpty(value)) {
      setValueAux("");
    } else {
      setValueAux(value);
    }
  }, [value]);

  const handleOnChange = (e: any) => {
    setValueAux(e.target.value);
  };

  const handleOnBlur = () => {
    if (valueAux !== value) {
      dispatch(createChange(field, valueAux));
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      if (valueAux !== value) {
        dispatch(createChange(field, valueAux));
      }
    }
  };

  return (
    <input
      name={field}
      value={valueAux}
      onChange={handleOnChange}
      onKeyPress={handleKeyPress}
      onBlur={handleOnBlur}
      aria-label={field}
      list={list}
      ref={inputRef}
      className="w-full h-6 px-2 py-1 text-gray-700 border border-gray-400 focus:border-gray-600"
      {...others}
    />
  );
}
