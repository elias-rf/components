import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoImagem extends ModelBase {
  static tableName = "ConfiguracaoImagem";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  IdImagem!: string;
  Tipo!: string;
  Imagem!: any;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "IdImagem",
      "Tipo",
      "Imagem",
      "DtUltAlteracao",
      ];
  }
}

ConfiguracaoImagem.knex(connections.plano);

export type TConfiguracaoImagem = ModelObject<ConfiguracaoImagem>;
