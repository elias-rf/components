import valid, { isRequired } from "./index";
import { it, test, describe, expect } from "vitest";

describe("Validação", () => {
  it("isRequired", () => {
    expect(valid("teste", isRequired("requirido"))).toBe(null);
    expect(valid(null, isRequired("requirido"))).toBe("requirido");
    expect(valid("", isRequired())).toBe("Valor deve ser informado");
  });
});
