import cnpjDv from "./calcDvCnpj";
import { test, it, describe, expect } from "vitest";
describe("calcDvCnpj", () => {
  let atual;
  it("deve funcionar com formatação", () => {
    atual = cnpjDv("18.781.203/0001-28");
    expect(atual).toEqual("28");
  });

  it("deve funcionar sem formatação", () => {
    atual = cnpjDv("18781203000128");
    expect(atual).toEqual("28");
  });

  it("deve funcionar sem formatação e dv", () => {
    atual = cnpjDv("270569100001");
    expect(atual).toEqual("42");
  });
});
