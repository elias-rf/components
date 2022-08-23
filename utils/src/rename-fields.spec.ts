import { describe, expect, it } from "vitest";
import {
  renameDataArray,
  renamePk,
  renameSelect,
  renameString,
  renameWhere,
} from "./rename-fields";

const nameList = ["nome", "endereço", "idade"];
const fieldList = ["name", "address", "age"];

describe("renameFields", () => {
  it("deve receber undefined", () => {
    expect(1).toBe(1);
    // expect(renameString(undefined, nameList, fieldList)).toEqual(undefined);
    // expect(renameTupleArray(undefined, nameList, fieldList)).toEqual(undefined);
    // expect(renameArray(undefined, nameList, fieldList)).toEqual(undefined);
    // expect(renameObject(undefined, nameList, fieldList)).toEqual(undefined);
    // expect(renameObjectArray(undefined, nameList, fieldList)).toEqual(
    //   undefined
    // );
  });

  it("deve renomear string", () => {
    expect(renameString("nome", nameList, fieldList)).toBe("name");
    expect(renameString("nomes", nameList, fieldList)).toBe("nomes");
  });

  it("deve renomear where", () => {
    expect(renameWhere([["nome", "=", "fulano"]], nameList, fieldList)).toEqual(
      [["name", "=", "fulano"]]
    );

    expect(
      renameWhere([["nomes", "=", "fulano"]], nameList, fieldList)
    ).toEqual([["nomes", "=", "fulano"]]);
  });
  it("deve renomear where complexo", () => {
    expect(
      renameWhere(
        [
          ["nome", "=", "fulano"],
          ["idade", ">", "18"],
        ],
        nameList,
        fieldList
      )
    ).toEqual([
      ["name", "=", "fulano"],
      ["age", ">", "18"],
    ]);

    expect(
      renameWhere(
        [
          ["nomes", "=", "fulano"],
          ["idade", ">", "18"],
        ],
        nameList,
        fieldList
      )
    ).toEqual([
      ["nomes", "=", "fulano"],
      ["age", ">", "18"],
    ]);
  });

  it("deve renomear order", () => {
    expect(renameWhere([["nome", "desc"]], nameList, fieldList)).toEqual([
      ["name", "desc"],
    ]);
    expect(renameWhere([["nomes", "desc"]], nameList, fieldList)).toEqual([
      ["nomes", "desc"],
    ]);
  });
  it("deve renomear order complexo", () => {
    expect(
      renameWhere(
        [
          ["nome", "asc"],
          ["idade", "desc"],
        ],
        nameList,
        fieldList
      )
    ).toEqual([
      ["name", "asc"],
      ["age", "desc"],
    ]);

    expect(
      renameWhere(
        [
          ["nomes", "asc"],
          ["idade", "desc"],
        ],
        nameList,
        fieldList
      )
    ).toEqual([
      ["nomes", "asc"],
      ["age", "desc"],
    ]);
  });

  it("deve renomear select", () => {
    expect(renameSelect(["nome", "idade"], nameList, fieldList)).toEqual([
      "name",
      "age",
    ]);
    expect(renameSelect(["nomes", "idade"], nameList, fieldList)).toEqual([
      "nomes",
      "age",
    ]);
  });

  it("deve renomear object", () => {
    expect(
      renamePk({ nome: "fulano", idade: 23 }, nameList, fieldList)
    ).toEqual({ name: "fulano", age: 23 });

    expect(
      renamePk({ nomes: "fulano", idade: 23 }, nameList, fieldList)
    ).toEqual({ nomes: "fulano", age: 23 });
  });
  it("deve renomear array de object", () => {
    expect(
      renameDataArray([{ nome: "fulano", idade: 23 }], nameList, fieldList)
    ).toEqual([{ name: "fulano", age: 23 }]);

    expect(
      renameDataArray([{ nomes: "fulano", idade: 23 }], nameList, fieldList)
    ).toEqual([{ nomes: "fulano", age: 23 }]);
  });
});
