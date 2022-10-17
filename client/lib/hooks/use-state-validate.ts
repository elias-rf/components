import { useState } from "react";

// React.useState com validação de valor

export type UseStateValidate = {
  value: any;
  isDirty: boolean;
  isValid: boolean;
  error: string;
  isValidating?: boolean;
};

export function useStateValidate(initialValue: any, opts: any = {}) {
  const [value, setValue] = useState({
    value: initialValue,
    isDirty: false,
    isValid: true,
    error: "",
  });
  if (opts.validate === undefined) {
    opts.validate = () => null;
  }
  if (opts.areEqual === undefined) {
    opts.areEqual = Object.is;
  }

  const setValueValidate = (vlr: any) => {
    const rsp = opts.validate(vlr);
    setValue({
      value: vlr,
      isDirty: !opts.areEqual(vlr, initialValue),
      isValid: rsp === null,
      error: rsp || "",
    });
  };
  return [value, setValueValidate];
}
