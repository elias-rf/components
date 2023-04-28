import { Knex } from "knex";
import { validateIsThrow } from "../../../server/lib/validate-is-throw";
import { validateThrow } from "../../../server/lib/validate-throw";
import { TTableDef } from "../../../types";
import { isNumber } from "../../../utils/identify/is_number";
import { renameToFieldObject } from "../../../utils/schema/rename-fields";
import { isIdClient } from "../../../utils/zod/z-id-client";
import { TEstoqueIncrement } from "../estoque.type";
export function increment(
  connection: Knex,
  table: TTableDef
): TEstoqueIncrement {
  return async ({ id, quantidade }) => {
    validateIsThrow(isNumber(quantidade), "quantidade dever ser numérica");
    validateThrow(isIdClient(id, table.fields));

    const qry = await connection(table.table)
      .increment("EstAtual", quantidade)
      .where(renameToFieldObject(id, table.fields))
      .returning(["EstAtual"]);
    return { estoque_atual: qry[0].EstAtual };
  };
}
