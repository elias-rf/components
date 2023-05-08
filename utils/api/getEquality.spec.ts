import { getEquality } from "./getEquality";

describe("getEquality", () => {
  it("default será =", () => {
    expect(getEquality({ id: "field", value: "abc" })).toEqual({
      field: "field",
      equality: "=",
      value: "abc",
    });
  });
  it("recebe =", () => {
    expect(getEquality({ id: "field", value: "= abc" })).toEqual({
      field: "field",
      equality: "=",
      value: "abc",
    });
  });
  it("recebe >=", () => {
    expect(getEquality({ id: "field", value: ">= abc" })).toEqual({
      field: "field",
      equality: ">=",
      value: "abc",
    });
  });
  it("recebe >", () => {
    expect(getEquality({ id: "field", value: "> abc" })).toEqual({
      field: "field",
      equality: ">",
      value: "abc",
    });
  });
  it("recebe <=", () => {
    expect(getEquality({ id: "field", value: "<= abc" })).toEqual({
      field: "field",
      equality: "<=",
      value: "abc",
    });
  });
  it("recebe <", () => {
    expect(getEquality({ id: "field", value: "< abc" })).toEqual({
      field: "field",
      equality: "<",
      value: "abc",
    });
  });

  it("recebe ?vlr", () => {
    expect(getEquality({ id: "field", value: "?abc" })).toEqual({
      field: "field",
      equality: "like",
      value: "%abc",
    });
  });
  it("recebe vlr?", () => {
    expect(getEquality({ id: "field", value: "abc?" })).toEqual({
      field: "field",
      equality: "like",
      value: "abc%",
    });
  });
  it("recebe ?vlr?", () => {
    expect(getEquality({ id: "field", value: "?abc?" })).toEqual({
      field: "field",
      equality: "like",
      value: "%abc%",
    });
  });

  it("recebe vlr1 <> vlr2", () => {
    expect(getEquality({ id: "field", value: "a <> b" })).toEqual({
      field: "field",
      equality: "between",
      value: ["a", "b"],
    });
  });
  it("recebe -", () => {
    expect(getEquality({ id: "field", value: "-" })).toEqual({
      field: "field",
      equality: "null",
      value: "",
    });
  });
});
