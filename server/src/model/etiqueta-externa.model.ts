import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TEtiquetaExternaRecord = {
  etiqueta_externa_id?: string;
  quantidade?: string;
  data_fabricacao?: string;
};

export class EtiquetaExternaModel extends EntityModel<TEtiquetaExternaRecord> {
  constructor(connections: TConnections) {
    super(connections, "etiquetaExterna");
  }
}
