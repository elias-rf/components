import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ExcMp extends ModelBase {
  static tableName = "ExcMP";
  static idColumn = [];

  CdFilial!: number;
  NroPDV!: number;
  NumCupom!: number;
  Serie!: string;
  CdTipoVenda!: number;
  DtEmissao!: Date;
  DtReal!: Date;
  Horario!: Date;
  CdVendedor!: number;
  CdCaixa!: number;
  CdCliente!: number;
  CdFuncionario!: number;
  VlTotal!: number;
  VlDesconto!: number;
  VlDescGer!: number;
  CupomRef!: number;
  NumCRM!: number;
  FgSituacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NroPDV",
      "NumCupom",
      "Serie",
      "CdTipoVenda",
      "DtEmissao",
      "DtReal",
      "Horario",
      "CdVendedor",
      "CdCaixa",
      "CdCliente",
      "CdFuncionario",
      "VlTotal",
      "VlDesconto",
      "VlDescGer",
      "CupomRef",
      "NumCRM",
      "FgSituacao",
      ];
  }
}

ExcMp.knex(connections.plano);

export type TExcMp = ModelObject<ExcMp>;
