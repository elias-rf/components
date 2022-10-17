import { expect, it } from "vitest";
import { isString } from "../../utils/is-string";
import { validateIsThrow } from "./validate-is-throw";

it("validate-throw", () => {
  expect(() => validateIsThrow(isString(1), "Erro")).toThrow();
});
