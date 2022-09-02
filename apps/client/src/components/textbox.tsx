import { IEvent } from "@er/types";
import React from "react";

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
export function Textbox(props: TTextboxProps) {
  const {
    name = "",
    onChange = () => null,
    onBlur = () => null,
    onInput = () => null,
    value = "",
    list,
    ...others
  } = props;

  const [dispInput, setDispInput] = React.useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      name,
      value: e.target.value,
      targetName: "TextboxText",
      targetProps: props,
      eventName: "change",
      event: e,
    });
    if (dispInput) setDispInput(false);
  };

  const handleOnBlur = (e: React.SyntheticEvent) => {
    onBlur({
      name,
      value: value,
      targetName: "TextboxText",
      targetProps: props,
      eventName: "blur",
      event: e,
    });
    if (!dispInput) {
      onInput({
        name,
        value: value,
        targetName: "TextboxText",
        targetProps: props,
        eventName: "input",
      });
      setDispInput(true);
    }
  };

  const handleEnter = (event: any) => {
    if (event.key.toLowerCase() === "enter") {
      if (!dispInput) {
        onInput({
          name,
          value: value,
          targetName: "TextboxText",
          targetProps: props,
          eventName: "input",
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
