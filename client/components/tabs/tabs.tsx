import React from "react";
import { TabsContext } from "./tabs.context";

export type TTabsProps = {
  active: string;
  onChange: (event: React.MouseEvent<HTMLLIElement>, id: string) => void;
  children: React.ReactElement[];
};

export function Tabs({ onChange, active, children }: TTabsProps) {
  return (
    <TabsContext.Provider value={{ active, onChange }}>
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
