import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NFe2GCorrecao extends ModelBase {
  static tableName = "NFe2GCorrecao";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  Serie!: string;
  Modelo!: string;
  NumNota!: number;
  Sequencia!: number;
  Data!: Date;
  Correcao!: string;
  Usuario!: string;
  Status!: number;
  NumProtocolo!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "Serie",
      "Modelo",
      "NumNota",
      "Sequencia",
      "Data",
      "Correcao",
      "Usuario",
      "Status",
      "NumProtocolo",
      ];
  }
}

NFe2GCorrecao.knex(connections.plano);

export type TNFe2GCorrecao = ModelObject<NFe2GCorrecao>;
