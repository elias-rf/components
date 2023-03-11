import { describe, expect, it } from "vitest";
import { sendLog } from "./send-log";

describe("sendLog", () => {
  it("deve enviar uma mensagem", async () => {
    expect(await sendLog("{ test: 123 }")).toBe("ok");
  });
});
