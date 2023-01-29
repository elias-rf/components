import { describe, expect, it } from "vitest";
import { entity } from "./aux";
import { isData } from "./is-data";

describe("isData", () => {
  it("dados corretos", () => {
    expect(isData({ fld_2: 2, fld_4: 4 }, entity)).toBe(null);
  });
  it("campo desconhecido", () => {
    expect(isData({ fld_2: 2, fld_0: 0 }, entity)).toBe(
      "fld_0 não é um campo válido, use: fld_4"
    );
  });
  it("campo em excesso", () => {
    expect(isData({ fld_2: 2, fld_4: 4, fld_0: 0 }, entity)).toBe(
      "fld_0 não é um campo válido."
    );
  });
  it("campo readOnly", () => {
    expect(isData({ fld_2: 2, fld_4: 4, fld_3: 0 }, entity)).toBe(
      "fld_3 não é um campo válido."
    );
  });
  it("campo autoIncrement", () => {
    expect(isData({ fld_1: 2, fld_4: 4, fld_3: 0 }, entity)).toBe(
      "fld_1,fld_3 não são campos válidos, use: fld_2"
    );
  });
});
