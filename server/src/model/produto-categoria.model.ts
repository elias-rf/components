import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TProdutoCategoria = {
  CdCategoria?: string;
  NmCategoria?: string;
  CdDepartamento?: string;
};

export class ProdutoCategoriaModel extends EntityModel<TProdutoCategoria> {
  constructor(connections: TConnections) {
    super(connections, "produtoCategoria");
  }
}
