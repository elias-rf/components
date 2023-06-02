import { describe, expect, it } from "vitest";
import { assertId } from "./assert-id";
import { entity } from "./aux";

describe("assertIds", () => {
  it("deve invalidar ids mal formatados", () => {
    expect(() => assertId([], entity)).toThrow(
      "id deve ser {[field:string]:any}"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => assertId("field", entity)).toThrow(
      "id deve ser {[field:string]:any}"
    );
    expect(() => assertId({ field: 1 }, entity)).toThrow(
      "field não é id válido use: fld_1,fld_2,fld_3,fld_4"
    );
  });

  it("deve validar ids", () => {
    expect(assertId({ fld_1: 1 }, entity)).toEqual(undefined);
  });
});
