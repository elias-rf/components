import { Pks } from "@er/types";
import { isId } from "@er/utils/src/is-id";
import { isNumber } from "@er/utils/src/is-number";
import { renameToFieldTuple } from "@er/utils/src/rename-fields";
import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { validateIsThrow } from "../../lib/validate-is-throw";
import { validateThrow } from "../../lib/validate-throw";

export class EstoqueModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "estoque");
  }

  increment({ id, quantidade }: { id: Pks; quantidade: number }) {
    validateIsThrow(isNumber(quantidade), "produto dever ser string");
    validateThrow(isId(id, this.entity));

    return super
      .knex(super.table)
      .increment("EstAtual", quantidade)
      .where(renameToFieldTuple(id, this.entity))
      .returning(["EstAtual"]);
  }
}
