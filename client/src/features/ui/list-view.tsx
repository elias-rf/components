import React from "react";
import { twMerge } from "tailwind-merge";
import { Icon, InlineIcon, IconifyIcon } from "@iconify/react";
import folderIcon from "@iconify/icons-carbon/folder";
import treePath from "../../lib/data/tree-path";

const folderParent = {
  body: '<path fill="currentColor" d="M28 8H16l-3.414-3.414A2 2 0 0 0 11.172 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9.17l2.59 2.58L22 18l-5-5l-5 5l1.41 1.41L16 16.83V26H4V6h7.172l4 4H28v16h-6v2h6a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"/>',
  width: 32,
  height: 32,
};

interface ListViewProps {
  data: any;
  selected?: string;
  onSelect?: (selected: any) => void;
  selectedClassName?: string;
  treeClassName?: string;
  path?: string;
  children?: any;
}

function Folder({ item, handleSelect }: { item: any; handleSelect: any }) {
  return (
    <div className="w-16 h-8">
      <div
        data-name={item.key}
        onClick={() => handleSelect(item.key)}
      >
        <Icon
          icon={folderIcon}
          className={"inline w-8 h-8"}
        />{" "}
        {item.label}
      </div>
    </div>
  );
}

export default function ListView({
  data,
  selected = "/",
  onSelect,
  children,
}: ListViewProps) {
  const [selectedData, setSelectedData] = React.useState<any[]>([]);

  function handleSelect(key: string) {
    if (onSelect) {
      onSelect(selected + "/" + key);
    }
  }

  function handleUp() {
    const selectedArray = selected.split("/");
    selectedArray.pop();
    const rsp = selectedArray.join("/");
    if (onSelect) {
      onSelect(rsp);
    }
  }

  React.useEffect(() => {
    setSelectedData(treePath(data, selected));
  }, [data, selected]);

  return (
    <div className="flex space-x-4">
      <div className="w-16 h-8">
        <Icon
          icon={folderParent}
          className={"inline w-8 h-8"}
          onClick={handleUp}
        />
      </div>
      {selectedData.map((item: any) => {
        return (
          <Folder
            key={item.key}
            item={item}
            handleSelect={handleSelect}
          />
        );
      })}
      <div>{children}</div>
    </div>
  );
}
