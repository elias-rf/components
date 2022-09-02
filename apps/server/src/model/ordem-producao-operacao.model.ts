import { TConnections } from "../dal/connections";
import { TOrdemProducaoOperacao } from "../type/ordem-producao-operacao.type";
import { Entity } from "./entity";

export class OrdemProducaoOperacaoModel extends Entity<TOrdemProducaoOperacao> {
  constructor(connections: TConnections) {
    super(connections, "ordem_producao_operacao");
  }
}
