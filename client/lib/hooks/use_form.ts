import React from "react";
import { TEvent, TFieldClient, TGenericObject } from "../../../types";

export function useForm(schema: TFieldClient[]) {
  const [values, setValues] = React.useState<TGenericObject>({});
  const [errors, setErrors] = React.useState<TGenericObject>({});
  const [isDirty, setIsDirty] = React.useState<boolean>(false); // '' dirty = valid,

  React.useEffect(() => {
    if (schema.length > 0) {
      setValues(schema.map((fld) => ({ [fld.name]: fld.defaultValue || "" })));
    }
  }, [schema]);

  function onChangeEvent(event: TEvent) {
    setValues({ ...values, [event.name]: event.value });
  }

  function onInputEvent(event: TEvent) {
    setValues({ ...values, [event.name]: event.value });
    setIsDirty(true);
    console.log("Validar", event.name, event.value);
  }

  return {
    values,
    setValues,
    errors,
    onChangeEvent,
    onInputEvent,
    schema,
    isDirty,
  };
}
