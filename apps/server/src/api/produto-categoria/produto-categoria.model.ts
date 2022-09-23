import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TProdutoCategoria } from "./produto-categoria.type";

export class ProdutoCategoriaModel extends Entity<TProdutoCategoria> {
  constructor(connections: TConnections) {
    super(connections, "produto_categoria");
  }
}
