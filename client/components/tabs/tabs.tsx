import React from "react";
import { TabsContext } from "./tabs.context";
import { TTabsProps } from "./tabs.types";

export function Tabs({ onChangeEvent, active, children }: TTabsProps) {
  return (
    <TabsContext.Provider value={{ active, onChangeEvent }}>
      <div className={"border-b border-gray-300"}>
        <ul className={"flex cursor-pointer"}>{children}</ul>
      </div>
      {React.Children.map(children, (child) => {
        if (child.props.id === active) {
          return child.props.children;
        }
        return null;
      })}
    </TabsContext.Provider>
  );
}
