import { TConnections } from "../dal/connections";
import { TProduto } from "../type/produto.type";
import { Entity } from "./entity";

export class ProdutoModel extends Entity<TProduto> {
  constructor(connections: TConnections) {
    super(connections, "produto");
  }
}
