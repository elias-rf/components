import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TCliente } from "./cliente.type";

export class ClienteModel extends Entity<TCliente> {
  constructor(connections: TConnections) {
    super(connections, "cliente");
  }
}
