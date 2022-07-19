import { expect, test } from "vitest";
import { isMDY } from "./isMDY";
const msg = "Valor deve ser ano-mes-dia";
test("true", () => {
  const req = isMDY();
  expect(req("2021-02-01")).toBe(null);
});

test("false", () => {
  const req = isMDY();
  expect(req(null)).toBe(msg);
  expect(req(undefined)).toBe(msg);
  expect(req("")).toBe(msg);
  expect(req("1")).toBe(msg);
  expect(req(1)).toBe(msg);
  expect(req(new Date())).toBe(msg);
  expect(req("20-02-01")).toBe(msg);
});

test("custom message", () => {
  const req = isMDY("data");
  expect(req(null)).toBe("data");
});
