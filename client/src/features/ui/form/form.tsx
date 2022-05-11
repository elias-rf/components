import FormField, { formFieldActionTypes } from "./formfield";
import isEmpty from "../../../utils/is/is-empty";
import { Schema, SchemaField } from "types";

export const formActionTypes = { ...formFieldActionTypes };

export type FormAction = {
  type: typeof formActionTypes.change;
  payload: { field: string; value: any };
};

interface FormProps {
  dispatch: (action: FormAction) => void;
  errors?: any;
  record?: any;
  schema: Schema;
}

// tailwind-kit.com
export default function Form({
  dispatch,
  record = {},
  errors = {},
  schema,
}: FormProps) {
  if (isEmpty(record)) {
    record = {};
  }

  let fields: SchemaField[] = schema.fields ?? [];

  fields = fields.filter((item: any) => item.visible !== false);

  return (
    <div className="flex flex-wrap space-x-2">
      {fields.map((fld: any) => {
        return (
          <FormField
            key={fld.field}
            value={record[fld.field]}
            schema={fld}
            error={errors[fld.field]}
            dispatch={dispatch}
            className={fld.fieldClass || ""}
          />
        );
      })}
    </div>
  );
}
