import { TEvent } from "../../../types";

export type TDefaultLayoutEvent = TEvent & {
  component: "DefaultLayout";
  event: "onClickEvent";
};

export type TDefaultLayoutProps = {
  children?: React.ReactNode;
  isAuthenticated: boolean;
  onClickEvent: (e: TDefaultLayoutEvent) => void;
  menu: any;
};
