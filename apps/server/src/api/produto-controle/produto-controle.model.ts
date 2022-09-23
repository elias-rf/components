import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TProdutoControle } from "./produto-controle.type";

export class ProdutoControleModel extends Entity<TProdutoControle> {
  constructor(connections: TConnections) {
    super(connections, "produto_controle");
  }
}
