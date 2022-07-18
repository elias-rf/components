import isRequired from "./isRequired";
import { test, it, describe, expect } from "vitest";
it("default", () => {
  const req = isRequired();
  expect(req(null)).toBe("Valor deve ser informado");
  expect(req(undefined)).toBe("Valor deve ser informado");
  expect(req("")).toBe("Valor deve ser informado");
});

it("custom message", () => {
  const req = isRequired("Requerido");
  expect(req(null)).toBe("Requerido");
  expect(req(undefined)).toBe("Requerido");
  expect(req("")).toBe("Requerido");
});
