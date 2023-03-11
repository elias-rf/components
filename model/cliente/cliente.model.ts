import deepmerge from "ts-deepmerge";
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { cliente } from "./cliente.table";
import type { TClienteModel } from "./cliente.type";
//#region import
import { TNfSaidaRpc } from "../nf-saida/nf-saida.type";
import { clienteMethods } from "./model-methods";
//#endregion

export function clienteModelFactory(
  //#region inject
  {
    connections,
    nfSaidaModel,
  }: {
    connections: TConnections;
    nfSaidaModel: TNfSaidaRpc;
  }
): //#endregion
TClienteModel {
  const connection = connections[cliente.database];
  const crud = crudFactory(connection, cliente);

  //#region def
  //#endregion

  return deepmerge(
    { connection, cliente },
    crud,
    //#region query
    clienteMethods({ nfSaidaModel })
    //#endregion
  );
}

//#region other

//#endregion
