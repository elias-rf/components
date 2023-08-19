import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Cep extends ModelBase {
  static tableName = "Cep";
  static idColumn = ["CepInicial"];

  CepInicial!: number;
  CepFinal!: number;
  Descricao!: string;
  Regiao!: string;
  

  static getFields() {
    return [
      "CepInicial",
      "CepFinal",
      "Descricao",
      "Regiao",
      ];
  }
}

Cep.knex(connections.plano);

export type TCep = ModelObject<Cep>;
