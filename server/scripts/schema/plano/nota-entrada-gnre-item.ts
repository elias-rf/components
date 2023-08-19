import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaEntradaGnreItem extends ModelBase {
  static tableName = "NotaEntradaGNREItem";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CdFornecedor!: number;
  CdProduto!: string;
  ClassificacaoProduto!: string;
  VlPMC!: number;
  PercRedBaseSTPMC!: number;
  PercMVA!: number;
  PercRedBaseSTMVA!: number;
  PercReducaoICMS!: number;
  VlBaseCalculoICMS!: number;
  AliquotaICMS!: number;
  VlICMS!: number;
  VlBaseCalculoICMSSub!: number;
  AliquotaICMSSub!: number;
  VlICMSSub!: number;
  VlICMSRecolher!: number;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "CdFornecedor",
      "CdProduto",
      "ClassificacaoProduto",
      "VlPMC",
      "PercRedBaseSTPMC",
      "PercMVA",
      "PercRedBaseSTMVA",
      "PercReducaoICMS",
      "VlBaseCalculoICMS",
      "AliquotaICMS",
      "VlICMS",
      "VlBaseCalculoICMSSub",
      "AliquotaICMSSub",
      "VlICMSSub",
      "VlICMSRecolher",
      "DtUltAlteracao",
      ];
  }
}

NotaEntradaGnreItem.knex(connections.plano);

export type TNotaEntradaGnreItem = ModelObject<NotaEntradaGnreItem>;
