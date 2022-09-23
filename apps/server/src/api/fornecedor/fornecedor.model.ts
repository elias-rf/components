import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TFornecedor } from "./fornecedor.type";

export class FornecedorModel extends Entity<TFornecedor> {
  constructor(connections: TConnections) {
    super(connections, "fornecedor");
  }
}
