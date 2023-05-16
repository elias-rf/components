import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { ordem_producao_operacao } from "./ordem-producao-operacao.table";

export class OrdemProducaoOperacaoModel extends CrudModel {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(
      connections[ordem_producao_operacao.database],
      ordem_producao_operacao
    );
    models.ordemProducaoOperacao = this;
  }
}
