import { TTableDef } from "@/types";
import { assertAny } from "@/utils/asserts/assert-any";
import { assertIds } from "@/utils/asserts/assert-ids";
import { isNumber } from "@/utils/identify/is-number";
import { renameToFieldObject } from "@/utils/schema/rename-fields";
import { Knex } from "knex";
import { TEstoqueIncrement } from "../estoque.type";
export function increment(
  connection: Knex,
  table: TTableDef
): TEstoqueIncrement {
  return async ({ id, quantidade }) => {
    assertAny(isNumber(quantidade), "quantidade dever ser numérica");
    assertIds(id, table.fields);

    const qry = await connection(table.table)
      .increment("EstAtual", quantidade)
      .where(renameToFieldObject(id, table.fields))
      .returning(["EstAtual"]);
    return { estoque_atual: qry[0].EstAtual };
  };
}
