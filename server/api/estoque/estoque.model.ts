import { db } from "../../../schema";
import { TConnections } from "../../../types";
import { TEstoqueIds, TEstoqueRpc } from "../../../types/estoque.type";
import { isNumber } from "../../../utils/identify/is_number";
import { renameToFieldObject } from "../../../utils/schema/rename-fields";
import { isIdClient } from "../../../utils/validate/is-id";
import { validateIsThrow } from "../../lib/validate-is-throw";
import { validateThrow } from "../../lib/validate-throw";
import { crudModel } from "../crud/crud.model";

const table = "estoque";

export function estoqueModel(connections: TConnections): TEstoqueRpc {
  const knex = connections.plano;
  const entity = db.estoque;
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

      async increment({
        id,
        quantidade,
      }: {
        id: TEstoqueIds;
        quantidade: number;
      }) {
        validateIsThrow(isNumber(quantidade), "quantidade dever ser numérica");
        validateThrow(isIdClient(id, entity.fields));

        const qry = await knex(entity.table)
          .increment("EstAtual", quantidade)
          .where(renameToFieldObject(id, entity.fields))
          .returning(["EstAtual"]);
        return { estoque_atual: qry[0].EstAtual };
      },
    },
  };
}
