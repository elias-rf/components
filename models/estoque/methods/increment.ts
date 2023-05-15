import { TTableDef } from "@/types";
import { knexId } from "@/utils/api/knex-id";
import { assertAny } from "@/utils/asserts/assert-any";
import { assertIds } from "@/utils/asserts/assert-ids";
import { isNumber } from "@/utils/identify/is-number";
import { Knex } from "knex";
import { TEstoqueIncrement } from "../estoque.type";
export function incrementFactory({
  connection,
  table,
}: {
  connection: Knex;
  table: TTableDef;
}): TEstoqueIncrement {
  return async ({ id, quantidade }) => {
    assertAny(isNumber(quantidade), "quantidade dever ser numérica");
    assertIds(id, table.fields);

    const qry = await connection(table.table)
      .increment("EstAtual", quantidade)
      .where(knexId(id, table.fields))
      .returning(["EstAtual"]);
    return { estoque_atual: qry[0].EstAtual };
  };
}
