import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblSistemaGrupoImpressao extends ModelBase {
  static tableName = "tbl_Sistema_Grupo_impressao";
  static idColumn = [];

  Grupo!: string;
  fkObjeto!: string;
  

  static getFields() {
    return [
      "Grupo",
      "fkObjeto",
      ];
  }
}

TblSistemaGrupoImpressao.knex(connections.oftalmo);

export type TTblSistemaGrupoImpressao = ModelObject<TblSistemaGrupoImpressao>;
