import { describe, expect, it } from "vitest";
import { hashObject } from "./hash-object";

describe("hashObject", () => {
  it("deve trabalhar com valor simples", () => {
    expect(hashObject(12)).toEqual("12");
  });
  it("deve trabalhar com valor complexo", () => {
    expect(hashObject([{ n: 12 }])).toEqual('[{"n":12}]');
  });
});
