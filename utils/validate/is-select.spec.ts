import { describe, expect, it } from "vitest";
import { entity } from "./aux";
import { isSelect } from "./is-select";

describe("isSelect", () => {
  it("deve invalidar select mal formatados", () => {
    // @ts-expect-error: Unreachable code error
    expect(isSelect(undefined, entity)).toBe(
      "select deve ser um array de campos"
    );
    // @ts-expect-error: Unreachable code error
    expect(isSelect(null, entity)).toBe("select deve ser um array de campos");
    // @ts-expect-error: Unreachable code error
    expect(isSelect({}, entity)).toBe("select deve ser um array de campos");
    // @ts-expect-error: Unreachable code error
    expect(isSelect("field", entity)).toBe(
      "select deve ser um array de campos"
    );
    // @ts-expect-error: Unreachable code error
    expect(isSelect({ field: 1 }, entity)).toBe(
      "select deve ser um array de campos"
    );
    expect(isSelect([], entity)).toBe("select deve ser um array de campos");
  });

  it("deve validar select", () => {
    expect(isSelect(["fld_1"], entity)).toBe(null);
  });

  it("deve invalidar select com campo errado", () => {
    expect(isSelect(["fld_0", "fld_1"], entity)).toBe(
      "fld_0 não é select válido use: fld_2,fld_3,fld_4"
    );
    expect(isSelect(["fld_0", "fld_00", "fld_1"], entity)).toBe(
      "fld_0,fld_00 não são select válidos use: fld_2,fld_3,fld_4"
    );
  });
});
