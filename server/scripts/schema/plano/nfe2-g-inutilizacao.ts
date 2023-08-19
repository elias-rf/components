import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Nfe2GInutilizacao extends ModelBase {
  static tableName = "Nfe2GInutilizacao";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  MotivoInutilizacao!: string;
  DtInutilizacao!: Date;
  UsuarioInutilizacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "MotivoInutilizacao",
      "DtInutilizacao",
      "UsuarioInutilizacao",
      ];
  }
}

Nfe2GInutilizacao.knex(connections.plano);

export type TNfe2GInutilizacao = ModelObject<Nfe2GInutilizacao>;
