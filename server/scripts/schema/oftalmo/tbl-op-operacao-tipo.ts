import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpOperacaoTipo extends ModelBase {
  static tableName = "tbl_OP_Operacao_tipo";
  static idColumn = ["kOperacao"];

  kOperacao!: number;
  Descricao!: string;
  Grupo!: number;
  Ordem!: number;
  ProxOP!: number;
  ProxOPPU!: number;
  ProxOPRet!: number;
  ehRetrabalho!: number;
  

  static getFields() {
    return [
      "kOperacao",
      "Descricao",
      "Grupo",
      "Ordem",
      "ProxOP",
      "ProxOPPU",
      "ProxOPRet",
      "ehRetrabalho",
      ];
  }
}

TblOpOperacaoTipo.knex(connections.oftalmo);

export type TTblOpOperacaoTipo = ModelObject<TblOpOperacaoTipo>;
