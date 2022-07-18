import React from "react";
import { twMerge } from "tailwind-merge";
import { Field } from "./field";
import { LabelError } from "./label-error";

const Formfield = React.forwardRef(
  ({ type, label, error, ...props }: any, ref) => {
    return (
      <div className={twMerge("flex flex-col", props.className)}>
        <label>{label}</label>
        <Field ref={ref} type={type} {...props} />
        <LabelError>{error}</LabelError>
      </div>
    );
  }
);

export { Formfield };
