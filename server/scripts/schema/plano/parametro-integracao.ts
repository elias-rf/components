import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ParametroIntegracao extends ModelBase {
  static tableName = "ParametroIntegracao";
  static idColumn = ["CdEmpresa"];

  CdEmpresa!: number;
  SMTPServer!: string;
  POP3Server!: string;
  NomeRemetente!: string;
  EnderecoRemetente!: string;
  NomeUsuario!: string;
  SenhaUsuario!: string;
  IntExecucao!: number;
  TpIntExecucao!: string;
  IntSelecao!: number;
  TpIntSelecao!: string;
  FgConexaocomAutenticacao!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "SMTPServer",
      "POP3Server",
      "NomeRemetente",
      "EnderecoRemetente",
      "NomeUsuario",
      "SenhaUsuario",
      "IntExecucao",
      "TpIntExecucao",
      "IntSelecao",
      "TpIntSelecao",
      "FgConexaocomAutenticacao",
      ];
  }
}

ParametroIntegracao.knex(connections.plano);

export type TParametroIntegracao = ModelObject<ParametroIntegracao>;
