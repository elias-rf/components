import { Id } from "@er/types";
import { idSchema, idToWhere, validator, z } from "@er/utils/src";
import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TEstoqueRecord = {
  filial_id?: string;
  produto_id?: string;
  estoque?: string;
};

export class EstoqueModel extends EntityModel<TEstoqueRecord> {
  constructor(connections: TConnections) {
    super(connections, "estoque");
  }

  increment(id: Id<TEstoqueRecord>, quantidade: number) {
    validator(id, "id", idSchema);
    validator(quantidade, "quantidade", z.number());

    return super
      .knex(super.table)
      .increment("EstAtual", quantidade)
      .where(idToWhere(super.id, id))
      .returning(["EstAtual"]);
  }
}
