import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoImpKits extends ModelBase {
  static tableName = "ConfiguracaoImpKits";
  static idColumn = ["CdKit"];

  CdKit!: string;
  NumOP!: string;
  ProdutoProduzido!: string;
  LoteProdutoProduzido!: string;
  QtdeProdutoProduzido!: string;
  LoteGrelhaProduzida!: string;
  QtdeGrelhaProduzida!: string;
  Largura!: string;
  Espessura!: string;
  DescMateriaPrima!: string;
  QtdeMateriaPrima!: string;
  LoteMateriaPrima!: string;
  MaquinaProducao!: string;
  DtFabricacao!: string;
  OperadorMaquina!: string;
  TipoCaixa!: string;
  PecaCaixa!: string;
  LoteCaixa!: string;
  DtExtrusao!: string;
  CdProdutoProduzido!: string;
  CdMateriaPrima!: string;
  Cliente!: string;
  PostoProdutivo1!: string;
  PostoProdutivo2!: string;
  PostoProdutivo3!: string;
  PostoProdutivo4!: string;
  PostoProdutivo5!: string;
  PostoProdutivo6!: string;
  DescOperacao1!: string;
  DescOperacao2!: string;
  DescOperacao3!: string;
  DescOperacao4!: string;
  DescOperacao5!: string;
  DescOperacao6!: string;
  DtEmissao!: string;
  Obs!: string;
  

  static getFields() {
    return [
      "CdKit",
      "NumOP",
      "ProdutoProduzido",
      "LoteProdutoProduzido",
      "QtdeProdutoProduzido",
      "LoteGrelhaProduzida",
      "QtdeGrelhaProduzida",
      "Largura",
      "Espessura",
      "DescMateriaPrima",
      "QtdeMateriaPrima",
      "LoteMateriaPrima",
      "MaquinaProducao",
      "DtFabricacao",
      "OperadorMaquina",
      "TipoCaixa",
      "PecaCaixa",
      "LoteCaixa",
      "DtExtrusao",
      "CdProdutoProduzido",
      "CdMateriaPrima",
      "Cliente",
      "PostoProdutivo1",
      "PostoProdutivo2",
      "PostoProdutivo3",
      "PostoProdutivo4",
      "PostoProdutivo5",
      "PostoProdutivo6",
      "DescOperacao1",
      "DescOperacao2",
      "DescOperacao3",
      "DescOperacao4",
      "DescOperacao5",
      "DescOperacao6",
      "DtEmissao",
      "Obs",
      ];
  }
}

ConfiguracaoImpKits.knex(connections.plano);

export type TConfiguracaoImpKits = ModelObject<ConfiguracaoImpKits>;
