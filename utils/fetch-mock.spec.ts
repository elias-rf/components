import { beforeEach, describe, expect, it } from "vitest";
import { fetchMock } from "./fetch-mock";

global.fetch = fetchMock.fetch;

describe("fetchMockRpc", () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it("get retorna 200", async () => {
    fetchMock.mock("/rates", { status: 200, body: { rates: { CAD: 1.42 } } });
    fetchMock.mock("/rates2", { status: 200, body: { rates: { CAD: 2.42 } } });
    const response = await fetch("/rates");
    expect(response.status).toEqual(200);
    expect(fetchMock.history()).toEqual([
      { url: "/rates", options: undefined },
    ]);
  });

  it("get retorna 404", async () => {
    fetchMock.mock("/rates", { status: 404, body: { rates: { CAD: 1.42 } } });
    fetchMock.mock("/rates2", { status: 200, body: { rates: { CAD: 2.42 } } });
    const response = await fetch("/rates");
    expect(response.status).toEqual(404);
    expect(fetchMock.history()).toEqual([
      { url: "/rates", options: undefined },
    ]);
  });

  it("get retorna mock result", async () => {
    fetchMock.mock("/rates", { status: 200, body: { rates: { CAD: 1.42 } } });
    fetchMock.mock("/rates2", { status: 200, body: { rates: { CAD: 2.42 } } });
    const response = await fetch("/rates").then((res: any) => res.json());
    expect(response).toEqual({
      rates: { CAD: 1.42 },
    });
  });
});
