import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { pedido_item } from "./pedido-item.table";

export class PedidoItemModel extends CrudModel {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[pedido_item.database], pedido_item);
    models.pedidoItem = this;
  }
}
