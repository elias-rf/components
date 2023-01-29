import { describe, expect, it } from "vitest";
import { getParams, getParamsSintetic } from "./get_params";

describe("getParams", () => {
  it("basico", () => {
    expect(
      getParams(function () {
        1;
      })
    ).toEqual([]);
    expect(
      getParams(function (a) {
        a + 1;
      })
    ).toEqual([{ param: "a" }]);
    expect(
      getParams(function (a, b) {
        a + b;
      })
    ).toEqual([{ param: "a" }, { param: "b" }]);
    expect(
      getParams(function (a, /*bork*/ b) {
        a + b;
      })
    ).toEqual([{ param: "a" }, { param: "b" }]);
    expect(
      getParams(function (a, /*bork*/ b /*bork*/) {
        a + b;
      })
    ).toEqual([{ param: "a" }, { param: "b" }]);
  });

  it("default args", () => {
    expect(
      getParams(function (a, b = true, c) {
        a + b + c;
      })
    ).toEqual([
      { param: "a" },
      { param: "b", default: "true" },
      { param: "c" },
    ]);
    expect(
      getParams(function (a, b = {}) {
        a + b;
      })
    ).toEqual([{ param: "a" }, { param: "b", default: "{}" }]);
    expect(
      getParams(function (a, b = { c: true, d: false }) {
        a + b;
      })
    ).toEqual([
      { param: "a" },
      { param: "b", default: "{ c: true, d: false }" },
    ]);
    expect(
      getParams(function (
        a,
        b = function () {
          1;
        }
      ) {
        a + b;
      })
    ).toEqual([{ param: "a" }, { param: "b", default: expect.anything() }]);
  });

  it("arrow functions", () => {
    expect(
      getParams(() => {
        1;
      })
    ).toEqual([]);
    expect(
      getParams((a) => {
        a;
      })
    ).toEqual([{ param: "a" }]);
    expect(
      getParams((a, b) => {
        a + b;
      })
    ).toEqual([{ param: "a" }, { param: "b" }]);
    expect(
      getParams((a, /*bork*/ b) => {
        a + b;
      })
    ).toEqual([{ param: "a" }, { param: "b" }]);
    expect(
      getParams((a, /*bork*/ b /*bork*/) => {
        a + b;
      })
    ).toEqual([{ param: "a" }, { param: "b" }]);
    expect(
      getParams((a) => {
        a;
      })
    ).toEqual([{ param: "a" }]);
  });

  it("arrows + defaults", () => {
    expect(
      getParams((a, b = true, c) => {
        a + b + c;
      })
    ).toEqual([
      { param: "a" },
      { param: "b", default: "true" },
      { param: "c" },
    ]);
    expect(
      getParams((a, b = {}) => {
        a + b;
      })
    ).toEqual([{ param: "a" }, { param: "b", default: "{}" }]);
    expect(
      getParams((a, b = { c: true, d: false }) => {
        a + b;
      })
    ).toEqual([
      { param: "a" },
      { param: "b", default: "{ c: true, d: false }" },
    ]);
    expect(
      getParams(
        (
          a,
          b = function () {
            1;
          }
        ) => {
          a + b;
        }
      )
    ).toEqual([{ param: "a" }, { param: "b", default: expect.anything() }]);
  });
  it("lots-o-edge-cases", () => {
    expect(
      getParams(
        (
          a,
          b = { c: true, d: false },
          c = { z: "test,}", y: () => false, x: "hello},){" }
        ) => {
          a + b + c;
        }
      )
    ).toEqual([
      { param: "a" },
      { param: "b", default: "{ c: true, d: false }" },
      {
        param: "c",
        default: '{ z: "test,}", y: () => false, x: "hello},){" }',
      },
    ]);
    expect(
      getParams(function (a) {
        a;
        return ")";
      })
    ).toEqual([{ param: "a" }]);
    expect(getParams((a) => a + ")")).toEqual([{ param: "a" }]);
    expect(
      getParams(function (a, b) {
        return a == b;
      })
    ).toEqual([{ param: "a" }, { param: "b" }]);
    expect(getParams((a) => a)).toEqual([{ param: "a" }]);
    expect(getParams((a) => (b) => a + b)).toEqual([{ param: "a" }]);
    expect(getParams(async (a) => a)).toEqual([{ param: "a" }]);
  });
});

