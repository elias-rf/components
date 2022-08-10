import { describe, expect, it } from "vitest";
import replaceStringAll from "./replaceStringAll";

describe("replaceStringAll", () => {
  it("deve funcionar para 0 substituições", () => {
    expect(replaceStringAll("ABCD", ".", "")).toEqual("ABCD");
  });
  it("deve funcionar para 1 substituição", () => {
    expect(replaceStringAll("AB.CD", ".", "")).toEqual("ABCD");
  });
  it("deve funcionar para >1 substituições", () => {
    expect(replaceStringAll("A.B.C.D.", ".", "")).toEqual("ABCD");
  });
});