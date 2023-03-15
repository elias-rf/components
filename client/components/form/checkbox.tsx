import React from "react";

export type TCheckboxProps = {
  name: string;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
};

/**
 *
 */
export function Checkbox({
  name = "",
  onChange = () => null,
  onBlur = () => null,
  onInput = () => null,
  value = "",
}: TCheckboxProps) {
  // input já foi disparado
  const [dispInput, setDispInput] = React.useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    if (dispInput) setDispInput(false);
  };

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    onBlur(e);
    if (!dispInput) {
      onInput(e);
      setDispInput(true);
    }
  };

  const handleEnter = (event: any) => {
    if (event.key.toLowerCase() === "enter") {
      if (!dispInput) {
        onInput(event);
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
