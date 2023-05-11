import type { TConnections } from "@/config/connections";
import { list } from "./methods/list";
import { read } from "./methods/read";

export const agendaTelefoneModelRegister = ({
  connections,
  models,
}: {
  connections: TConnections;
  models: any;
}) => {
  models.agendaTelefone.query.list = list({ connections });
  models.agendaTelefone.query.read = read({ connections });
};
