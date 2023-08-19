import { PedidoItem } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class PedidoItemModel extends CrudObjection {
  constructor() {
    super(PedidoItem);
  }
}

export const pedidoItemModel = new PedidoItemModel();
