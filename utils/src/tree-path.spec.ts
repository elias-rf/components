import { describe, expect, it } from "vitest";
import { treePath } from "./tree-path";

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

describe("treePath", () => {
  it("/", () => {
    expect(treePath(data, "/")).toEqual(data);
  });
  it("/item1", () => {
    expect(treePath(data, "/item1")).toEqual(data[0].child);
  });
  it("/item1/item1.2", () => {
    expect(treePath(data, "/item1/item1.2")).toEqual(data[0].child[1].child);
  });
  it("/item1/item1.2/item1.2.1", () => {
    expect(treePath(data, "/item1/item1.2/item1.2.1")).toEqual([]);
  });
  it("/item-1/item-1.2/item-1.2.1", () => {
    expect(treePath(data, "/item1/item1.2/item1.2.1")).toEqual([]);
  });
});
