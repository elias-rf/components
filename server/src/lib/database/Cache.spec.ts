import { it, expect, describe } from "vitest";
import Cache from "./Cache";

it("deve criar um cache", () => {
  const cache = Cache();
  expect(cache).toBeDefined();
});

it("deve criar, retornar excluir entradas do cache", () => {
  const cache = Cache();
  cache.set("teste1", { id: 11 });
  expect(cache.has("teste1")).toEqual(true);
  expect(cache.get("teste1")).toEqual({ id: 11 });
  cache.set("teste2", { id: 12 });
  expect(cache.has("teste2")).toEqual(true);
  expect(cache.get("teste2")).toEqual({ id: 12 });
  cache.del("teste1");
  expect(cache.has("teste1")).toEqual(false);
  expect(cache.get("teste1")).toEqual(undefined);
  cache.del("teste2");
  expect(cache.has("teste2")).toEqual(false);
  expect(cache.get("teste2")).toEqual(undefined);
});

it("deve usar caches independentes", () => {
  const cache1 = Cache();
  const cache2 = Cache();
  cache1.set("teste1", { id: 11 });
  expect(cache1.has("teste1")).toEqual(true);
  expect(cache1.has("teste2")).toEqual(false);
  expect(cache1.get("teste1")).toEqual({ id: 11 });
  cache2.set("teste2", { id: 12 });
  expect(cache2.has("teste1")).toEqual(false);
  expect(cache2.has("teste2")).toEqual(true);
  expect(cache2.get("teste2")).toEqual({ id: 12 });
  cache1.del("teste1");
  expect(cache1.has("teste1")).toEqual(false);
  expect(cache1.get("teste1")).toEqual(undefined);
  cache2.del("teste2");
  expect(cache2.has("teste2")).toEqual(false);
  expect(cache2.get("teste2")).toEqual(undefined);
});