describe("getParamsSintetic", () => {
  it("basico", () => {
    expect(
      getParamsSintetic(function () {
        1;
      })
    ).toEqual([]);
    expect(
      getParamsSintetic(function (a) {
        a;
      })
    ).toEqual(["a"]);
    expect(
      getParamsSintetic(function (a, b) {
        a + b;
      })
    ).toEqual(["a", "b"]);
  });

  it("default args", () => {
    expect(
      getParamsSintetic(function (a, b = true, c) {
        a + b + c;
      })
    ).toEqual(["a", "b=true", "c"]);
    expect(
      getParamsSintetic(function (a, b = {}) {
        a + b;
      })
    ).toEqual(["a", "b={}"]);
    expect(
      getParamsSintetic(function (a, b = { c: true, d: false }) {
        a + b;
      })
    ).toEqual(["a", "b={c:true,d:false}"]);
    expect(
      getParamsSintetic(function (
        a,
        b = function () {
          1;
        }
      ) {
        a + b;
      })
    ).toEqual(["a", "b=function(){1;}"]);
  });

  it("arrow functions", () => {
    expect(
      getParamsSintetic(() => {
        1;
      })
    ).toEqual([]);
    expect(
      getParamsSintetic((a) => {
        a;
      })
    ).toEqual(["a"]);
    expect(
      getParamsSintetic((a, b) => {
        a + b;
      })
    ).toEqual(["a", "b"]);
    expect(
      getParamsSintetic((a, /*bork*/ b) => {
        a + b;
      })
    ).toEqual(["a", "b"]);
    expect(
      getParamsSintetic((a, /*bork*/ b /*bork*/) => {
        a + b;
      })
    ).toEqual(["a", "b"]);
    expect(
      getParamsSintetic((a) => {
        a;
      })
    ).toEqual(["a"]);
  });

  it("arrows + defaults", () => {
    expect(
      getParamsSintetic((a, b = true, c) => {
        a + b + c;
      })
    ).toEqual(["a", "b=true", "c"]);
    expect(
      getParamsSintetic((a, b = {}) => {
        a + b;
      })
    ).toEqual(["a", "b={}"]);
    expect(
      getParamsSintetic((a, b = { c: true, d: false }) => {
        a + b;
      })
    ).toEqual(["a", "b={c:true,d:false}"]);
    expect(
      getParamsSintetic(
        (
          a,
          b = function () {
            1;
          }
        ) => {
          a + b;
        }
      )
    ).toEqual(["a", "b=function(){1;}"]);
  });
  it("lots-o-edge-cases", () => {
    expect(
      getParamsSintetic(
        (
          a,
          b = { c: true, d: false },
          c = { z: "test,}", y: () => false, x: "hello},){" }
        ) => {
          a + b + c;
        }
      )
    ).toEqual([
      "a",
      "b={c:true,d:false}",
      'c={z:"test,}",y:()=>false,x:"hello},){"}',
    ]);
    expect(
      getParamsSintetic(function (a) {
        return a + ")";
      })
    ).toEqual(["a"]);
    expect(getParamsSintetic((a) => a + ")")).toEqual(["a"]);
    expect(
      getParamsSintetic(function (a, b) {
        return a == b;
      })
    ).toEqual(["a", "b"]);
    expect(getParamsSintetic((a) => a)).toEqual(["a"]);
    expect(getParamsSintetic((a) => (b) => a + b)).toEqual(["a"]);
    expect(getParamsSintetic(async (a) => a)).toEqual(["a"]);
  });
});
