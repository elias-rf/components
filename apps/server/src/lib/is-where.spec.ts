// @ts-nocheck
import { expect, it } from "@jest/globals";
import { isWhere } from "./is-where";

it("deve validar where", () => {
  expect(isWhere(undefined, [])).toBe("Where deve ser informado");
  expect(isWhere(null, [])).toBe("Where deve ser informado");
  expect(isWhere({}, [])).toBe("Where deve ser um array");
  expect(isWhere("field", [])).toBe("Where deve ser um array");
  expect(isWhere({ field: 1 }, [])).toBe("Where deve ser um array");
  expect(isWhere([{ field: 1 }], [])).toBe("Where deve ser um array de tuplas");
  expect(isWhere([], [])).toBe(null);
  expect(isWhere([["field", "ascii"]], [])).toBe(
    "Where deve possuir tuplas com [field, asc|desc]"
  );
  expect(isWhere([["field"]], [])).toBe(
    "Where deve possuir tuplas com [field, asc|desc]"
  );
  expect(isWhere([["field", "=", "asc"]], ["field"])).toBe(null);
});
