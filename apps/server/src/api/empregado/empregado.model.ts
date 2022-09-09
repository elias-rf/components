import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class EmpregadoModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "empregado");
  }
}
