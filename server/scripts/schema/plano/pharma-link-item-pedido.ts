import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PharmaLinkItemPedido extends ModelBase {
  static tableName = "PharmaLinkItemPedido";
  static idColumn = [];

  NumAutorizacao!: number;
  CdProdutoPharmaLink!: string;
  CdProduto!: string;
  Quantidade!: number;
  VlBruto!: number;
  VlLoja!: number;
  VlPharmaLink!: number;
  VlReceberLoja!: number;
  Desconto!: number;
  DtRetorno!: Date;
  CdStatus!: number;
  

  static getFields() {
    return [
      "NumAutorizacao",
      "CdProdutoPharmaLink",
      "CdProduto",
      "Quantidade",
      "VlBruto",
      "VlLoja",
      "VlPharmaLink",
      "VlReceberLoja",
      "Desconto",
      "DtRetorno",
      "CdStatus",
      ];
  }
}

PharmaLinkItemPedido.knex(connections.plano);

export type TPharmaLinkItemPedido = ModelObject<PharmaLinkItemPedido>;
