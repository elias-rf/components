import { describe, expect, it } from "vitest";
import { orderByUtil } from "./order-by";

describe("orderBy", () => {
  it("deve retornar 1 campo", () => {
    expect(
      orderByUtil.getSort(
        [
          ["id", "asc"],
          ["name", "desc"],
        ],
        "name"
      )
    ).toEqual("desc");
  });
});
