import { describe, expect, it } from "vitest";
import { usuarioService } from "../../client/service/usuario.service";

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
});
