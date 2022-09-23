import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TEtiquetaExterna } from "./etiqueta-externa.type";

export class EtiquetaExternaModel extends Entity<TEtiquetaExterna> {
  constructor(connections: TConnections) {
    super(connections, "etiqueta_externa");
  }
}
