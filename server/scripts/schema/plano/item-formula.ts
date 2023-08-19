import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemFormula extends ModelBase {
  static tableName = "ItemFormula";
  static idColumn = [];

  CdFilial!: number;
  NumFormula!: number;
  CdProduto!: string;
  Sequencia!: number;
  Quantidade!: number;
  TipoQuantidade!: string;
  QuantidadeEfetiva!: number;
  VlVenda!: number;
  Equivalencia!: number;
  FormulaConversao!: string;
  Correcao!: number;
  FgEmbalagem!: string;
  FgQsp!: string;
  Diluicao!: number;
  CdLote!: string;
  FgCapsula!: string;
  CdFornecedor!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumFormula",
      "CdProduto",
      "Sequencia",
      "Quantidade",
      "TipoQuantidade",
      "QuantidadeEfetiva",
      "VlVenda",
      "Equivalencia",
      "FormulaConversao",
      "Correcao",
      "FgEmbalagem",
      "FgQsp",
      "Diluicao",
      "CdLote",
      "FgCapsula",
      "CdFornecedor",
      ];
  }
}

ItemFormula.knex(connections.plano);

export type TItemFormula = ModelObject<ItemFormula>;
