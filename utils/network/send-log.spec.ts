import { describe, expect, it } from "vitest";
import { sendLog } from "./send-log";

describe("isId", () => {
  it("deve invalidar Id vazio", async () => {
    expect(await sendLog("{ test: 123 }")).toBe("ok");
  });
});
