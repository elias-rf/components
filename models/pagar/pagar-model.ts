import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { setProp } from "@/utils/object/set-prop";
import { pagar } from "./pagar.table";

export type TPagarModel = {
  query: {
    list: PagarModel["list"];
    read: PagarModel["read"];
    clear: PagarModel["clear"];
    count: PagarModel["count"];
  };
  mutation: {
    increment: PagarModel["increment"];
    create: PagarModel["create"];
    update: PagarModel["update"];
    del: PagarModel["del"];
  };
};

export class PagarModel extends CrudModel {
  constructor(args: { connections: TConnections; models: TModels }) {
    super(args.connections[pagar.database], pagar);
    this.register(args);
  }

  register = (args: { connections: TConnections; models: TModels }) => {
    const { models } = args;
    setProp(models, "pagar.query.list", this.list);
    setProp(models, "pagar.query.read", this.read);
    setProp(models, "pagar.query.clear", this.clear);
    setProp(models, "pagar.query.count", this.count);
    setProp(models, "pagar.mutation.create", this.create);
    setProp(models, "pagar.mutation.update", this.update);
    setProp(models, "pagar.mutation.del", this.del);
    setProp(models, "pagar.mutation.increment", this.increment);
    return models;
  };
}
