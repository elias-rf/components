import { TConnections } from "../dal/connections";
import { TProdutoControle } from "../type/produto-controle.type";
import { Entity } from "./entity";

export class ProdutoControleModel extends Entity<TProdutoControle> {
  constructor(connections: TConnections) {
    super(connections, "produto_controle");
  }
}
