import { describe, expect, test } from "vitest";
import { Association } from "../orm-database";
import { getAssociations } from "./get-associations";

describe("getAssociations", () => {
  test("without association", async () => {
    const response = getAssociations({ from: "users" });
    expect(response).toEqual([]);
  });

  test("with association", async () => {
    const association: Association = {
      children: {
        select: ["id"],
        from: "children",
        source: "id",
        target: "id_parent",
        type: "hasMany",
      },
    };
    const response = getAssociations({ select: ["id", association] });
    expect(response).toEqual([association]);
  });
});
