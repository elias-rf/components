import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EstoqueKit extends ModelBase {
  static tableName = "EstoqueKit";
  static idColumn = [];

  NumProducao!: string;
  CdProduto!: string;
  MestreKit!: string;
  DtFabricacao!: Date;
  DtValidade!: Date;
  Quantidade!: number;
  FgImprime!: string;
  CdFilial!: number;
  

  static getFields() {
    return [
      "NumProducao",
      "CdProduto",
      "MestreKit",
      "DtFabricacao",
      "DtValidade",
      "Quantidade",
      "FgImprime",
      "CdFilial",
      ];
  }
}

EstoqueKit.knex(connections.plano);

export type TEstoqueKit = ModelObject<EstoqueKit>;
