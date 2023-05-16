import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { setProp } from "@/utils/object/set-prop";
import { pedido } from "./pedido.table";

export type TPedidoModel = {
  query: {
    list: PedidoModel["list"];
    read: PedidoModel["read"];
    clear: PedidoModel["clear"];
    count: PedidoModel["count"];
  };
  mutation: {
    increment: PedidoModel["increment"];
    create: PedidoModel["create"];
    update: PedidoModel["update"];
    del: PedidoModel["del"];
  };
};

export class PedidoModel extends CrudModel {
  constructor(args: { connections: TConnections; models: TModels }) {
    super(args.connections[pedido.database], pedido);
    this.register(args);
  }

  register = (args: { connections: TConnections; models: TModels }) => {
    const { models } = args;
    setProp(models, "pedido.query.list", this.list);
    setProp(models, "pedido.query.read", this.read);
    setProp(models, "pedido.query.clear", this.clear);
    setProp(models, "pedido.query.count", this.count);
    setProp(models, "pedido.mutation.create", this.create);
    setProp(models, "pedido.mutation.update", this.update);
    setProp(models, "pedido.mutation.del", this.del);
    setProp(models, "pedido.mutation.increment", this.increment);
    return models;
  };
}
