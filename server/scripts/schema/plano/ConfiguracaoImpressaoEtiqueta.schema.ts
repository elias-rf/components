import { TEntity } from "@er/types/*";

export const ConfiguracaoImpressaoEtiqueta: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoImpressaoEtiqueta",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "Identificacao",
      "label": "Identificacao",
      "name": "Identificacao",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "TipoImpressao",
      "label": "TipoImpressao",
      "name": "TipoImpressao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "QtdeEtiquetasVertical",
      "label": "QtdeEtiquetasVertical",
      "name": "QtdeEtiquetasVertical",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "QtdeEtiquetasHorizontal",
      "label": "QtdeEtiquetasHorizontal",
      "name": "QtdeEtiquetasHorizontal",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "DensidadeImpressao",
      "label": "DensidadeImpressao",
      "name": "DensidadeImpressao",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AlturaEtiqueta",
      "label": "AlturaEtiqueta",
      "name": "AlturaEtiqueta",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DeslocamentoSuperior",
      "label": "DeslocamentoSuperior",
      "name": "DeslocamentoSuperior",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VelocidadeImpressao",
      "label": "VelocidadeImpressao",
      "name": "VelocidadeImpressao",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "LarguraEtiqueta",
      "label": "LarguraEtiqueta",
      "name": "LarguraEtiqueta",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DeslocamentoEsquerdo",
      "label": "DeslocamentoEsquerdo",
      "name": "DeslocamentoEsquerdo",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "EspacoEntreEtiquetas",
      "label": "EspacoEntreEtiquetas",
      "name": "EspacoEntreEtiquetas",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DescProdPosVert",
      "label": "DescProdPosVert",
      "name": "DescProdPosVert",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DescProdPosHoriz",
      "label": "DescProdPosHoriz",
      "name": "DescProdPosHoriz",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DescProdFonte",
      "label": "DescProdFonte",
      "name": "DescProdFonte",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "DescProdAltura",
      "label": "DescProdAltura",
      "name": "DescProdAltura",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DescProdLargura",
      "label": "DescProdLargura",
      "name": "DescProdLargura",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DescProdCaracteres",
      "label": "DescProdCaracteres",
      "name": "DescProdCaracteres",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "FgQuebraDescricaoProduto",
      "label": "FgQuebraDescricaoProduto",
      "name": "FgQuebraDescricaoProduto",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "ComplProdPosVert",
      "label": "ComplProdPosVert",
      "name": "ComplProdPosVert",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ComplProdPosHoriz",
      "label": "ComplProdPosHoriz",
      "name": "ComplProdPosHoriz",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ComplProdFonte",
      "label": "ComplProdFonte",
      "name": "ComplProdFonte",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "ComplProdAltura",
      "label": "ComplProdAltura",
      "name": "ComplProdAltura",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ComplProdLargura",
      "label": "ComplProdLargura",
      "name": "ComplProdLargura",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ComplProdCaracteres",
      "label": "ComplProdCaracteres",
      "name": "ComplProdCaracteres",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdProdutoPosVert",
      "label": "CdProdutoPosVert",
      "name": "CdProdutoPosVert",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdProdutoPosHoriz",
      "label": "CdProdutoPosHoriz",
      "name": "CdProdutoPosHoriz",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdProdutoFonte",
      "label": "CdProdutoFonte",
      "name": "CdProdutoFonte",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdProdutoAltura",
      "label": "CdProdutoAltura",
      "name": "CdProdutoAltura",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdProdutoLargura",
      "label": "CdProdutoLargura",
      "name": "CdProdutoLargura",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PrecoPosVert",
      "label": "PrecoPosVert",
      "name": "PrecoPosVert",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PrecoPosHoriz",
      "label": "PrecoPosHoriz",
      "name": "PrecoPosHoriz",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PrecoFonte",
      "label": "PrecoFonte",
      "name": "PrecoFonte",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "PrecoAltura",
      "label": "PrecoAltura",
      "name": "PrecoAltura",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PrecoLargura",
      "label": "PrecoLargura",
      "name": "PrecoLargura",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Lei2622PosVert",
      "label": "Lei2622PosVert",
      "name": "Lei2622PosVert",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Lei2622PosHoriz",
      "label": "Lei2622PosHoriz",
      "name": "Lei2622PosHoriz",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Lei2622Fonte",
      "label": "Lei2622Fonte",
      "name": "Lei2622Fonte",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Lei2622Altura",
      "label": "Lei2622Altura",
      "name": "Lei2622Altura",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Lei2622Largura",
      "label": "Lei2622Largura",
      "name": "Lei2622Largura",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CodBarraPosVert",
      "label": "CodBarraPosVert",
      "name": "CodBarraPosVert",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CodBarraPosHoriz",
      "label": "CodBarraPosHoriz",
      "name": "CodBarraPosHoriz",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CodBarraFonte",
      "label": "CodBarraFonte",
      "name": "CodBarraFonte",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CodBarraAltura",
      "label": "CodBarraAltura",
      "name": "CodBarraAltura",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CodBarraBarraEstreita",
      "label": "CodBarraBarraEstreita",
      "name": "CodBarraBarraEstreita",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CodBarraBarraLarga",
      "label": "CodBarraBarraLarga",
      "name": "CodBarraBarraLarga",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    }
  ]
}
