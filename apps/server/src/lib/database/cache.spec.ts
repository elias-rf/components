import { expect, it } from "vitest";
import { cache } from "./cache_";

it("deve criar um cache", () => {
  const cache_ = cache();
  expect(cache_).toBeDefined();
});

it("deve criar, retornar excluir entradas do cache", () => {
  const cache_: any = cache();
  cache_.set("teste1", { id: 11 });
  expect(cache_.has("teste1")).toEqual(true);
  expect(cache_.get("teste1")).toEqual({ id: 11 });
  cache_.set("teste2", { id: 12 });
  expect(cache_.has("teste2")).toEqual(true);
  expect(cache_.get("teste2")).toEqual({ id: 12 });
  cache_.del("teste1");
  expect(cache_.has("teste1")).toEqual(false);
  expect(cache_.get("teste1")).toEqual(undefined);
  cache_.del("teste2");
  expect(cache_.has("teste2")).toEqual(false);
  expect(cache_.get("teste2")).toEqual(undefined);
});

it("deve usar caches independentes", () => {
  const cache1 = cache();
  const cache2 = cache();
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
