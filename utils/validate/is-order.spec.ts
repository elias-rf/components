import { describe, expect, it } from "vitest";
import { entity } from "./aux";
import { isOrder } from "./is-order";

describe("isOrder", () => {
  it("deve invalidar order não formatados corretamente", () => {
    expect(() => isOrder(undefined, entity)).toThrow(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    expect(() => isOrder(null, entity)).toThrow(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => isOrder({}, entity)).toThrow(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => isOrder("field", entity)).toThrow(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => isOrder({ field: 1 }, entity)).toThrow(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => isOrder([{ field: 1 }], entity)).toThrow(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
  });

  it("deve validar order correto", () => {
    expect(isOrder([["fld_1", "asc"]], entity)).toEqual([["fld_1", "asc"]]);
  });

  it("deve validar order vazio", () => {
    expect(isOrder([], entity)).toEqual([]);
  });

  it("deve invalidar order field errado", () => {
    expect(() => isOrder([["fld_0", "asc"]], entity)).toThrow(
      "fld_0 não é válido para order use: fld_1,fld_2,fld_3,fld_4"
    );

    expect(() =>
      isOrder(
        [
          ["fld_0", "asc"],
          ["fld_00", "asc"],
        ],
        entity
      )
    ).toThrow(
      "fld_0,fld_00 não são válidos para order use: fld_1,fld_2,fld_3,fld_4"
    );
  });
  it("não listar fields usados", () => {
    expect(() =>
      isOrder(
        [
          ["fld_0", "asc"],
          ["fld_1", "asc"],
        ],
        entity
      )
    ).toThrow("fld_0 não é válido para order use: fld_2,fld_3,fld_4");
  });
});
