import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MedicoVisitas extends ModelBase {
  static tableName = "MedicoVisitas";
  static idColumn = [];

  Crm!: string;
  DtVisita!: Date;
  Observacao!: string;
  CdConsultor!: number;
  DtUltAlteracao!: Date;
  TipoContato!: string;
  

  static getFields() {
    return [
      "Crm",
      "DtVisita",
      "Observacao",
      "CdConsultor",
      "DtUltAlteracao",
      "TipoContato",
      ];
  }
}

MedicoVisitas.knex(connections.plano);

export type TMedicoVisitas = ModelObject<MedicoVisitas>;
