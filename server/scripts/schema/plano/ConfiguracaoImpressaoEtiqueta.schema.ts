import { TTableDef } from "@/types/model";

export const ConfiguracaoImpressaoEtiqueta: TTableDef = {
  database: "plano",
  table: "ConfiguracaoImpressaoEtiqueta",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Identificacao",
      label: "Identificacao",
      name: "Identificacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoImpressao",
      label: "TipoImpressao",
      name: "TipoImpressao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "QtdeEtiquetasVertical",
      label: "QtdeEtiquetasVertical",
      name: "QtdeEtiquetasVertical",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdeEtiquetasHorizontal",
      label: "QtdeEtiquetasHorizontal",
      name: "QtdeEtiquetasHorizontal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DensidadeImpressao",
      label: "DensidadeImpressao",
      name: "DensidadeImpressao",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AlturaEtiqueta",
      label: "AlturaEtiqueta",
      name: "AlturaEtiqueta",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DeslocamentoSuperior",
      label: "DeslocamentoSuperior",
      name: "DeslocamentoSuperior",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VelocidadeImpressao",
      label: "VelocidadeImpressao",
      name: "VelocidadeImpressao",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "LarguraEtiqueta",
      label: "LarguraEtiqueta",
      name: "LarguraEtiqueta",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DeslocamentoEsquerdo",
      label: "DeslocamentoEsquerdo",
      name: "DeslocamentoEsquerdo",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "EspacoEntreEtiquetas",
      label: "EspacoEntreEtiquetas",
      name: "EspacoEntreEtiquetas",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DescProdPosVert",
      label: "DescProdPosVert",
      name: "DescProdPosVert",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DescProdPosHoriz",
      label: "DescProdPosHoriz",
      name: "DescProdPosHoriz",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DescProdFonte",
      label: "DescProdFonte",
      name: "DescProdFonte",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DescProdAltura",
      label: "DescProdAltura",
      name: "DescProdAltura",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DescProdLargura",
      label: "DescProdLargura",
      name: "DescProdLargura",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DescProdCaracteres",
      label: "DescProdCaracteres",
      name: "DescProdCaracteres",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgQuebraDescricaoProduto",
      label: "FgQuebraDescricaoProduto",
      name: "FgQuebraDescricaoProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ComplProdPosVert",
      label: "ComplProdPosVert",
      name: "ComplProdPosVert",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ComplProdPosHoriz",
      label: "ComplProdPosHoriz",
      name: "ComplProdPosHoriz",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ComplProdFonte",
      label: "ComplProdFonte",
      name: "ComplProdFonte",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ComplProdAltura",
      label: "ComplProdAltura",
      name: "ComplProdAltura",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ComplProdLargura",
      label: "ComplProdLargura",
      name: "ComplProdLargura",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ComplProdCaracteres",
      label: "ComplProdCaracteres",
      name: "ComplProdCaracteres",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProdutoPosVert",
      label: "CdProdutoPosVert",
      name: "CdProdutoPosVert",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProdutoPosHoriz",
      label: "CdProdutoPosHoriz",
      name: "CdProdutoPosHoriz",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProdutoFonte",
      label: "CdProdutoFonte",
      name: "CdProdutoFonte",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProdutoAltura",
      label: "CdProdutoAltura",
      name: "CdProdutoAltura",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProdutoLargura",
      label: "CdProdutoLargura",
      name: "CdProdutoLargura",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PrecoPosVert",
      label: "PrecoPosVert",
      name: "PrecoPosVert",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PrecoPosHoriz",
      label: "PrecoPosHoriz",
      name: "PrecoPosHoriz",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PrecoFonte",
      label: "PrecoFonte",
      name: "PrecoFonte",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "PrecoAltura",
      label: "PrecoAltura",
      name: "PrecoAltura",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PrecoLargura",
      label: "PrecoLargura",
      name: "PrecoLargura",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Lei2622PosVert",
      label: "Lei2622PosVert",
      name: "Lei2622PosVert",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Lei2622PosHoriz",
      label: "Lei2622PosHoriz",
      name: "Lei2622PosHoriz",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Lei2622Fonte",
      label: "Lei2622Fonte",
      name: "Lei2622Fonte",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Lei2622Altura",
      label: "Lei2622Altura",
      name: "Lei2622Altura",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Lei2622Largura",
      label: "Lei2622Largura",
      name: "Lei2622Largura",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CodBarraPosVert",
      label: "CodBarraPosVert",
      name: "CodBarraPosVert",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CodBarraPosHoriz",
      label: "CodBarraPosHoriz",
      name: "CodBarraPosHoriz",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CodBarraFonte",
      label: "CodBarraFonte",
      name: "CodBarraFonte",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CodBarraAltura",
      label: "CodBarraAltura",
      name: "CodBarraAltura",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CodBarraBarraEstreita",
      label: "CodBarraBarraEstreita",
      name: "CodBarraBarraEstreita",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CodBarraBarraLarga",
      label: "CodBarraBarraLarga",
      name: "CodBarraBarraLarga",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
  ],
};
