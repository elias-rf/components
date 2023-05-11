import { describe, expect, it } from "vitest";
import { assertSelect } from "./assert-select";
import { entity } from "./aux";

describe("assertSelect", () => {
  it("deve invalidar select mal formatados", () => {
    // @ts-expect-error: Unreachable code error
    expect(() => assertSelect({}, entity)).toThrow(
      "select deve ser um array de campos"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => assertSelect("field", entity)).toThrow(
      "select deve ser um array de campos"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => assertSelect({ field: 1 }, entity)).toThrow(
      "select deve ser um array de campos"
    );
    expect(assertSelect([], entity)).toEqual(undefined);
  });

  it("deve validar select", () => {
    expect(assertSelect(["fld_1"], entity)).toEqual(undefined);
  });

  it("deve invalidar select com campo errado", () => {
    expect(() => assertSelect(["fld_0", "fld_1"], entity)).toThrow(
      "fld_0 não é um campo válido use: fld_2,fld_3,fld_4"
    );
    expect(() => assertSelect(["fld_0", "fld_00", "fld_1"], entity)).toThrow(
      "fld_0,fld_00 não são campos válidos use: fld_2,fld_3,fld_4"
    );
  });
});
