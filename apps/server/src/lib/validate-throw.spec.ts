import { expect, it } from "@jest/globals";
import { isId } from "./is-id";
import { validateThrow } from "./validate-throw";

it("validate-throw", () => {
  expect(() => validateThrow(isId({ fldx: 1 }, ["fld_id"]))).toThrow();
});
