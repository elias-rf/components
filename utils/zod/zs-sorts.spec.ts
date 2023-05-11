import { describe, expect, it } from "vitest";
import { zsSorts } from "./zs-sorts";

describe("zsSorts", () => {
  it("deve invalidar order não formatados corretamente", () => {
    expect(zsSorts.safeParse({})).toMatchObject({
      success: false,
    });
    expect(zsSorts.safeParse("field")).toMatchObject({
      success: false,
    });
    expect(zsSorts.safeParse({ field: 1 })).toMatchObject({
      success: false,
    });

    expect(zsSorts.safeParse([{ field: 1 }])).toMatchObject({
      success: false,
    });
  });

  it("deve validar order correto", () => {
    expect(zsSorts.safeParse([{ id: "fld_1", desc: false }])).toMatchObject({
      success: true,
    });
  });

  it("deve validar order vazio", () => {
    expect(zsSorts.safeParse([])).toMatchObject({ success: true });
  });
});
