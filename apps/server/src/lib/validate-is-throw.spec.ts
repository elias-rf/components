import { isString } from "@er/utils/src/is-string";
import { expect, it } from "vitest";
import { validateIsThrow } from "./validate-is-throw";

it("validate-throw", () => {
  expect(() => validateIsThrow(isString(1), "Erro")).toThrow();
});
