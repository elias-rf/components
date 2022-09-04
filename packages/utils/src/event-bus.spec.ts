import { describe, expect, it } from "@jest/globals";
import { eventBus } from "./event-bus";

describe("eventBus", () => {
  it("deve cadastrar, emitir, receber, descadastrar eventos", () => {
    expect.assertions(1);
    const channel = eventBus<{
      teste: (e: boolean) => void;
      teste2: (e: boolean) => void;
    }>();
    const receiver = channel.on("teste", (e) => {
      expect(e).toBe(true);
    });
    channel.emit("teste", true);
    channel.emit("teste2", true);
    receiver();
    channel.emit("teste", true);
    channel.emit("teste2", true);
  });

  it("deve cadastrar, emitir, receber 1 evento", () => {
    expect.assertions(1);
    const channel = eventBus<{
      teste: (e: boolean) => void;
      teste2: (e: boolean) => void;
    }>();
    channel.once("teste", (e) => {
      expect(e).toBe(true);
    });
    channel.emit("teste", true);
    channel.emit("teste2", true);

    channel.emit("teste", true);
    channel.emit("teste2", true);
  });
  it("deve ter canais independentes", () => {
    expect.assertions(2);
    const channel1 = eventBus<{
      teste: (e: number) => void;
    }>();
    const channel2 = eventBus<{
      teste: (e: number) => void;
    }>();
    const close1 = channel1.on("teste", (e) => {
      expect(e).toBe(1);
    });
    const close2 = channel2.on("teste", (e) => {
      expect(e).toBe(1);
    });
    channel1.emit("teste", 1);
    channel2.emit("teste", 2);
    close1();
    close2();
    channel1.emit("teste", 1);
    channel2.emit("teste", 2);
  });

  it("deve ouvintes universais", () => {
    expect.assertions(3);
    const channel = eventBus<{
      teste: (e: boolean) => void;
      teste2: (e: boolean) => void;
      "*": (e: any) => void;
    }>();
    const receiver = channel.on("teste", (e) => {
      expect(e).toBe(true);
    });
    const masterReceiver = channel.on("*", (e) => {
      expect(e).toBe(true);
    });
    channel.emit("teste", true);
    channel.emit("teste2", true);
    receiver();
    masterReceiver();
    channel.emit("teste", true);
    channel.emit("teste2", true);
  });
});
