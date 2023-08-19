import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoOperador extends ModelBase {
  static tableName = "ProducaoOperador";
  static idColumn = ["CdOperador"];

  CdOperador!: number;
  NmOperador!: string;
  FgAtivo!: string;
  

  static getFields() {
    return [
      "CdOperador",
      "NmOperador",
      "FgAtivo",
      ];
  }
}

ProducaoOperador.knex(connections.plano);

export type TProducaoOperador = ModelObject<ProducaoOperador>;
