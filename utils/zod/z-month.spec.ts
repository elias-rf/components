import { zMonth } from "./z-month";

describe("valida Data", () => {
  it("deve aceitar data ISO", () => {
    expect(zMonth("2020-01")).toBe(undefined);
  });

  it("deve recusar data incorreta", () => {
    expect(() => zMonth("2020-13")).toThrow("2020-13 não é um mês válido");
  });

  it("deve recusar data mal formatada", () => {
    expect(() => zMonth("20-01")).toThrow("20-01 não é um mês válido");
  });

  it("deve recusar textos", () => {
    expect(() => zMonth("teste")).toThrow("teste não é um mês válido");
  });
});
