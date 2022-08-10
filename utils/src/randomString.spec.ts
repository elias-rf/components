import { expect, test } from "vitest";
import { randomString } from "./randomString";

test("deve gerar uma string", () => {
  expect(randomString().length).toBe(6);
  expect(randomString(50).length).toBe(50);
});