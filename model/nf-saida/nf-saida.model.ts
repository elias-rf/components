import deepmerge from "ts-deepmerge";
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { nf_saida } from "./nf-saida.table";
import type { TNfSaidaModel } from "./nf-saida.type";
//#region import
import { TNfSaidaFvModel } from "../nf-saida-fv/nf-saida-fv.type";
import { nfSaidaMethods } from "./model-methods";
//#endregion

export function nfSaidaModelFactory(
  //#region inject
  {
    connections,
    nfSaidaFvModel,
  }: {
    connections: TConnections;
    nfSaidaFvModel: TNfSaidaFvModel;
  }
): //#endregion
TNfSaidaModel {
  const connection = connections[nf_saida.database];
  const crud = crudFactory(connection, nf_saida);

  //#region def
  //#endregion
  return deepmerge(
    { connection, nf_saida },
    crud,
    //#region query
    nfSaidaMethods({ connection, nfSaidaFvModel })
    //#endregion
  );
}

//#region other
//#endregion
