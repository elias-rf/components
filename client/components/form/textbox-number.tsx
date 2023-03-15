import React from "react";
import { formatNumber } from "../../../utils/format/format-number";
import { parseNumber } from "../../../utils/parse-number";

export type TTextboxNumberProps = {
  [prop: string]: any;
  list?: string;
  name: string;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  onInput?: (event: any) => void;
  value: any;
};

function posCaret(num: string, newNum: string) {
  const n1 = parseNumber(num).toString().length;
  const n2 = parseNumber(newNum).toString().length;
  if (num.length === 0) {
    return 0;
  }
  if (parseNumber(num) === parseNumber(newNum)) {
    return 0;
  }
  if (newNum.length - num.length === 2) {
    return 1;
  }
  if (newNum.length - num.length === -2 && n2 - n1 === 1) {
    return 1;
  }
  return 0;
}

export function TextboxNumber({
  name,
  onChange = () => null,
  onBlur = () => null,
  onInput = () => null,
  value = "",
  list,
  ...others
}: TTextboxNumberProps) {
  const [dispInput, setDispInput] = React.useState(false);
  const [formatedValue, setFormatedValue] = React.useState<string>(
    value ? formatNumber(value) : ""
  );

  const handleOnChange = (e: any) => {
    const element = e.target;
    const value = element.value;
    const caret = element.selectionStart || 0;
    const valueAsNumber = parseNumber(value);
    const valueAsText = formatNumber(valueAsNumber);
    const newCaret = caret + posCaret(formatedValue, valueAsText);
    window.requestAnimationFrame(() => {
      element.selectionStart = newCaret;
      element.selectionEnd = newCaret;
    });

    if (dispInput) setDispInput(false);

    if (value === "") {
      setFormatedValue("");
      onChange(e);
      return;
    }

    setFormatedValue(valueAsText);
    onChange(e);
  };

  const handleOnBlur = (e: any) => {
    onBlur(e);
    if (!dispInput) {
      onInput(e);
      setDispInput(true);
    }
  };

  const handleEnter = (e: any) => {
    if (e.key.toLowerCase() === "enter") {
      if (!dispInput) {
        onInput(e);
        setDispInput(true);
      }
      const form = e.target.form;
      if (form) {
        const index = [...form].indexOf(e.target);
        if (form.elements.length === index + 1) {
          form.elements[0].focus();
        } else {
          form.elements[index + 1].focus();
        }
      }
      e.preventDefault();
    }
  };

  return (
    <input
      type="text"
      name={name}
      value={formatedValue}
      onChange={handleOnChange}
      onKeyDown={handleEnter}
      onBlur={handleOnBlur}
      aria-label={name}
      list={list}
      className={
        "w-full h-6 px-2 py-1 text-gray-700 border border-gray-400 focus:border-gray-600"
      }
      {...others}
    />
  );
}
