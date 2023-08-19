import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ControladosSaida extends ModelBase {
  static tableName = "ControladosSaida";
  static idColumn = [];

  CdFilial!: number;
  NumPDV!: number;
  NumDocumento!: number;
  Serie!: string;
  CdProduto!: string;
  Sequencia!: number;
  DtEmissao!: Date;
  QtdePrescrita!: number;
  QtdeVendida!: number;
  CRM!: string;
  DtReceita!: Date;
  NumReceita!: number;
  CdComprador!: number;
  NomeComprador!: string;
  Endereco!: string;
  NumIdentidade!: string;
  Telefone!: string;
  FgStatus!: string;
  NmPaciente!: string;
  TipoReceita!: string;
  NumPedido!: number;
  TipoUsoMedicamento!: number;
  UfReceita!: string;
  TipoIdentidade!: number;
  UfIdentidade!: string;
  EmissorIdentidade!: string;
  NumLoteProduto!: string;
  NumRegistroProduto!: string;
  Conselho!: string;
  UfConselho!: string;
  NumConselho!: number;
  FgGenerico!: string;
  Modelo!: string;
  TipoMovimentacao!: string;
  MotivoPerda!: number;
  UsoProlongado!: number;
  unidadeIdade!: number;
  Idade!: number;
  Sexo!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPDV",
      "NumDocumento",
      "Serie",
      "CdProduto",
      "Sequencia",
      "DtEmissao",
      "QtdePrescrita",
      "QtdeVendida",
      "CRM",
      "DtReceita",
      "NumReceita",
      "CdComprador",
      "NomeComprador",
      "Endereco",
      "NumIdentidade",
      "Telefone",
      "FgStatus",
      "NmPaciente",
      "TipoReceita",
      "NumPedido",
      "TipoUsoMedicamento",
      "UfReceita",
      "TipoIdentidade",
      "UfIdentidade",
      "EmissorIdentidade",
      "NumLoteProduto",
      "NumRegistroProduto",
      "Conselho",
      "UfConselho",
      "NumConselho",
      "FgGenerico",
      "Modelo",
      "TipoMovimentacao",
      "MotivoPerda",
      "UsoProlongado",
      "unidadeIdade",
      "Idade",
      "Sexo",
      ];
  }
}

ControladosSaida.knex(connections.plano);

export type TControladosSaida = ModelObject<ControladosSaida>;
