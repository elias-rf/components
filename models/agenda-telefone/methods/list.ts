import { TConnections } from "@/config/connections";
import { listFactory } from "@/utils/crud/methods/list-factory";
import { agenda_telefone } from "../agenda-telefone.table";

export const list = ({ connections }: { connections: TConnections }) => {
  return listFactory(connections[agenda_telefone.database], agenda_telefone);
};
