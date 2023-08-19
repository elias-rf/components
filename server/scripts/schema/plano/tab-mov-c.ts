import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TabMovC extends ModelBase {
  static tableName = "TabMovC";
  static idColumn = [];

  CdFilial!: number;
  Usuario!: string;
  DtBase!: Date;
  SeqLan!: number;
  Horario!: Date;
  Serie!: string;
  TipDoc!: string;
  CdRecebimento!: number;
  NmCartao!: string;
  NroPDV!: number;
  NumCartao!: string;
  NumDoc!: number;
  Operacao!: string;
  VlLancamento!: number;
  TipLan!: string;
  Atualizacao!: string;
  FgSituacao!: string;
  TipoOperacao!: string;
  FgRecebido!: string;
  DtUltAlteracao!: Date;
  FgPendente!: string;
  VlComissao!: number;
  PercComissao!: number;
  NumPedido!: number;
  CdVendedor!: number;
  Historico!: string;
  CdSetor!: number;
  SeqCaixa!: number;
  Modelo!: string;
  NumMapa!: number;
  FgMovimentoTroco!: string;
  TipoDocumento!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "Usuario",
      "DtBase",
      "SeqLan",
      "Horario",
      "Serie",
      "TipDoc",
      "CdRecebimento",
      "NmCartao",
      "NroPDV",
      "NumCartao",
      "NumDoc",
      "Operacao",
      "VlLancamento",
      "TipLan",
      "Atualizacao",
      "FgSituacao",
      "TipoOperacao",
      "FgRecebido",
      "DtUltAlteracao",
      "FgPendente",
      "VlComissao",
      "PercComissao",
      "NumPedido",
      "CdVendedor",
      "Historico",
      "CdSetor",
      "SeqCaixa",
      "Modelo",
      "NumMapa",
      "FgMovimentoTroco",
      "TipoDocumento",
      ];
  }
}

TabMovC.knex(connections.plano);

export type TTabMovC = ModelObject<TabMovC>;
