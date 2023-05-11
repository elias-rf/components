import type { TConnections } from "@/config/connections";
import { TIds } from "@/types";
import { assertIds } from "@/utils/asserts/assert-ids";
import { crudFactory } from "@/utils/crud/crud.factory";
import { renameToFieldObject } from "@/utils/schema/rename-fields";
import { zd, zod } from "@/utils/zod/zod";
import { tables } from "../tables";
import { produto_estatistica } from "./produto-estatistica.table";

export function produtoEstatisticaModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[produto_estatistica.database];
  const crud = crudFactory(connection, produto_estatistica);

  const model = {
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,

      async increment({ ids, quantidade }: { ids: TIds; quantidade: number }) {
        assertIds(ids, produto_estatistica.fields);
        zod(quantidade, zd.number());
        const connections = crud.connection;
        const entity = tables.produto_estatistica;
        const knex = connections;

        const qry = await knex(entity.table)
          .increment("Entradas", quantidade)
          .where(renameToFieldObject(ids, tables.produto_estatistica.fields))
          .returning(["Entradas"]);
        const rsp = qry[0];
        if (rsp) return { entrada: rsp.Entradas || null };
        return { entrada: null };
      },
    },
    connection,
    produto_estatistica,
  };

  return model;
}
