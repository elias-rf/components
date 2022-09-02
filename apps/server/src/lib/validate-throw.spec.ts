import { expect, it } from "vitest";
import { isId } from "./is-id";
import { validateThrow } from "./validate-throw";

it("validate-throw", () => {
  expect(() => validateThrow(isId(1))).toThrow();
});
