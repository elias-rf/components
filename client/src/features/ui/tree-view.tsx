import React from "react";
import { Icon, InlineIcon, IconifyIcon } from "@iconify/react";
import chevronRight from "@iconify/icons-carbon/chevron-right";
import chevronDown from "@iconify/icons-carbon/chevron-down";
import { twMerge } from "tailwind-merge";

interface TreeViewProps {
  data: any;
  selected?: string;
  onSelect?: (selected: any) => void;
  selectedClassName?: string;
  treeClassName?: string;
  path?: string;
}

export default function TreeView({
  data,
  selected,
  onSelect,
  path = "",
}: TreeViewProps) {
  function handleSelect(e: any) {
    e.stopPropagation();
    if (onSelect && selected !== path + "/" + e.target.dataset.name) {
      onSelect(path + "/" + e.target.dataset.name);
    }
  }

  return (
    <ul>
      {data.map((item: any) => {
        return (
          <li key={item.key}>
            <div
              data-name={item.key}
              onClick={handleSelect}
              className={twMerge(
                selected === path + "/" + item.key ? "bg-gray-200" : null
              )}
            >
              <InlineIcon
                icon={
                  selected === path + "/" + item.key
                    ? chevronDown
                    : chevronRight
                }
                className={
                  "inline w-3 h-4 mt-1 transition-transform transform md:-mt-1"
                }
              />
              {item.label}
            </div>
            {item.child && selected?.startsWith(path + "/" + item.key) && (
              <div className="ml-4">
                <TreeView
                  data={item.child}
                  selected={selected}
                  onSelect={onSelect}
                  path={path + "/" + item.key}
                />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
