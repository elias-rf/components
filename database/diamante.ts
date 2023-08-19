import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class Diamante extends ModelBase {
  static tableName = "diamante";
  static idColumn = "id";

  id!: string;
  diamante!: string;
  tipo!: string;
  raio!: number;
  espessura!: number;
  fkMaquina!: number;
  fkFuncionario!: number;
  dataEntrada!: Date;
  ordemInicial!: number;
  dataSaida!: Date;
  ordemFinal!: number;
  qtdCortes!: number;

  static getFields() {
    return [
      "id",
      "diamante",
      "tipo",
      "raio",
      "espessura",
      "fkMaquina",
      "fkFuncionario",
      "dataEntrada",
      "ordemInicial",
      "dataSaida",
      "ordemFinal",
      "qtdCortes",
    ];
  }
}

Diamante.knex(connections.oftalmo);

export type TDiamante = ModelObject<Diamante>;
