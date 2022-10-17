import { describe, expect, it } from "vitest";
import { isMDY } from "./isMDY";

describe("number", () => {
  const msg = "Valor deve ser ano-mes-dia";
  it("true", () => {
    const req = isMDY();
    expect(req("2021-02-01")).toBe(null);
  });

  it("false", () => {
    const req = isMDY();
    expect(req(null)).toBe(msg);
    expect(req(undefined)).toBe(msg);
    expect(req("")).toBe(msg);
    expect(req("1")).toBe(msg);
    expect(req(1)).toBe(msg);
    expect(req(new Date())).toBe(msg);
    expect(req("20-02-01")).toBe(msg);
  });

  it("custom message", () => {
    const req = isMDY("data");
    expect(req(null)).toBe("data");
  });
});
