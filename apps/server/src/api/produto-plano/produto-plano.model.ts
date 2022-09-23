import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TProdutoPlano } from "./produto-plano.type";

export class ProdutoPlanoModel extends Entity<TProdutoPlano> {
  constructor(connections: TConnections) {
    super(connections, "produto_plano");
  }
}
