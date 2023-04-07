import { TextInput } from "@mantine/core";
import type { BaseFieldAttributes } from "./base-field.types";

export type TTextFieldAttributes = BaseFieldAttributes & {
  type: "text";
};

export function TextField(props: TTextFieldAttributes) {
  return <TextInput {...props} />;
}
