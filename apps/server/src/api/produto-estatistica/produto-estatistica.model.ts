import { Ids } from "@er/types";
import { isId } from "@er/utils/src/is-id";
import { isNumber } from "@er/utils/src/is-number";
import { renameToFieldObject } from "@er/utils/src/rename-fields";
import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { validateIsThrow } from "../../lib/validate-is-throw";
import { validateThrow } from "../../lib/validate-throw";
import { TProdutoEstatistica } from "./produto-estatistica.type";

export class ProdutoEstatisticaModel extends Entity<TProdutoEstatistica> {
  constructor(connections: TConnections) {
    super(connections, "produto_estatistica");
  }

  async increment({
    id,
    quantidade,
  }: {
    id: Ids;
    quantidade: number;
  }): Promise<Ids> {
    validateIsThrow(isNumber(quantidade), "quantidade dever ser numérica");
    validateThrow(isId(id, this.entity));

    return await this.knex(this.table)
      .increment("Entradas", quantidade)
      .where(renameToFieldObject(id, this.entity))
      .returning(["Entradas"]);
  }
}
