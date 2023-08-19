import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadProMvaEstado extends ModelBase {
  static tableName = "CadProMVAEstado";
  static idColumn = [];

  CdFilial!: number;
  CdProduto!: string;
  Uf!: string;
  PercMVA!: number;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "CdProduto",
      "Uf",
      "PercMVA",
      "DtUltAlteracao",
      ];
  }
}

CadProMvaEstado.knex(connections.plano);

export type TCadProMvaEstado = ModelObject<CadProMvaEstado>;
