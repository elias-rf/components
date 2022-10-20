import { Ids } from "../../../types";
import { renameToFieldObject } from "../../../utils/rename-fields";
import { TConnections } from "../../dal/connections";
import { entitySchema } from "../entity-schema";

export function produtoEstatisticaModel(connections: TConnections) {
  const knex = connections.plano;

  return {
    async increment({
      id,
      quantidade,
    }: {
      id: Ids;
      quantidade: number;
    }): Promise<Ids> {
      // validateIsThrow(isNumber(quantidade), "quantidade dever ser numérica");
      // validateThrow(isId(id, this.entity));

      return await knex("produto_estatistica")
        .increment("Entradas", quantidade)
        .where(renameToFieldObject(id, entitySchema.produto_estatistica))
        .returning(["Entradas"]);
    },
  };
}
