import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblReclamacao extends ModelBase {
  static tableName = "tbl_Reclamacao";
  static idColumn = ["kReclamacao"];

  kReclamacao!: number;
  fkCliente!: number;
  TipoReclamacao!: string;
  Assunto!: string;
  Descricao!: string;
  DataDescricao!: Date;
  UsuarioDescricao!: string;
  Analise!: string;
  DataAnalise!: Date;
  UsuarioAnalise!: string;
  Solucao!: string;
  DataSolucao!: Date;
  UsuarioSolucao!: string;
  Verificacao!: string;
  DataVerificacao!: Date;
  UsuarioVerificacao!: string;
  Causa!: string;
  EmailNotif!: number;
  ts!: string;
  

  static getFields() {
    return [
      "kReclamacao",
      "fkCliente",
      "TipoReclamacao",
      "Assunto",
      "Descricao",
      "DataDescricao",
      "UsuarioDescricao",
      "Analise",
      "DataAnalise",
      "UsuarioAnalise",
      "Solucao",
      "DataSolucao",
      "UsuarioSolucao",
      "Verificacao",
      "DataVerificacao",
      "UsuarioVerificacao",
      "Causa",
      "EmailNotif",
      "ts",
      ];
  }
}

TblReclamacao.knex(connections.oftalmo);

export type TTblReclamacao = ModelObject<TblReclamacao>;
