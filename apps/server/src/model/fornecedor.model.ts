import { TConnections } from "../dal/connections";
import { TFornecedor } from "../type/fornecedor.type";
import { Entity } from "./entity";

export class FornecedorModel extends Entity<TFornecedor> {
  constructor(connections: TConnections) {
    super(connections, "fornecedor");
  }
}
