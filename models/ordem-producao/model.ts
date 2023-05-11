import type { TConnections } from "@/config/connections";
import { list } from "./methods/list";
import { read } from "./methods/read";

export const ordemProducaoModelRegister = ({
  connections,
  models,
}: {
  connections: TConnections;
  models: any;
}) => {
  models.ordemProducao.query.list = list({ connections });
  models.ordemProducao.query.read = read({ connections });
};
