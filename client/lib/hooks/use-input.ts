import React from "react";

export const useInput = (
  defaultValue: string,
  onInput: (value: string) => void
) => {
  const [value, setValue] = React.useState(defaultValue);
  const [sended, setSended] = React.useState(false);

  const sendValue = () => {
    if (sended) return;
    setSended(true);
    onInput(value);
  };

  const onChange = (event: any) => {
    setValue(event.currentTarget.value);
    setSended(false);
  };

  const onBlur = () => {
    sendValue();
  };

  const onKeyDown = (event: any) => {
    if (event.key === "Enter") {
      sendValue();
    }
  };

  return { onChange, onBlur, onKeyDown, value };
};
