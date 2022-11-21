import chevronDown from "@iconify/icons-carbon/chevron-down";
import chevronRight from "@iconify/icons-carbon/chevron-right";
import { InlineIcon } from "@iconify/react";
import { useMenuStore } from "./menu.store";
import { TMenuGroupProps } from "./menu.types";

export function MenuGroup({ icon, title, children }: TMenuGroupProps) {
  const currentGroup = useMenuStore((state) => state.currentGroup);
  const setCurrentGroup = useMenuStore((state) => state.setCurrentGroup);

  function handleOpen(e: any) {
    e.stopPropagation();
    if (currentGroup === title) {
      setCurrentGroup("");
    } else {
      setCurrentGroup(title);
    }
  }

  return (
    <div>
      <button
        onClick={handleOpen}
        className="flex justify-between w-full focus:bg-gray-200 focus:outline-none focus:text-gray-900 hover:bg-gray-200 hover:text-gray-900"
      >
        <div className="px-2 py-1">
          <InlineIcon icon={icon || ""} inline={true} className="inline mr-1" />

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
