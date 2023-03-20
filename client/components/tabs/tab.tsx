import React from "react";
import { twMerge } from "tailwind-merge";
import { TabsContext } from "./tabs.context";

export type TTab = any & {
  component: "Tab";
  event: "onClick";
};

export type TTabProps = {
  id: string;
  title: string;
  onClick?: (event: React.MouseEvent<HTMLLIElement>, id: string) => void;
  children: React.ReactNode;
};

export function Tab({ id, title }: TTabProps) {
  const state = React.useContext(TabsContext);

  return (
    <li
      className={twMerge(
        "py-1 px-4 border-gray-300 border-solid border-t border-l border-r rounded-t-lg",
        state.active === id ? "bg-white -mb-px" : "text-gray-500 bg-gray-200"
      )}
      key={id}
      onClick={(e) => {
        state.onChange(e, id);
      }}
    >
      {title}
    </li>
  );
}
