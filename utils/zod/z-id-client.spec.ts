import { describe, expect, it } from "vitest";
import { TFieldServer } from "../../types";
import { zIdClient } from "./z-id-client";

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

describe("idClient", () => {
  it("deve invalidar Id vazio", () => {
    expect(() => zIdClient(undefined, entity)).toThrow("Id deve ser informado");
    expect(() => zIdClient(null, entity)).toThrow("Id deve ser informado");
    expect(() => zIdClient({}, entity)).toThrow("Id deve ser informado");
    expect(() => zIdClient([], entity)).toThrow("Id deve ser informado");
  });
  it("deve validar Id correto", () => {
    expect(zIdClient({ fld_1: 1, fld_2: "fulano" }, entity)).toEqual(undefined);
  });
  it("deve invalidar Id incompleto", () => {
    expect(() => zIdClient({ fld_1: 1 }, entity)).toThrow(
      "[fld_2] não foi informado para [id]: fld_1,fld_2"
    );
  });
  it("deve invalidar Id incorreto", () => {
    expect(() => zIdClient({ fld_1: 1, fld_3: 0 }, entity)).toThrow(
      "[fld_2] não foi informado para [id]: fld_1,fld_2"
    );
  });
});
