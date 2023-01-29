import { describe, expect, it } from "vitest";
import { entity } from "./aux";
import { isOrder } from "./is-order";

describe("isOrder", () => {
  it("deve invalidar order não formatados corretamente", () => {
    // @ts-expect-error: Unreachable code error
    expect(isOrder(undefined, entity)).toBe(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    // @ts-expect-error: Unreachable code error
    expect(isOrder(null, entity)).toBe(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    // @ts-expect-error: Unreachable code error
    expect(isOrder({}, entity)).toBe(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    // @ts-expect-error: Unreachable code error
    expect(isOrder("field", entity)).toBe(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    // @ts-expect-error: Unreachable code error
    expect(isOrder({ field: 1 }, entity)).toBe(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    // @ts-expect-error: Unreachable code error
    expect(isOrder([{ field: 1 }], entity)).toBe(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
  });

  it("deve validar order correto", () => {
    expect(isOrder([["fld_1", "asc"]], entity)).toBe(null);
  });

  it("deve validar order vazio", () => {
    expect(isOrder([], entity)).toBe(null);
  });

  it("deve invalidar order field errado", () => {
    // @ts-expect-error: Unreachable code error
    expect(isOrder([["fld_0", "asc"]], entity)).toBe(
      "fld_0 não é válido para order use: fld_1,fld_2,fld_3,fld_4"
    );

    expect(
      isOrder(
        [
          ["fld_0", "asc"],
          ["fld_00", "asc"],
        ],
        entity
      )
    ).toBe(
      "fld_0,fld_00 não são válidos para order use: fld_1,fld_2,fld_3,fld_4"
    );
  });
  it("não listar fields usados", () => {
    // @ts-expect-error: Unreachable code error
    expect(
      isOrder(
        [
          ["fld_0", "asc"],
          ["fld_1", "asc"],
        ],
        entity
      )
    ).toBe("fld_0 não é válido para order use: fld_2,fld_3,fld_4");
  });
});
