import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class ProdutoCategoria extends ModelBase {
  static tableName = "CategPro";
  static idColumn = "CdCategoria";

  CdCategoria!: string;
  NmCategoria!: string;
  CdDepartamento!: number;
  FgListaPreco!: string;
  DtUltAlteracao!: Date;
  Mensagem!: string;
  PercDescMaxGerente!: number;
  PercDescMaxVendedor!: number;

  static getFields() {
    return [
      "CdCategoria",
      "NmCategoria",
      "CdDepartamento",
      "FgListaPreco",
      "DtUltAlteracao",
      "Mensagem",
      "PercDescMaxGerente",
      "PercDescMaxVendedor",
    ];
  }
}

ProdutoCategoria.knex(connections.plano);

export type TProdutoCategoria = ModelObject<ProdutoCategoria>;
