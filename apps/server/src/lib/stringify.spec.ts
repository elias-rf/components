import { describe, expect, it } from "vitest";
import { stringify } from "./stringify";

describe("stringify", () => {
  it("deve aceitar {}", () => {
    expect(stringify({})).toEqual("{\n}");
  });
  it("deve aceitar []", () => {
    expect(stringify([])).toEqual("[\n]");
  });
  it("deve aceitar ['teste']", () => {
    expect(stringify(["teste"], { spacing: "" })).toEqual('[\n"teste"\n]');
  });

  it("deve aceitar autoreferencia", () => {
    const obj: any = { a: "a" };
    obj.b = obj.a;
    obj.c = obj;
    expect(stringify([obj], { safe: true, spacing: "" })).toEqual(
      `[\n{\na:"a",\nb:"a",\nc:\n[Circularity]\n\n}\n]`
    );
  });
});
