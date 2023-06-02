import { describe, expect, it } from "vitest";
import { zsSort } from "./zs-sort";

describe("zsSorts", () => {
  it("deve invalidar order não formatados corretamente", () => {
    expect(zsSort.safeParse([])).toMatchObject({
      success: false,
    });
    expect(zsSort.safeParse("field")).toMatchObject({
      success: false,
    });
    expect(zsSort.safeParse({ field: 1 })).toMatchObject({
      success: false,
    });

    expect(zsSort.safeParse([{ field: 1 }])).toMatchObject({
      success: false,
    });
  });

  it("deve validar order correto", () => {
    expect(zsSort.safeParse({ fld_1: "asc" })).toMatchObject({
      success: true,
    });
  });

  it("deve validar order vazio", () => {
    expect(zsSort.safeParse({})).toMatchObject({ success: true });
  });
});
