import { z } from "./z";

describe("z traduzido", () => {
  it("invalid_type", () => {
    const schema = z.string();
    expect(schema.safeParse(12).error.issues).toEqual([
      {
        code: "invalid_type",
        message: "O dado deve ser do tipo string, porém foi enviado number",
        expected: "string",
        received: "number",
        path: [],
      },
    ]);
  });

  it("invalid_type_received_undefined", () => {
    const schema = z.string();
    expect(schema.safeParse().error.issues).toEqual([
      {
        code: "invalid_type",
        message: "Obrigatório",
        expected: "string",
        received: "undefined",
        path: [],
      },
    ]);
  });

  it("invalid_literal", () => {
    const schema = z.literal("a");
    expect(schema.safeParse("b").error.issues).toEqual([
      {
        code: "invalid_literal",
        message: 'Valor literal inválido, era esperado "a"',
        expected: "a",
        received: "b",
        path: [],
      },
    ]);
  });

  it("unrecognized_keys", () => {
    const schema = z.object({ a: z.string() }).strict();
    expect(schema.safeParse({ a: "a", b: "b" }).error.format()).toEqual({
      _errors: ["Chave(s) não reconhecida(s) no objeto: 'b'"],
    });
  });

  it("invalid_union", () => {
    const schema = z.union([z.literal("a"), z.literal("b")]);
    expect(schema.safeParse("c").error.format()).toEqual({
      _errors: [
        'Valor literal inválido, era esperado "a"',
        'Valor literal inválido, era esperado "b"',
      ],
    });
  });
});
