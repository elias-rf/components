import React from "react";
import { TEvent } from "../../../types";

type TUseFormicArgs = {
  initialValues: { [fields: string]: any };
  onSubmit: (values: any) => void;
};

export function useFormic(args: TUseFormicArgs) {
  const [values, setValues] = React.useState(args.initialValues);
  return {
    handleSubmit: () => null,
    handleChange: (event: TEvent) => {
      console.log(
        `🚀 ~ file: use_formic.ts ~ line 14 ~ useFormic ~ event`,
        event
      );
      setValues((state) => {
        return { ...state, [event.name]: event.value };
      });
    },
    values,
  };
}
