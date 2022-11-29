import { TFieldClient } from "../../types";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { isEmpty } from "../../utils/identify/is_empty";

// const fields = [
//   "LITEFLEX",
//   "HILITE",
//   "ENLITE",
//   "METILCELULOSE",
//   "CORNEAL RING",
//   "ANEL CAPSULAR",
// ];

export const transferenciaService = {
  async schemaDiario() {
    return fetcherRpc.query("nfSaidaTransferenciaDiarioSchema");
  },
  async diario(inicio: string, fim: string): Promise<any[]> {
    if (isEmpty(inicio) || isEmpty(fim)) {
      return [];
    }
    const response: any = await fetcherRpc.query("nfSaidaTransferenciaDiario", {
      inicio,
      fim,
    });
    return response;
  },

  async schemaMensal() {
    return fetcherRpc.query("nfSaidaTransferenciaMensalSchema");
  },

  async mensal(mes: string): Promise<any[]> {
    if (isEmpty(mes)) {
      return [];
    }
    const response: any = await fetcherRpc.query("nfSaidaTransferenciaMensal", {
      mes,
    });

    if (isEmpty(response)) {
      return [];
    }

    return response;
  },

  async schemaModelo(): Promise<TFieldClient[]> {
    return fetcherRpc.query("nfSaidaTransferenciaModeloSchema");
  },

  async modelo(data: string): Promise<any[]> {
    if (isEmpty(data)) {
      return [];
    }
    return fetcherRpc.query("nfSaidaTransferenciaModelo", { data });
  },

  async create(controles: string[]): Promise<any> {
    return fetcherRpc.mutation("nfEntradaTransferenciaCreate", { controles });
  },
};
