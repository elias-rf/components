import { CheckboxField } from "./components/checkbox-field";
import { InputField } from "./components/input-field";
import { SelectField } from "./components/select-field";
import { TextareaField } from "./components/textarea-field";
import { TFieldAttributes } from "./field-types";

export function Field(props: TFieldAttributes) {
  switch (props.type) {
    case "text":
      return <InputField {...props} />;
    case "textarea":
      return <TextareaField {...props} />;
    case "select":
      return <SelectField {...props} />;
    case "checkbox":
      return <CheckboxField {...props} />;

    default:
      throw new Error("Invalid Field Type");
  }
}
