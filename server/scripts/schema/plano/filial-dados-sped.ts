import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FilialDadosSped extends ModelBase {
  static tableName = "FilialDadosSped";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  CdObrigacaoRecolher!: number;
  CdReceita!: string;
  DtUltAtualizacao!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "CdObrigacaoRecolher",
      "CdReceita",
      "DtUltAtualizacao",
      ];
  }
}

FilialDadosSped.knex(connections.plano);

export type TFilialDadosSped = ModelObject<FilialDadosSped>;
