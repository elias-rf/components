import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PedidoEtiquetaEntrega extends ModelBase {
  static tableName = "PedidoEtiquetaEntrega";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  TextoEtiqueta!: string;
  FgImpressao!: string;
  FgEtiquetaEnderecoEntrega!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "TextoEtiqueta",
      "FgImpressao",
      "FgEtiquetaEnderecoEntrega",
      ];
  }
}

PedidoEtiquetaEntrega.knex(connections.plano);

export type TPedidoEtiquetaEntrega = ModelObject<PedidoEtiquetaEntrega>;
