import { assertAny } from "@/utils/asserts/assert-any";

describe("assertAny", () => {
  it("must be true", () => {
    expect(assertAny(true, "any message")).toEqual(undefined);
  });
  it("must be false", () => {
    expect(() => assertAny(false, "any message")).toThrow("any message");
  });

  it("should include a default message when an invariant does throw and no message is provided", () => {
    expect(() => assertAny(false)).toThrowError("Invariant failed");
  });

  it("should include a provided message when an invariant does throw", () => {
    expect(() => assertAny(false, "My message")).toThrowError("My message");
  });

  it("should not execute a message function if the invariant does not throw", () => {
    const message = () => "lazy message";
    expect(assertAny(true, message)).toBe(undefined);
  });

  it("should execute a message function if the invariant does throw", () => {
    const message = () => "Lazy message";
    expect(() => assertAny(false, message)).toThrowError("Lazy message");
  });
});
