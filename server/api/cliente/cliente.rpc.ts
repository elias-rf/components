import type { TConnections } from "../../../types";
import { TClienteRpc } from "../../../types/cliente.type";
import { crudModel } from "../crud/crud.model";
import { clienteModel } from "./cliente.model";

const table = "cliente";

export function clienteRpc(connections: TConnections) {
  const crud = crudModel(connections);
  const model = clienteModel(connections);
  const rsp: TClienteRpc = {
    query: {
      // SCHEMA
      async schema() {
        return crud.schema({ table });
      },

      // CLEAR
      async clear() {
        return crud.clear({ table });
      },

      // LIST
      async list({ where, order, select, limit }) {
        return crud.list({ table, where, order, select, limit });
      },

      // READ
      async read({ id, select }) {
        return crud.read({ table, id, select });
      },

      async vendaMensalQuantidadeSchema({ inicio, fim }) {
        return model.query.vendaMensalQuantidadeSchema({ inicio, fim });
      },

      async vendaMensalValorSchema({ inicio, fim }) {
        return model.query.vendaMensalValorSchema({ inicio, fim });
      },

      async vendaMensalValorMedioSchema({ inicio, fim }) {
        return model.query.vendaMensalValorMedioSchema({ inicio, fim });
      },

      async vendaMensalQuantidade({ inicio, fim, cliente }) {
        return model.query.vendaMensalQuantidade({
          inicio,
          fim,
          cliente,
        });
      },

      async vendaMensalValor({ inicio, fim, cliente }) {
        return model.query.vendaMensalValor({
          inicio,
          fim,
          cliente,
        });
      },

      async vendaMensalValorMedio({ inicio, fim, cliente }) {
        return model.query.vendaMensalValorMedio({
          inicio,
          fim,
          cliente,
        });
      },
    },
    // mutation: {
    //   // DEL
    //   async clienteDel({ id }) {
    //     return crud.del({ table, id });
    //   },

    //   // CREATE
    //   async clienteCreate({ data }) {
    //     return crud.create({ table, data });
    //   },

    //   // UPDATE
    //   async clienteUpdate({ id, data }) {
    //     return crud.update({ table, id, data });
    //   },
    // },
  };

  return rsp;
}
