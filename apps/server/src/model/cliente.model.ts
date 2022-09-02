import { TConnections } from "../dal/connections";
import { TCliente } from "../type/cliente.type";
import { Entity } from "./entity";

export class ClienteModel extends Entity<TCliente> {
  constructor(connections: TConnections) {
    super(connections, "cliente");
  }
}
