import { IconifyIcon } from "@iconify/react";
import { ReactElement } from "react";
import { TEvent } from "../../../types";

export type TMenuEvent = TMenuTitleEvent | TMenuItemEvent;

export type TMenuProps = {
  children: React.ReactElement | React.ReactElement[];
};

export type TMenuTitleEvent = TEvent & {
  component: "MenuTitle";
  event: "onClickEvent";
};

export type TMenuTitleProps = {
  to: string;
  onClickEvent: (e: TMenuTitleEvent) => void;

  children: string | React.ReactElement;
};

export type TMenuItemEvent = TEvent & {
  component: "MenuItem";
  event: "onClickEvent";
};

export type TMenuItemProps = {
  to?: string;
  onClickEvent: (e: TMenuItemEvent) => void;
  children: string;
};

export type TMenuIconProps = {
  opened: boolean;
};

export type TMenuGroupProps = {
  children: React.ReactElement | React.ReactElement[];
  title: string;
  icon?: IconifyIcon;
};

export type TMenuBodyProps = {
  children: ReactElement | ReactElement[];
  version: string;
};
