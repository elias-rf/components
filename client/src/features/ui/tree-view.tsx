import React from "react";
import { Icon, InlineIcon, IconifyIcon } from "@iconify/react";
import chevronRight from "@iconify/icons-carbon/chevron-right";
import chevronDown from "@iconify/icons-carbon/chevron-down";
import { twMerge } from "tailwind-merge";
import { Action } from "../../../index.d";

type TreeViewItem = {
  key: string;
  label: string;
  children?: TreeViewItem[];
};

interface TreeViewProps {
  data: TreeViewItem[];
  selected?: string;
  dispatch: (action: Action) => void;
  path?: string;
}

export default function TreeView({
  data,
  selected,
  dispatch,
  path = "",
}: TreeViewProps) {
  function handleSelect(e: any) {
    e.stopPropagation();
    if (selected !== path + "/" + e.target.dataset.name) {
      dispatch({ type: "click", payload: path + "/" + e.target.dataset.name });
    }
  }

  return (
    <div className="w-40">
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
                    dispatch={dispatch}
                    path={path + "/" + item.key}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
