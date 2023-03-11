import { describe, expect, it } from "vitest";
import { TFieldServer } from "../../types";
import { zIdServer } from "./z-id-server";

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

describe("isId", () => {
  it("deve invalidar Id vazio", () => {
    expect(() => zIdServer(undefined, entity)).toThrow("Id deve ser informado");
    expect(() => zIdServer(null, entity)).toThrow("Id deve ser informado");
    expect(() => zIdServer({}, entity)).toThrow("Id deve ser informado");
    expect(() => zIdServer([], entity)).toThrow("Id deve ser informado");
  });
  it("deve validar Id correto", () => {
    expect(zIdServer({ fld1: 1, fld2: "fulano" }, entity)).toEqual(undefined);
  });
  it("deve invalidar Id incompleto", () => {
    expect(() => zIdServer({ fld1: 1 }, entity)).toThrow(
      "[fld2] não foi informado para [id]: fld1,fld2"
    );
  });
  it("deve invalidar Id incorreto", () => {
    expect(() => zIdServer({ fld1: 1, fld3: 0 }, entity)).toThrow(
      "[fld2] não foi informado para [id]: fld1,fld2"
    );
  });
});
