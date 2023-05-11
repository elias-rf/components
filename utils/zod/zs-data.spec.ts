import { describe, expect, it } from "vitest";
import { zsData } from "./zs-data";

describe("zsData", () => {
  it("dados corretos", () => {
    expect(zsData.safeParse({ fld_2: 2, fld_4: "4" }).success).toBe(true);
  });
});
