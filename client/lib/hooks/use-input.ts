import React from "react";

export const useInput = (
  onInput: (value: string) => void,
  initialValue = ""
) => {
  const [value, setValue] = React.useState(initialValue);
  const [dispInput, setDispInput] = React.useState(false);

  const sendValue = () => {
    if (dispInput) return;
    setDispInput(true);
    onInput(value);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vlr = e.currentTarget.value;
    setValue(vlr);
    if (dispInput) setDispInput(false);
  };

  const onBlur = () => {
    sendValue();
  };

  const onKeyDown = (e: any) => {
    if (e.key.toLowerCase() === "enter") {
      e.preventDefault();
      sendValue();
    }
  };

  return { setValue, value, props: { onChange, onBlur, onKeyDown, value } };
};
