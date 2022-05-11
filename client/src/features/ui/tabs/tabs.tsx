import React from "react";
import { TabProps } from "./tab";

interface TabsProps {
  onChange: (id: string) => void;
  active: string;
  children: React.ReactElement[];
}
function Tabs({ onChange, active, children }: TabsProps) {
  return (
    <>
      <div className="border-b border-gray-300">
        <ul className="flex cursor-pointer">
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              active: active,
              onChange: onChange,
              key: child.props.id,
            });
          })}
        </ul>
      </div>
      {React.Children.map(children, (child) => {
        if (child.props.id === active) {
          return child.props.children;
        }
        return null;
      })}
    </>
  );
}

export default Tabs;
