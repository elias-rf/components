import { TConnections, TFieldClient } from "../../../types";
import { TNfSaidaRpc } from "../../../types/nf-saida.type";
import { nfSaidaModel } from "./nf-saida.model";

export function nfSaidaRpc(connections: TConnections) {
  const model = nfSaidaModel(connections);

  const rsp: TNfSaidaRpc = {
    query: {
      // SCHEMA
      async schema() {
        return model.query.schema();
      },

      // CLEAR
      async clear() {
        return model.query.clear();
      },

      // LIST
      async list({ where, order, select, limit }) {
        return model.query.list({ where, order, select, limit });
      },

      // READ
      async read({ id, select }) {
        return model.query.read({ id, select });
      },

      // TRANSFERENCIA DIARIO
      async transferenciaDiario({ inicio, fim }): Promise<any[]> {
        return model.query.transferenciaDiario({ inicio, fim });
      },
      async transferenciaDiarioSchema(): Promise<TFieldClient[]> {
        return model.query.transferenciaDiarioSchema();
      },

      // TRANSFERENCIA MENSAL
      async transferenciaMensal({ mes }: { mes: string }): Promise<any[]> {
        return model.query.transferenciaMensal({ mes });
      },
      async transferenciaMensalSchema(): Promise<TFieldClient[]> {
        return model.query.transferenciaMensalSchema();
      },

      // TRANSFERENCIA MODELO
      async transferenciaModelo({ data }: { data: string }): Promise<any[]> {
        return model.query.transferenciaModelo({ data });
      },

      // VENDA DIARIO
      async vendaDiario({
        inicio,
        fim,
        uf,
      }: {
        inicio: string;
        fim: string;
        uf: string[];
      }): Promise<any[]> {
        return model.query.vendaDiario({
          inicio,
          fim,
          uf,
        });
      },
      async vendaDiarioSchema(): Promise<TFieldClient[]> {
        return model.query.vendaDiarioSchema();
      },

      /*** VENDA MENSAL ***/
      async vendaMensalCliente({
        inicio,
        fim,
        cliente,
      }: {
        inicio: string;
        fim: string;
        cliente: number;
      }): Promise<any[]> {
        return model.query.vendaMensalCliente({ inicio, fim, cliente });
      },

      /*** VENDA MENSAL SCHEMA ***/
      async vendaMensalClienteSchema(): Promise<TFieldClient[]> {
        return model.query.vendaMensalClienteSchema();
      },

      // VENDA ANALITICO
      async vendaAnalitico({
        inicio,
        fim,
      }: {
        inicio: string;
        fim: string;
      }): Promise<any[]> {
        return model.query.vendaAnalitico({ inicio, fim });
      },

      // VENDA ANALITICO SCHEMA
      async vendaAnaliticoSchema(): Promise<TFieldClient[]> {
        return model.query.vendaAnaliticoSchema();
      },

      // TRANSFERENCIA MODELO SCHEMA
      async transferenciaModeloSchema(): Promise<TFieldClient[]> {
        return model.query.transferenciaModeloSchema();
      },
    },
    // mutation: {
    //   // DEL
    //   async nfSaidaDel({ id }) {
    //     return model.mutation.nfSaidaDel({ id });
    //   },

    //   // CREATE
    //   async nfSaidaCreate({ data }) {
    //     return model.mutation.nfSaidaCreate({ data });
    //   },

    //   // UPDATE
    //   async nfSaidaUpdate({ id, data }) {
    //     return model.mutation.nfSaidaUpdate({ id, data });
    //   },
    // },
  };
  return rsp;
}
