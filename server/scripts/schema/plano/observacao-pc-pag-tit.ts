import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ObservacaoPcPagTit extends ModelBase {
  static tableName = "ObservacaoPcPagTit";
  static idColumn = [];

  CdFilial!: number;
  NumDoc!: number;
  Serie!: string;
  Modelo!: string;
  SiglaDoc!: string;
  ItemDoc!: number;
  DtRecebimento!: Date;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumDoc",
      "Serie",
      "Modelo",
      "SiglaDoc",
      "ItemDoc",
      "DtRecebimento",
      "Observacao",
      ];
  }
}

ObservacaoPcPagTit.knex(connections.plano);

export type TObservacaoPcPagTit = ModelObject<ObservacaoPcPagTit>;
