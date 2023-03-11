import { beforeEach, describe, expect, it } from "vitest";
import { fetchMockRpc } from "../../../mocks/fetch-mock-rpc";
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
    const rsp = await crud.query.schema();
    expect(fetchMockRpc.history(0)).toEqual({
      url: 'http://localhost:3333/api/rpc?rpc={"jsonrpc":"2.0","id":1,"method":"crudSchema","params":{"table":"cliente"}}',
      options: {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authentication: "",
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
    const rsp = await crud.query.clear();
    expect(fetchMockRpc.history(0)).toEqual({
      url: `http://localhost:3333/api/rpc?rpc={"jsonrpc":"2.0","id":2,"method":"crudClear","params":{"table":"cliente"}}`,
      options: {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authentication: "",
        },
      },
    });
    expect(rsp).toEqual([{}]);
  });
});
