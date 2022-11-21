import { describe, expect, it } from "vitest";
import { validate } from "../../utils/validate/ajv";

describe("validator", () => {
  it("deve dar erros traduzidos", () => {
    const schema = { description: "idade", type: "number", multipleOf: 3 };
    expect(validate(schema, 4)).toEqual("data deve ser múltiplo de 3");
    expect(validate(schema, "4")).toEqual("data deve ser um número");
  });
});
