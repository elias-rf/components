// @ts-check
import { assertFilters } from "@/utils/asserts/assert-filters";
import { describe, expect, it } from "vitest";

const entity = [
  { name: "fld_1" },
  { name: "fld_2" },
  { name: "fld_3" },
  { name: "fld_4" },
];

describe("isFilters", () => {
  it("deve validar filter vazio", () => {
    expect(assertFilters([], entity)).toEqual(undefined);
  });
  it("deve validar campo correto", () => {
    expect(assertFilters([{ id: "fld_1", value: "=asc" }], entity)).toEqual(
      undefined
    );
    expect(assertFilters([{ id: "fld_1", value: "=1" }], entity)).toEqual(
      undefined
    );
  });
  it("deve invalidar campo incorreto", () => {
    expect(() =>
      assertFilters(
        [
          { id: "fld_0", value: "= asc" },
          { id: "fld_1", value: "= asc" },
        ],
        entity
      )
    ).toThrow("fld_0 não é um campo válido para where use: fld_2,fld_3,fld_4");
  });
  it("deve invalidar campo incorreto", () => {
    expect(() =>
      assertFilters(
        [
          { id: "fld_0", value: "=asc" },
          { id: "fld_00", value: "=asc" },
          { id: "fld_1", value: "=asc" },
        ],
        entity
      )
    ).toThrow(
      "fld_0,fld_00 não são campos válidos para where use: fld_2,fld_3,fld_4"
    );
  });
});
