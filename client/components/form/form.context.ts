import * as React from "react";
import type { TUseForm } from "../../lib/hooks/use-form";
export type TFormContext = TUseForm;

export const formContext = React.createContext<TFormContext | null>(null!);

export function useFormContext() {
  const formApi = React.useContext(formContext);

  if (!formApi) {
    throw new Error(`You are trying to use the form API outside of a form!`);
  }

  return formApi;
}
