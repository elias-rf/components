
import formatMoney from "./formatMoney.js";

describe("formatMoney", function () {
  const tests = [
    { args: [1.2222, 2], expected: "1,22" },
    { args: [1.1232, 3], expected: "1,123" },
    { args: [1.1232, 4], expected: "1,1232" },
    { args: [1.3333, 2], expected: "1,33" },
    { args: [1.7777, 2], expected: "1,78" },
    { args: [123456.123456, 2], expected: "123.456,12" },
    { args: [123456.123456, 4], expected: "123.456,1235" },
  ];
  tests.forEach(function (test) {
    it(`deve arredondar ${test.args[0]} para ${test.args[1]} casas decimais`, function () {
      expect(formatMoney(test.args[0], test.args[1])).toEqual(test.expected);
    });
  });
});
