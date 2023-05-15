import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { setProp } from "@/utils/object/set-prop";
import { listFactory } from "./methods/list";
import { readFactory } from "./methods/read";

export type TEtiquetaExternaModel = {
  query: {
    list: ReturnType<typeof listFactory>;
    read: ReturnType<typeof readFactory>;
  };
};

export const etiquetaExternaModelRegister = (args: {
  connections: TConnections;
  models: TModels;
}) => {
  const { models } = args;

  setProp(models, "etiquetaExterna.query.list", listFactory(args));
  setProp(models, "etiquetaExterna.query.read", readFactory(args));

  return models;
};
