import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";

export class AgendaTelefoneModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "agenda_telefone");
  }
}
