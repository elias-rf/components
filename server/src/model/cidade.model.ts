import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TCidade = {
  uf_old: string;
  nome_cidade: string;
  uf: string;
  cidade_id: string;
  uf_id: string;
};

export class CidadeModel extends EntityModel<TCidade> {
  constructor(connections: TConnections) {
    super(connections, "cidade");
  }
}
