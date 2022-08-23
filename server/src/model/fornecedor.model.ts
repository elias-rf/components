import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type FornecedorRecord = {
  fornecedor_id?: string;
  razao_social?: string;
  nome_fantasia?: string;
  cidade?: string;
  uf?: string;
  pais_id?: string;
  cnpj?: string;
  inscricao_estadual?: string;
  is_ativo?: string;
};

export class FornecedorModel extends EntityModel<FornecedorRecord> {
  constructor(connections: TConnections) {
    super(connections, "fornecedor");
  }
}
