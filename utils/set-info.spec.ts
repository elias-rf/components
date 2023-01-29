import { describe, expect, it } from "vitest";
import { setInfo } from "./set-info";

function rpc() {
  return {
    query: {
      f1() {
        return 1;
      },
      f2() {
        return 2;
      },
    },
    mutation: {
      f3() {
        return 3;
      },
      f4() {
        return 4;
      },
    },
  };
}

describe("setInfo", () => {
  it("deve setar incompleto", () => {
    const rsp = setInfo(rpc(), { query: { f1: "função 1" } });
    expect(rsp.query.f1.info).toEqual("função 1");
    expect(rsp.query.f2.info).toEqual(undefined);
    expect(rsp.mutation.f3.info).toEqual(undefined);
    expect(rsp.mutation.f4.info).toEqual(undefined);
  });
  it("deve setar vazio", () => {
    const rsp = setInfo(rpc(), {});
    expect(rsp.query.f1.info).toEqual(undefined);
    expect(rsp.query.f2.info).toEqual(undefined);
    expect(rsp.mutation.f3.info).toEqual(undefined);
    expect(rsp.mutation.f4.info).toEqual(undefined);
  });
  it("deve setar completo", () => {
    const rsp = setInfo(rpc(), {
      query: { f1: "função 1", f2: "função 2" },
      mutation: { f3: "função 3", f4: "função 4" },
    });
    expect(rsp.query.f1.info).toEqual("função 1");
    expect(rsp.query.f2.info).toEqual("função 2");
    expect(rsp.mutation.f3.info).toEqual("função 3");
    expect(rsp.mutation.f4.info).toEqual("função 4");
  });
});
