import { nfEntradaStore } from "../../model/nf-entrada/nf-entrada.store";
import { delCreateAux } from "../aux/aux";

const nfEntradaStore = nfEntradaStore;

describe("nfEntradaStore", () => {
  it("setTransferenciaCreate", async () => {
    await delCreateAux("nf_entrada_controle", {
      del: [{ nota_id: "00000100" }],
    });
    await delCreateAux("nf_entrada", {
      del: [{ nota_id: "00000100" }],
    });
    await delCreateAux("produto_controle", {
      del: [{ produto_plano_id: 1 }],
    });
    await delCreateAux("nf_entrada_item", {
      del: [{ nota_id: "00000100" }],
    });
    //--
    const rsp = await nfEntradaStore.getState().setTransferenciaCreate({
      controles: ["000001000017"],
    });
    expect(rsp).toEqual(true);
  });
});
