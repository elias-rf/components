import { TConnections } from "@/config/connections";
import { crudReadFactory } from "@/utils/crud/methods/read-factory";
import { etiqueta_externa } from "../etiqueta-externa.table";

export const readFactory = ({ connections }: { connections: TConnections }) => {
  return crudReadFactory(
    connections[etiqueta_externa.database],
    etiqueta_externa
  );
};
