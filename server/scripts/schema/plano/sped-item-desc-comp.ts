import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedItemDescComp extends ModelBase {
  static tableName = "SpedItemDescComp";
  static idColumn = [];

  CdFilial!: number;
  CdEmitente!: number;
  TipoEmitente!: string;
  NumDocumento!: number;
  Serie!: string;
  SubSerie!: string;
  Modelo!: string;
  NumECF!: number;
  Sequencia!: number;
  DescComplementar!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "CdEmitente",
      "TipoEmitente",
      "NumDocumento",
      "Serie",
      "SubSerie",
      "Modelo",
      "NumECF",
      "Sequencia",
      "DescComplementar",
      ];
  }
}

SpedItemDescComp.knex(connections.plano);

export type TSpedItemDescComp = ModelObject<SpedItemDescComp>;
