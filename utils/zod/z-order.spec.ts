import { TFieldServer } from "@mono/types";
import { describe, expect, it } from "vitest";
import { zOrder } from "./z-order";

const entity: TFieldServer[] = [
  {
    name: "fld_1",
    field: "fld1",
    type: "int",
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  {
    name: "fld_2",
    field: "fld2",
    type: "string",
    allowNull: false,
    primaryKey: true,
  },
  {
    name: "fld_3",
    field: "fld3",
    type: "string",
    readOnly: true,
  },
  {
    name: "fld_4",
    field: "fld4",
    type: "string",
  },
];

describe("owOrder", () => {
  it("deve invalidar order não formatados corretamente", () => {
    expect(() => zOrder(undefined, entity)).toThrow(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    expect(() => zOrder(null, entity)).toThrow(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => zOrder({}, entity)).toThrow(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => zOrder("field", entity)).toThrow(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => zOrder({ field: 1 }, entity)).toThrow(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => zOrder([{ field: 1 }], entity)).toThrow(
      "order deve ser informado no formato [[field, asc|desc]]"
    );
  });

  it("deve validar order correto", () => {
    expect(zOrder([["fld_1", "asc"]], entity)).toBe(undefined);
  });

  it("deve validar order vazio", () => {
    expect(zOrder([], entity)).toBe(undefined);
  });

  it("deve invalidar order field errado", () => {
    expect(() => zOrder([["fld_0", "asc"]], entity)).toThrow(
      "fld_0 não é válido para order use: fld_1,fld_2,fld_3,fld_4"
    );

    expect(() =>
      zOrder(
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
      zOrder(
        [
          ["fld_0", "asc"],
          ["fld_1", "asc"],
        ],
        entity
      )
    ).toThrow("fld_0 não é válido para order use: fld_2,fld_3,fld_4");
  });
});
