import { TFieldServer } from "@mono/types";
import { describe, expect, it } from "vitest";
import { zRecord } from "./z-record";

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

describe("zRecord", () => {
  it("dados corretos", () => {
    expect(zRecord({ fld_2: 2, fld_4: 4 }, entity)).toBe(undefined);
  });
  it("campo desconhecido", () => {
    expect(() => zRecord({ fld_2: 2, fld_0: 0 }, entity)).toThrow(
      "fld_0 não é um campo válido, use: fld_4"
    );
  });
  it("campo em excesso", () => {
    expect(() => zRecord({ fld_2: 2, fld_4: 4, fld_0: 0 }, entity)).toThrow(
      "fld_0 não é um campo válido."
    );
  });
  it("campo readOnly", () => {
    expect(() => zRecord({ fld_2: 2, fld_4: 4, fld_3: 0 }, entity)).toThrow(
      "fld_3 não é um campo válido."
    );
  });
  it("campo autoIncrement", () => {
    expect(() => zRecord({ fld_1: 2, fld_4: 4, fld_3: 0 }, entity)).toThrow(
      "fld_1,fld_3 não são campos válidos, use: fld_2"
    );
  });
});
