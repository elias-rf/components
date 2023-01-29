import { describe, expect, it } from "vitest";
import { authenticationService } from "../../client/service/authentication.service";

describe("authenticationService", () => {
  it("isAuthenticated", async () => {
    const rsp = await authenticationService.query.isAuthenticated();
    expect(rsp).toEqual(false);
  });

  it("me", async () => {
    const rsp = await authenticationService.query.me();
    expect(rsp).toEqual({});
  });

  it("login", async () => {
    const rsp = await authenticationService.mutation.login({
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
    const rsp = await authenticationService.mutation.logout();

    expect(rsp).toEqual(true);
  });
});
