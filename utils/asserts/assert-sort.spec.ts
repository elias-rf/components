import { describe, expect, it } from "vitest";
import { assertSort } from "./assert-sort";
import { entity } from "./aux";

describe("assertSort", () => {
  it("deve invalidar order não formatados corretamente", () => {
    // @ts-expect-error: Unreachable code error
    expect(() => assertSort([], entity)).toThrow(
      "order deve ser informado no formato {[field:string]: asc|desc}"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => assertSort("field", entity)).toThrow(
      "order deve ser informado no formato {[field:string]: asc|desc}"
    );

    // @ts-expect-error: Unreachable code error
    expect(() => assertSort([{ field: 1 }], entity)).toThrow(
      "order deve ser informado no formato {[field:string]: asc|desc}"
    );
  });

  it("deve validar order correto", () => {
    expect(assertSort({ fld_1: "asc" }, entity)).toEqual(undefined);
  });

  it("deve validar order vazio", () => {
    expect(assertSort({}, entity)).toEqual(undefined);
  });

  it("deve invalidar order field errado", () => {
    expect(() => assertSort({ fld_0: "asc" }, entity)).toThrow(
      "fld_0 não é válido para order use: fld_1,fld_2,fld_3,fld_4"
    );

    expect(() => assertSort({ fld_0: "asc", fld_00: "asc" }, entity)).toThrow(
      "fld_0,fld_00 não são válidos para order use: fld_1,fld_2,fld_3,fld_4"
    );
  });
});
