import React from "react";
import { formContext } from "./form.context";
import type { TUseForm } from "./use-form";

export type TFormProps = {
  form: TUseForm;
  children?: React.ReactNode;
};

export const Form = ({ form, children }: TFormProps) => {
  return (
    <formContext.Provider value={form}>
      <div>{children}</div>
    </formContext.Provider>
  );
};
