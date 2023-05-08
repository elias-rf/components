import { zd } from "./zod";

describe("z traduzido", () => {
  it("invalid_type", () => {
    const schema = zd.string();
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

  it("invalid_literal", () => {
    const schema = zd.literal("a");
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
    const schema = zd.object({ a: zd.string() }).strict();
    expect(schema.safeParse({ a: "a", b: "b" }).error.format()).toEqual({
      _errors: ["Chave(s) não reconhecida(s) no objeto: 'b'"],
    });
  });

  it("invalid_union", () => {
    const schema = zd.union([zd.literal("a"), zd.literal("b")]);
    expect(schema.safeParse("c").error.format()).toEqual({
      _errors: [
        'Valor literal inválido, era esperado "a"',
        'Valor literal inválido, era esperado "b"',
      ],
    });
  });
});
