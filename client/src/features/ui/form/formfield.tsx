import { twMerge } from "tailwind-merge";

import LabelError from "./label-error";

import { SchemaField } from "types";
import Field, { fieldActionTypes } from "./field";

export const formFieldActionTypes = {
  ...fieldActionTypes,
};

type Action = {
  type: typeof formFieldActionTypes.change;
  payload: { field: string; value: any };
};

interface FormFieldProps {
  className: string;
  dispatch: (action: Action) => void;
  error: string;
  schema: SchemaField;
  value: string | boolean;
}

/**
 *
 *
 * @export
 * @param {{ onChange:()=>{field:string, value:string}, schema:{field:string,label:string,type:string}, value:string|number, error:string }}
 * @return {*}
 */
export default function FormField({
  dispatch,
  schema,
  value,
  error,
  className,
}: FormFieldProps) {
  return (
    <div className={twMerge("flex flex-col my-2", className)}>
      <label>{schema.label}</label>
      <Field
        type={schema?.type}
        value={value}
        dispatch={dispatch}
        field={schema.field}
      />
      <LabelError>{error}</LabelError>
    </div>
  );
}
