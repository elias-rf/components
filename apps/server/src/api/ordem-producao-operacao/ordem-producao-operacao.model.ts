import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TOrdemProducaoOperacao } from "./ordem-producao-operacao.type";

export class OrdemProducaoOperacaoModel extends Entity<TOrdemProducaoOperacao> {
  constructor(connections: TConnections) {
    super(connections, "ordem_producao_operacao");
  }
}
