import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";
import {
  TProdutoCategoria,
  TProdutoCategoriaId,
} from "./produto-categoria.type";

export class ProdutoCategoriaModel extends Entity<
  TProdutoCategoriaId,
  TProdutoCategoria
> {
  constructor(connections: TConnections) {
    super(connections, "produto_categoria");
  }
}
