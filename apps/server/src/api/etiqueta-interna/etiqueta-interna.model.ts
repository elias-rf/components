import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";
import { TEtiquetaInterna, TEtiquetaInternaId } from "./etiqueta-interna.type";

export class EtiquetaInternaModel extends Entity<
  TEtiquetaInternaId,
  TEtiquetaInterna
> {
  constructor(connections: TConnections) {
    super(connections, "etiqueta_interna");
  }
}
