import { useState } from "react";

type Options = {
  validate?: (v: any) => string;
  areEqual?: (v1: any, v2: any) => boolean;
};

export type UseField = {
  value: any;
  isDirty: boolean;
  isValid: boolean;
  error: string;
  register: () => {
    onBlurEvent: (e: any) => void;
    onChangeEvent: (e: any) => void;
    value: any;
  };
  set: (value: any) => void;
  reset: () => void;
};

export function useField(
  valueDefault: string,
  { validate = () => "", areEqual = Object.is }: Options = {}
): UseField {
  const [vlr, setVlr] = useState(valueDefault);
  const [isDirty, setIsDirty] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");

  function set(value: string) {
    // if (vlr !== value) {
    setVlr(value);
    setIsValid(true);
    setError("");
    setIsDirty(false);
    // }
  }

  function reset() {
    if (vlr !== valueDefault) {
      setVlr(valueDefault);
      setIsDirty(false);
      setIsValid(true);
      setError("");
    }
  }

  function handleBlur() {
    if (isDirty) {
      const rsp = validate(vlr);
      setIsValid(rsp === "");
      setError(rsp || "");
    }
  }

  function handleChange(e: any) {
    const newVlr = e.value || "";
    setVlr(newVlr);
    set(newVlr);
    setIsDirty(true);
    setIsValid(true);
    setError("");
  }

  function register() {
    return { onBlurEvent: handleBlur, onChangeEvent: handleChange, value: vlr };
  }

  return {
    value: vlr,
    isDirty,
    isValid,
    error,
    register,
    set,
    reset,
  };
}
