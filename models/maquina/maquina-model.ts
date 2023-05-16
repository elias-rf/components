import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { setProp } from "@/utils/object/set-prop";
import { maquina } from "./maquina.table";

export type TMaquinaModel = {
  query: {
    list: MaquinaModel["list"];
    read: MaquinaModel["read"];
    clear: MaquinaModel["clear"];
    count: MaquinaModel["count"];
  };
  mutation: {
    increment: MaquinaModel["increment"];
    create: MaquinaModel["create"];
    update: MaquinaModel["update"];
    del: MaquinaModel["del"];
  };
};

export class MaquinaModel extends CrudModel {
  constructor(args: { connections: TConnections; models: TModels }) {
    super(args.connections[maquina.database], maquina);
    this.register(args);
  }

  register = (args: { connections: TConnections; models: TModels }) => {
    const { models } = args;
    setProp(models, "maquina.query.list", this.list);
    setProp(models, "maquina.query.read", this.read);
    setProp(models, "maquina.query.clear", this.clear);
    setProp(models, "maquina.query.count", this.count);
    setProp(models, "maquina.mutation.create", this.create);
    setProp(models, "maquina.mutation.update", this.update);
    setProp(models, "maquina.mutation.del", this.del);
    setProp(models, "maquina.mutation.increment", this.increment);
    return models;
  };
}
