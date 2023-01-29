import { describe, expect, it } from "vitest";
import { entity } from "./aux";
import { isWhere } from "./is-where";

describe("isWhere", () => {
  it("deve invalidar where mal formatados", () => {
    // @ts-expect-error: Unreachable code error
    expect(isWhere(undefined, entity)).toBe(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(isWhere(null, entity)).toBe(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(isWhere({}, entity)).toBe(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(isWhere("field", entity)).toBe(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(isWhere({ field: 1 }, entity)).toBe(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(isWhere([{ field: 1 }], entity)).toBe(
      "where deve ser no formato [field, igualdade, valor]"
    );
    expect(isWhere([], entity)).toBe(null);
    // @ts-expect-error: Unreachable code error
    expect(isWhere([["field", "ascii"]], entity)).toBe(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(isWhere([["field"]], entity)).toBe(
      "where deve ser no formato [field, igualdade, valor]"
    );
  });
  it("deve validar campo correto", () => {
    expect(isWhere([["fld_1", "=", "asc"]], entity)).toBe(null);
  });
  it("deve invalidar campo incorreto", () => {
    expect(
      isWhere(
        [
          ["fld_0", "=", "asc"],
          ["fld_1", "=", "asc"],
        ],
        entity
      )
    ).toBe("fld_0 não é um campo válido para where use: fld_2,fld_3,fld_4");
  });
  it("deve invalidar campo incorreto", () => {
    expect(
      isWhere(
        [
          ["fld_0", "=", "asc"],
          ["fld_00", "=", "asc"],
          ["fld_1", "=", "asc"],
        ],
        entity
      )
    ).toBe(
      "fld_0,fld_00 não são campos válidos para where use: fld_2,fld_3,fld_4"
    );
  });
});
