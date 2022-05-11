import reqIdGenFactory from "./id-gen.factory";
import { test, it, describe, expect } from "vitest";
describe("idGenFactory", () => {
  const idGen = reqIdGenFactory();
  it("deve criar um numero", () => {
    const req = {};
    expect(idGen(req)).toBe(1);
    expect(idGen(req)).toBe(2);
  });

  it("deve criar um numero na continuidade", () => {
    const req = {};
    expect(idGen(req)).toBe(3);
    expect(idGen(req)).toBe(4);
  });

  it("deve retornar o req.id", () => {
    const req = { id: 2 };
    expect(idGen(req)).toBe(2);
    expect(idGen(req)).toBe(2);
  });
});
