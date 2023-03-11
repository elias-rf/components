export type FieldType = "text" | "select" | "checkbox" | "toggle";

type BaseFieldAttributes = {
  label: string;
  name: string;
  type: FieldType;
};

export type TInputFieldAttributes = BaseFieldAttributes & {
  type: "text";
};

export type TCheckboxFieldAttributes = BaseFieldAttributes & {
  type: "checkbox";
};

export type TToggleFieldAttributes = BaseFieldAttributes & {
  type: "toggle";
};

export type TSelectFieldAttributes = BaseFieldAttributes & {
  type: "select";
  options: { label: string; value: string }[];
};

export type TFieldAttributes =
  | TInputFieldAttributes
  | TCheckboxFieldAttributes
  | TToggleFieldAttributes
  | TSelectFieldAttributes;
