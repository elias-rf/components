import { Pks } from "@er/types";
import { isNumber } from "@er/utils/src/is-number";
import { renamePk } from "@er/utils/src/rename-fields";
import { TConnections } from "../../dal/connections";
import { isId } from "../../lib/is-id";
import { validateIsThrow } from "../../lib/validate-is-throw";
import { validateThrow } from "../../lib/validate-throw";
import { Entity } from "../../model/entity";

export class EstoqueModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "estoque");
  }

  increment(id: Pks, quantidade: number) {
    validateIsThrow(isNumber(quantidade), "produto dever ser string");
    validateThrow(isId(id, this.pks));

    return super
      .knex(super.table)
      .increment("EstAtual", quantidade)
      .where(renamePk(id, this.nameList, this.fieldList))
      .returning(["EstAtual"]);
  }
}
