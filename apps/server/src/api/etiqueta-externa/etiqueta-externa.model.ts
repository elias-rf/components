import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";

export class EtiquetaExternaModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "etiqueta_externa");
  }
}
