import { describe, expect, it } from "vitest";
import { rpcServer } from "./rpc-server";

describe("rpc-server", () => {
  const rpc = rpcServer();
  rpc.addMethod("query", "sum", ({ a, b }: { a: number; b: number }) => a + b);
  rpc.addMethod("query", "subtract1", ([a, b]: number[]) => a - b);
  rpc.addMethod(
    "query",
    "subtract2",
    ({ subtrahend, minuend }: { subtrahend: number; minuend: number }) =>
      minuend - subtrahend
  );

  rpc.addMethod(
    "query",
    "multiply",
    ({ a, b }: { a: number; b: number }) => a * b
  );

  rpc.addMethod("query", "error", ({ a, b }: { a: number; b: number }) => {
    console.log(a, b);
    throw new Error("erro definido");
  });

  it("deve receber chamado sum", async () => {
    expect(
      await rpc.runQuery({
        jsonrpc: "2.0",
        id: 1,
        method: "sum",
        params: { a: 2, b: 3 },
      })
    ).toEqual({ jsonrpc: "2.0", id: 1, result: 5 });
  });

  it("deve receber chamado multiply", async () => {
    expect(
      await rpc.runQuery({
        jsonrpc: "2.0",
        id: 1,
        method: "multiply",
        params: { a: 2, b: 3 },
      })
    ).toEqual({ jsonrpc: "2.0", id: 1, result: 6 });
  });

  it("deve receber chamado unknow", async () => {
    expect(
      await rpc.runQuery({
        jsonrpc: "2.0",
        id: 1,
        method: "unknow",
        params: { a: 2, b: 3 },
      })
    ).toEqual({
      jsonrpc: "2.0",
      id: 1,
      error: {
        code: -32601,
        message: "Method not found: unknow",
      },
    });
  });

  it("deve receber chamado com erro", async () => {
    expect(
      await rpc.runQuery({
        jsonrpc: "2.0",
        id: 2,
        method: "error",
        params: { a: 2, b: 3 },
      })
    ).toEqual({
      jsonrpc: "2.0",
      id: 2,
      error: {
        code: "Error",
        message: "erro definido",
      },
    });
  });

  it("rpc call with positional parameters", async () => {
    expect(
      await rpc.runQuery({
        jsonrpc: "2.0",
        method: "subtract1",
        params: [42, 23],
        id: 1,
      })
    ).toEqual({ jsonrpc: "2.0", result: 19, id: 1 });

    expect(
      await rpc.runQuery({
        jsonrpc: "2.0",
        method: "subtract1",
        params: [23, 42],
        id: 1,
      })
    ).toEqual({ jsonrpc: "2.0", result: -19, id: 1 });
  });

  it("rpc call with named parameters", async () => {
    expect(
      await rpc.runQuery({
        jsonrpc: "2.0",
        method: "subtract2",
        params: { subtrahend: 23, minuend: 42 },
        id: 3,
      })
    ).toEqual({ jsonrpc: "2.0", result: 19, id: 3 });

    expect(
      await rpc.runQuery({
        jsonrpc: "2.0",
        method: "subtract2",
        params: { minuend: 42, subtrahend: 23 },
        id: 4,
      })
    ).toEqual({ jsonrpc: "2.0", result: 19, id: 4 });
  });

  it("a Notification", async () => {
    expect(
      await rpc.runQuery({
        jsonrpc: "2.0",
        method: "update",
        params: [1, 2, 3, 4, 5],
      })
    ).toEqual(undefined);

    expect(await rpc.runQuery({ jsonrpc: "2.0", method: "foobar" })).toEqual(
      undefined
    );
  });

  it("rpc call of non-existent method", async () => {
    expect(
      await rpc.runQuery({ jsonrpc: "2.0", method: "foobar", id: "1" })
    ).toEqual({
      jsonrpc: "2.0",
      error: { code: -32601, message: "Method not found: foobar" },
      id: "1",
    });
  });

  it("rpc call of non-existent method", async () => {
    expect(
      await rpc.runQuery({ jsonrpc: "2.0", method: "foobar", id: "1" })
    ).toEqual({
      jsonrpc: "2.0",
      error: { code: -32601, message: "Method not found: foobar" },
      id: "1",
    });
  });
});
