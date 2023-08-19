import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadproObservacaoCompra extends ModelBase {
  static tableName = "CadproObservacaoCompra";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  ObservacaoCompra!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdProduto",
      "ObservacaoCompra",
      "DtUltAlteracao",
      ];
  }
}

CadproObservacaoCompra.knex(connections.plano);

export type TCadproObservacaoCompra = ModelObject<CadproObservacaoCompra>;
