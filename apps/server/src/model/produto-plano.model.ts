import { TConnections } from "../dal/connections";
import { TProdutoPlano } from "../type/produto-plano.type";
import { Entity } from "./entity";

export class ProdutoPlanoModel extends Entity<TProdutoPlano> {
  constructor(connections: TConnections) {
    super(connections, "produto");
  }
}
