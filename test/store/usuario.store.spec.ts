import { usuarioStore } from "../../model/usuario/usuario.store";

describe("usuarioStore", () => {
  it("login logout", async () => {
    // LOGIN
    expect(
      await usuarioStore.getState().setLogin({
        user: "user",
        password: "123",
      })
    ).toEqual({
      usuario_id: 2,
      group_id: "dev",
      nome: "User",
      nome_login: "user",
      token: expect.any(String),
    });
    // authenticated
    expect(await usuarioStore.getState().isAuthenticated).toEqual(true);
    // me
    let me = await usuarioStore.getState().getMe();
    expect(me).toEqual({
      group_id: "dev",
      nome: "User",
      nome_login: "user",
      usuario_id: 2,
      token: expect.any(String),
    });

    // LOGOUT
    await usuarioStore.getState().setLogout();
    // authenticated
    expect(await usuarioStore.getState().isAuthenticated).toEqual(false);
    me = await usuarioStore.getState().getMe();
    expect(me).toEqual({});
  });
});
