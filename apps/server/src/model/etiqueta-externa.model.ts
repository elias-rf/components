import { TConnections } from "../dal/connections";
import { TEtiquetaExterna } from "../type/etiqueta-externa.type";
import { Entity } from "./entity";

export class EtiquetaExternaModel extends Entity<TEtiquetaExterna> {
  constructor(connections: TConnections) {
    super(connections, "etiqueta_externa");
  }
}
