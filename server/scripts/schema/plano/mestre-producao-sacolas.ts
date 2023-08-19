import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreProducaoSacolas extends ModelBase {
  static tableName = "MestreProducaoSacolas";
  static idColumn = [];

  CdFilial!: number;
  NumProducao!: number;
  DtProducao!: Date;
  CdCliente!: number;
  CdVendedor!: number;
  CdSacola!: number;
  DtEntrega!: Date;
  Qtde!: number;
  CdUnidade!: number;
  Largura!: number;
  Comprimento!: number;
  Espessura!: number;
  LarguraExtrusao!: number;
  PesoSacola!: number;
  PesoTotal!: number;
  Oxi!: string;
  Tratamento!: string;
  GramaMetro!: string;
  Variacao!: string;
  Observacao!: string;
  Material!: string;
  Ping!: string;
  Modelo!: string;
  Sanfona!: string;
  CoresImpressao!: string;
  Marca!: string;
  EmbalagemPara!: string;
  CdFase!: number;
  NumBobinas!: number;
  Diametro!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumProducao",
      "DtProducao",
      "CdCliente",
      "CdVendedor",
      "CdSacola",
      "DtEntrega",
      "Qtde",
      "CdUnidade",
      "Largura",
      "Comprimento",
      "Espessura",
      "LarguraExtrusao",
      "PesoSacola",
      "PesoTotal",
      "Oxi",
      "Tratamento",
      "GramaMetro",
      "Variacao",
      "Observacao",
      "Material",
      "Ping",
      "Modelo",
      "Sanfona",
      "CoresImpressao",
      "Marca",
      "EmbalagemPara",
      "CdFase",
      "NumBobinas",
      "Diametro",
      ];
  }
}

MestreProducaoSacolas.knex(connections.plano);

export type TMestreProducaoSacolas = ModelObject<MestreProducaoSacolas>;
