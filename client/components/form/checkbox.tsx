import React from "react";
import { TCheckboxProps } from "./checkbox.types";

/**
 *
 */
export function Checkbox({
  name = "",
  onChangeEvent = () => null,
  onBlurEvent = () => null,
  onInputEvent = () => null,
  value = "",
}: TCheckboxProps) {
  // input já foi disparado
  const [dispInput, setDispInput] = React.useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeEvent({
      name,
      value: e.target.checked,
      component: "Checkbox",
      event: "onChangeEvent",
    });
    if (dispInput) setDispInput(false);
  };

  const handleOnBlur = () => {
    onBlurEvent({
      name,
      value,
      component: "Checkbox",
      event: "onBlurEvent",
    });
    if (!dispInput) {
      onInputEvent({
        name,
        value: value,
        component: "Checkbox",
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
          component: "Checkbox",
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
      type="checkbox"
      checked={value || ""}
      onChange={handleOnChange}
      onKeyDown={handleEnter}
      onBlur={handleOnBlur}
      aria-label={name}
      className="w-full h-6 px-2 py-1 text-gray-700 border border-gray-400 focus:border-gray-600"
    />
  );
}
