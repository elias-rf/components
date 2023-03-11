import { z, zod } from "./z";
import { zsr } from "./z-refine";

describe("refine", () => {
  describe("date", () => {
    it("deve aceitar data ISO", () => {
      expect(zod("2020-01-01", z.string().superRefine(zsr.date))).toBe(
        undefined
      );
    });

    it("deve recusar data incorreta", () => {
      expect(() => zod("2020-02-30", z.string().superRefine(zsr.date))).toThrow(
        "2020-02-30 não é uma data válida"
      );
    });

    it("deve recusar data mal formatada", () => {
      expect(() => zod("20-01-01", z.string().superRefine(zsr.date))).toThrow(
        "20-01-01 não é uma data válida"
      );
    });

    it("deve recusar textos", () => {
      expect(() => zod("teste", z.string().superRefine(zsr.date))).toThrow(
        "teste não é uma data válida"
      );
    });
  });
  describe("month", () => {
    it("deve aceitar data ISO", () => {
      expect(zod("2020-01", z.string().superRefine(zsr.month))).toBe(undefined);
    });

    it("deve recusar data incorreta", () => {
      expect(() => zod("2020-13", z.string().superRefine(zsr.month))).toThrow(
        "2020-13 não é um mês válido"
      );
    });

    it("deve recusar data mal formatada", () => {
      expect(() => zod("20-01", z.string().superRefine(zsr.month))).toThrow(
        "20-01 não é um mês válido"
      );
    });

    it("deve recusar textos", () => {
      expect(() => zod("teste", z.string().superRefine(zsr.month))).toThrow(
        "teste não é um mês válido"
      );
    });
  });
});
