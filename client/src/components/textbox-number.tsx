import React, { useEffect } from "react";
import { formatMoney, isEmpty, parseNumberBr } from "../../../utils";

export const textboxNumberActionTypes = { change: "CHANGE" };

export type TextboxNumberAction = {
  type: typeof textboxNumberActionTypes.change;
  payload: { field: string; value: any };
};

type TextboxNumberProps = {
  [prop: string]: any;
  dispatch?: (action: TextboxNumberAction) => void;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  field: string;
  list?: string;
  value: any;
};

function createChange(field: string = "", value: any) {
  return { type: textboxNumberActionTypes.change, payload: { field, value } };
}

export function TextboxNumber({
  field,
  dispatch,
  onChange = () => {},
  onBlur = () => {},
  value,
  list,
  inputRef,
  ...others
}: TextboxNumberProps) {
  const [valueAux, setValueAux] = React.useState(formatMoney(value));

  useEffect(() => {
    if (isEmpty(value)) {
      setValueAux("0,00");
    } else {
      setValueAux(formatMoney(value));
    }
  }, [value]);

  const handleOnChange = (event: any) => {
    setValueAux(event.target.value);
    // event.target.value = parseNumberBr(valueAux);
    onChange(event);
  };

  const handleOnBlur = (event: any) => {
    if (valueAux !== value) {
      dispatch(createChange(field, parseNumberBr(valueAux)));
      setValueAux(formatMoney(parseNumberBr(valueAux)));
      // event.target.value = parseNumberBr(valueAux);
      onBlur(event);
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      if (valueAux !== value) {
        dispatch(createChange(field, parseNumberBr(valueAux)));
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
