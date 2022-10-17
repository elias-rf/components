import { twMerge } from "tailwind-merge";
import { Field } from "./field";
import { LabelError } from "./label-error";

export function Formfield({ type, label, error, ...props }: any) {
  return (
    <div className={twMerge("flex flex-col", props.className)}>
      <label>{label}</label>
      <Field
        type={type}
        {...props}
      />
      <LabelError>{error}</LabelError>
    </div>
  );
}
