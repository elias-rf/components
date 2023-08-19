import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadSacola extends ModelBase {
  static tableName = "CadSacola";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  CdCliente!: number;
  CdSacola!: number;
  Descricao!: string;
  CorSacola!: string;
  CdAlca!: number;
  CdFrenteVerso!: number;
  QtdeCliche!: number;
  CoreImpressao!: string;
  Foto!: string;
  Observacao!: string;


  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "CdCliente",
      "CdSacola",
      "Descricao",
      "CorSacola",
      "CdAlca",
      "CdFrenteVerso",
      "QtdeCliche",
      "CoreImpressao",
      "Foto",
      "Observacao",
      ];
  }
}

CadSacola.knex(connections.plano);

export type TCadSacola = ModelObject<CadSacola>;
