import { describe, expect, it } from "vitest";
import { assertIds } from "./assert-ids";
import { entity } from "./aux";

describe("assertIds", () => {
  it("deve invalidar ids mal formatados", () => {
    // @ts-expect-error: Unreachable code error
    expect(() => assertIds({}, entity)).toThrow(
      "id deve ser [{id:string, value:any}]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => assertIds("field", entity)).toThrow(
      "id deve ser [{id:string, value:any}]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => assertIds({ field: 1 }, entity)).toThrow(
      "id deve ser [{id:string, value:any}]"
    );
    expect(assertIds([], entity)).toEqual(undefined);
  });

  it("deve validar ids", () => {
    expect(assertIds([{ id: "fld_1", value: 1 }], entity)).toEqual(undefined);
  });
});
