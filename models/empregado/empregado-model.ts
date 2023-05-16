import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { setProp } from "@/utils/object/set-prop";
import { empregado } from "./empregado.table";

export type TEmpregadoModel = {
  query: {
    list: EmpregadoModel["list"];
    read: EmpregadoModel["read"];
    clear: EmpregadoModel["clear"];
    count: EmpregadoModel["count"];
  };
  mutation: {
    increment: EmpregadoModel["increment"];
    create: EmpregadoModel["create"];
    update: EmpregadoModel["update"];
    del: EmpregadoModel["del"];
  };
};

export class EmpregadoModel extends CrudModel {
  constructor(args: { connections: TConnections; models: TModels }) {
    super(args.connections[empregado.database], empregado);
    this.register(args);
  }

  register = (args: { connections: TConnections; models: TModels }) => {
    const { models } = args;
    setProp(models, "empregado.query.list", this.list);
    setProp(models, "empregado.query.read", this.read);
    setProp(models, "empregado.query.clear", this.clear);
    setProp(models, "empregado.query.count", this.count);
    setProp(models, "empregado.mutation.create", this.create);
    setProp(models, "empregado.mutation.update", this.update);
    setProp(models, "empregado.mutation.del", this.del);
    setProp(models, "empregado.mutation.increment", this.increment);
    return models;
  };
}
