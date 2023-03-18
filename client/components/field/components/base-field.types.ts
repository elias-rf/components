import { TFormType } from "../../../../types";

export type BaseFieldAttributes = {
  label?: string;
  name: string;
  type?: TFormType;
  disabled?: boolean;
};
