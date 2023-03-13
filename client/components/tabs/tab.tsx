import React from "react";
import { twMerge } from "tailwind-merge";
import { TabsContext } from "./tabs.context";
import { TTabProps } from "./tabs.types";

export function Tab({ id, title }: TTabProps) {
  const state = React.useContext(TabsContext);

  function handleOnChange() {
    state.onChangeEvent({
      component: "Tabs",
      event: "onChangeEvent",
      value: id,
      name: title,
    });
  }

  return (
    <li
      className={twMerge(
        "py-1 px-4 border-gray-300 border-solid border-t border-l border-r rounded-t-lg",
        state.active === id ? "bg-white -mb-px" : "text-gray-500 bg-gray-200"
      )}
      key={id}
      onClick={handleOnChange}
    >
      {title}
    </li>
  );
}
