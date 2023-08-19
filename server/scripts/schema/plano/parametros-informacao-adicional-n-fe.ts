import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ParametrosInformacaoAdicionalNFe extends ModelBase {
  static tableName = "ParametrosInformacaoAdicionalNFe";
  static idColumn = [];

  CdEmpresa!: number;
  UF!: string;
  CSTICMS!: number;
  Mensagem!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "UF",
      "CSTICMS",
      "Mensagem",
      ];
  }
}

ParametrosInformacaoAdicionalNFe.knex(connections.plano);

export type TParametrosInformacaoAdicionalNFe = ModelObject<ParametrosInformacaoAdicionalNFe>;
