import React from "react";
import { CustomEvent } from "../../types";
import { formatNumber } from "../../utils/src/format-number";
import { parseNumber } from "../../utils/src/parse-number";

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

interface ITextboxNumberProps {
  [prop: string]: any;
  onChange?: (e: CustomEvent) => void;
  onBlur?: (e: CustomEvent) => void;
  name: string;
  list?: string;
  value: any;
}

export function TextboxNumber(props: ITextboxNumberProps) {
  const {
    name,
    dispatch,
    onChange = () => null,
    onBlur = () => null,
    value,
    list,
    ...others
  } = props;

  const [formatedValue, setFormatedValue] = React.useState<string>(
    value ? formatNumber(value) : ""
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    if (value === "") {
      setFormatedValue("");
      return onChange({
        name,
        value: undefined,
        targetName: "TextboxTextNumber",
        targetProps: props,
        eventName: "change",
        event: e,
      });
    }

    setFormatedValue(valueAsText);
    return onChange({
      name,
      value: valueAsNumber,
      targetName: "TextboxTextNumber",
      targetProps: props,
      eventName: "change",
      event: e,
    });
  };

  return (
    <input
      type="text"
      value={formatedValue}
      onChange={handleChange}
    />
  );
}
