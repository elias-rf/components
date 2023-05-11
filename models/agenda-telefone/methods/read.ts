import { TConnections } from "@/config/connections";
import { readFactory } from "@/utils/crud/methods/read-factory";
import { agenda_telefone } from "../agenda-telefone.table";

export const read = ({ connections }: { connections: TConnections }) => {
  return readFactory(connections[agenda_telefone.database], agenda_telefone);
};
