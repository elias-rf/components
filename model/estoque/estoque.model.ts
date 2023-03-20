import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { estoque } from "./estoque.table";
import type { TEstoqueModel } from "./estoque.type";
//#region import
import { validateIsThrow } from "../../server/lib/validate-is-throw";
import { validateThrow } from "../../server/lib/validate-throw";
import { isNumber } from "../../utils/identify/is_number";
import { renameToFieldObject } from "../../utils/schema/rename-fields";
import { isIdClient } from "../../utils/validate/is-id";
import { tables } from "../tables";

//#endregion

export function estoqueModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TEstoqueModel {
  const connection = connections[estoque.database];
  const crud = crudFactory(connection, estoque);

  //#region def
  const entity = tables.estoque;
  //#endregion

  const model = {
    query: {
      ...crud.query,
      //#region query
      //#endregion
    },
    mutation: {
      ...crud.mutation,
      //#region mutation
      async increment({ id, quantidade }) {
        validateIsThrow(isNumber(quantidade), "quantidade dever ser numérica");
        validateThrow(isIdClient(id, entity.fields));
        const knex = crud.connection;
        const qry = await knex(entity.table)
          .increment("EstAtual", quantidade)
          .where(renameToFieldObject(id, entity.fields))
          .returning(["EstAtual"]);
        return { estoque_atual: qry[0].EstAtual };
      },
      //#endregion
    },
    connection,
    estoque,
  } as TEstoqueModel;

  return model;
}

//#region other
//#endregion
