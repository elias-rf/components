import { beforeEach, describe, expect, it } from "vitest";
import { fetchMockRpc } from "../../utils/fetch-mock-rpc";
import { clienteService } from "./cliente.service";

globalThis.fetch = fetchMockRpc.fetch;

describe("ClienteService", () => {
  beforeEach(() => {
    fetchMockRpc.reset();
  });

  it("schema ok", async () => {
    fetchMockRpc.mock("crudSchema", {
      status: 200,
      body: {
        result: {
          pk: ["CdCliente"],
          schema: [],
        },
      },
    });
    const rsp = await clienteService.schema();
    expect(rsp).toEqual({
      pk: ["CdCliente"],
      schema: [],
    });
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
  });
});