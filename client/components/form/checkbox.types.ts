import { TEvent } from "../../../types";

export type TCheckboxEvent = TEvent & {
  component: "Checkbox";
  event: "onBlurEvent" | "onChangeEvent" | "onInputEvent";
};

export type TCheckboxProps = {
  name: string;
  onBlurEvent?: (event: TCheckboxEvent) => void;
  onChangeEvent?: (event: TCheckboxEvent) => void;
  onInputEvent?: (event: TCheckboxEvent) => void;
  value: any;
};
