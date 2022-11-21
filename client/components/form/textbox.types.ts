import { TEvent, TInputType } from "../../../types";

export type TTextboxEvent = TEvent & {
  component: "Textbox";
  event: "onBlurEvent" | "onChangeEvent" | "onInputEvent";
};

export type TTextboxProps = {
  [prop: string]: any;
  list?: string;
  name: string;
  onBlurEvent?: (event: TTextboxEvent) => void;
  onChangeEvent?: (event: TTextboxEvent) => void;
  onInputEvent?: (event: TTextboxEvent) => void;
  value: any;
  type?: TInputType;
};

export type TTextboxNumberEvent = TEvent & {
  component: "TextboxNumber";
  event: "onBlurEvent" | "onChangeEvent" | "onInputEvent";
};

export type TTextboxNumberProps = {
  [prop: string]: any;
  list?: string;
  name: string;
  onChangeEvent?: (event: TTextboxNumberEvent) => void;
  onBlurEvent?: (event: TTextboxNumberEvent) => void;
  onInputEvent?: (event: TTextboxNumberEvent) => void;
  value: any;
};
