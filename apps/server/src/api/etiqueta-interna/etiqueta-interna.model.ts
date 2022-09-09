import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class EtiquetaInternaModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "etiqueta_interna");
  }
}
