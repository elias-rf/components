export type TSelect = any & {
  component: "Select";
  event: "onChange";
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
  onChange: (event: TSelect) => void;
  [prop: string]: any;
};
