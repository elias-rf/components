import { TFieldType } from "../../../../types/model";

export type BaseFieldAttributes = {
  label: string;
  name: string;
  type: TFieldType;
  disabled?: boolean;
};
