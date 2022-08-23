import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TAgendaTelefone = {
  agenda_telefone_id?: string;
  nome?: string;
  setor?: string;
  email?: string;
};

export class AgendaTelefoneModel extends EntityModel<TAgendaTelefone> {
  constructor(connections: TConnections) {
    super(connections, "agenda_telefone");
  }
}
