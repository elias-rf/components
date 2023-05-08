import { zLimit } from "./z-limit";

describe("limit", () => {
  it("deve invalidar limit não inteiros", () => {
    expect(() => zLimit(1.4)).toThrow("limit deve ser inteiro");
  });

  it("deve invalidar limit fora de 1 e 10000", () => {
    expect(() => zLimit(-1)).toThrow("limit deve ser inteiro entre 1 e 10.000");
    expect(() => zLimit(11000)).toThrow(
      "limit deve ser inteiro entre 1 e 10.000"
    );
  });
});
