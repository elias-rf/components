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

type TTransferenciaService = {
  schemaDiario(): Promise<TFieldClient>;
  diario(args: { inicio: string; fim: string }): Promise<any[]>;
  schemaMensal(): Promise<TFieldClient>;
  mensal(args: { mes: string }): Promise<any[]>;
  schemaModelo(): Promise<TFieldClient[]>;
  modelo(args: { data: string }): Promise<any[]>;
  create(args: { controles: string[] }): Promise<any>;
};

export const transferenciaService: TTransferenciaService = {
  async schemaDiario() {
    return fetcherRpc.query("nfSaidaTransferenciaDiarioSchema");
  },
  async diario(args): Promise<any[]> {
    if (isEmpty(args.inicio) || isEmpty(args.fim)) {
      return [];
    }
    const response: any = await fetcherRpc.query(
      "nfSaidaTransferenciaDiario",
      args
    );
    return response;
  },

  async schemaMensal() {
    return fetcherRpc.query("nfSaidaTransferenciaMensalSchema");
  },

  async mensal(args) {
    if (isEmpty(args.mes)) {
      return [];
    }
    const response: any = await fetcherRpc.query(
      "nfSaidaTransferenciaMensal",
      args
    );

    if (isEmpty(response)) {
      return [];
    }

    return response;
  },

  async schemaModelo() {
    return fetcherRpc.query("nfSaidaTransferenciaModeloSchema");
  },

  async modelo(args) {
    if (isEmpty(args.data)) {
      return [];
    }
    return fetcherRpc.query("nfSaidaTransferenciaModelo", args);
  },

  async create(args) {
    return fetcherRpc.mutation("nfEntradaTransferenciaCreate", args);
  },
};
