import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { setProp } from "@/utils/object/set-prop";
import { vendedor } from "./vendedor.table";

export type TVendedorModel = {
  query: {
    list: VendedorModel["list"];
    read: VendedorModel["read"];
    clear: VendedorModel["clear"];
    count: VendedorModel["count"];
  };
  mutation: {
    increment: VendedorModel["increment"];
    create: VendedorModel["create"];
    update: VendedorModel["update"];
    del: VendedorModel["del"];
  };
};

export class VendedorModel extends CrudModel {
  constructor(args: { connections: TConnections; models: TModels }) {
    super(args.connections[vendedor.database], vendedor);
    this.register(args);
  }

  register = (args: { connections: TConnections; models: TModels }) => {
    const { models } = args;
    setProp(models, "vendedor.query.list", this.list);
    setProp(models, "vendedor.query.read", this.read);
    setProp(models, "vendedor.query.clear", this.clear);
    setProp(models, "vendedor.query.count", this.count);
    setProp(models, "vendedor.mutation.create", this.create);
    setProp(models, "vendedor.mutation.update", this.update);
    setProp(models, "vendedor.mutation.del", this.del);
    setProp(models, "vendedor.mutation.increment", this.increment);
    return models;
  };
}
