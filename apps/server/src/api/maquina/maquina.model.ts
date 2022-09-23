import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TMaquina } from "./maquina.type";

export class MaquinaModel extends Entity<TMaquina> {
  constructor(connections: TConnections) {
    super(connections, "maquina");
  }
}
