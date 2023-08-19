import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblCliente extends ModelBase {
  static tableName = "tbl_Cliente";
  static idColumn = ["kCliente"];

  kCliente!: number;
  fKClienteClassificacao!: number;
  NomeCliente!: string;
  Contato!: string;
  Nascimento!: Date;
  Email!: string;
  Endereco!: string;
  Bairro!: string;
  CEP!: string;
  Cidade!: string;
  UF!: string;
  Pais!: string;
  CRM!: string;
  INS!: string;
  CCM!: string;
  CgcCpf!: string;
  TelResidencial!: string;
  TelComercial!: string;
  FAX!: string;
  OBSGeral!: string;
  Atualizacao!: Date;
  ObsFinanceira!: string;
  CobrarFrete!: number;
  EhFilantropico!: number;
  ListaNegra!: number;
  LimiteCredito!: number;
  lx_DataUltPedido!: Date;
  lx_UltPedido!: number;
  lx_MaiorCompra!: number;
  lx_MédiaCompra!: number;
  lx_Inadimplencia!: number;
  Hospital!: string;
  Atendimento2!: number;
  Atendimento3!: number;
  Atendimento4!: number;
  Atendimento5!: number;
  Atendimento6!: number;
  QtdCatarata!: number;
  QtdPhaco!: number;
  TipoLios!: string;
  Usuario!: string;
  Informante!: string;
  CargoInformante!: string;
  DataInformacao!: Date;
  fkCategoriaFinanceira!: number;
  Humor!: number;
  EhFimdemes!: number;
  DataCadastro!: Date;
  UsuarioCadastro!: string;
  ListaSDS!: number;
  fkRegiao!: number;
  LimiteFixo!: number;
  LimiteCreditoClass!: string;
  ConsultaSPC!: Date;
  EhClienteFerrara!: number;
  InteresseTrnFerrara!: number;
  Invisivel!: number;
  Indicar!: number;
  Protestar!: number;
  podeapagar!: number;
  CADASTRADOSANKHYA!: number;
  REVISADOSANKHYA!: number;
  ts!: string;
  

  static getFields() {
    return [
      "kCliente",
      "fKClienteClassificacao",
      "NomeCliente",
      "Contato",
      "Nascimento",
      "Email",
      "Endereco",
      "Bairro",
      "CEP",
      "Cidade",
      "UF",
      "Pais",
      "CRM",
      "INS",
      "CCM",
      "CgcCpf",
      "TelResidencial",
      "TelComercial",
      "FAX",
      "OBSGeral",
      "Atualizacao",
      "ObsFinanceira",
      "CobrarFrete",
      "EhFilantropico",
      "ListaNegra",
      "LimiteCredito",
      "lx_DataUltPedido",
      "lx_UltPedido",
      "lx_MaiorCompra",
      "lx_MédiaCompra",
      "lx_Inadimplencia",
      "Hospital",
      "Atendimento2",
      "Atendimento3",
      "Atendimento4",
      "Atendimento5",
      "Atendimento6",
      "QtdCatarata",
      "QtdPhaco",
      "TipoLios",
      "Usuario",
      "Informante",
      "CargoInformante",
      "DataInformacao",
      "fkCategoriaFinanceira",
      "Humor",
      "EhFimdemes",
      "DataCadastro",
      "UsuarioCadastro",
      "ListaSDS",
      "fkRegiao",
      "LimiteFixo",
      "LimiteCreditoClass",
      "ConsultaSPC",
      "EhClienteFerrara",
      "InteresseTrnFerrara",
      "Invisivel",
      "Indicar",
      "Protestar",
      "podeapagar",
      "CADASTRADOSANKHYA",
      "REVISADOSANKHYA",
      "ts",
      ];
  }
}

TblCliente.knex(connections.oftalmo);

export type TTblCliente = ModelObject<TblCliente>;
