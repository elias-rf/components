import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";
import { TFornecedor, TFornecedorId } from "./fornecedor.type";

export class FornecedorModel extends Entity<TFornecedorId, TFornecedor> {
  constructor(connections: TConnections) {
    super(connections, "fornecedor");
  }
}
