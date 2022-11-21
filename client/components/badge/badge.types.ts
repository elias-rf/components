import { TEvent } from "../../../types";

export type TBadgeEvent = TEvent & {
  component: "Badge";
  event: "onClickEvent" | "onCloseEvent";
};

export type TBadgeProps = {
  color?:
    | "default"
    | "dark"
    | "red"
    | "green"
    | "yellow"
    | "indigo"
    | "purple"
    | "pink";
  large?: boolean;
  children: string;
  name?: string;
  onClickEvent?: (e: TBadgeEvent) => void;
  onCloseEvent?: (e: TBadgeEvent) => void;
  className?: string;
};

export type TBadgeClose = {
  name: string;
  onCloseEvent?: (e: TBadgeEvent) => void;
};
