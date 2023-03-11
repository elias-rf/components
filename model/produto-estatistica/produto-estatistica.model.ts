
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { produto_estatistica } from "./produto-estatistica.table";
import type { TProdutoEstatisticaModel } from "./produto-estatistica.type";
//#region import
import { renameToFieldObject } from "../../utils/schema/rename-fields";
import { z, zod } from "../../utils/zod/z";
import { zIdClient } from "../../utils/zod/z-id-client";
import { tables } from "../tables";
//#endregion

export function produtoEstatisticaModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TProdutoEstatisticaModel {

  const connection = connections[produto_estatistica.database]
  const crud = crudFactory(
    connection,
    produto_estatistica
  );

  //#region def
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
        zIdClient(id, produto_estatistica.fields);
        zod(quantidade, z.number());
        const connections = crud.connection();
        const entity = tables.produto_estatistica;
        const knex = connections;

        const qry = await knex(entity.table)
          .increment("Entradas", quantidade)
          .where(renameToFieldObject(id, tables.produto_estatistica.fields))
          .returning(["Entradas"]);
        const rsp = qry[0];
        if (rsp) return { entrada: rsp.Entradas || null };
        return { entrada: null };
      },
      //#endregion
    },
    connection,
    produto_estatistica,
  } as TProdutoEstatisticaModel;

  return model
}

//#region other
//#endregion
