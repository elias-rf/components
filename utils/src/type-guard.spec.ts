import { describe, expect, it } from "vitest";
import {
  isArray,
  isBoolean,
  isDate,
  isDefined,
  isFunction,
  isNumber,
  isObject,
  isString,
  isUndefined,
} from "./type-guard";

describe("typeGuard", () => {
  it("deve ser defined", () => {
    expect(isDefined(undefined)).toBeFalsy();
    expect(isDefined(null)).toBeFalsy();
    expect(isDefined("")).toBeTruthy();
    expect(isDefined(0)).toBeTruthy();
    expect(isDefined(true)).toBeTruthy();
    expect(isDefined(false)).toBeTruthy();
    expect(isDefined([])).toBeTruthy();
    expect(isDefined({})).toBeTruthy();
  });
  it("deve ser undefined", () => {
    expect(isUndefined(undefined)).toBeTruthy();
    expect(isUndefined(null)).toBeFalsy();
    expect(isUndefined("")).toBeFalsy();
    expect(isUndefined(0)).toBeFalsy();
    expect(isUndefined(true)).toBeFalsy();
    expect(isUndefined(false)).toBeFalsy();
    expect(isUndefined([])).toBeFalsy();
    expect(isUndefined({})).toBeFalsy();
  });
  it("deve ser boolean", () => {
    expect(isBoolean(undefined)).toBeFalsy();
    expect(isBoolean(null)).toBeFalsy();
    expect(isBoolean("")).toBeFalsy();
    expect(isBoolean(0)).toBeFalsy();
    expect(isBoolean(true)).toBeTruthy();
    expect(isBoolean(false)).toBeTruthy();
    expect(isBoolean([])).toBeFalsy();
    expect(isBoolean({})).toBeFalsy();
  });
  it("deve ser number", () => {
    expect(isNumber(undefined)).toBeFalsy();
    expect(isNumber(null)).toBeFalsy();
    expect(isNumber("")).toBeFalsy();
    expect(isNumber(0)).toBeTruthy();
    expect(isNumber(true)).toBeFalsy();
    expect(isNumber(false)).toBeFalsy();
    expect(isNumber([])).toBeFalsy();
    expect(isNumber({})).toBeFalsy();
    expect(isNumber(() => {})).toBeFalsy();
    expect(isNumber(Number.NaN)).toBeFalsy();
  });
  it("deve ser string", () => {
    expect(isString(undefined)).toBeFalsy();
    expect(isString(null)).toBeFalsy();
    expect(isString("")).toBeTruthy();
    expect(isString(0)).toBeFalsy();
    expect(isString(true)).toBeFalsy();
    expect(isString(false)).toBeFalsy();
    expect(isString([])).toBeFalsy();
    expect(isString({})).toBeFalsy();
  });

  it("deve ser object", () => {
    expect(isObject({})).toBe(true);
    expect(isObject("A")).toBe(false);
    expect(isObject(5)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(() => {})).toBe(false);
  });
  it("deve ser array", () => {
    expect(isArray(undefined)).toBeFalsy();
    expect(isArray(null)).toBeFalsy();
    expect(isArray(123)).toBeFalsy();
    expect(isArray("[1,2,3]")).toBeFalsy();
    expect(isArray(new Date())).toBeFalsy();
    expect(isArray({ a: 1, b: 2 })).toBeFalsy();
    expect(isArray([1, 2, 3])).toBeTruthy();
    expect(isArray([])).toBeTruthy();
    expect(isArray(new Array(1, 2, 3))).toBeTruthy();
  });
  it("deve ser function", () => {
    expect(isFunction(undefined)).toBeFalsy();
    expect(isFunction(null)).toBeFalsy();
    expect(isFunction("")).toBeFalsy();
    expect(isFunction(0)).toBeFalsy();
    expect(isFunction(true)).toBeFalsy();
    expect(isFunction(false)).toBeFalsy();
    expect(isFunction([])).toBeFalsy();
    expect(isFunction({})).toBeFalsy();
    expect(isFunction(() => {})).toBeTruthy();
    expect(isFunction(Number.NaN)).toBeFalsy();
  });
  it("deve ser date", () => {
    expect(isDate(undefined)).toBeFalsy();
    expect(isDate(null)).toBeFalsy();
    expect(isDate("")).toBeFalsy();
    expect(isDate(0)).toBeFalsy();
    expect(isDate(true)).toBeFalsy();
    expect(isDate(false)).toBeFalsy();
    expect(isDate([])).toBeFalsy();
    expect(isDate({})).toBeFalsy();
    expect(isDate(() => {})).toBeFalsy();
    expect(isDate(Number.NaN)).toBeFalsy();
    expect(isDate(new Date())).toBeTruthy();
  });
});
