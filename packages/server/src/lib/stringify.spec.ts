import { stringify } from "./stringify";
import { test, it, describe, expect } from "vitest";
test("deve aceitar {}", () => {
  expect(stringify({})).toEqual("{\n}");
});
test("deve aceitar []", () => {
  expect(stringify([])).toEqual("[\n]");
});
test("deve aceitar ['teste']", () => {
  expect(stringify(["teste"], { spacing: "" })).toEqual('[\n"teste"\n]');
});
