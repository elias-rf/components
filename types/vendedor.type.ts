export type TVendedorId = {
  CadVen_id: number;
}

export type TVendedorBase = {
  NmVendedor?: string;
  Endereco?: string;
  Cidade?: string;
  Uf?: string;
  CPF?: number;
  Identidade?: string;
  Telefone?: string;
  FgControle?: string;
  Meta?: number;
  Venda?: number;
  ComissaoAV?: number;
  ComissaoPZ?: number;
  DtUltAlteracao?: string;
  Cargo?: string;
  PercLimiteComissao?: number;
  FgAtivo?: string;
  Bairro?: string;
  TelefoneAdicional?: string;
  Email?: string;
  PercComissaoVarejoVista?: number;
  PercComissaoAtacadoVista?: number;
  PercComissaoVarejoPrazo?: number;
  PercComissaoAtacadoPrazo?: number;
  Cep?: number;
  NmFantasia?: string;
  FgFuncionarioOS?: string;
  FgTecnicoOS?: string;
}

 export type TVendedor = Partial<TVendedorId | TVendedorBase>