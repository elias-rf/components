import React from "react";
import { Input } from "./input";

export const InputText = React.forwardRef((props: any, ref) => {
  return (
    <Input
      ref={ref}
      type="text"
      {...props}
    />
  );
});
