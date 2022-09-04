import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";

export class OrdemProducaoOperacaoModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "ordem_producao_operacao");
  }
}
