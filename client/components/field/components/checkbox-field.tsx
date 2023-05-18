import Checkbox from "@mui/material/Checkbox";
import { BaseFieldAttributes } from "./base-field.types";

export type TCheckboxFieldAttributes = BaseFieldAttributes & {
  type: "checkbox";
};

export function CheckboxField(props: TCheckboxFieldAttributes) {
  return <Checkbox {...props} />;
}
