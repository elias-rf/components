import React from "react";
import { TEvent, TFieldClient, TGenericObject } from "../../../types";

export function useForm(getSchema: Promise<TFieldClient[]>) {
  const [values, setValues] = React.useState<TGenericObject>({});
  const [errors, setErrors] = React.useState<TGenericObject>({});
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [isDirty, setIsDirty] = React.useState<boolean>(false); // '' dirty = valid,
  React.useEffect(() => {
    async function get() {
      const sch = await getSchema;
      setSchema(sch);
      setValues(sch.map((fld) => ({ [fld.field]: fld.defaultValue || "" })));
    }
    get();
  }, []);

  function onChange(event: TEvent) {
    setValues({ ...values, [event.name]: event.value });
  }

  function onInput(event: TEvent) {
    setValues({ ...values, [event.name]: event.value });
    setIsDirty(true);
    console.log("Validar", event.name, event.value);
  }

  return { values, setValues, errors, onChange, onInput, schema, isDirty };
}
