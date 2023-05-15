import type { TConnections } from "@/config/connections";
import { agenda_telefone } from "@/models/agenda-telefone/agenda-telefone.table";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { setProp } from "@/utils/object/set-prop";

export type TAgendaTelefoneModel = {
  query: {
    list: AgendaTelefoneModel["list"];
    read: AgendaTelefoneModel["read"];
  };
  mutation: {
    update: AgendaTelefoneModel["update"];
  };
};

export class AgendaTelefoneModel extends CrudModel {
  constructor(args: { connections: TConnections; models: TModels }) {
    super(args.connections[agenda_telefone.database], agenda_telefone);
    this.register(args);
  }

  register = (args: { connections: TConnections; models: TModels }) => {
    const { models } = args;
    setProp(models, "agendaTelefone.query.list", this.list);
    setProp(models, "agendaTelefone.query.read", this.read);
    setProp(models, "agendaTelefone.mutation.update", this.update);
    return models;
  };
}
