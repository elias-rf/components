import { expect, it } from "vitest";
import { isNumber } from "./isNumber";
const msg = "Valor deve ser númerico";
it("true", () => {
  const req = isNumber();

  expect(req(1)).toBe(null);
  expect(req(-1)).toBe(null);
  expect(req(1.2)).toBe(null);
  expect(req(-1.2)).toBe(null);
});

it("false", () => {
  const req = isNumber();

  expect(req(null)).toBe(msg);
  expect(req(undefined)).toBe(msg);
  expect(req("")).toBe(msg);
  expect(req("1")).toBe(msg);
});

it("custom message", () => {
  const req = isNumber("numero");

  expect(req(null)).toBe("numero");
});
