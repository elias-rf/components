import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { nfSaidaFvMethods } from "./model-methods";
import { nf_saida_fv } from "./nf-saida-fv.table";
export function nfSaidaFvModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[nf_saida_fv.database];
  const crud = crudFactory(connection, nf_saida_fv);
  const methods = nfSaidaFvMethods({ connection });
  const model = {
    query: {
      ...crud.query,
      ...methods.query,
    },
    mutation: {
      ...crud.mutation,
      ...methods.mutation,
    },
    connection,
    table: nf_saida_fv,
  };

  return model;
}

export type TNfSaidaFvModel = ReturnType<typeof nfSaidaFvModelFactory>;
