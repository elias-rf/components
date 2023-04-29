import { TInputType } from "@mono/types";
import React from "react";

export type TTextboxProps = {
  [prop: string]: any;
  list?: string;
  name: string;
  onBlur?: (
    event: React.FormEvent<HTMLInputElement>,
    name: string,
    value: any
  ) => void;
  onChange?: (
    event: React.FormEvent<HTMLInputElement>,
    name: string,
    value: any
  ) => void;
  onInput?: (
    event: React.FormEvent<HTMLInputElement>,
    name: string,
    value: any
  ) => void;
  value: any;
  type?: TInputType;
};

/**
 *
 */
export function Textbox({
  name = "",
  onChange = () => null,
  onBlur = () => null,
  onInput = () => null,
  value = "",
  list,
  ...others
}: TTextboxProps) {
  // input já foi disparado
  const [dispInput, setDispInput] = React.useState(false);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange(e, name, e.currentTarget.value);
    if (dispInput) setDispInput(false);
  };

  const handleOnBlur = (e: React.FormEvent<HTMLInputElement>) => {
    onBlur(e, name, e.currentTarget.value);
    if (!dispInput) {
      onInput(e, name, e.currentTarget.value);
      setDispInput(true);
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === "enter") {
      if (!dispInput) {
        onInput(e, name, e.currentTarget.value);
        setDispInput(true);
      }
      const form = e.currentTarget.form;
      if (form) {
        const index = [...form].indexOf(e.currentTarget);
        if (form.elements.length === index + 1) {
          // form.elements[0].focus();
        } else {
          // form.elements[index + 1].focus();
        }
      }
      e.preventDefault();
    }
  };

  return (
    <input
      id={name}
      name={name}
      value={value || ""}
      onChange={handleOnChange}
      onKeyDown={handleEnter}
      onBlur={handleOnBlur}
      aria-label={name}
      list={list}
      className={
        "h-6 w-full border border-gray-400 px-2 py-1 text-gray-700 focus:border-gray-600"
      }
      {...others}
    />
  );
}
