import { describe, expect, it } from "vitest";
import { TEntity } from "../types";
import {
  renameToFieldArray,
  renameToFieldArrayObject,
  renameToFieldObject,
  renameToFieldString,
  renameToFieldTuple,
} from "./rename-fields";

const entity: TEntity = {
  database: "oftalmo",
  table: "phonebook",
  fields: [
    {
      allowNull: false,
      field: "id",
      label: "Ramal",
      name: "agenda_telefone_id",
      primaryKey: true,
      type: "int",
    },
    {
      allowNull: false,
      field: "name",
      label: "Nome",
      name: "nome",
      type: "string",
    },
    {
      field: "department",
      label: "Setor",
      name: "setor",
      type: "string",
    },
    {
      field: "email",
      label: "Email",
      name: "email",
      type: "string",
    },
  ],
};

describe("renameFields", () => {
  it("deve renomear string para field", () => {
    expect(renameToFieldString("nome", entity)).toBe("name");
    expect(() => renameToFieldString("nomes", entity)).toThrow(
      "nomes não é um nome válido: agenda_telefone_id,nome,setor,email"
    );
  });

  it("deve renomear where para field", () => {
    expect(renameToFieldTuple([["nome", "=", "fulano"]], entity)).toEqual([
      ["name", "=", "fulano"],
    ]);

    expect(() =>
      renameToFieldTuple([["nomes", "=", "fulano"]], entity)
    ).toThrow(
      "nomes não é um nome válido: agenda_telefone_id,nome,setor,email"
    );
  });
  it("deve renomear where complexo para field", () => {
    expect(
      renameToFieldTuple(
        [
          ["nome", "=", "fulano"],
          ["setor", ">", "18"],
        ],
        entity
      )
    ).toEqual([
      ["name", "=", "fulano"],
      ["department", ">", "18"],
    ]);

    expect(() =>
      renameToFieldTuple(
        [
          ["nomes", "=", "fulano"],
          ["setor", ">", "18"],
        ],
        entity
      )
    ).toThrow(
      "nomes não é um nome válido: agenda_telefone_id,nome,setor,email"
    );
  });

  it("deve renomear order para field", () => {
    expect(renameToFieldTuple([["nome", "desc"]], entity)).toEqual([
      ["name", "desc"],
    ]);
    expect(() => renameToFieldTuple([["nomes", "desc"]], entity)).toThrow(
      "nomes não é um nome válido: agenda_telefone_id,nome,setor,email"
    );
  });
  it("deve renomear order complexo para field", () => {
    expect(
      renameToFieldTuple(
        [
          ["nome", "asc"],
          ["setor", "desc"],
        ],
        entity
      )
    ).toEqual([
      ["name", "asc"],
      ["department", "desc"],
    ]);

    expect(() =>
      renameToFieldTuple(
        [
          ["nomes", "asc"],
          ["setor", "desc"],
        ],
        entity
      )
    ).toThrow(
      "nomes não é um nome válido: agenda_telefone_id,nome,setor,email"
    );
  });

  it("deve renomear select para field", () => {
    expect(renameToFieldArray(["nome", "setor"], entity)).toEqual([
      "name",
      "department",
    ]);
    expect(() => renameToFieldArray(["nomes", "setor"], entity)).toThrow(
      "nomes não é um nome válido: agenda_telefone_id,nome,setor,email"
    );
  });

  it("deve renomear object para field", () => {
    expect(renameToFieldObject({ nome: "fulano", setor: 23 }, entity)).toEqual({
      name: "fulano",
      department: 23,
    });

    expect(() =>
      renameToFieldObject({ nomes: "fulano", setor: 23 }, entity)
    ).toThrow(
      "nomes não é um nome válido: agenda_telefone_id,nome,setor,email"
    );
  });
  it("deve renomear array de object para field", () => {
    expect(
      renameToFieldArrayObject([{ nome: "fulano", setor: 23 }], entity)
    ).toEqual([{ name: "fulano", department: 23 }]);

    expect(() =>
      renameToFieldArrayObject([{ nomes: "fulano", setor: 23 }], entity)
    ).toThrow(
      "nomes não é um nome válido: agenda_telefone_id,nome,setor,email"
    );
  });
});
