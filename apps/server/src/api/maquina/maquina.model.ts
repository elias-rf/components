import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";
import { TMaquina, TMaquinaId } from "./maquina.type";

export class MaquinaModel extends Entity<TMaquinaId, TMaquina> {
  constructor(connections: TConnections) {
    super(connections, "maquina");
  }
}
