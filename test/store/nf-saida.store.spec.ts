import { nfSaidaStore } from "../../model/nf-saida/nf-saida.store";

describe("nfSaidaStore", () => {
  it("setTransferenciaCreate", async () => {
    await nfSaidaStore
      .getState()
      .getTransferenciaDiario({ inicio: "2020-01-01", fim: "2020-01-01" });
    expect(nfSaidaStore.getState().dataTransferenciaDiario).toEqual([
      { cat1: 10, dia: "2020-01-01" },
    ]);
  });
});
