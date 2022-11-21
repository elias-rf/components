import { TEvent } from "../../../types";

export type TInputEvent = TEvent & {
  component: "Input";
  event: "onChangeEvent";
};

export type TInputProps = {
  name: string;
  disabled?: boolean;
  status?: "success" | "error" | "";
  value: string;
  onChangeEvent: (event: TInputEvent) => void;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
