import { expect, it } from "vitest";
import { isId } from "./is-id";

it("deve validar Id", () => {
  expect(isId(undefined, [])).toBe("Id deve ser informado");
  expect(isId(null, [])).toBe("Id deve ser informado");
  expect(isId({}, [])).toBe("Id deve ser informado");
  expect(isId([], [])).toBe("Id deve ser informado");
  expect(isId("field", [])).toBe("Id deve ser informado");
  expect(isId({ field: 1 }, ["field"])).toEqual(null);
  expect(isId({ field: 1 }, ["field1", "field2"])).toEqual(
    "[field] não é uma das chaves permitidas [field1,field2]"
  );
});
