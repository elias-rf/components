import { TConnections } from "../dal/connections";
import { TProdutoCategoria } from "../type/produto-categoria.type";
import { Entity } from "./entity";

export class ProdutoCategoriaModel extends Entity<TProdutoCategoria> {
  constructor(connections: TConnections) {
    super(connections, "produto_categoria");
  }
}
