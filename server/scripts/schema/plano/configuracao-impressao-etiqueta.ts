import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoImpressaoEtiqueta extends ModelBase {
  static tableName = "ConfiguracaoImpressaoEtiqueta";
  static idColumn = [];

  CdEmpresa!: number;
  Identificacao!: string;
  TipoImpressao!: string;
  QtdeEtiquetasVertical!: number;
  QtdeEtiquetasHorizontal!: number;
  DensidadeImpressao!: number;
  AlturaEtiqueta!: number;
  DeslocamentoSuperior!: number;
  VelocidadeImpressao!: number;
  LarguraEtiqueta!: number;
  DeslocamentoEsquerdo!: number;
  EspacoEntreEtiquetas!: number;
  DescProdPosVert!: number;
  DescProdPosHoriz!: number;
  DescProdFonte!: number;
  DescProdAltura!: number;
  DescProdLargura!: number;
  DescProdCaracteres!: number;
  FgQuebraDescricaoProduto!: string;
  ComplProdPosVert!: number;
  ComplProdPosHoriz!: number;
  ComplProdFonte!: number;
  ComplProdAltura!: number;
  ComplProdLargura!: number;
  ComplProdCaracteres!: number;
  CdProdutoPosVert!: number;
  CdProdutoPosHoriz!: number;
  CdProdutoFonte!: number;
  CdProdutoAltura!: number;
  CdProdutoLargura!: number;
  PrecoPosVert!: number;
  PrecoPosHoriz!: number;
  PrecoFonte!: number;
  PrecoAltura!: number;
  PrecoLargura!: number;
  Lei2622PosVert!: number;
  Lei2622PosHoriz!: number;
  Lei2622Fonte!: number;
  Lei2622Altura!: number;
  Lei2622Largura!: number;
  CodBarraPosVert!: number;
  CodBarraPosHoriz!: number;
  CodBarraFonte!: number;
  CodBarraAltura!: number;
  CodBarraBarraEstreita!: number;
  CodBarraBarraLarga!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "Identificacao",
      "TipoImpressao",
      "QtdeEtiquetasVertical",
      "QtdeEtiquetasHorizontal",
      "DensidadeImpressao",
      "AlturaEtiqueta",
      "DeslocamentoSuperior",
      "VelocidadeImpressao",
      "LarguraEtiqueta",
      "DeslocamentoEsquerdo",
      "EspacoEntreEtiquetas",
      "DescProdPosVert",
      "DescProdPosHoriz",
      "DescProdFonte",
      "DescProdAltura",
      "DescProdLargura",
      "DescProdCaracteres",
      "FgQuebraDescricaoProduto",
      "ComplProdPosVert",
      "ComplProdPosHoriz",
      "ComplProdFonte",
      "ComplProdAltura",
      "ComplProdLargura",
      "ComplProdCaracteres",
      "CdProdutoPosVert",
      "CdProdutoPosHoriz",
      "CdProdutoFonte",
      "CdProdutoAltura",
      "CdProdutoLargura",
      "PrecoPosVert",
      "PrecoPosHoriz",
      "PrecoFonte",
      "PrecoAltura",
      "PrecoLargura",
      "Lei2622PosVert",
      "Lei2622PosHoriz",
      "Lei2622Fonte",
      "Lei2622Altura",
      "Lei2622Largura",
      "CodBarraPosVert",
      "CodBarraPosHoriz",
      "CodBarraFonte",
      "CodBarraAltura",
      "CodBarraBarraEstreita",
      "CodBarraBarraLarga",
      ];
  }
}

ConfiguracaoImpressaoEtiqueta.knex(connections.plano);

export type TConfiguracaoImpressaoEtiqueta = ModelObject<ConfiguracaoImpressaoEtiqueta>;
