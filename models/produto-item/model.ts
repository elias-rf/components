import { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { setProp } from "@/utils/object/set-prop";
import { listFactory } from "./methods/list";
import { produtoPlanoFactory } from "./methods/produto-plano";
import { readFactory } from "./methods/read";

export type TProdutoItemModel = {
  query: {
    list: ReturnType<typeof listFactory>;
    read: ReturnType<typeof readFactory>;
    produtoPlano: ReturnType<typeof produtoPlanoFactory>;
  };
};

export const produtoItemModelRegister = (args: {
  connections: TConnections;
  models: TModels;
}) => {
  const { models } = args;

  setProp(models, "produtoItem.query.list", listFactory(args));
  setProp(models, "produtoItem.query.read", readFactory(args));
  setProp(models, "produtoItem.query.produtoPlano", produtoPlanoFactory(args));

  return models;
};
