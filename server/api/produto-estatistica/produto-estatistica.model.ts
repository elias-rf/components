import { db } from "../../../schema";
import { TConnections } from "../../../types";
import { TProdutoEstatisticaRpc } from "../../../types/produto-estatistica.type";
import { renameToFieldObject } from "../../../utils/schema/rename-fields";
import { crudModel } from "../crud/crud.model";

const table = "produto_estatistica";

export function produtoEstatisticaModel(
  connections: TConnections
): TProdutoEstatisticaRpc {
  const knex = connections.plano;
  const crud = crudModel(connections);

  return {
    query: {
      async schema() {
        return crud.schema({ table });
      },
      async clear() {
        return crud.clear({ table });
      },
      async list({ where, order, select, limit }) {
        return crud.list({ table, where, order, select, limit });
      },
      async read({ id, select }) {
        return crud.read({ table, id, select });
      },
    },
    mutation: {
      async del({ id }) {
        return crud.del({ table, id });
      },
      async create({ data }) {
        return crud.create({ table, data });
      },
      async update({ id, data }) {
        return crud.update({ table, id, data });
      },
      async increment({ id, quantidade }) {
        const entity = db.produto_estatistica;
        // validateIsThrow(isNumber(quantidade), "quantidade dever ser numérica");
        // validateThrow(isId(id, this.entity));

        return await knex(entity.table)
          .increment("Entradas", quantidade)
          .where(renameToFieldObject(id, db.produto_estatistica.fields))
          .returning(["Entradas"]);
      },
    },
  };
}
