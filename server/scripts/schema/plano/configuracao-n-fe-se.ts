import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoNFeSe extends ModelBase {
  static tableName = "ConfiguracaoNFeSe";
  static idColumn = ["CdFilial"];

  CdFilial!: number;
  VersaoXML!: string;
  Ambiente!: number;
  CaminhoNfeSe!: string;
  CertificadoNfeSe!: string;
  UsuarioNfeSe!: string;
  SenhaNfeSe!: string;
  ProxyNfeSe!: string;
  LicencaNfeSe!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "VersaoXML",
      "Ambiente",
      "CaminhoNfeSe",
      "CertificadoNfeSe",
      "UsuarioNfeSe",
      "SenhaNfeSe",
      "ProxyNfeSe",
      "LicencaNfeSe",
      ];
  }
}

ConfiguracaoNFeSe.knex(connections.plano);

export type TConfiguracaoNFeSe = ModelObject<ConfiguracaoNFeSe>;
