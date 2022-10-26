import { describe, expect, it } from "vitest";
import { faker } from "./faker";

describe("random", () => {
  it("should return a random name", () => {
    const fk = faker(1);
    expect(fk.nome()).toBe("Roberta Albuquerque");
    expect(fk.nome()).toBe("Isaac Moreira");
  });
  it("should return a random email", () => {
    const fk = faker(1);
    expect(fk.email()).toBe("robertaalbuquerque@outlook.com");
    expect(fk.email()).toBe("sirineusilva@gmail.com");
  });
});
