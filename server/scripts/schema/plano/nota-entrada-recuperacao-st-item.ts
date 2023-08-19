import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaEntradaRecuperacaoStItem extends ModelBase {
  static tableName = "NotaEntradaRecuperacaoSTItem";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CdFornecedor!: number;
  Sequencia!: number;
  CdProduto!: string;
  Quantidade!: number;
  VlBaseCalculoST!: number;
  QuantidadeUtilizada!: number;
  VlICMSSTRecolhido!: number;
  VlICMSSTRecuperado!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "CdFornecedor",
      "Sequencia",
      "CdProduto",
      "Quantidade",
      "VlBaseCalculoST",
      "QuantidadeUtilizada",
      "VlICMSSTRecolhido",
      "VlICMSSTRecuperado",
      ];
  }
}

NotaEntradaRecuperacaoStItem.knex(connections.plano);

export type TNotaEntradaRecuperacaoStItem = ModelObject<NotaEntradaRecuperacaoStItem>;
