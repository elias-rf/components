import { describe, expect, it } from "vitest";
import { isCnpj } from "./is-cnpj";

describe("isCNPJ", () => {
  let atual;
  it("recusa digitos iguais 0", () => {
    atual = isCnpj("00.000.000/0000-00");
    expect(atual).toEqual(false);
  });

  it("recusa digitos iguais 1", () => {
    atual = isCnpj("111.111.111-11");
    expect(atual).toEqual(false);
  });

  it("deve funcionar com formatacao", () => {
    atual = isCnpj("27.056.910/0001-42");
    expect(atual).toEqual(true);
  });

  it("deve funcionar sem formatacao", () => {
    atual = isCnpj("27056910000142");
    expect(atual).toEqual(true);
  });

  it("deve estar incorreto", () => {
    atual = isCnpj("27.056.910/0001-44");
    expect(atual).toEqual(false);
  });
});
