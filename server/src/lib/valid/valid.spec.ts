import valid, { isRequired } from "./index";
import { test, it, describe, expect } from "vitest";
it("isRequired", () => {
  expect(valid("teste", isRequired("requirido"))).toBe(null);
  expect(valid(null, isRequired("requirido"))).toBe("requirido");
  expect(valid("", isRequired())).toBe("Valor deve ser informado");
});
