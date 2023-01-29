import { TConnections } from "../../../types";
import { TEsterilizacaoExternaRpc } from "../../../types/esterilizacao-externa.type";
import { esterilizacaoExternaModel } from "./esterilizacao-externa.model";

export function esterilizacaoExternaRpc(connections: TConnections) {
  const model = esterilizacaoExternaModel(connections);
  const rsp: TEsterilizacaoExternaRpc = {
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
        return model.query.list({
          where,
          order,
          select,
          limit,
        });
      },

      // READ
      async read({ id, select }) {
        return model.query.read({ id, select });
      },

      // SCHEMA DIARIO
      async schemaDiario() {
        return model.query.schemaDiario();
      },

      // SCHEMA MENSAL
      async schemaMensal() {
        return model.query.schemaMensal();
      },

      // SCHEMA PRODUTO
      async schemaProduto() {
        return model.query.schemaProduto();
      },

      // SCHEMA MODELO
      async schemaModelo() {
        return model.query.schemaModelo();
      },

      // DIARIO
      async diario({
        inicio,
        fim,
      }: {
        inicio: string;
        fim: string;
      }): Promise<any[]> {
        return model.query.diario({ inicio, fim });
      },

      // MENSAL
      async mensal({ mes }: { mes: string }): Promise<any[]> {
        return model.query.mensal({ mes });
      },

      // MODELO
      async modelo({
        data,
        produto,
      }: {
        data: string;
        produto: string;
      }): Promise<any[]> {
        return model.query.modelo({ data, produto });
      },

      // PRODUTO
      async produto({ data }: { data: string }): Promise<any[]> {
        return model.query.produto({ data });
      },
    },
    mutation: {
      // CREATE
      async create({ data }) {
        return model.mutation.create({ data });
      },

      // UPDATE
      async update({ id, data }) {
        return model.mutation.update({ id, data });
      },

      // DEL
      async del({ id }) {
        return model.mutation.del({ id });
      },
    },
  };

  return rsp;
}
