import { TConnections } from "../../types";
import fullvision from "./fullvision.connection";
import oftalmo from "./oftalmo.connection";
import plano from "./plano.connection";

export const connections = {
  oftalmo,
  plano,
  fullvision,
};

// export type TConnections = typeof connections;
export type TDbs = keyof TConnections;
