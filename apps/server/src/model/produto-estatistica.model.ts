import { Ids } from "@er/types";
import { idToWhere } from "@er/utils/src/id-to-where";
import { TConnections } from "../dal/connections";
import { TProdutoEstatistica } from "../type/produto-estatistica.type";
import { Entity } from "./entity";

export class ProdutoEstatisticaModel extends Entity<TProdutoEstatistica> {
  constructor(connections: TConnections) {
    super(connections, "produto_estatistica");
  }

  async increment(
    id: Ids<TProdutoEstatistica>,
    quantidade: number
  ): Promise<Ids<TProdutoEstatistica>> {
    return await this.knex(this.table)
      .increment("Entradas", quantidade)
      .where(idToWhere(this.pks, id))
      .returning(["Entradas"]);
  }
}
