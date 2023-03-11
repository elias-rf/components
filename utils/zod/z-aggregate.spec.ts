import { TFieldServer } from "../../types";
import { zAggregate } from "./z-aggregate";

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
    expect(() => zAggregate(undefined, entity)).toThrow(
      "aggregate deve ser um objeto {alias:field}"
    );
    expect(() => zAggregate(null, entity)).toThrow(
      "aggregate deve ser um objeto {alias:field}"
    );
    expect(() => zAggregate("field", entity)).toThrow(
      "aggregate deve ser um objeto {alias:field}"
    );
    expect(() => zAggregate({ field: 1 }, entity)).toThrow(
      "1 não é select válido use: fld_1,fld_2,fld_3,fld_4"
    );
    expect(() => zAggregate([], entity)).toThrow(
      "aggregate deve ser um objeto {alias:field}"
    );
  });

  it("deve validar select", () => {
    expect(zAggregate({ ttl: "fld_1", cnt: "fld_2" }, entity)).toBe(undefined);
  });

  it("deve invalidar select com campo errado", () => {
    expect(() => zAggregate({ ttl: "fld_1", cnt: "fld_0" }, entity)).toThrow(
      "fld_0 não é select válido use: fld_2,fld_3,fld_4"
    );
    expect(() =>
      zAggregate({ ttl: "fld_1", cnt: "fld_0", avg: "fld_00" }, entity)
    ).toThrow("fld_0,fld_00 não são select válidos use: fld_2,fld_3,fld_4");
  });
});
