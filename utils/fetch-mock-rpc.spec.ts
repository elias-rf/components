import { beforeEach, describe, expect, it } from "vitest";
import { fetchMockRpc } from "./fetch-mock-rpc";

global.fetch = fetchMockRpc.fetch;

describe("fetchMockRpc", () => {
  beforeEach(() => {
    fetchMockRpc.reset();
  });

  it("get retorna 200", async () => {
    fetchMockRpc.mock("read", { status: 200, body: { result: { CAD: 1.42 } } });
    fetchMockRpc.mock("list", {
      body: { result: [{ CAD: 2.42 }] },
    });
    const responseRead = await fetch("/api/rpc", {
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "read",
        params: { foo: "foo" },
      }),
    });
    expect(responseRead.status).toEqual(200);
    const rspRead = await responseRead.json();
    expect(rspRead).toEqual({
      jsonrpc: "2.0",
      id: 1,
      method: "read",
      result: { CAD: 1.42 },
    });
    expect(fetchMockRpc.history()).toEqual([
      {
        url: "/api/rpc",
        options: {
          body: '{"jsonrpc":"2.0","id":1,"method":"read","params":{"foo":"foo"}}',
        },
      },
    ]);
  });
});
