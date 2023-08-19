import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadPlacasCaminhao extends ModelBase {
  static tableName = "CadPlacasCaminhao";
  static idColumn = ["NumPlaca"];

  NumPlaca!: string;
  NmVeiculo!: string;
  NmMotorista!: string;
  NumTara!: number;
  Unidade!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "NumPlaca",
      "NmVeiculo",
      "NmMotorista",
      "NumTara",
      "Unidade",
      "DtUltAlteracao",
      ];
  }
}

CadPlacasCaminhao.knex(connections.plano);

export type TCadPlacasCaminhao = ModelObject<CadPlacasCaminhao>;
