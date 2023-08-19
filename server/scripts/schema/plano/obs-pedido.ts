import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ObsPedido extends ModelBase {
  static tableName = "ObsPedido";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  Tipo!: string;
  Sequencia!: number;
  Data!: Date;
  Horario!: Date;
  Usuario!: string;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "Tipo",
      "Sequencia",
      "Data",
      "Horario",
      "Usuario",
      "Observacao",
      ];
  }
}

ObsPedido.knex(connections.plano);

export type TObsPedido = ModelObject<ObsPedido>;
