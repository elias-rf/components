import React from "react";
import type { TUseForm } from "../../lib/hooks/use-form";
import { formContext } from "./form.context";

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
