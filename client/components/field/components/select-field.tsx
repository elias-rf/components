import { Select } from "@mantine/core";
import type { BaseFieldAttributes } from "./base-field.types";

export type TSelectFieldAttributes = BaseFieldAttributes & {
  type: "select";
  data: { label: string; value: string }[];
};

export function SelectField(props: TSelectFieldAttributes) {
  return <Select {...props}></Select>;
}
