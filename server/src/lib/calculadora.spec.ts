import { liteflex } from "./calculadora";
import { test, it, describe, expect } from "vitest";
test("deve retornar 0 se quantidade negativa", () => {
  expect(liteflex(-1)).toBe(0);
});

test("deve retornar 1 por 50,00", () => {
  expect(liteflex(1)).toBe(50);
});

test("deve retornar 100 por 50,00", () => {
  expect(liteflex(100)).toBe(46.99);
});

test("deve retornar 500 por 43,00", () => {
  expect(liteflex(500)).toBe(44.5);
});

test("deve retornar 1000 por 43,00", () => {
  expect(liteflex(1000)).toBe(41.5);
});

test("deve retornar 2000 por 38,00", () => {
  expect(liteflex(2000)).toBe(39.5);
});
