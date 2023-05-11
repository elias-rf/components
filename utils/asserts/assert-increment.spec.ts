// @ts-nocheck
import { describe, expect, it } from "vitest";
import { assertIncrement } from "./assert-increment";
import { entity } from "./aux";

describe("assertIncrement", () => {
  it("deve invalidar aggregate mal formatados", () => {
    expect(() => assertIncrement({}, entity)).toThrow(
      "increment deve ser {id:string, value:number}"
    );
    expect(() => assertIncrement("field", entity)).toThrow(
      "increment deve ser {id:string, value:number}"
    );
    expect(() => assertIncrement({ field: 1 }, entity)).toThrow(
      "increment deve ser {id:string, value:number}"
    );
    expect(() =>
      assertIncrement({ id: "agenda_telefone", value: 1 }, entity)
    ).toThrow(
      "agenda_telefone não é campo válido use: fld_1,fld_2,fld_3,fld_4"
    );
  });

  it("deve validar aggregate", () => {
    expect(assertIncrement({ id: "fld_1", value: 1 }, entity)).toEqual(
      undefined
    );
  });
});
