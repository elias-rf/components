import { beforeEach, describe, expect, it } from "vitest";
import { fetchMock } from "../../../utils";
import { clienteService } from "./cliente.service";

global.fetch = fetchMock.fetch;

describe("ClienteService", () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it("schema ok", async () => {
    fetchMock.mock("/api/rpc", {
      status: 200,
      body: {
        jsonrpc: "2.0",
        id: 1,
        result: {
          pk: ["CdCliente"],
          fields: [],
        },
      },
    });
    const rsp = await clienteService.schema();
    expect(fetchMock.history(0)).toEqual({
      url: "/api/rpc",
      options: {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: '{"jsonrpc":"2.0","id":1,"method":"clienteSchema"}',
      },
    });
    expect(rsp).toEqual({
      pk: ["CdCliente"],
      fields: [],
    });
  });
});
