import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class AssocFornecedor extends ModelBase {
  static tableName = "AssocFornecedor";
  static idColumn = [];

  CdProduto!: string;
  CdFornecedor!: number;
  CdReferencia!: string;
  QtdEmbalagem!: number;
  DtPriCompra!: Date;
  DtUltCompra!: Date;
  DtUltAlteracao!: Date;
  NroNf!: number;
  Serie!: string;
  

  static getFields() {
    return [
      "CdProduto",
      "CdFornecedor",
      "CdReferencia",
      "QtdEmbalagem",
      "DtPriCompra",
      "DtUltCompra",
      "DtUltAlteracao",
      "NroNf",
      "Serie",
      ];
  }
}

AssocFornecedor.knex(connections.plano);

export type TAssocFornecedor = ModelObject<AssocFornecedor>;
