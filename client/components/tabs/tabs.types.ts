import { TEvent } from "../../../types";

export type TTabsEvent = TEvent & {
  component: "Tabs";
  event: "onChangeEvent";
};

export type TTabEvent = TEvent & {
  component: "Tab";
  event: "onClickEvent";
};

export type TTabsProps = {
  active: string;
  onChangeEvent: (event: TTabsEvent) => void;
  children: React.ReactElement[];
};

export type TTabProps = {
  active?: string;
  id: string;
  title: string;
  onClickEvent?: (event: TTabEvent) => void;
  children: React.ReactNode;
};
