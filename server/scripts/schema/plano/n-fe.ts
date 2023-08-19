import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NFe extends ModelBase {
  static tableName = "NFe";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  DtSolicitacao!: Date;
  DtAutorizacao!: Date;
  Situacao!: string;
  fgDanfe!: string;
  AutorExpedida!: string;
  ChaveNFe!: string;
  ReciboNFe!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "DtSolicitacao",
      "DtAutorizacao",
      "Situacao",
      "fgDanfe",
      "AutorExpedida",
      "ChaveNFe",
      "ReciboNFe",
      ];
  }
}

NFe.knex(connections.plano);

export type TNFe = ModelObject<NFe>;
