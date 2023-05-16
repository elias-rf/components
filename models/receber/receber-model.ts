import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { setProp } from "@/utils/object/set-prop";
import { receber } from "./receber.table";

export type TReceberModel = {
  query: {
    list: ReceberModel["list"];
    read: ReceberModel["read"];
    clear: ReceberModel["clear"];
    count: ReceberModel["count"];
  };
  mutation: {
    increment: ReceberModel["increment"];
    create: ReceberModel["create"];
    update: ReceberModel["update"];
    del: ReceberModel["del"];
  };
};

export class ReceberModel extends CrudModel {
  constructor(args: { connections: TConnections; models: TModels }) {
    super(args.connections[receber.database], receber);
    this.register(args);
  }

  register = (args: { connections: TConnections; models: TModels }) => {
    const { models } = args;
    setProp(models, "receber.query.list", this.list);
    setProp(models, "receber.query.read", this.read);
    setProp(models, "receber.query.clear", this.clear);
    setProp(models, "receber.query.count", this.count);
    setProp(models, "receber.mutation.create", this.create);
    setProp(models, "receber.mutation.update", this.update);
    setProp(models, "receber.mutation.del", this.del);
    setProp(models, "receber.mutation.increment", this.increment);
    return models;
  };
}
