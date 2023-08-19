import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class Vendedor extends ModelBase {
  static tableName = "CadVen";
  static idColumn = "CdVendedor";

  CdVendedor!: number;
  NmVendedor!: string;
  Endereco!: string;
  Cidade!: string;
  Uf!: string;
  CPF!: number;
  Identidade!: string;
  Telefone!: string;
  FgControle!: string;
  Meta!: number;
  Venda!: number;
  ComissaoAV!: number;
  ComissaoPZ!: number;
  DtUltAlteracao!: Date;
  Cargo!: string;
  PercLimiteComissao!: number;
  FgAtivo!: string;
  Bairro!: string;
  TelefoneAdicional!: string;
  Email!: string;
  PercComissaoVarejoVista!: number;
  PercComissaoAtacadoVista!: number;
  PercComissaoVarejoPrazo!: number;
  PercComissaoAtacadoPrazo!: number;
  Cep!: number;
  NmFantasia!: string;
  FgFuncionarioOS!: string;
  FgTecnicoOS!: string;
  IdWeb!: number;

  static getFields() {
    return [
      "CdVendedor",
      "NmVendedor",
      "Endereco",
      "Cidade",
      "Uf",
      "CPF",
      "Identidade",
      "Telefone",
      "FgControle",
      "Meta",
      "Venda",
      "ComissaoAV",
      "ComissaoPZ",
      "DtUltAlteracao",
      "Cargo",
      "PercLimiteComissao",
      "FgAtivo",
      "Bairro",
      "TelefoneAdicional",
      "Email",
      "PercComissaoVarejoVista",
      "PercComissaoAtacadoVista",
      "PercComissaoVarejoPrazo",
      "PercComissaoAtacadoPrazo",
      "Cep",
      "NmFantasia",
      "FgFuncionarioOS",
      "FgTecnicoOS",
      "IdWeb",
    ];
  }
}

Vendedor.knex(connections.plano);

export type TVendedor = ModelObject<Vendedor>;
