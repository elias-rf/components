import { describe, expect, it } from "vitest";
import ClienteService from "./cliente.service";

function fetch(url: string, options: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: 200,
        json: () => {
          return Promise.resolve(options);
        },
      });
    }, 1000);
  });
}

describe("ClienteService", () => {
  it("schema ok", async () => {
    global.fetch = fetch;
    const clienteSvc = ClienteService();
    const rsp = await clienteSvc.schema();
    expect(rsp).toEqual({});
  });
});
