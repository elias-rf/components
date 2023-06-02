import { describe, expect, it } from "vitest";
import { assertAggregate } from "./assert-aggregate";
import { entity } from "./aux";

describe("assertAggregate", () => {
  it("deve invalidar aggregate mal formatados", () => {
    // @ts-expect-error: Unreachable code error
    expect(() => assertAggregate([], entity)).toThrow(
      "aggregate deve ser {id:string, label:string}"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => assertAggregate("field", entity)).toThrow(
      "aggregate deve ser {id:string, label:string}"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => assertAggregate({ field: 1 }, entity)).toThrow(
      "aggregate deve ser {id:string, label:string}"
    );
    expect(() => assertAggregate({ agenda_telefone: "ttl" }, entity)).toThrow(
      "agenda_telefone não é id válido use: fld_1,fld_2,fld_3,fld_4"
    );
  });

  it("deve validar aggregate", () => {
    expect(assertAggregate({ fld_1: "FLD" }, entity)).toEqual(undefined);
  });
});
