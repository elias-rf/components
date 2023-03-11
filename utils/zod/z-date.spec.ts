import { zDate } from "./z-date";

describe("valida Data", () => {
  it("deve aceitar data ISO", () => {
    expect(zDate("2020-01-01")).toBe(undefined);
  });

  it("deve recusar data incorreta", () => {
    expect(() => zDate("2020-02-30")).toThrow(
      "2020-02-30 não é uma data válida"
    );
  });

  it("deve recusar data mal formatada", () => {
    expect(() => zDate("20-01-01")).toThrow("20-01-01 não é uma data válida");
  });

  it("deve recusar textos", () => {
    expect(() => zDate("teste")).toThrow("teste não é uma data válida");
  });
});
