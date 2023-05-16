import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { setProp } from "@/utils/object/set-prop";
import { estoque } from "./estoque.table";

export type TEstoqueModel = {
  query: {
    list: EstoqueModel["list"];
    read: EstoqueModel["read"];
    clear: EstoqueModel["clear"];
    count: EstoqueModel["count"];
  };
  mutation: {
    increment: EstoqueModel["increment"];
    create: EstoqueModel["create"];
    update: EstoqueModel["update"];
    del: EstoqueModel["del"];
  };
};

export class EstoqueModel extends CrudModel {
  constructor(args: { connections: TConnections; models: TModels }) {
    super(args.connections[estoque.database], estoque);
    this.register(args);
  }

  register = (args: { connections: TConnections; models: TModels }) => {
    const { models } = args;
    setProp(models, "estoque.query.list", this.list);
    setProp(models, "estoque.query.read", this.read);
    setProp(models, "estoque.query.clear", this.clear);
    setProp(models, "estoque.query.count", this.count);
    setProp(models, "estoque.mutation.create", this.create);
    setProp(models, "estoque.mutation.update", this.update);
    setProp(models, "estoque.mutation.del", this.del);
    setProp(models, "estoque.mutation.increment", this.increment);
    return models;
  };
}
