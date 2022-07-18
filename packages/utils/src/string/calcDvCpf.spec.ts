import { describe, expect, it } from "vitest";
import { calcDvCpf } from "./calcDvCpf";
describe("calcDvCpf", () => {
  let atual;
  it("deve funcionar com formatação", () => {
    atual = calcDvCpf("003.709.877-21");
    expect(atual).toEqual("21");
  });

  it("deve funcionar sem formatação", () => {
    atual = calcDvCpf("00370987721");
    expect(atual).toEqual("21");
  });

  it("deve funcionar sem formatação e sem dv", () => {
    atual = calcDvCpf("003709877");
    expect(atual).toEqual("21");
  });
});
