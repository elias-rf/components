import Checkbox, { checkboxActionTypes } from "./checkbox";
import Textbox, { textboxActionTypes } from "./textbox";

type Action = { type: "CHANGE"; payload: { field: string; value: any } };

interface FieldProps {
  dispatch: (action: Action) => void;
  field: string;
  type?: string;
  value: string | boolean;
}

export const fieldActionTypes = {
  ...checkboxActionTypes,
  ...textboxActionTypes,
};

export default function Field({
  type = "string",
  value,
  dispatch,
  field,
}: FieldProps) {
  switch (type) {
    case "boolean":
      return (
        <Checkbox
          value={value === true}
          dispatch={dispatch}
          field={field}
        />
      );
    default:
      return (
        <Textbox
          value={value}
          dispatch={dispatch}
          field={field}
        />
      );
  }
}
