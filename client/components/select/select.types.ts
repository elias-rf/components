import { TEvent } from "../../../types";

export type TSelectEvent = TEvent & {
  component: "Select";
  event: "onChangeEvent";
};

export type TOptionsProps =
  | {
      title: string;
      value: any;
    }[]
  | { [title: string]: any }
  | [string, any][];

export type TSelectOptionsProps = {
  options: TOptionsProps;
};

export type TSelectProps = {
  field?: string;
  children: React.ReactNode;
  value: string;
  onChangeEvent: (event: TSelectEvent) => void;
  [prop: string]: any;
};
