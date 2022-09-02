import { TConnections } from "../dal/connections";
import { TAgendaTelefone } from "../type/agenda-telefone.type";
import { Entity } from "./entity";

export class AgendaTelefoneModel extends Entity<TAgendaTelefone> {
  constructor(connections: TConnections) {
    super(connections, "agenda_telefone");
  }
}
