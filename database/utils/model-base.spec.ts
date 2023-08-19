import { ModelBase } from "./model-base";
import { expect, it, describe } from "vitest";

class Teste extends ModelBase {
  static tableName = "phonebook";
  static idColumn = "id";

  id!: number;
  name!: string;
  department!: string;
  email!: string;

  static getFields() {
    return ["id", "name", "department", "email"];
  }
}

class Teste2 extends ModelBase {
  static tableName = "phonebook";
  static idColumn = ["id", "name"];

  id!: number;
  name!: string;
  department!: string;
  email!: string;

  static getFields() {
    return ["id", "name", "department", "email"];
  }
}

describe("ModelBase", () => {
  it("deve listar os campos", () => {
    expect(Teste.getFields()).toEqual(["id", "name", "department", "email"]);
  });

  it("deve retornar id", () => {
    expect(Teste.getIdArray({ id: 1 })).toEqual([1]);
    expect(Teste2.getIdArray({ id: 1, name: "a" })).toEqual([1, "a"]);
  });

  it("deve validar select", () => {
    expect(Teste.assertSelect()).toEqual(undefined);
    expect(Teste.assertSelect(["name"])).toEqual(undefined);
  });

  it("deve invalidar select", () => {
    expect(() => Teste.assertSelect(["names"])).toThrow(
      "não é um campo válido em phonebook use: department,email,id,name"
    );
  });

  it("deve validar sort", () => {
    expect(Teste.assertSort({ name: "asc" })).toEqual(undefined);
  });

  it("deve invalidar sort", () => {
    expect(() => Teste.assertSort({ names: "asc" })).toThrow(
      "[names] não é válido para order em phonebook use: department,email,id,name"
    );
  });

  it("deve validar idColumn", () => {
    expect(Teste.assertId({ id: 1 })).toEqual(undefined);
  });
  it("deve invalidar idColumn", () => {
    expect(() => Teste.assertId({ name: 1 })).toThrow(
      "[name] não é id válido em phonebook use: id"
    );
  });
  it("deve invalidar idColumn", () => {
    expect(() => Teste.assertId({ id: 1, name: 1 })).toThrow(
      "[name] não é id válido"
    );
  });

  it("deve validar filter", () => {
    expect(Teste.assertFilter({ name: 1 })).toEqual(undefined);
  });

  it("deve invalidar select", () => {
    expect(() => Teste.assertFilter({ names: 1 })).toThrow(
      "[names] não é um campo válido para where em phonebook use: department,email,id,name"
    );
  });

  it("deve validar data", () => {
    expect(Teste.assertData({ name: 1 })).toEqual(undefined);
  });

  it("deve invalidar data", () => {
    expect(() => Teste.assertData({ names: 1 })).toThrow(
      "[names] não é um campo válido em phonebook use: id,name,department,email"
    );
  });
});
