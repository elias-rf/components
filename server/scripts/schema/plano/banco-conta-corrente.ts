import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class BancoContaCorrente extends ModelBase {
  static tableName = "BancoContaCorrente";
  static idColumn = [];

  NumBanco!: number;
  NumAgencia!: number;
  NumContaCorrente!: string;
  NmTitular!: string;
  SubConta!: string;
  DVConta!: string;
  DVAgenciaConta!: string;
  NumConvenio!: string;
  NumContratoCaucao!: string;
  SiglaEmpresa!: string;
  IdEmpresa!: string;
  NumCarteira!: number;
  CdFilialAssociada!: number;
  FgAtivo!: string;
  DtUltFechamento!: Date;
  ComplementoConta!: string;
  FgCaixa!: string;
  NumRemessa!: number;
  DVContratoCaucao!: string;
  BorderoCobranca!: number;
  FgHomologacao!: string;
  NumVariacaoCarteira!: number;
  PrazoCompensacaoExtrato!: number;
  

  static getFields() {
    return [
      "NumBanco",
      "NumAgencia",
      "NumContaCorrente",
      "NmTitular",
      "SubConta",
      "DVConta",
      "DVAgenciaConta",
      "NumConvenio",
      "NumContratoCaucao",
      "SiglaEmpresa",
      "IdEmpresa",
      "NumCarteira",
      "CdFilialAssociada",
      "FgAtivo",
      "DtUltFechamento",
      "ComplementoConta",
      "FgCaixa",
      "NumRemessa",
      "DVContratoCaucao",
      "BorderoCobranca",
      "FgHomologacao",
      "NumVariacaoCarteira",
      "PrazoCompensacaoExtrato",
      ];
  }
}

BancoContaCorrente.knex(connections.plano);

export type TBancoContaCorrente = ModelObject<BancoContaCorrente>;
