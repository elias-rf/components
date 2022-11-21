import { describe, expect, it } from "vitest";
import { isSelected } from "./is-selected";

describe("isSelected", () => {
  const record = {
    nome: "Fulano",
    idade: 20,
    sobrenome: "Silva",
    cidade: "BH",
  };

  it("dever retornar true quando correto", () => {
    expect(isSelected({ nome: "Fulano" }, record)).toBe(true);
    expect(isSelected({ nome: "Fulano", idade: 20 }, record)).toBeTruthy();
  });
  it("dever retornar false quando errado", () => {
    expect(isSelected({ nome: "fulano" }, record)).toBeFalsy();
    expect(isSelected({ nome: "Fulano", idade: 21 }, record)).toBeFalsy();
  });
});
