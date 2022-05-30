import pick from "./pick";
import { it, describe, expect } from "vitest";

describe("pick", () => {
  const raw = {
    item1: { key: "sdfd", value: "sdfd" },
    item2: { key: "sdfd", value: "sdfd" },
    item3: { key: "sdfd", value: "sdfd" },
  };
  it("pode pegar propriedades", () => {
    const allowed = ["item1", "item3"];
    expect(pick(raw, allowed)).toEqual({
      item1: { key: "sdfd", value: "sdfd" },
      item3: { key: "sdfd", value: "sdfd" },
    });
  });
  it("pode pegar propriedades aninhado", () => {
    expect(pick(pick(raw, ["item1", "item3"]), ["item1"])).toEqual({
      item1: { key: "sdfd", value: "sdfd" },
    });
  });
});
