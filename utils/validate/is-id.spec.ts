import { describe, expect, it } from "vitest";
import { entity } from "./aux";
import { isId } from "./is-id";

describe("isId", () => {
  it("deve invalidar Id vazio", () => {
    expect(isId(undefined, entity)).toBe("Id deve ser informado");
    expect(isId(null, entity)).toBe("Id deve ser informado");
    expect(isId({}, entity)).toBe("Id deve ser informado");
    expect(isId([], entity)).toBe("Id deve ser informado");
  });
  it("deve validar Id correto", () => {
    expect(isId({ fld_1: 1, fld_2: "fulano" }, entity)).toEqual(null);
  });
  it("deve invalidar Id incompleto", () => {
    expect(isId({ fld_1: 1 }, entity)).toEqual(
      "fld_2 não foi informado para id."
    );
  });
  it("deve invalidar Id incorreto", () => {
    expect(isId({ fld_1: 1, fld_3: 0 }, entity)).toEqual(
      "fld_3 não é um id válido, use: fld_2"
    );
  });
});
