import React from "react";
import { Input } from "./input";

const Field = React.forwardRef(({ type, ...props }: any, ref) => {
  switch (type) {
    case "boolean":
      return <Input type="checkbox" ref={ref} {...props} />;
    default:
      return <Input ref={ref} {...props} />;
  }
});

export { Field };
