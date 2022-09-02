import { TConnections } from "../dal/connections";
import { TMaquina } from "../type/maquina.type";
import { Entity } from "./entity";

export class MaquinaModel extends Entity<TMaquina> {
  constructor(connections: TConnections) {
    super(connections, "maquina");
  }
}
