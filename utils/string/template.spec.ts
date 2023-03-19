import { template } from "./template";

describe("template", () => {
  it("deve executar sem substituir", () => {
    expect(template("teste", undefined)).toBe("teste");
  });
  it("deve substituir com object", () => {
    expect(template("João {maria} José", { maria: "Maria" })).toBe(
      "João Maria José"
    );
  });

  it("deve substituir vários com object", () => {
    expect(
      template("João {maria} José da {silva}", {
        maria: "Maria",
        silva: "Silva",
      })
    ).toBe("João Maria José da Silva");
  });

  it("deve substituir vários com array", () => {
    expect(template("João {0} José da {1}", ["Maria", "Silva"])).toBe(
      "João Maria José da Silva"
    );
  });

  it("deve substituir com array", () => {
    expect(template("João {0} José", ["Maria"])).toBe("João Maria José");
  });
});
