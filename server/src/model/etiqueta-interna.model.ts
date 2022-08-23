import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type EtiquetaInternaRecord = {
  controle_id?: string;
  produto_item_id?: string;
  data?: string;
};

export class EtiquetaInternaModel extends EntityModel<EtiquetaInternaRecord> {
  constructor(connections: TConnections) {
    super(connections, "etiquetaInterna");
  }
}
