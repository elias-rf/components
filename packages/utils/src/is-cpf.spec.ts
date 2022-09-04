import { describe, expect, it } from "@jest/globals";
import { isCpf } from "./is-cpf";

describe("isCPF", () => {
  let atual;
  it("recusa digitos iguais 0", () => {
    atual = isCpf("000.000.000-00");
    expect(atual).toEqual(false);
  });

  it("recusa digitos iguais 1", () => {
    atual = isCpf("111.111.111-11");
    expect(atual).toEqual(false);
  });

  it("deve funcionar com formatação", () => {
    atual = isCpf("003.709.877-21");
    expect(atual).toEqual(true);
  });

  it("deve funcionar sem formatação", () => {
    atual = isCpf("00370987721");
    expect(atual).toEqual(true);
  });

  it("deve estar incorreto", () => {
    atual = isCpf("003.709.877-22");
    expect(atual).toEqual(false);
  });
});
