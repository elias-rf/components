import { describe, expect, it } from "vitest";
import { isRequired, valid } from "./index";

describe("Validação", () => {
  it("isRequired", () => {
    expect(valid("teste", isRequired("requirido"))).toBe(null);
    expect(valid(null, isRequired("requirido"))).toBe("requirido");
    expect(valid("", isRequired())).toBe("Valor deve ser informado");
  });
});
