import { describe, expect, it } from "vitest";
import Faker from "./Faker";

describe("random", () => {
  it("should return a random name", () => {
    const faker = Faker(1);
    expect(faker.nome()).toBe("Roberta Albuquerque");
    expect(faker.nome()).toBe("Isaac Moreira");
  });
  it("should return a random email", () => {
    const faker = Faker(1);
    expect(faker.email()).toBe("robertaalbuquerque@outlook.com");
    expect(faker.email()).toBe("sirineusilva@gmail.com");
  });
});
