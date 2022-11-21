import { describe, expect, it } from "vitest";
import { getParams, getParamsSintetic } from "./get_params";

describe("getParams", () => {
  it("basico", () => {
    expect(getParams(function () {})).toEqual([]);
    expect(getParams(function (a) {})).toEqual([{ param: "a" }]);
    expect(getParams(function (a, b) {})).toEqual([
      { param: "a" },
      { param: "b" },
    ]);
    expect(getParams(function (a, /*bork*/ b) {})).toEqual([
      { param: "a" },
      { param: "b" },
    ]);
    expect(getParams(function (a, /*bork*/ b /*bork*/) {})).toEqual([
      { param: "a" },
      { param: "b" },
    ]);
  });

  it("default args", () => {
    expect(getParams(function (a, b = true, c) {})).toEqual([
      { param: "a" },
      { param: "b", default: "true" },
      { param: "c" },
    ]);
    expect(getParams(function (a, b = {}) {})).toEqual([
      { param: "a" },
      { param: "b", default: "{}" },
    ]);
    expect(getParams(function (a, b = { c: true, d: false }) {})).toEqual([
      { param: "a" },
      { param: "b", default: "{ c: true, d: false }" },
    ]);
    expect(getParams(function (a, b = function () {}) {})).toEqual([
      { param: "a" },
      { param: "b", default: expect.anything() },
    ]);
  });

  it("arrow functions", () => {
    expect(getParams(() => {})).toEqual([]);
    expect(getParams((a) => {})).toEqual([{ param: "a" }]);
    expect(getParams((a, b) => {})).toEqual([{ param: "a" }, { param: "b" }]);
    expect(getParams((a, /*bork*/ b) => {})).toEqual([
      { param: "a" },
      { param: "b" },
    ]);
    expect(getParams((a, /*bork*/ b /*bork*/) => {})).toEqual([
      { param: "a" },
      { param: "b" },
    ]);
    expect(getParams((a) => {})).toEqual([{ param: "a" }]);
  });

  it("arrows + defaults", () => {
    expect(getParams((a, b = true, c) => {})).toEqual([
      { param: "a" },
      { param: "b", default: "true" },
      { param: "c" },
    ]);
    expect(getParams((a, b = {}) => {})).toEqual([
      { param: "a" },
      { param: "b", default: "{}" },
    ]);
    expect(getParams((a, b = { c: true, d: false }) => {})).toEqual([
      { param: "a" },
      { param: "b", default: "{ c: true, d: false }" },
    ]);
    expect(getParams((a, b = function () {}) => {})).toEqual([
      { param: "a" },
      { param: "b", default: expect.anything() },
    ]);
  });
  it("lots-o-edge-cases", () => {
    expect(
      getParams(
        (
          a,
          b = { c: true, d: false },
          c = { z: "test,}", y: () => false, x: "hello},){" }
        ) => {}
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
        return ")";
      })
    ).toEqual([{ param: "a" }]);
    expect(getParams((a) => ")")).toEqual([{ param: "a" }]);
    expect(
      getParams(function (a, b) {
        return 1 == 2;
      })
    ).toEqual([{ param: "a" }, { param: "b" }]);
    expect(getParams((a) => 1)).toEqual([{ param: "a" }]);
    expect(getParams((a) => (b) => 3)).toEqual([{ param: "a" }]);
    expect(getParams(async (a) => 2)).toEqual([{ param: "a" }]);
  });
});

describe("getParamsSintetic", () => {
  it("basico", () => {
    expect(getParamsSintetic(function () {})).toEqual([]);
    expect(getParamsSintetic(function (a) {})).toEqual(["a"]);
    expect(getParamsSintetic(function (a, b) {})).toEqual(["a", "b"]);
  });

  it("default args", () => {
    expect(getParamsSintetic(function (a, b = true, c) {})).toEqual([
      "a",
      "b=true",
      "c",
    ]);
    expect(getParamsSintetic(function (a, b = {}) {})).toEqual(["a", "b={}"]);
    expect(
      getParamsSintetic(function (a, b = { c: true, d: false }) {})
    ).toEqual(["a", "b={c:true,d:false}"]);
    expect(getParamsSintetic(function (a, b = function () {}) {})).toEqual([
      "a",
      "b=function(){}",
    ]);
  });

  it("arrow functions", () => {
    expect(getParamsSintetic(() => {})).toEqual([]);
    expect(getParamsSintetic((a) => {})).toEqual(["a"]);
    expect(getParamsSintetic((a, b) => {})).toEqual(["a", "b"]);
    expect(getParamsSintetic((a, /*bork*/ b) => {})).toEqual(["a", "b"]);
    expect(getParamsSintetic((a, /*bork*/ b /*bork*/) => {})).toEqual([
      "a",
      "b",
    ]);
    expect(getParamsSintetic((a) => {})).toEqual(["a"]);
  });

  it("arrows + defaults", () => {
    expect(getParamsSintetic((a, b = true, c) => {})).toEqual([
      "a",
      "b=true",
      "c",
    ]);
    expect(getParamsSintetic((a, b = {}) => {})).toEqual(["a", "b={}"]);
    expect(getParamsSintetic((a, b = { c: true, d: false }) => {})).toEqual([
      "a",
      "b={c:true,d:false}",
    ]);
    expect(getParamsSintetic((a, b = function () {}) => {})).toEqual([
      "a",
      "b=function(){}",
    ]);
  });
  it("lots-o-edge-cases", () => {
    expect(
      getParamsSintetic(
        (
          a,
          b = { c: true, d: false },
          c = { z: "test,}", y: () => false, x: "hello},){" }
        ) => {}
      )
    ).toEqual([
      "a",
      "b={c:true,d:false}",
      'c={z:"test,}",y:()=>false,x:"hello},){"}',
    ]);
    expect(
      getParamsSintetic(function (a) {
        return ")";
      })
    ).toEqual(["a"]);
    expect(getParamsSintetic((a) => ")")).toEqual(["a"]);
    expect(
      getParamsSintetic(function (a, b) {
        return 1 == 2;
      })
    ).toEqual(["a", "b"]);
    expect(getParamsSintetic((a) => 1)).toEqual(["a"]);
    expect(getParamsSintetic((a) => (b) => 3)).toEqual(["a"]);
    expect(getParamsSintetic(async (a) => 2)).toEqual(["a"]);
  });
});
