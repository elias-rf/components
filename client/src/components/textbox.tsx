import React, { useEffect } from "react";
import { isEmpty } from "../../../utils";

interface TextboxProps {
  field: string;
  onChange: ({ field, value }: { field: string; value: string }) => void;
  value: any;
  list?: string;
  [prop: string]: any;
}

/**
 *
 *
 * @export
 * @param {{ field:string, onChange:()=>{field:string, value:string}, value:string|number, others: any }}
 * @return {React.ReactNode}
 */
export function Textbox({
  field,
  onChange,
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
      onChange({ field: field, value: valueAux });
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      if (valueAux !== value) {
        onChange({ field: field, value: valueAux });
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
