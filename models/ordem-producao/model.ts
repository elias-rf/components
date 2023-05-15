import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { setProp } from "@/utils/object/set-prop";
import { controleFactory } from "./methods/controle";
import { dataFabricacaoFactory } from "./methods/data-fabricacao";
import { dataValidadeFactory } from "./methods/data-validade";
import { ehControleValidoFactory } from "./methods/eh-controle-valido";
import { listFactory } from "./methods/list";
import { produtoItemFactory } from "./methods/produto-item";
import { produtoPlanoFactory } from "./methods/produto-plano";
import { readFactory } from "./methods/read";

export type TOrdemProducaoModel = {
  query: {
    list: ReturnType<typeof listFactory>;
    read: ReturnType<typeof readFactory>;
    controle: ReturnType<typeof controleFactory>;
    dataFabricacao: ReturnType<typeof dataFabricacaoFactory>;
    dataValidade: ReturnType<typeof dataValidadeFactory>;
    ehControleValido: ReturnType<typeof ehControleValidoFactory>;
    produtoItem: ReturnType<typeof produtoItemFactory>;
    produtoPlano: ReturnType<typeof produtoPlanoFactory>;
  };
};

export const ordemProducaoModelRegister = (args: {
  connections: TConnections;
  models: TModels;
}) => {
  const { models } = args;

  setProp(models, "ordemProducao.query.list", listFactory(args));
  setProp(models, "ordemProducao.query.read", readFactory(args));
  setProp(models, "ordemProducao.query.controle", controleFactory());
  setProp(models, "ordemProducao.query.produtoItem", produtoItemFactory(args));
  setProp(
    models,
    "ordemProducao.query.dataFabricacao",
    dataFabricacaoFactory(args)
  );
  setProp(
    models,
    "ordemProducao.query.dataValidade",
    dataValidadeFactory(args)
  );
  setProp(
    models,
    "ordemProducao.query.ehControleValido",
    dataValidadeFactory(args)
  );
  setProp(models, "ordemProducao.query.produtoItem", produtoItemFactory(args));
  setProp(
    models,
    "ordemProducao.query.produtoPlano",
    produtoPlanoFactory(args)
  );

  return models;
};
