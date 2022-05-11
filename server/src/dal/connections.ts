import oftalmo from "./oftalmo.connection";
import plano from "./plano.connection";
import fullvision from "./fullvision.connection";

const connections = {
  oftalmo,
  plano,
  fullvision,
};

export type Connections = typeof connections;

export default connections;
