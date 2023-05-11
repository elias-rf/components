import { zsLimit } from "@/utils/zod/zs-limit";

describe("limit", () => {
  it("deve invalidar limit não inteiros", () => {
    expect(zsLimit.safeParse(1.4).success).toBe(false);
  });

  it("deve invalidar limit fora de 1 e 10000", () => {
    expect(zsLimit.safeParse(-1).success).toBe(false);
    expect(zsLimit.safeParse(11000).success).toBe(false);
  });
});
