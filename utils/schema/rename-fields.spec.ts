import { TFieldServer } from "@/types";
import { describe, expect, it } from "vitest";
import { renameFieldToName, renameNameToField } from "./rename-fields";

const entity: TFieldServer[] = [
  {
    allowNull: false,
    field: "id",
    name: "agenda_telefone_id",
    primaryKey: true,
    typeField: "int",
  },
  {
    allowNull: false,
    field: "name",
    name: "nome",
    typeField: "string",
  },
  {
    field: "department",
    name: "setor",
    typeField: "string",
  },
  {
    field: "email",
    name: "email",
    typeField: "string",
  },
];

describe("renameFields", () => {
  it("renomear string para name", () => {
    expect(renameFieldToName("name", entity)).toBe("nome");
    expect(renameFieldToName("id", entity)).toBe("agenda_telefone_id");
    expect(() => renameFieldToName("names", entity)).toThrow(
      "names não é um nome válido: id,name,department,email"
    );
  });

  it("renomear string para field", () => {
    expect(renameNameToField("nome", entity)).toBe("name");
    expect(renameNameToField("agenda_telefone_id", entity)).toBe("id");
    expect(() => renameNameToField("nomes", entity)).toThrow(
      "nomes não é um nome válido: agenda_telefone_id,nome,setor,email"
    );
  });

  it("renomear where para field", () => {
    expect(renameNameToField([["nome", "=", "fulano"]], entity)).toEqual([
      ["name", "=", "fulano"],
    ]);

    expect(() => renameNameToField([["nomes", "=", "fulano"]], entity)).toThrow(
      "nomes não é um nome válido: agenda_telefone_id,nome,setor,email"
    );
  });

  it("renomear where complexo para field", () => {
    expect(
      renameNameToField(
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
      renameNameToField(
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
    expect(renameNameToField([["nome", "desc"]], entity)).toEqual([
      ["name", "desc"],
    ]);
    expect(() => renameNameToField([["nomes", "desc"]], entity)).toThrow(
      "nomes não é um nome válido: agenda_telefone_id,nome,setor,email"
    );
  });

  it("deve renomear order complexo para field", () => {
    expect(
      renameNameToField(
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
      renameNameToField(
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
    expect(renameNameToField(["nome", "setor"], entity)).toEqual([
      "name",
      "department",
    ]);
    expect(() => renameNameToField(["nomes", "setor"], entity)).toThrow(
      "nomes não é um nome válido: agenda_telefone_id,nome,setor,email"
    );
  });

  it("deve renomear object para field", () => {
    expect(renameNameToField({ nome: "fulano", setor: 23 }, entity)).toEqual({
      name: "fulano",
      department: 23,
    });

    expect(() =>
      renameNameToField({ nomes: "fulano", setor: 23 }, entity)
    ).toThrow(
      "nomes:fulano não é um nome válido: agenda_telefone_id,nome,setor,email"
    );
  });

  it("deve renomear object alias para field", () => {
    expect(renameNameToField({ fulano: "nome", ttl: "setor" }, entity)).toEqual(
      {
        fulano: "name",
        ttl: "department",
      }
    );

    expect(() =>
      renameNameToField({ nomes: "fulano", setor: 23 }, entity)
    ).toThrow(
      "nomes:fulano não é um nome válido: agenda_telefone_id,nome,setor,email"
    );
  });

  it("deve renomear array de object para field", () => {
    expect(renameNameToField([{ nome: "fulano", setor: 23 }], entity)).toEqual([
      { name: "fulano", department: 23 },
    ]);

    expect(() =>
      renameNameToField([{ nomes: "fulano", setor: 23 }], entity)
    ).toThrow(
      "nomes não é um nome válido: agenda_telefone_id,nome,setor,email"
    );
  });
});
