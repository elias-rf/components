import type { TConnections } from "@/config/connections";
import type { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { agenda_telefone } from "./agenda-telefone.table";
import type { TAgendaTelefone } from "./agenda-telefone.type";

export class AgendaTelefoneModel extends CrudModel<TAgendaTelefone> {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[agenda_telefone.database], agenda_telefone);
    models.agendaTelefone = this;
  }
}
