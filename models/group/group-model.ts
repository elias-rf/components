import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { grupo } from "./group.table";

export class GroupModel extends CrudModel {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[grupo.database], grupo);
    models.group = this;
  }
}
