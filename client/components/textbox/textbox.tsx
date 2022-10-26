import React from "react";
import { IEvent } from "../../../types";

type TTextboxProps = {
  [prop: string]: any;
  list?: string;
  name: string;
  onBlur?: (e: IEvent) => void;
  onChange?: (e: IEvent) => void;
  onInput?: (e: IEvent) => void;
  value: any;
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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      name,
      value: e.target.value,
      component: "Textbox",
      event: "onChange",
    });
    if (dispInput) setDispInput(false);
  };

  const handleOnBlur = () => {
    onBlur({
      name,
      value,
      component: "Textbox",
      event: "blur",
    });
    if (!dispInput) {
      onInput({
        name,
        value: value,
        component: "Textbox",
        event: "input",
      });
      setDispInput(true);
    }
  };

  const handleEnter = (event: any) => {
    if (event.key.toLowerCase() === "enter") {
      if (!dispInput) {
        onInput({
          name,
          value,
          component: "Textbox",
          event: "input",
        });
        setDispInput(true);
      }
      const form = event.target.form;
      if (form) {
        const index = [...form].indexOf(event.target);
        if (form.elements.length === index + 1) {
          form.elements[0].focus();
        } else {
          form.elements[index + 1].focus();
        }
      }
      event.preventDefault();
    }
  };

  return (
    <input
      name={name}
      value={value || ""}
      onChange={handleOnChange}
      onKeyDown={handleEnter}
      onBlur={handleOnBlur}
      aria-label={name}
      list={list}
      className="w-full h-6 px-2 py-1 text-gray-700 border border-gray-400 focus:border-gray-600"
      {...others}
    />
  );
}
