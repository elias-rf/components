import { describe, expect, test } from "vitest";
import { Association } from "../orm-database";
import { fillAssociations } from "./fill-associations";

describe("fillAssociations", () => {
  test("string keys hasMany", async () => {
    const dataSource = [{ id: 1 }, { id: 2 }];
    const dataTarget = [
      { id: 10, id_user: 1 },
      { id: 11, id_user: 1 },
      { id: 20, id_user: 2 },
    ];
    const association: Association = {
      address: {
        select: ["id", "id_user"],
        from: "address",
        source: "id",
        target: "id_user",
        type: "hasMany",
      },
    };
    const response = fillAssociations(dataSource, dataTarget, association);

    expect(response).toEqual([
      {
        id: 1,
        address: [
          { id: 10, id_user: 1 },
          { id: 11, id_user: 1 },
        ],
      },
      {
        id: 2,
        address: [{ id: 20, id_user: 2 }],
      },
    ]);
  });

  test("string keys hasOne", async () => {
    const dataSource = [{ id: 1 }, { id: 2 }];
    const dataTarget = [
      { id: 10, id_user: 1 },
      { id: 20, id_user: 2 },
    ];
    const association: Association = {
      address: {
        select: ["id", "id_user"],
        from: "address",
        source: "id",
        target: "id_user",
        type: "hasOne",
      },
    };
    const response = fillAssociations(dataSource, dataTarget, association);

    expect(response).toEqual([
      {
        id: 1,
        address: { id: 10, id_user: 1 },
      },
      {
        id: 2,
        address: { id: 20, id_user: 2 },
      },
    ]);
  });

  test("array keys", async () => {
    const dataSource = [
      { id: 1, key: 1, name: "test1" },
      { id: 2, key: 1, name: "test2" },
    ];
    const dataTarget = [
      { id: 10, key: 1, id_parent: 1, name: "test11" },
      { id: 20, key: 1, id_parent: 2, name: "test21" },
    ];
    const association: Association = {
      children: {
        select: ["id", "id_parent", "name", "key"],
        from: "children",
        source: ["id", "key"],
        target: ["id_parent", "key"],
        type: "hasMany",
      },
    };
    const response = fillAssociations(dataSource, dataTarget, association);

    expect(response).toEqual([
      {
        id: 1,
        name: "test1",
        key: 1,
        children: [{ id: 10, key: 1, id_parent: 1, name: "test11" }],
      },
      {
        id: 2,
        name: "test2",
        key: 1,
        children: [{ id: 20, key: 1, id_parent: 2, name: "test21" }],
      },
    ]);
  });
});
