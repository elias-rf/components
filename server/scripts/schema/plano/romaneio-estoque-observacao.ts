import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class RomaneioEstoqueObservacao extends ModelBase {
  static tableName = "RomaneioEstoqueObservacao";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumRomaneio!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumRomaneio",
      "Observacao",
      ];
  }
}

RomaneioEstoqueObservacao.knex(connections.plano);

export type TRomaneioEstoqueObservacao = ModelObject<RomaneioEstoqueObservacao>;
