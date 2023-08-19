import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Ocorrencia extends ModelBase {
  static tableName = "tOcorrencia";
  static idColumn = ["kOcorrencia"];

  kOcorrencia!: number;
  TipoOcorrencia!: string;
  OrigemOcorrencia!: string;
  Descricao!: string;
  DataDescricao!: Date;
  UsuarioDescricao!: string;
  Analise!: string;
  DataAnalise!: Date;
  UsuarioAnalise!: string;
  Solucao!: string;
  DataSolucao!: Date;
  UsuarioSolucao!: string;
  PrazoImplemSolucao!: Date;
  DataImplemSolucao!: Date;
  UsuarioImplemSolucao!: string;
  AcaoPreventiva!: string;
  DataAcao!: Date;
  UsuarioAcao!: string;
  PrazoImplemAcao!: Date;
  DataImplemAcao!: Date;
  UsuarioImplemAcao!: string;
  Verificacao!: string;
  DataVerificacao!: Date;
  UsuarioVerificacao!: string;

  static getFields() {
    return [
      "kOcorrencia",
      "TipoOcorrencia",
      "OrigemOcorrencia",
      "Descricao",
      "DataDescricao",
      "UsuarioDescricao",
      "Analise",
      "DataAnalise",
      "UsuarioAnalise",
      "Solucao",
      "DataSolucao",
      "UsuarioSolucao",
      "PrazoImplemSolucao",
      "DataImplemSolucao",
      "UsuarioImplemSolucao",
      "AcaoPreventiva",
      "DataAcao",
      "UsuarioAcao",
      "PrazoImplemAcao",
      "DataImplemAcao",
      "UsuarioImplemAcao",
      "Verificacao",
      "DataVerificacao",
      "UsuarioVerificacao",
    ];
  }
}

Ocorrencia.knex(connections.oftalmo);

export type TOcorrencia = ModelObject<Ocorrencia>;
