import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TAgendaTelefone } from "./agenda-telefone.type";

export class AgendaTelefoneModel extends Entity<TAgendaTelefone> {
  constructor(connections: TConnections) {
    super(connections, "agenda_telefone");
  }
}
