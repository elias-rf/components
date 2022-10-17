import { Ids } from "../../../types";
import { TEstoque } from "../../../types/estoque.type";
import { isId } from "../../../utils/is-id";
import { isNumber } from "../../../utils/is-number";
import { renameToFieldObject } from "../../../utils/rename-fields";
import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { validateIsThrow } from "../../lib/validate-is-throw";
import { validateThrow } from "../../lib/validate-throw";

export class EstoqueModel extends Entity<TEstoque> {
  constructor(connections: TConnections) {
    super(connections, "estoque");
  }

  async increment({ id, quantidade }: { id: Ids; quantidade: number }) {
    validateIsThrow(isNumber(quantidade), "quantidade dever ser numérica");
    validateThrow(isId(id, this.entity));

    const qry = await this.knex(this.table)
      .increment("EstAtual", quantidade)
      .where(renameToFieldObject(id, this.entity))
      .returning(["EstAtual"]);

    return qry;
  }
}
