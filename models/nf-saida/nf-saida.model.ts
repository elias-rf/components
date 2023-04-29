import { crudFactory } from "@mono/utils/crud/crud.factory";
import type { TConnections } from "../connections";
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

  const model: TNfSaidaModel = {
    query: {
      list: (args) => crud.query.list(args),
      read: (args) => crud.query.read(args),
      transferenciaDiario: (args) => methods.query.transferenciaDiario(args),
      transferenciaMensal: (args) => methods.query.transferenciaMensal(args),
      transferenciaModelo: (args) => methods.query.transferenciaModelo(args),
      vendaAnalitico: (args) => methods.query.vendaAnalitico(args),
      vendaDiario: (args) => methods.query.vendaDiario(args),
      vendaMensalCliente: (args) => methods.query.vendaMensalCliente(args),
    },
    mutation: {
      create: (args) => crud.mutation.create(args),
      update: (args) => crud.mutation.update(args),
      del: (args) => crud.mutation.del(args),
    },
  };

  return model;
}
