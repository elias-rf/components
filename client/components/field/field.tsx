import {
  CheckboxField,
  TCheckboxFieldAttributes,
} from "./components/checkbox-field";
import { SelectField, TSelectFieldAttributes } from "./components/select-field";
import { TextField, TTextFieldAttributes } from "./components/text-field";
import {
  TextareaField,
  TTextareaFieldAttributes,
} from "./components/textarea-field";

export type TFieldAttributes =
  | TCheckboxFieldAttributes
  | TSelectFieldAttributes
  | TTextFieldAttributes
  | TTextareaFieldAttributes;

export function Field(props: TFieldAttributes) {
  switch (props.type) {
    case "checkbox":
      return <CheckboxField {...props} />;
    case "select":
      return <SelectField {...props} />;
    case "text":
      return <TextField {...props} />;
    case "textarea":
      return <TextareaField {...props} />;

    default:
      throw new Error("Invalid Field Type");
  }
}
