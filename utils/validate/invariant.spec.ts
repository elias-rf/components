import { describe, expect, it } from "vitest";
import { invariant } from "./invariant";

describe("invariant", () => {
  it("should return if condition is not provided", () => {
    expect(() => invariant(undefined)).toThrowError("Condition not provided");
  });
  it("should include a default message when an invariant does throw and no message is provided", () => {
    expect(() => invariant(false)).toThrowError("Invariant failed");
  });

  it("should include a provided message when an invariant does throw", () => {
    expect(() => invariant(false, "My message")).toThrowError("My message");
  });

  it("should not execute a message function if the invariant does not throw", () => {
    const message = () => "lazy message";
    expect(invariant(true, message)).toBe(undefined);
  });

  it("should execute a message function if the invariant does throw", () => {
    const message = () => "Lazy message";
    expect(() => invariant(false, message)).toThrowError("Lazy message");
  });
});
