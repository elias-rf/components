import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TProdutoPlano = {
  CdProduto?: string;
  Descricao?: string;
  CdDepartamento?: string;
  CdCategoria?: string;
  CdGrupo?: string;
  CdSubGrupo?: string;
  FgAtivo?: string;
  FgEstoque?: string;
  CdFabricante?: string;
  Unidade?: string;
  CodiGONCM?: string;
  FgEstatistica?: string;
};

export class ProdutoPlanoModel extends EntityModel<TProdutoPlano> {
  constructor(connections: TConnections) {
    super(connections, "produto");
  }
}
