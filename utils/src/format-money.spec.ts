import { describe, expect, test } from "vitest";
import { formatMoney } from "./format-money.js";
describe("formatMoney", function () {
  test(`deve arredondar [1.2222, 2, "1,22"]`, () => {
    expect(formatMoney(1.2222, 2)).toEqual("1,22");
  });
  test(`deve arredondar [1.1232, 3, "1,123"]`, () => {
    expect(formatMoney(1.1232, 3)).toEqual("1,123");
  });
  test(`deve arredondar [1.1232, 4, "1,1232"]`, () => {
    expect(formatMoney(1.1232, 4)).toEqual("1,1232");
  });
  test(`deve arredondar [1.3333, 2, "1,33"]`, () => {
    expect(formatMoney(1.3333, 2)).toEqual("1,33");
  });
  test(`deve arredondar [1.7777, 2, "1,78"]`, () => {
    expect(formatMoney(1.7777, 2)).toEqual("1,78");
  });
  test(`deve arredondar [123456.123456, 2, "123.456,12"]`, () => {
    expect(formatMoney(123456.123456, 2)).toEqual("123.456,12");
  });
  test(`deve arredondar [123456.123456, 4, "123.456,1235"]`, () => {
    expect(formatMoney(123456.123456, 4)).toEqual("123.456,1235");
  });
});
