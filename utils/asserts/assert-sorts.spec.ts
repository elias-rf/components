import { describe, expect, it } from "vitest";
import { assertSorts } from "./assert-sorts";
import { entity } from "./aux";

describe("isOrder", () => {
  it("deve invalidar order não formatados corretamente", () => {
    // @ts-expect-error: Unreachable code error
    expect(() => assertSorts({}, entity)).toThrow(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => assertSorts("field", entity)).toThrow(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => assertSorts({ field: 1 }, entity)).toThrow(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => assertSorts([{ field: 1 }], entity)).toThrow(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
  });

  it("deve validar order correto", () => {
    expect(assertSorts([{ id: "fld_1", desc: false }], entity)).toEqual(
      undefined
    );
  });

  it("deve validar order vazio", () => {
    expect(assertSorts([], entity)).toEqual(undefined);
  });

  it("deve invalidar order field errado", () => {
    expect(() => assertSorts([{ id: "fld_0", desc: false }], entity)).toThrow(
      "fld_0 não é válido para order use: fld_1,fld_2,fld_3,fld_4"
    );

    expect(() =>
      assertSorts(
        [
          { id: "fld_0", desc: false },
          { id: "fld_00", desc: false },
        ],
        entity
      )
    ).toThrow(
      "fld_0,fld_00 não são válidos para order use: fld_1,fld_2,fld_3,fld_4"
    );
  });
});
