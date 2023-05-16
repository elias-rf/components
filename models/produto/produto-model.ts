import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { setProp } from "@/utils/object/set-prop";
import { produto } from "./produto.table";

export type TProdutoModel = {
  query: {
    list: ProdutoModel["list"];
    read: ProdutoModel["read"];
    clear: ProdutoModel["clear"];
    count: ProdutoModel["count"];
  };
  mutation: {
    increment: ProdutoModel["increment"];
    create: ProdutoModel["create"];
    update: ProdutoModel["update"];
    del: ProdutoModel["del"];
  };
};

export class ProdutoModel extends CrudModel {
  constructor(args: { connections: TConnections; models: TModels }) {
    super(args.connections[produto.database], produto);
    this.register(args);
  }

  register = (args: { connections: TConnections; models: TModels }) => {
    const { models } = args;
    setProp(models, "produto.query.list", this.list);
    setProp(models, "produto.query.read", this.read);
    setProp(models, "produto.query.clear", this.clear);
    setProp(models, "produto.query.count", this.count);
    setProp(models, "produto.mutation.create", this.create);
    setProp(models, "produto.mutation.update", this.update);
    setProp(models, "produto.mutation.del", this.del);
    setProp(models, "produto.mutation.increment", this.increment);
    return models;
  };
}
