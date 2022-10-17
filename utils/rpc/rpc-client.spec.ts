import { describe, expect, it } from "vitest";
import { rpcClient } from "./rpc-client";

describe("rpc-client", () => {
  const rpc = rpcClient();

  it("deve criar request simples", () => {
    expect(rpc.request("method", 5)).toEqual({
      jsonrpc: "2.0",
      id: 1,
      method: "method",
      params: 5,
    });
  });

  it("deve receber resposta simples", () => {
    expect(rpc.response({ jsonrpc: "2.0", id: 1, result: 5 })).toEqual(5);
  });

  it("deve receber resposta objeto", () => {
    expect(rpc.response({ jsonrpc: "2.0", id: 1, result: { ob: 6 } })).toEqual({
      ob: 6,
    });
  });

  it("deve receber resposta de erro padrão", () => {
    expect(() =>
      rpc.response({
        jsonrpc: "2.0",
        id: 1,
        error: {
          code: -32601,
          message: "method unknow not found",
        },
      })
    ).toThrow("method unknow not found");
  });

  it("deve receber resposta com erro não padrão", () => {
    expect(() =>
      rpc.response({
        jsonrpc: "2.0",
        id: 1,
        error: {
          code: "merda",
          message: "erro definido",
        },
      })
    ).toThrow("erro definido");
  });
});
