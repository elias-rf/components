import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadFor extends ModelBase {
  static tableName = "CadFor";
  static idColumn = ["CdFornecedor"];

  CdFornecedor!: number;
  RzSocial!: string;
  Endereco!: string;
  Bairro!: string;
  Cidade!: string;
  Uf!: string;
  Cep!: number;
  CGC!: number;
  InscEst!: string;
  EMail!: string;
  Telefone!: string;
  Fax!: string;
  CdTipo!: number;
  CdSubTipo!: number;
  ReduMargemSub!: number;
  DtUltCompra!: Date;
  DtUltAlteracao!: Date;
  ModeloAtualizacao!: string;
  CdGrupo!: number;
  ModeloPedido!: string;
  CdIdentificacao!: string;
  VlMoeda!: number;
  CdCentroCustoPadrao!: number;
  IdCondPagamento!: number;
  Observacao!: string;
  DirTrocaArquivo!: string;
  NmFantasia!: string;
  Classificacao!: string;
  FgCotacao!: string;
  FgSigiloso!: string;
  NumContaDespesa!: number;
  FgAtivo!: string;
  FgGNRE!: string;
  NumEndereco!: number;
  Complemento!: string;
  InscSuframa!: string;
  FgTipoCustoDRE!: string;
  CdPais!: number;

  static getFields() {
    return [
      "CdFornecedor",
      "RzSocial",
      "Endereco",
      "Bairro",
      "Cidade",
      "Uf",
      "Cep",
      "CGC",
      "InscEst",
      "EMail",
      "Telefone",
      "Fax",
      "CdTipo",
      "CdSubTipo",
      "ReduMargemSub",
      "DtUltCompra",
      "DtUltAlteracao",
      "ModeloAtualizacao",
      "CdGrupo",
      "ModeloPedido",
      "CdIdentificacao",
      "VlMoeda",
      "CdCentroCustoPadrao",
      "IdCondPagamento",
      "Observacao",
      "DirTrocaArquivo",
      "NmFantasia",
      "Classificacao",
      "FgCotacao",
      "FgSigiloso",
      "NumContaDespesa",
      "FgAtivo",
      "FgGNRE",
      "NumEndereco",
      "Complemento",
      "InscSuframa",
      "FgTipoCustoDRE",
      "CdPais",
    ];
  }
}

CadFor.knex(connections.plano);

export type TCadFor = ModelObject<CadFor>;
