import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemPedidoAgenda extends ModelBase {
  static tableName = "ItemPedidoAgenda";
  static idColumn = [];

  CdFilial!: number;
  CdCliente!: number;
  NumPedido!: number;
  Sequencia!: number;
  CdProduto!: string;
  Posologia!: number;
  MedidaDoses!: string;
  NumDosesDia!: number;
  DtIniTratamento!: Date;
  DtProcessamento!: Date;
  DtUltContato!: Date;
  DtProxContato!: Date;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "CdCliente",
      "NumPedido",
      "Sequencia",
      "CdProduto",
      "Posologia",
      "MedidaDoses",
      "NumDosesDia",
      "DtIniTratamento",
      "DtProcessamento",
      "DtUltContato",
      "DtProxContato",
      "Observacao",
      ];
  }
}

ItemPedidoAgenda.knex(connections.plano);

export type TItemPedidoAgenda = ModelObject<ItemPedidoAgenda>;
