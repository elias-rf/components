import { isEmpty } from "@vt/utils";
import React, { useEffect } from "react";

export const textboxTextActionTypes = { change: "CHANGE" };

export type TextboxTextAction = {
  type: typeof textboxTextActionTypes.change;
  payload: { field: string; value: any };
};

type TextboxTextProps = {
  [prop: string]: any;
  dispatch?: (action: TextboxTextAction) => void;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  field: string;
  list?: string;
  value: any;
};

function createChange(field: string = "", value: any) {
  return { type: textboxTextActionTypes.change, payload: { field, value } };
}

export function TextboxText({
  field,
  dispatch,
  onChange = () => {},
  onBlur = () => {},
  value,
  list,
  inputRef,
  ...others
}: TextboxTextProps) {
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
    onChange(event);
  };

  const handleOnBlur = () => {
    if (valueAux !== value) {
      dispatch(createChange(field, valueAux));
      onBlur(event);
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
