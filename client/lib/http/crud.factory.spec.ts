import { beforeEach, describe, expect, it } from "vitest";
import { fetchMockRpc } from "../../../utils/api/fetch-mock-rpc";
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
      url: '/api/rpc?rpc={"jsonrpc":"2.0","id":1,"method":"crudSchema","params":{"table":"cliente"}}',
      options: {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
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
      url: `/api/rpc?rpc={"jsonrpc":"2.0","id":2,"method":"crudClear","params":{"table":"cliente"}}`,
      options: {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      },
    });
    expect(rsp).toEqual([{}]);
  });
});
