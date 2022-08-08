import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type ProdutoPlanoRecord = {
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

export class ProdutoPlanoModel extends Model<ProdutoPlanoRecord> {
  constructor(connections: Connections) {
    super(
      connections.plano,
      "produto",
      "CadPro",
      ["CdProduto"],
      [
        "CdProduto",
        "Descricao",
        "CdDepartamento",
        "CdCategoria",
        "CdGrupo",
        "CdSubGrupo",
        "FgAtivo",
        "FgEstoque",
        "CdFabricante",
        "Unidade",
        "CodiGONCM",
        "FgEstatistica",
      ]
    );
  }
}
