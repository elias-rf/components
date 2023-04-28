import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { nfSaidaFvMethods } from "./model-methods";
import { nf_saida_fv } from "./nf-saida-fv.table";
import type { TNfSaidaFvModel } from "./nf-saida-fv.type";
export function nfSaidaFvModelFactory({
  connections,
}: {
  connections: TConnections;
}): TNfSaidaFvModel {
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
  } as TNfSaidaFvModel;

  return model;
}

//#region other
//#endregion
