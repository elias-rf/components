import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MarcaProdutos extends ModelBase {
  static tableName = "MarcaProdutos";
  static idColumn = ["CdMarca"];

  CdMarca!: number;
  Descricao!: string;
  FgListaPreco!: string;
  

  static getFields() {
    return [
      "CdMarca",
      "Descricao",
      "FgListaPreco",
      ];
  }
}

MarcaProdutos.knex(connections.plano);

export type TMarcaProdutos = ModelObject<MarcaProdutos>;
