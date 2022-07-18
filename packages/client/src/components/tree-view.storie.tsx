import React from "react";
import TreeView from "../../client/src/features/ui/tree-view";

const data = [
  {
    key: "item1",
    label: "Item 1",
    child: [
      { key: "item1.1", label: "Item 1.1" },
      {
        key: "item1.2",
        label: "Item 1.2",
        child: [{ key: "item1.2.1", label: "Item 1.2.1" }],
      },
      { key: "item1.3", label: "Item 1.3" },
    ],
  },
  {
    key: "item2",
    label: "Item 2",
    child: [
      { key: "item2.1", label: "Item 2.1" },
      { key: "item2.2", label: "Item 2.2" },
      { key: "item1.2.1", label: "Item 1.2.1" },
    ],
  },
];

export function Default() {
  const [selected, setSelected] = React.useState<string>("");
  return (
    <TreeView
      data={data}
      selected={selected}
      onSelect={setSelected}
    />
  );
}
