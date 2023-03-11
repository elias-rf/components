import { describe, expect, it } from "vitest";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";

describe("nfSaida", () => {
  it("nfSaidaItemSchema", async () => {
    const rsp = await fetcherRpc.query("nfSaidaItemSchema");

    expect(rsp.length).toEqual(123);
  });

  it("nfSaidaItemClear", async () => {
    const rsp = await fetcherRpc.query("nfSaidaItemClear");

    expect(rsp).toEqual(expect.any(Object));
  });
});
