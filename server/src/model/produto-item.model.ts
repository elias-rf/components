import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TProdutoItem = {
  kProdutoItem?: string;
  NomeProdutoItem?: string;
  fkProduto?: string;
  idVisiontech?: string; // código do produto no Plano
};

export class ProdutoItemModel extends EntityModel<TProdutoItem> {
  constructor(connections: TConnections) {
    super(connections, "produtoItem");
  }
}
