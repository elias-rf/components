import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TMaquina = {
  maquina_id?: string;
  nome?: string;
  serie?: string;
  divisao_id?: string;
  setor_id?: string;
  descricao?: string;
  frequencia?: string;
  is_ativo?: string;
};

export class MaquinaModel extends EntityModel<TMaquina> {
  constructor(connections: TConnections) {
    super(connections, "maquina");
  }
}
