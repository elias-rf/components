import React from "react";
import { Input } from "./input";

const InputNumber = React.forwardRef(
  ({ onBlur = () => {}, onChange = () => {}, value, ...props }: any, ref) => {
    function handleBlur(event: any) {
      onBlur(event);
    }

    function handleChange(event: any) {
      onChange(event);
    }

    return (
      <>
        <Input
          ref={ref}
          type="number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
          {...props}
        />
      </>
    );
  }
);

export { InputNumber };
