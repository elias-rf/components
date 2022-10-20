import { beforeEach, describe, expect, it } from "vitest";
import { fetchMockRpc } from "../../../utils/fetch-mock-rpc";
import { fetcherRpc } from "./fetcher-rpc";

globalThis.fetch = fetchMockRpc.fetch;

describe("fetcherRpc", () => {
  beforeEach(() => {
    fetchMockRpc.reset();
  });

  it("schema ok", async () => {
    fetchMockRpc.mock("crudSchema", {
      body: {
        result: [{}],
      },
    });
    const rsp = await fetcherRpc("crudSchema", { table: "cliente" });
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
  it("schema error", async () => {
    fetchMockRpc.mock("crudSchema", {
      status: 404,
      statusText: "Not Found",
      body: {
        result: [{}],
      },
    });
    await expect(
      fetcherRpc("crudSchema", { table: "cliente" })
    ).rejects.toThrow();
  });
});
