import { Ids } from "../../../types";
import { isId } from "../../../utils/is-id";
import { isNumber } from "../../../utils/is-number";
import { renameToFieldObject } from "../../../utils/rename-fields";
import { TConnections } from "../../dal/connections";
import { validateIsThrow } from "../../lib/validate-is-throw";
import { validateThrow } from "../../lib/validate-throw";
import { entitySchema } from "../entity-schema";

export function estoqueModel(connections: TConnections) {
  const knex = connections.plano;
  const entity = entitySchema.estoque;

  return {
    async increment({ id, quantidade }: { id: Ids; quantidade: number }) {
      validateIsThrow(isNumber(quantidade), "quantidade dever ser numérica");
      validateThrow(isId(id, entity));

      const qry = await knex(entity.table)
        .increment("EstAtual", quantidade)
        .where(renameToFieldObject(id, entity))
        .returning(["EstAtual"]);
      return qry;
    },
  };
}
