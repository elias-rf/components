import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { TNfSaidaFvModel } from "../nf-saida-fv/nf-saida-fv.type";
import { nfSaidaMethods } from "./model-methods";
import { nf_saida } from "./nf-saida.table";
import type { TNfSaidaModel } from "./nf-saida.type";

export function nfSaidaModelFactory({
  connections,
  nfSaidaFvModel,
}: {
  connections: TConnections;
  nfSaidaFvModel: TNfSaidaFvModel;
}): TNfSaidaModel {
  const connection = connections[nf_saida.database];
  const crud = crudFactory(connection, nf_saida);
  const methods = nfSaidaMethods({ connection, nfSaidaFvModel });

  const model = {
    connection,
    table: nf_saida,
    query: { ...crud.query, ...methods.query },
    mutation: { ...crud.mutation, ...methods.mutation },
  };

  return model;
}
