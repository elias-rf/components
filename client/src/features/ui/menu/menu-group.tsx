import React from "react";
import { Icon, InlineIcon, IconifyIcon } from "@iconify/react";
import chevronRight from "@iconify/icons-carbon/chevron-right";
import chevronDown from "@iconify/icons-carbon/chevron-down";
import MenuContext from "./menu.context";
import { twMerge } from "tailwind-merge";

interface MenuGroupProps {
  children: React.ReactElement | React.ReactElement[];
  title: string;
  icon: IconifyIcon;
}

export default function MenuGroup({ icon, title, children }: MenuGroupProps) {
  const [currentGroup, setCurrentGroup] = React.useContext(MenuContext);

  function handleOpen(e: any) {
    e.stopPropagation();
    if (setCurrentGroup) {
      if (currentGroup === title) {
        setCurrentGroup("");
      } else {
        setCurrentGroup(title);
      }
    }
  }

  return (
    <div>
      <button
        onClick={handleOpen}
        className="flex justify-between w-full focus:bg-gray-200 focus:outline-none focus:text-gray-900 hover:bg-gray-200 hover:text-gray-900"
      >
        <div className="px-2 py-1">
          <InlineIcon icon={icon} inline={true} className="inline mr-1" />

          <span>{title}</span>
        </div>
        <div>
          <InlineIcon
            className={
              "inline w-4 h-4 mt-1 ml-1 transition-transform transform md:-mt-1"
            }
            icon={currentGroup === title ? chevronDown : chevronRight}
          ></InlineIcon>
        </div>
      </button>
      {currentGroup === title ? (
        <div className="w-full">
          <div>{children}</div>
        </div>
      ) : null}
    </div>
  );
}
