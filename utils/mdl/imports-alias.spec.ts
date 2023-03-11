import { parseAlias, stringifyAlias } from "./imports-alias";

describe("import alias", () => {
  it("sem alias", () => {
    expect(parseAlias(" name ")).toEqual("name");
    expect(stringifyAlias(parseAlias(" name "))).toEqual("name");
  });

  it("com alias", () => {
    expect(parseAlias(" name as teste")).toEqual({ name: "teste" });
    expect(stringifyAlias(parseAlias(" name as teste"))).toEqual(
      "name as teste"
    );
  });
});
