import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TProduto } from "./produto.type";

export class ProdutoModel extends Entity<TProduto> {
  constructor(connections: TConnections) {
    super(connections, "produto");
  }
}
