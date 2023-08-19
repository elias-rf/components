import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblProdutoDesenho extends ModelBase {
  static tableName = "tbl_Produto_Desenho";
  static idColumn = ["fkProduto"];

  fkProduto!: number;
  Tipo!: string;
  DesenhoTecnico!: any;
  EtiquetaS600!: string;
  EtiquetaS4M!: string;
  EtiquetaInternaPrimParam!: number;
  EtiquetaInternaSegParam!: number;
  EtiquetaExterna1!: string;
  EtiquetaExterna2!: string;
  EtiquetaExterna3!: string;
  EtiquetaExterna4!: string;
  EtiquetaExterna5!: string;
  EtiquetaExterna6!: string;
  EtiquetaExterna7!: string;
  

  static getFields() {
    return [
      "fkProduto",
      "Tipo",
      "DesenhoTecnico",
      "EtiquetaS600",
      "EtiquetaS4M",
      "EtiquetaInternaPrimParam",
      "EtiquetaInternaSegParam",
      "EtiquetaExterna1",
      "EtiquetaExterna2",
      "EtiquetaExterna3",
      "EtiquetaExterna4",
      "EtiquetaExterna5",
      "EtiquetaExterna6",
      "EtiquetaExterna7",
      ];
  }
}

TblProdutoDesenho.knex(connections.oftalmo);

export type TTblProdutoDesenho = ModelObject<TblProdutoDesenho>;
