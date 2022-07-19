import folderIcon from "@iconify/icons-carbon/folder";
import { Icon } from "@iconify/react";
import React from "react";
import { Action } from "../../../types";
import { UpView } from "./up-view";
// import treePath from "./tree-path";

interface ListViewProps {
  data: any;
  selected: string;
  dispatch: (action: Action) => void;
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

export function ListView({ data, selected = "/", dispatch }: ListViewProps) {
  const [selectedData, setSelectedData] = React.useState<any[]>([]);

  function handleSelect(key: string) {
    dispatch({ type: "click", payload: selected + "/" + key });
  }

  React.useEffect(() => {
    // setSelectedData(treePath(data, selected));
  }, [data, selected]);

  return (
    <div className="flex space-x-4">
      <UpView
        selected={selected}
        dispatch={dispatch}
      />
      {selectedData.map((item: any) => {
        return (
          <Folder
            key={item.key}
            item={item}
            handleSelect={handleSelect}
          />
        );
      })}
    </div>
  );
}
