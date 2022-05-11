import isDate from "./isMDY";
import { test, it, describe, expect } from "vitest";
const msg = "Valor deve ser ano-mes-dia";
test("true", () => {
  const req = isDate();
  expect(req("2021-02-01")).toBe(null);
});

test("false", () => {
  const req = isDate();
  expect(req(null)).toBe(msg);
  expect(req(undefined)).toBe(msg);
  expect(req("")).toBe(msg);
  expect(req("1")).toBe(msg);
  expect(req(1)).toBe(msg);
  expect(req(new Date())).toBe(msg);
  expect(req("20-02-01")).toBe(msg);
});

test("custom message", () => {
  const req = isDate("data");
  expect(req(null)).toBe("data");
});
