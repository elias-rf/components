import { TEvent } from "../../../types";

export type TButtonEvent = TEvent & {
  component: "Button";
  event: "onClickEvent";
};

export type TButtonProps = {
  children: React.ReactNode;
  color?:
    | "default"
    | "alternative"
    | "dark"
    | "light"
    | "green"
    | "red"
    | "yellow"
    | "purple";
  disabled?: boolean;
  size?: "xs" | "sm" | "bs" | "lg" | "xl";
  name?: string;
  className?: string;
  onClickEvent?: (event: TButtonEvent) => void;
};
