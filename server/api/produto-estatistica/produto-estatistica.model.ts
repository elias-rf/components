import { Ids } from "../../../types";
import { TProdutoEstatistica } from "../../../types/produto-estatistica.type";
import { isId } from "../../../utils/is-id";
import { isNumber } from "../../../utils/is-number";
import { renameToFieldObject } from "../../../utils/rename-fields";
import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { validateIsThrow } from "../../lib/validate-is-throw";
import { validateThrow } from "../../lib/validate-throw";

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
