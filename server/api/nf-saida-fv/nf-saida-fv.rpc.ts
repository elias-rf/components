import { TConnections, TFieldClient } from "../../../types";
import { TNfSaidaFvRpc } from "../../../types/nf-saida-fv.type";
import { nfSaidaFvModel } from "./nf-saida-fv.model";

export function nfSaidaFvRpc(connections: TConnections): TNfSaidaFvRpc {
  const model = nfSaidaFvModel(connections);

  return {
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

      // VENDA MENSAL
      async vendaMensalCliente({
        inicio,
        fim,
        cliente,
      }: {
        inicio: string;
        fim: string;
        cliente: number;
      }): Promise<any[]> {
        return model.query.vendaMensalCliente({
          inicio,
          fim,
          cliente,
        });
      },

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

      async vendaAnaliticoSchema(): Promise<TFieldClient[]> {
        return model.query.vendaAnaliticoSchema();
      },
    },
    mutation: {
      // DEL
      async del({ id }) {
        return model.mutation.del({ id });
      },

      // CREATE
      async create({ data }) {
        return model.mutation.create({ data });
      },

      // UPDATE
      async update({ id, data }) {
        return model.mutation.update({ id, data });
      },
    },
  };
}
