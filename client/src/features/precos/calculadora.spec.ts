import { it, describe, expect } from "vitest";
import calculadora from "./calculadora.js";

describe("calculadora", function () {
  describe("liteflex()", function () {
    it("deve retornar 0 se quantidade negativa", function () {
      expect(calculadora.liteflex(-1)).toEqual(0);
    });
    it("deve retornar 1 por 50,00", function () {
      expect(calculadora.liteflex(1)).toBeGreaterThanOrEqual(50);
    });
    it("deve retornar 100 por 50,00", function () {
      expect(calculadora.liteflex(100)).toBeGreaterThanOrEqual(46.99);
    });
    it("deve retornar 500 por 43,00", function () {
      expect(calculadora.liteflex(500)).toBeGreaterThanOrEqual(44.5);
    });
    it("deve retornar 1000 por 43,00", function () {
      expect(calculadora.liteflex(1000)).toBeGreaterThanOrEqual(41.5);
    });
    it("deve retornar 2000 por 38,00", function () {
      expect(calculadora.liteflex(2000)).toBeGreaterThanOrEqual(39.5);
    });
  });
});
