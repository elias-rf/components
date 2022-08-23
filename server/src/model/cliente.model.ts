import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TCliente = {
  cliente_id?: string;
  nome?: string;
  cidade?: string;
  uf?: string;
  cnpj?: string;
  vendedor_id?: string;
  is_ativo?: string;
};

export class ClienteModel extends EntityModel<TCliente> {
  constructor(connections: TConnections) {
    super(connections, "cliente");
  }
}
