import { Action, Schema, SchemaField } from "@vt/types";
import React from "react";
import { useForm } from "react-hook-form";
import { Formfield } from "./formfield";

interface FormProps {
  dispatch: (action: Action) => void;
  record?: any;
  schema?: Schema;
}

// tailwind-kit.com
const Form = ({ dispatch, record = {}, schema }: FormProps) => {
  let fields: SchemaField[] = schema?.fields ?? [];
  const [disp, setDisp] = React.useState({});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: record });
  const onSubmit = (data: any) => dispatch({ type: "SUBMIT", payload: data });

  fields = fields.filter((item: any) => item.visible !== false);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap gap-2">
          {fields.map((fld: any) => {
            return (
              <Formfield
                key={fld.field}
                label={fld.label}
                {...register(fld.field)}
                type={fld.type}
              />
            );
          })}
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>{JSON.stringify(disp)}</div>
    </>
  );
};

export { Form };
