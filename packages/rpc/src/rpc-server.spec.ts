import { describe, expect, it } from "vitest";
import { rpcServer } from "./rpc-server";

describe("rpcServer", () => {
  it("deve cadastrar uma procedure e executar com erro", async () => {
    const server = rpcServer({
      echo: () => {
        throw new Error("deu erro!");
      },
    });
    expect(
      await server({ jsonrpc: "2.0", id: 1, method: "echo", params: [1] })
    ).toEqual({
      jsonrpc: "2.0",
      id: 1,
      error: { code: -32603, message: "deu erro!" },
    });
  });
  it("deve cadastrar uma procedure e executar", async () => {
    const server = rpcServer({ echo: (params) => params });
    expect(
      await server({ jsonrpc: "2.0", id: 1, method: "echo", params: [1] })
    ).toEqual({ jsonrpc: "2.0", id: 1, result: [1] });
  });
  it("deve usar contexto", async () => {
    const ctx = () => 3;
    const server = rpcServer(
      { echo: (params, ctx) => (params && params[0]) + ctx },
      ctx
    );
    expect(
      await server({ jsonrpc: "2.0", id: 1, method: "echo", params: [1] })
    ).toEqual({ jsonrpc: "2.0", id: 1, result: 4 });
  });

  it("deve retornar metodo desconhecido", async () => {
    const ctx = () => 3;
    const server = rpcServer({ echo: (params, ctx) => params + ctx }, ctx);
    expect(
      await server({ jsonrpc: "2.0", id: 1, method: "echo2", params: [1] })
    ).toEqual({
      jsonrpc: "2.0",
      id: 1,
      error: { code: -32601, message: "Method not found" },
    });
  });

  it("deve cadastrar uma procedure e executar em batch", async () => {
    const server = rpcServer({ echo: (params) => params });
    expect(
      await server([
        { jsonrpc: "2.0", id: 1, method: "echo", params: [1] },
        { jsonrpc: "2.0", id: 2, method: "echo", params: [2] },
      ])
    ).toEqual([
      { jsonrpc: "2.0", id: 1, result: [1] },
      { jsonrpc: "2.0", id: 2, result: [2] },
    ]);
  });
});
