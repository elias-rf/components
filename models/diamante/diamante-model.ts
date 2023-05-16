import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { setProp } from "@/utils/object/set-prop";
import { diamante } from "./diamante.table";

export type TDiamanteModel = {
  query: {
    list: DiamanteModel["list"];
    read: DiamanteModel["read"];
    clear: DiamanteModel["clear"];
    count: DiamanteModel["count"];
  };
  mutation: {
    increment: DiamanteModel["increment"];
    create: DiamanteModel["create"];
    update: DiamanteModel["update"];
    del: DiamanteModel["del"];
  };
};

export class DiamanteModel extends CrudModel {
  constructor(args: { connections: TConnections; models: TModels }) {
    super(args.connections[diamante.database], diamante);
    this.register(args);
  }

  register = (args: { connections: TConnections; models: TModels }) => {
    const { models } = args;
    setProp(models, "diamante.query.list", this.list);
    setProp(models, "diamante.query.read", this.read);
    setProp(models, "diamante.query.clear", this.clear);
    setProp(models, "diamante.query.count", this.count);
    setProp(models, "diamante.mutation.create", this.create);
    setProp(models, "diamante.mutation.update", this.update);
    setProp(models, "diamante.mutation.del", this.del);
    setProp(models, "diamante.mutation.increment", this.increment);
    return models;
  };
}
