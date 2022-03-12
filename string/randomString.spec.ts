import randomString from "./randomString";
import { test, it, describe, expect } from "vitest";

test("deve gerar uma string", () => {
  expect(randomString().length).toBe(6);
  expect(randomString(50).length).toBe(50);
});
