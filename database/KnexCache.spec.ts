import { it, expect } from "vitest";
import knexCache from "./KnexCache";

it("deve retornar um cache novo a cada chamada", () => {
  const cache1 = knexCache();
  const cache2 = knexCache();
  cache1.set("teste1", { id: 11 });
  cache1.set("teste2", { id: 12 });
  cache2.set("teste1", { id: 21 });
  cache2.set("teste2", { id: 22 });
  expect(cache1.get("teste1")).toEqual({ id: 11 });
  expect(cache1.get("teste2")).toEqual({ id: 12 });
  expect(cache2.get("teste1")).toEqual({ id: 21 });
  expect(cache2.get("teste2")).toEqual({ id: 22 });
});
