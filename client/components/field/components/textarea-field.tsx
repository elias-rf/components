import { Textarea } from "@mantine/core";
import type { BaseFieldAttributes } from "./base-field.types";
export type TTextareaFieldAttributes = BaseFieldAttributes & {
  type: "textarea";
};

export function TextareaField(props: TTextareaFieldAttributes) {
  return <Textarea {...props} />;
}
