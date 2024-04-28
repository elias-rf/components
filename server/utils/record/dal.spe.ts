import { expect, it, describe } from "vitest";
import dal from "./dal";

const data = [
  { id: 1, name: "fulano", age: 20, uf: "mg", email: "fulano@mail.com" },
  { id: 2, name: "beltrano", age: 30, uf: "mg", email: "beltrano@mail.com" },
  { id: 3, name: "ciclano", age: 20, uf: "sp", email: "ciclano@mail.com" },
];

describe("record/dao", () => {
  it("usar where", () => {
    expect(dal(data).where().get()).toEqual(data);
    expect(dal(data).where({ id: 1 }).get()).toEqual([
      { id: 1, name: "fulano", age: 20, uf: "mg", email: "fulano@mail.com" },
    ]);
    expect(dal(data).where({ age: 20 }).get()).toEqual([
      { id: 1, name: "fulano", age: 20, uf: "mg", email: "fulano@mail.com" },
      { id: 3, name: "ciclano", age: 20, uf: "sp", email: "ciclano@mail.com" },
    ]);
    expect(dal(data).where({ age: 20 }).where({ uf: "mg" }).get()).toEqual([
      { id: 1, name: "fulano", age: 20, uf: "mg", email: "fulano@mail.com" },
    ]);
  });
  it("usar order", () => {
    expect(dal(data).order().get()).toEqual(data);
    expect(dal(data).order({ name: "asc" }).get()).toEqual([
      {
        id: 2,
        name: "beltrano",
        age: 30,
        uf: "mg",
        email: "beltrano@mail.com",
      },
      { id: 3, name: "ciclano", age: 20, uf: "sp", email: "ciclano@mail.com" },
      { id: 1, name: "fulano", age: 20, uf: "mg", email: "fulano@mail.com" },
    ]);
  });
});
