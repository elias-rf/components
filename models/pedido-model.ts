import { Pedido } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class PedidoModel extends CrudObjection {
  constructor() {
    super(Pedido);
  }
}

export const pedidoModel = new PedidoModel();
