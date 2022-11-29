import { TConnections, TIds } from "../../../types";
import { isNumber } from "../../../utils/identify/is_number";
import { renameToFieldObject } from "../../../utils/schema/rename-fields";
import { isId } from "../../../utils/validate/is-id";
import { validateIsThrow } from "../../lib/validate-is-throw";
import { validateThrow } from "../../lib/validate-throw";
import { db } from "../db";

export function estoqueModel(connections: TConnections) {
  const knex = connections.plano;
  const entity = db.estoque;

  return {
    async increment({ id, quantidade }: { id: TIds; quantidade: number }) {
      validateIsThrow(isNumber(quantidade), "quantidade dever ser numérica");
      validateThrow(isId(id, entity.fields));

      const qry = await knex(entity.table)
        .increment("EstAtual", quantidade)
        .where(renameToFieldObject(id, entity))
        .returning(["EstAtual"]);
      return qry;
    },
  };
}
