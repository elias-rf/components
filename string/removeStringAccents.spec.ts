import removeStringAccents from "./removeStringAccents";
import { it, describe, expect } from "vitest";

describe(__filename, () => {
  const testes = [
    ["Abc", "Abc"],
    ["Ábé", "Abe"],
    ["AaÁá*-12", "AaAa*-12"],
    ["ãçÂÇ", "acAC"],
  ];
  testes.forEach((item) => {
    it(`${item[2]} ${item[1]}`, () => {
      expect(removeStringAccents(item[0])).toEqual(item[1]);
    });
  });
});
