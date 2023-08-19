import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TabMovCCartao extends ModelBase {
  static tableName = "TabMovCCartao";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  Usuario!: string;
  DtBase!: Date;
  Sequencia!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  Bandeira!: number;
  CNPJCredenciadora!: number;
  TipoIntegracao!: number;
  NumAutorizacao!: string;
  CdCredenciadora!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "Usuario",
      "DtBase",
      "Sequencia",
      "NumNota",
      "Serie",
      "Modelo",
      "Bandeira",
      "CNPJCredenciadora",
      "TipoIntegracao",
      "NumAutorizacao",
      "CdCredenciadora",
      ];
  }
}

TabMovCCartao.knex(connections.plano);

export type TTabMovCCartao = ModelObject<TabMovCCartao>;
