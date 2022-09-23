import { Ids } from "@er/types";
import { isId } from "@er/utils/src/is-id";
import { isNumber } from "@er/utils/src/is-number";
import { renameToFieldObject } from "@er/utils/src/rename-fields";
import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { validateIsThrow } from "../../lib/validate-is-throw";
import { validateThrow } from "../../lib/validate-throw";
import { TEstoque } from "./estoque.type";

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
