import { getEquality } from "./getEquality";

describe("getEquality", () => {
  it("default será =", () => {
    expect(getEquality({ field: "abc" })).toEqual({
      field: "field",
      equality: "=",
      value: "abc",
    });
  });
  it("recebe =", () => {
    expect(getEquality({ field: "= abc" })).toEqual({
      field: "field",
      equality: "=",
      value: "abc",
    });
  });
  it("recebe >=", () => {
    expect(getEquality({ field: ">= abc" })).toEqual({
      field: "field",
      equality: ">=",
      value: "abc",
    });
  });
  it("recebe >", () => {
    expect(getEquality({ field: "> abc" })).toEqual({
      field: "field",
      equality: ">",
      value: "abc",
    });
  });
  it("recebe <=", () => {
    expect(getEquality({ field: "<= abc" })).toEqual({
      field: "field",
      equality: "<=",
      value: "abc",
    });
  });
  it("recebe <", () => {
    expect(getEquality({ field: "< abc" })).toEqual({
      field: "field",
      equality: "<",
      value: "abc",
    });
  });

  it("recebe ?vlr", () => {
    expect(getEquality({ field: "?abc" })).toEqual({
      field: "field",
      equality: "like",
      value: "%abc",
    });
  });
  it("recebe vlr?", () => {
    expect(getEquality({ field: "abc?" })).toEqual({
      field: "field",
      equality: "like",
      value: "abc%",
    });
  });
  it("recebe ?vlr?", () => {
    expect(getEquality({ field: "?abc?" })).toEqual({
      field: "field",
      equality: "like",
      value: "%abc%",
    });
  });

  it("recebe vlr1 <> vlr2", () => {
    expect(getEquality({ field: "a <> b" })).toEqual({
      field: "field",
      equality: "between",
      value: ["a", "b"],
    });
  });
  it("recebe -", () => {
    expect(getEquality({ field: "-" })).toEqual({
      field: "field",
      equality: "null",
      value: "",
    });
  });
});
