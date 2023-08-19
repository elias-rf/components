import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ParametrosAtu extends ModelBase {
  static tableName = "ParametrosAtu";
  static idColumn = ["Identificador"];

  Identificador!: number;
  UltEstacaoProcessada!: string;
  DtUltAtualizacao!: Date;
  HrUltAtualizacao!: Date;
  Intervalo!: number;
  

  static getFields() {
    return [
      "Identificador",
      "UltEstacaoProcessada",
      "DtUltAtualizacao",
      "HrUltAtualizacao",
      "Intervalo",
      ];
  }
}

ParametrosAtu.knex(connections.plano);

export type TParametrosAtu = ModelObject<ParametrosAtu>;
