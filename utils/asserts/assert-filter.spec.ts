// @ts-check
import { assertFilter } from "@/utils/asserts/assert-filter";
import { describe, expect, it } from "vitest";

const entity = [
  { name: "fld_1" },
  { name: "fld_2" },
  { name: "fld_3" },
  { name: "fld_4" },
];

describe("isFilters", () => {
  it("deve validar filter vazio", () => {
    expect(assertFilter({}, entity)).toEqual(undefined);
  });
  it("deve validar campo correto", () => {
    expect(assertFilter({ fld_1: "=asc" }, entity)).toEqual(undefined);
    expect(assertFilter({ fld_1: "=1" }, entity)).toEqual(undefined);
  });
  it("deve invalidar campo incorreto", () => {
    expect(() =>
      assertFilter(
        {
          fld_0: "= asc",
          fld_1: "= asc",
        },
        entity
      )
    ).toThrow("fld_0 não é um campo válido para where use: fld_2,fld_3,fld_4");
  });
  it("deve invalidar campo incorreto", () => {
    expect(() =>
      assertFilter(
        {
          fld_0: "=asc",
          fld_00: "=asc",
          fld_1: "=asc",
        },
        entity
      )
    ).toThrow(
      "fld_0,fld_00 não são campos válidos para where use: fld_2,fld_3,fld_4"
    );
  });
});
