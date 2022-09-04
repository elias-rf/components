import { describe, expect, it } from "@jest/globals";
import { parseUrl } from "./parse-url";
describe("parseUrl", () => {
  it("deve ter defaults", () => {
    expect(parseUrl("sqlserver://localhost")).toEqual({
      client: "sqlserver",
      connection: {
        host: "localhost",
        port: 1433,
        database: "",
        password: "",
        user: "",
      },
    });
  });
  it("deve ter porta", () => {
    expect(parseUrl("sqlserver://localhost:1455")).toEqual({
      client: "sqlserver",
      connection: {
        host: "localhost",
        port: 1455,
        database: "",
        password: "",
        user: "",
      },
    });
  });
  it("deve ter url full", () => {
    expect(
      parseUrl(
        "sqlserver://user:password@localhost:1433?database=OftalmoXPProducao&user=sa;password=MyPass@word;trustServerCertificate=true"
      )
    ).toEqual({
      client: "sqlserver",
      connection: {
        host: "localhost",
        port: 1433,
        database: "",
        password: "password",
        user: "user",
      },
    });
  });
});
