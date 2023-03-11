import { describe, expect, it } from "vitest";
import { usuarioServiceFactory } from "../../model/usuario/usuario.service";

const usuarioService = usuarioServiceFactory();

describe("usuarioService", () => {
  it("usuarioSchema", async () => {
    const rsp = await usuarioService.query.schema();
    expect(rsp.length).toEqual(10);
  });

  it("usuarioClear", async () => {
    const rsp = await usuarioService.query.clear();
    expect(rsp).toEqual({
      usuario_id: 0,
      nome_login: "",
      email: null,
      empregado_id: null,
      is_ativo: "1",
      hash: null,
      nome: null,
      setor: null,
      nivel: null,
      group_id: null,
    });
  });

  it("usuarioList", async () => {
    const rsp = await usuarioService.query.list({
      where: [["nome_login", "=", "user"]],
      select: ["usuario_id", "nome"],
    });
    expect(rsp).toEqual([{ usuario_id: 2, nome: "User" }]);
  });

  it("usuarioRead", async () => {
    const rsp = await usuarioService.query.read({
      id: { usuario_id: 2 },
      select: ["usuario_id", "nome"],
    });
    expect(rsp).toEqual({ usuario_id: 2, nome: "User" });
  });

  it("me", async () => {
    const rsp = await usuarioService.query.me();
    expect(rsp).toEqual({});
  });

  it("login", async () => {
    const rsp = await usuarioService.mutation.login({
      user: "user",
      password: "123",
    });

    expect(rsp).toEqual({
      usuario_id: 2,
      nome_login: "user",
      nome: "User",
      group_id: "dev",
      token: expect.any(String),
    });
  });

  it("logout", async () => {
    const rsp = await usuarioService.mutation.logout();

    expect(rsp).toEqual(true);
  });
});
