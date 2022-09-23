import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TEmpregado } from "./empregado.type";

export class EmpregadoModel extends Entity<TEmpregado> {
  constructor(connections: TConnections) {
    super(connections, "empregado");
  }
}
