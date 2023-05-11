import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { TNfSaidaFvModel } from "../nf-saida-fv/nf-saida-fv.model";
import { nfSaidaMethods } from "./model-methods";
import { nf_saida } from "./nf-saida.table";

export function nfSaidaModelFactory({
  connections,
  nfSaidaFvModel,
}: {
  connections: TConnections;
  nfSaidaFvModel: TNfSaidaFvModel;
}) {
  const connection = connections[nf_saida.database];
  const crud = crudFactory(connection, nf_saida);
  const methods = nfSaidaMethods({ connection, nfSaidaFvModel });

  const model = {
    query: {
      list: crud.query.list,
      read: crud.query.read,
      transferenciaDiario: methods.query.transferenciaDiario,
      transferenciaMensal: methods.query.transferenciaMensal,
      transferenciaModelo: methods.query.transferenciaModelo,
      vendaAnalitico: methods.query.vendaAnalitico,
      vendaDiario: methods.query.vendaDiario,
      vendaMensalCliente: methods.query.vendaMensalCliente,
    },
    mutation: {
      create: crud.mutation.create,
      update: crud.mutation.update,
      del: crud.mutation.del,
    },
  };

  return model;
}

export type TNfSaidaModel = ReturnType<typeof nfSaidaModelFactory>;
