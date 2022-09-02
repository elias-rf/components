import { expect, it } from "vitest";
import { isOrder } from "./is-order";

it("deve validar order", () => {
  expect(isOrder(undefined, [])).toBe("Order deve ser informado");
  expect(isOrder(null, [])).toBe("Order deve ser informado");
  expect(isOrder({}, [])).toBe("Order deve ser um array");
  expect(isOrder("field", [])).toBe("Order deve ser um array");
  expect(isOrder({ field: 1 }, [])).toBe("Order deve ser um array");
  expect(isOrder([{ field: 1 }], [])).toBe("Order deve ser um array de tuplas");
  expect(isOrder([], ["field"])).toBe(null);
  expect(isOrder([["field", "ascii"]], [])).toBe("Order dever ser asc ou desc");
  expect(isOrder([["field"]], [])).toBe(
    "Order deve possuir tuplas com [field, asc|desc]"
  );
  expect(isOrder([["field", "asc"]], ["field"])).toBe(null);
});
