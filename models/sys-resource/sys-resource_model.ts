import type { TConnections } from "@/config/connections";
import type { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { sys_resource } from "./sys-resource_table";
import type { TSysResource } from "./sys-resource_type";

export class SysResourceModel extends CrudModel<TSysResource> {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[sys_resource.database], sys_resource);
    models.sysResource = this;
  }
}
