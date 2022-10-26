import { Schema } from "../../types";
import { isEmpty } from "../../utils/identify/is-empty";
import { fetcherRpc } from "../lib/http/fetcher-rpc";

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
    return fetcherRpc("transferenciaDiarioSchema");
  },
  async diario(inicio: string, fim: string): Promise<any[]> {
    if (isEmpty(inicio) || isEmpty(fim)) {
      return [];
    }
    const response: any = await fetcherRpc("transferenciaDiario", {
      inicio,
      fim,
    });
    return response;
  },

  async schemaMensal() {
    return fetcherRpc("transferenciaMensalSchema");
  },

  async mensal(mes: string): Promise<any[]> {
    if (isEmpty(mes)) {
      return [];
    }
    const response: any = await fetcherRpc("transferenciaMensal", {
      mes,
    });

    return response;

    if (isEmpty(response)) {
      return [];
    }
  },

  async schemaModelo(): Promise<Schema> {
    return fetcherRpc("transferenciaModeloSchema");
  },

  async modelo(data: string): Promise<any[]> {
    if (isEmpty(data)) {
      return [];
    }
    return fetcherRpc("transferenciaModelo", { data });
  },

  async create(controles: string[]): Promise<any> {
    return fetcherRpc("transferenciaCreate", { controles });
  },
};