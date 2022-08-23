import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TDiamante = {
  diamante_id?: string;
  diamante?: string;
  tipo?: string;
  raio?: string;
  espessura?: string;
  maquina_id?: string;
  empregado_id?: string;
  data_entrada?: string;
  ordem_inicial?: string;
  data_saida?: string;
  ordem_final?: string;
  quantidade_cortes?: string;
};

export function diamanteModel(connections: TConnections) {
  const entityModel = new EntityModel<TDiamante>(connections, "diamante");
  return entityModel;
}
