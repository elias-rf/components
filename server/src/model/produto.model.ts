import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TProduto = {
  kProduto?: string;
  fkCategoria?: string;
  NomeComercial?: string;
};

export class ProdutoModel extends EntityModel<TProduto> {
  constructor(connections: TConnections) {
    super(connections, "produto");
  }
}
