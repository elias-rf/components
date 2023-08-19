import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class GrupoFornecedores extends ModelBase {
  static tableName = "GrupoFornecedores";
  static idColumn = ["CdGrupo"];

  CdGrupo!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdGrupo",
      "Descricao",
      ];
  }
}

GrupoFornecedores.knex(connections.plano);

export type TGrupoFornecedores = ModelObject<GrupoFornecedores>;
