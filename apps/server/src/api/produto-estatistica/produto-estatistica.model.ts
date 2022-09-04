import { Ids } from "@er/types";
import { renamePk } from "@er/utils/src/rename-fields";
import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";

export class ProdutoEstatisticaModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "produto_estatistica");
  }

  async increment(id: Ids, quantidade: number): Promise<Ids> {
    return await this.knex(this.table)
      .increment("Entradas", quantidade)
      .where(renamePk(id, this.nameList, this.fieldList))
      .returning(["Entradas"]);
  }
}
