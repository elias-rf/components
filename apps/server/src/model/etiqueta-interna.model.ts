import { TConnections } from "../dal/connections";
import { TEtiquetaInterna } from "../type/etiqueta-interna.type";
import { Entity } from "./entity";

export class EtiquetaInternaModel extends Entity<TEtiquetaInterna> {
  constructor(connections: TConnections) {
    super(connections, "etiqueta_interna");
  }
}
