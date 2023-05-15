import { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { setProp } from "@/utils/object/set-prop";
import { listFactory } from "./methods/list";
import { readFactory } from "./methods/read";

export type TProdutoPlanoModel = {
  query: {
    list: ReturnType<typeof listFactory>;
    read: ReturnType<typeof readFactory>;
  };
};

export const produtoPlanoModelRegister = (args: {
  connections: TConnections;
  models: TModels;
}) => {
  const { models } = args;

  setProp(models, "produtoPlano.query.list", listFactory(args));
  setProp(models, "produtoPlano.query.read", readFactory(args));

  return models;
};
