import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { agenda_telefone } from "./agenda-telefone.table";

export class AgendaTelefoneModel extends CrudModel {
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
