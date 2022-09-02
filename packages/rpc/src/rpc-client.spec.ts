import { describe, expect, it } from "vitest";
import { rpcClient } from "./rpc-client";

describe("rpcServer", () => {
  it("deve criar requisição", () => {
    const req = rpcClient({ method: "echo", params: [1] });
    expect(req).toEqual({ jsonrpc: "2.0", id: 1, method: "echo", params: [1] });
  });
  it("deve criar requisição com id", () => {
    const req = rpcClient({ method: "echo", params: [1], id: "40" });
    expect(req).toEqual({
      jsonrpc: "2.0",
      id: "40",
      method: "echo",
      params: [1],
    });
  });

  it("deve criar requisição sem parametros", () => {
    const req = rpcClient({ method: "echo" });
    expect(req).toEqual({ jsonrpc: "2.0", id: 2, method: "echo" });
  });
  it("deve criar requisição em batch", () => {
    const req = rpcClient([{ method: "echo1" }, { method: "echo2" }]);
    expect(req).toEqual([
      { jsonrpc: "2.0", id: 3, method: "echo1" },
      { jsonrpc: "2.0", id: 4, method: "echo2" },
    ]);
  });
});
