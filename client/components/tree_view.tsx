import chevronDown from "@iconify/icons-carbon/chevron-down";
import chevronRight from "@iconify/icons-carbon/chevron-right";
import { InlineIcon } from "@iconify/react";
import { twMerge } from "tailwind-merge";
import { TEvent } from "../../types";

type TTreeViewEvent = TEvent & {
  component: "TreeView";
  event: "onSelectEvent";
};

type TTreeViewItem = {
  key: string;
  label: string;
  children?: TTreeViewItem[];
};

type TTreeViewProps = {
  name?: string;
  data: TTreeViewItem[];
  selected?: string;
  onSelectEvent: (event: TTreeViewEvent) => void;
  path?: string;
};

export function TreeView({
  name = "",
  data,
  selected,
  onSelectEvent,
  path = "",
}: TTreeViewProps) {
  function handleSelect(e: any) {
    e.stopPropagation();
    if (selected !== path + "/" + e.target.dataset.name) {
      onSelectEvent({
        name,
        value: selected,
        event: "onSelectEvent",
        component: "TreeView",
      });
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
                    onSelectEvent={handleSelect}
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
