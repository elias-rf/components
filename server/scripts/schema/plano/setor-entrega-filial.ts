import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SetorEntregaFilial extends ModelBase {
  static tableName = "SetorEntregaFilial";
  static idColumn = [];

  CdSetorEntrega!: number;
  CdFilial!: number;
  ImpressoraOrdemSeparacao!: string;
  FgAtivo!: string;
  DtUltAtualizacao!: Date;
  

  static getFields() {
    return [
      "CdSetorEntrega",
      "CdFilial",
      "ImpressoraOrdemSeparacao",
      "FgAtivo",
      "DtUltAtualizacao",
      ];
  }
}

SetorEntregaFilial.knex(connections.plano);

export type TSetorEntregaFilial = ModelObject<SetorEntregaFilial>;
