import { describe, expect, test } from "vitest";
import convertArrayToCSV from "./convert-array-to-csv";
/**
 * @test {arrayToCSV}
 */
describe("arrayToCSV", () => {
  const header = [
    ["a", "A"],
    ["b", "B"],
  ];
  const dados = [
    { a: "11", b: "12" },
    { a: "21", b: "22" },
  ];
  const esperado = '"A";"B"\r\n"11";"12"\r\n"21";"22"';
  test("retorna um csv", () => {
    expect(convertArrayToCSV(header, dados)).toEqual(esperado);
  });
});