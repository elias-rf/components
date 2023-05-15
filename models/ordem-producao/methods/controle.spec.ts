import { controleFactory } from "./controle";

describe("controle", () => {
  const controle = controleFactory();
  it("controle", async () => {
    const rsp = await controle({
      ids: [{ id: "ordem_producao_id", value: 100 }],
      serie: "1",
    });

    expect(rsp).toEqual("000001000017");
  });
});
