import { trimAll } from "./trim-all";

describe("trimAll", () => {
  it("deve limpar 1 caracter", () => {
    expect(trimAll("#abc", "#")).toBe("abc");
    expect(trimAll("#abc#", "#")).toBe("abc");
    expect(trimAll("abc#", "#")).toBe("abc");
  });
  it("deve limpar 2 ou mais caracteres", () => {
    expect(trimAll("##abc", "#")).toBe("abc");
    expect(trimAll("####abc#####", "#")).toBe("abc");
    expect(trimAll("abc##", "#")).toBe("abc");
  });

  it("deve limpar textos", () => {
    expect(trimAll("@#abc", "@#")).toBe("abc");
    expect(trimAll("@#@#@#@#abc@#@#@#@#@#", "@#")).toBe("abc");
    expect(trimAll("abc@#@#", "@#")).toBe("abc");
  });
});
