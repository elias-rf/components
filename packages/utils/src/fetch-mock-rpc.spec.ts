import { beforeEach, describe, expect, it } from "@jest/globals";
import { fetchMockRpc } from "./fetch-mock-rpc";

global.fetch = fetchMockRpc.fetch;

describe("fetch", () => {
  beforeEach(() => {
    fetchMockRpc.reset();
  });

  it("get retorna 200", async () => {
    fetchMockRpc.mock("read", {
      body: { result: { CAD: 1.42 } },
    });
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
    const rspRead = await responseRead.json();
    expect(responseRead.status).toEqual(200);
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
    const responseList = await fetch("/api/rpc", {
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "list",
        params: { foo: "foo" },
      }),
    });
    const rspList = await responseList.json();
    expect(responseList.status).toEqual(200);
    expect(rspList).toEqual({
      jsonrpc: "2.0",
      id: 1,
      method: "list",
      result: [{ CAD: 2.42 }],
    });
    expect(fetchMockRpc.history()).toEqual([
      {
        url: "/api/rpc",
        options: {
          body: '{"jsonrpc":"2.0","id":1,"method":"read","params":{"foo":"foo"}}',
        },
      },
      {
        url: "/api/rpc",
        options: {
          body: '{"jsonrpc":"2.0","id":1,"method":"list","params":{"foo":"foo"}}',
        },
      },
    ]);
  });
});
