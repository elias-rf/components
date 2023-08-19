import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ComissaoFabricante extends ModelBase {
  static tableName = "ComissaoFabricante";
  static idColumn = [];

  CDVendedor!: number;
  CDFornecedor!: number;
  PercComisAVista!: number;
  PercComisAPrazo!: number;
  

  static getFields() {
    return [
      "CDVendedor",
      "CDFornecedor",
      "PercComisAVista",
      "PercComisAPrazo",
      ];
  }
}

ComissaoFabricante.knex(connections.plano);

export type TComissaoFabricante = ModelObject<ComissaoFabricante>;
