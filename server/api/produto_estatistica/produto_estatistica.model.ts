import { TIds } from "../../../types";
import { renameToFieldObject } from "../../../utils/schema/rename-fields";
import { TConnections } from "../../dal/connections";
import { db } from "../db";

export function produtoEstatisticaModel(connections: TConnections) {
  const knex = connections.plano;

  return {
    async increment({
      id,
      quantidade,
    }: {
      id: TIds;
      quantidade: number;
    }): Promise<TIds> {
      const entity = db.produto_estatistica;
      // validateIsThrow(isNumber(quantidade), "quantidade dever ser numérica");
      // validateThrow(isId(id, this.entity));

      return await knex(entity.table)
        .increment("Entradas", quantidade)
        .where(renameToFieldObject(id, db.produto_estatistica))
        .returning(["Entradas"]);
    },
  };
}
