import { describe, expect, it } from "vitest";
import { idSchema, orderBySchema, validator, whereSchema } from "./validator";
import { z } from "./zod";

describe("validator", () => {
  it("deve validar id ok", async () => {
    expect(validator(["a", "b", "c"], "field", idSchema, true)).toEqual(null);
  });

  it("deve invalidar id numerico", async () => {
    expect(validator([1, "b", "c"], "field", idSchema, true)).toEqual(
      "field: Esperado string, recebido number"
    );
  });

  it("deve validar where ok", () => {
    expect(validator([["fld", "=", "a"]], "field", whereSchema)).toEqual(null);
  });

  it("deve invalidar where não array", () => {
    expect(validator(["fld", "=", "a"], "field", whereSchema, true)).toEqual(
      "field: Esperado array, recebido string"
    );
  });
  it("deve invalidar where não tuple", () => {
    expect(validator([["fld", "="]], "field", whereSchema, true)).toEqual(
      "field: Matriz deve conter no mínimo 3 elemento(s)"
    );
  });
  it("deve invalidar where objeto", () => {
    expect(validator({ fld: "a" }, "field", whereSchema, true)).toEqual(
      "field: Esperado array, recebido object"
    );
  });
  it("deve validar orderBy ok", () => {
    const rsp = validator([["fld", "asc"]], "field", orderBySchema, true);
    expect(rsp).toEqual(null);
  });

  it("deve invalidar orderBy não array", () => {
    expect(validator(["fld", "=", "a"], "field", orderBySchema, true)).toEqual(
      "field: Esperado array, recebido string"
    );
  });
  it("deve invalidar orderBy não tuple", async () => {
    expect(validator([["fld", "="]], "field", orderBySchema, true)).toEqual(
      "field: Valor enum inválido. Esperado 'asc' | 'desc', recebido '='"
    );
  });
  it("deve invalidar orderBy objeto", async () => {
    expect(validator({ fld: "a" }, "field", orderBySchema, true)).toEqual(
      "field: Esperado array, recebido object"
    );
  });
  it("deve invalidar string vazia", async () => {
    expect(validator("", "field", z.string().min(1), true)).toEqual(
      "field: Texto deve conter no mínimo 1 caractere(s)"
    );
  });
});
