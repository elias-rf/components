import { Id } from "@er/types";
import { idToWhere } from "@er/utils/src/id-to-where";
import { idSchema, validator } from "@er/utils/src/validator";
import { z } from "@er/utils/src/zod";
import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type ProdutoEstatisticaRecord = {
  CdEmpresa?: number;
  MesRef?: string;
  AnoRef?: string;
  CdProduto?: string;
};

export class ProdutoEstatisticaModel extends EntityModel<ProdutoEstatisticaRecord> {
  constructor(connections: TConnections) {
    super(connections, "produtoEstatistica");
  }

  async increment(id: Id, quantidade: number): Promise<Id> {
    validator(id, "id", idSchema);
    validator(quantidade, "quantidade", z.number());
    const qry = await this.knex(this.table)
      .increment("Entradas", quantidade)
      .where(idToWhere(this.pk, id))
      .returning(["Entradas"]);
    return qry;
  }
}
