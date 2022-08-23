import { describe, expect, it } from "vitest";
import { validateOrder, validatePk, validateWhere } from "./validate";

describe("validate", () => {
  it("deve validar pk", () => {
    expect(validatePk(undefined)).toBe("Pk deve ser informado");
    expect(validatePk(null)).toBe("Pk deve ser informado");
    expect(validatePk({})).toBe("Pk não informado");
    expect(validatePk([])).toBe("Pk deve ser um objeto");
    expect(validatePk("field")).toBe("Pk deve ser um objeto");
    expect(validatePk({ field: 1 })).toEqual(null);
  });

  it("deve validar order", () => {
    expect(validateOrder(undefined)).toBe("Order deve ser informado");
    expect(validateOrder(null)).toBe("Order deve ser informado");
    expect(validateOrder({})).toBe("Order deve ser um array");
    expect(validateOrder("field")).toBe("Order deve ser um array");
    expect(validateOrder({ field: 1 })).toBe("Order deve ser um array");
    expect(validateOrder([{ field: 1 }])).toBe(
      "Order deve ser um array de tuplas"
    );
    expect(validateOrder([])).toBe(null);
    expect(validateOrder([["field", "ascii"]])).toBe(
      "Order dever ser asc ou desc"
    );
    expect(validateOrder([["field"]])).toBe(
      "Order deve possuir tuplas com [field, asc|desc]"
    );
    expect(validateOrder([["field", "asc"]])).toBe(null);
  });

  it("deve validar where", () => {
    expect(validateWhere(undefined)).toBe("Where deve ser informado");
    expect(validateWhere(null)).toBe("Where deve ser informado");
    expect(validateWhere({})).toBe("Where deve ser um array");
    expect(validateWhere("field")).toBe("Where deve ser um array");
    expect(validateWhere({ field: 1 })).toBe("Where deve ser um array");
    expect(validateWhere([{ field: 1 }])).toBe(
      "Where deve ser um array de tuplas"
    );
    expect(validateWhere([])).toBe(null);
    expect(validateWhere([["field", "ascii"]])).toBe(
      "Where deve possuir tuplas com [field, asc|desc]"
    );
    expect(validateWhere([["field"]])).toBe(
      "Where deve possuir tuplas com [field, asc|desc]"
    );
    expect(validateWhere([["field", "=", "asc"]])).toBe(null);
  });
});
