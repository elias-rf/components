import { TConnections } from "@/config/connections";
import { crudListFactory } from "@/utils/crud/methods/list-factory";
import { etiqueta_externa } from "../etiqueta-externa.table";

export const listFactory = ({ connections }: { connections: TConnections }) => {
  return crudListFactory(
    connections[etiqueta_externa.database],
    etiqueta_externa
  );
};
