import { describe, expect, it } from "vitest";
import { assertData } from "./assert-data";
import { entity } from "./aux";

describe("isData", () => {
  it("dados corretos", () => {
    expect(assertData({ fld_2: 2, fld_4: 4 }, entity)).toEqual(undefined);
  });
  it("campo desconhecido", () => {
    expect(() => assertData({ fld_2: 2, fld_0: 0 }, entity)).toThrow(
      "fld_0 não é um campo válido, use: fld_4"
    );
  });
  it("campo em excesso", () => {
    expect(() => assertData({ fld_2: 2, fld_4: 4, fld_0: 0 }, entity)).toThrow(
      "fld_0 não é um campo válido."
    );
  });
  it("campo readOnly", () => {
    expect(() => assertData({ fld_2: 2, fld_4: 4, fld_3: 0 }, entity)).toThrow(
      "fld_3 não é um campo válido."
    );
  });
  it("campo autoIncrement", () => {
    expect(() => assertData({ fld_1: 2, fld_4: 4, fld_3: 0 }, entity)).toThrow(
      "fld_1,fld_3 não são campos válidos, use: fld_2"
    );
  });
});
