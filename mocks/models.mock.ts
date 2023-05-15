import { connectionsMock } from "@/mocks/connections.mock";
import { modelsRegister, TModels } from "@/models/models";

export const modelsMock = {} as TModels;

const args = {
  connections: connectionsMock,
  models: modelsMock,
};

modelsRegister(args);
