import fullvision from "./fullvision.connection";
import oftalmo from "./oftalmo.connection";
import plano from "./plano.connection";

export const connections = {
  oftalmo,
  plano,
  fullvision,
};

export type Connections = typeof connections;
