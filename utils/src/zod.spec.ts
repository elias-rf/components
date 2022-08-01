import { describe, expect, it } from "vitest";
import { z } from "./zod";

describe("zod em portugues", () => {
  it("requerido não recebido", () => {
    const rsp: any = z.string().safeParse(undefined);
    expect(rsp.error.issues).toEqual([
      {
        code: "invalid_type",
        expected: "string",
        received: "undefined",
        path: [],
        message: "Requerido",
      },
    ]);
  });
  it("tipo errado", () => {
    const rsp: any = z.string().safeParse(1);
    expect(rsp.error.issues).toEqual([
      {
        code: "invalid_type",
        expected: "string",
        received: "number",
        path: [],
        message: "Esperado string, recebido number",
      },
    ]);
  });
  it("literal errado", () => {
    const rsp: any = z.literal("A").safeParse("b");
    expect(rsp.error.issues).toEqual([
      {
        code: "invalid_literal",
        expected: "A",
        path: [],
        message: 'Valor literal inválido, esperado "A"',
      },
    ]);
  });

  it("objecto chaves", () => {
    const rsp: any = z
      .object({ a: z.number(), b: z.number() })
      .strict()
      .safeParse({ a: 1, b: 2, c: 3, d: 4 });
    expect(rsp.error.issues).toEqual([
      {
        code: "unrecognized_keys",
        keys: ["c", "d"],
        path: [],
        message: "Chave(s) não conhecida(s) no objeto: 'c', 'd'",
      },
    ]);
  });
});
