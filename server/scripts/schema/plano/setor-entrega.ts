import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SetorEntrega extends ModelBase {
  static tableName = "SetorEntrega";
  static idColumn = ["CdSetorEntrega"];

  CdSetorEntrega!: number;
  DescricaoSetorEntrega!: string;
  FgEntregaFutura!: string;
  DtUltAtualizacao!: Date;
  

  static getFields() {
    return [
      "CdSetorEntrega",
      "DescricaoSetorEntrega",
      "FgEntregaFutura",
      "DtUltAtualizacao",
      ];
  }
}

SetorEntrega.knex(connections.plano);

export type TSetorEntrega = ModelObject<SetorEntrega>;
