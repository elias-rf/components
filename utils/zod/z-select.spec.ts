import { TFieldServer } from "../../types";
import { zSelect } from "./z-select";

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

describe("select", () => {
  it("deve invalidar select mal formatados", () => {
    expect(() => zSelect(undefined, entity)).toThrow(
      "select deve ser um array de campos"
    );

    expect(() => zSelect(null, entity)).toThrow(
      "select deve ser um array de campos"
    );

    expect(() => zSelect({}, entity)).toThrow(
      "select deve ser um array de campos"
    );
    expect(() => zSelect("field", entity)).toThrow(
      "select deve ser um array de campos"
    );
    expect(() => zSelect({ field: 1 }, entity)).toThrow(
      "select deve ser um array de campos"
    );
  });

  it("deve validar select vazio", () => {
    expect(zSelect([], entity)).toBe(undefined);
  });

  it("deve validar select", () => {
    expect(zSelect(["fld_1"], entity)).toBe(undefined);
  });

  it("deve invalidar select com campo errado", () => {
    expect(() => zSelect(["fld_0", "fld_1"], entity)).toThrow(
      "fld_0 não é select válido use: fld_2,fld_3,fld_4"
    );
    expect(() => zSelect(["fld_0", "fld_00", "fld_1"], entity)).toThrow(
      "fld_0,fld_00 não são select válidos use: fld_2,fld_3,fld_4"
    );
  });
});
