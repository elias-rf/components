import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TEtiquetaInterna } from "./etiqueta-interna.type";

export class EtiquetaInternaModel extends Entity<TEtiquetaInterna> {
  constructor(connections: TConnections) {
    super(connections, "etiqueta_interna");
  }
}
