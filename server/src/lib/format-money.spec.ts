import formatMoney from "./format-money";
import { test, it, describe, expect } from "vitest";
const testes: { args: [string | number, number]; expected: string }[] = [
  { args: [1.2222, 2], expected: "1,22" },
  { args: ["1.2222", 2], expected: "1,22" },
  { args: [1.1232, 3], expected: "1,123" },
  { args: ["1.1232", 3], expected: "1,123" },
  { args: [1.1232, 4], expected: "1,1232" },
  { args: [1.3333, 2], expected: "1,33" },
  { args: ["1.3333", 2], expected: "1,33" },
  { args: [1.7777, 2], expected: "1,78" },
  { args: [123456.123456, 2], expected: "123.456,12" },
  { args: ["123456.123456", 2], expected: "123.456,12" },
  { args: [123456.123456, 4], expected: "123.456,1235" },
  { args: ["123456.123456", 4], expected: "123.456,1235" },
];
testes.forEach(function (tst) {
  test(`deve arredondar ${tst.args[0]} para ${tst.args[1]} casas decimais`, () => {
    expect(formatMoney(tst.args[0], tst.args[1])).toBe(tst.expected);
  });
});
