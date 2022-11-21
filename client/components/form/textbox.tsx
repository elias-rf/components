import React from "react";
import { TTextboxProps } from "./textbox.types";

/**
 *
 */
export function Textbox({
  name = "",
  onChangeEvent = () => null,
  onBlurEvent = () => null,
  onInputEvent = () => null,
  value = "",
  list,
  ...others
}: TTextboxProps) {
  // input já foi disparado
  const [dispInput, setDispInput] = React.useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeEvent({
      name,
      value: e.target.value,
      component: "Textbox",
      event: "onChangeEvent",
    });
    if (dispInput) setDispInput(false);
  };

  const handleOnBlur = () => {
    onBlurEvent({
      name,
      value,
      component: "Textbox",
      event: "onBlurEvent",
    });
    if (!dispInput) {
      onInputEvent({
        name,
        value: value,
        component: "Textbox",
        event: "onInputEvent",
      });
      setDispInput(true);
    }
  };

  const handleEnter = (event: any) => {
    if (event.key.toLowerCase() === "enter") {
      if (!dispInput) {
        onInputEvent({
          name,
          value,
          component: "Textbox",
          event: "onInputEvent",
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
      id={name}
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
