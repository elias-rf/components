import { beforeEach, describe, expect, it } from "vitest";
import { fetchMockRpc } from "../../../utils/fetch-mock-rpc";
import { crudFactory } from "./crud.factory";

globalThis.fetch = fetchMockRpc.fetch;

describe("crudFactory", () => {
  const crud = crudFactory("cliente");
  beforeEach(() => {
    fetchMockRpc.reset();
  });

  it("schema", async () => {
    fetchMockRpc.mock("crudSchema", {
      body: {
        result: [{}],
      },
    });
    const rsp = await crud.schema();
    expect(fetchMockRpc.history(0)).toEqual({
      url: "/api/rpc",
      options: {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: '{"jsonrpc":"2.0","id":1,"method":"crudSchema","params":{"table":"cliente"}}',
      },
    });
    expect(rsp).toEqual([{}]);
  });

  it("clear", async () => {
    fetchMockRpc.mock("crudClear", {
      body: {
        result: [{}],
      },
    });
    const rsp = await crud.clear();
    expect(fetchMockRpc.history(0)).toEqual({
      url: "/api/rpc",
      options: {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: '{"jsonrpc":"2.0","id":2,"method":"crudClear","params":{"table":"cliente"}}',
      },
    });
    expect(rsp).toEqual([{}]);
  });
});
