import { Schema } from "../schemas.type";

export const ConfiguracaoImpressaoEtiqueta: Schema =
  {
  "database": "plano",
  "table": "ConfiguracaoImpressaoEtiqueta",
  "primary": [],
  "fields": {
    "CdEmpresa": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "CdEmpresa",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 14,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Identificacao": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "Identificacao",
      "data_type": "varchar",
      "max_length": 32,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "TipoImpressao": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "TipoImpressao",
      "data_type": "char",
      "max_length": 1,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "QtdeEtiquetasVertical": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "QtdeEtiquetasVertical",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 3,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "QtdeEtiquetasHorizontal": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "QtdeEtiquetasHorizontal",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 3,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "DensidadeImpressao": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "DensidadeImpressao",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "AlturaEtiqueta": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "AlturaEtiqueta",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "DeslocamentoSuperior": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "DeslocamentoSuperior",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "VelocidadeImpressao": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "VelocidadeImpressao",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "LarguraEtiqueta": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "LarguraEtiqueta",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "DeslocamentoEsquerdo": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "DeslocamentoEsquerdo",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "EspacoEntreEtiquetas": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "EspacoEntreEtiquetas",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "DescProdPosVert": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "DescProdPosVert",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "DescProdPosHoriz": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "DescProdPosHoriz",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "DescProdFonte": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "DescProdFonte",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 3,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "DescProdAltura": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "DescProdAltura",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "DescProdLargura": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "DescProdLargura",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "DescProdCaracteres": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "DescProdCaracteres",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 3,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "FgQuebraDescricaoProduto": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "FgQuebraDescricaoProduto",
      "data_type": "char",
      "max_length": 1,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "ComplProdPosVert": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "ComplProdPosVert",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "ComplProdPosHoriz": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "ComplProdPosHoriz",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "ComplProdFonte": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "ComplProdFonte",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 3,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "ComplProdAltura": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "ComplProdAltura",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "ComplProdLargura": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "ComplProdLargura",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "ComplProdCaracteres": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "ComplProdCaracteres",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 3,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CdProdutoPosVert": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "CdProdutoPosVert",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CdProdutoPosHoriz": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "CdProdutoPosHoriz",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CdProdutoFonte": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "CdProdutoFonte",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 3,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CdProdutoAltura": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "CdProdutoAltura",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CdProdutoLargura": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "CdProdutoLargura",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "PrecoPosVert": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "PrecoPosVert",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "PrecoPosHoriz": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "PrecoPosHoriz",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "PrecoFonte": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "PrecoFonte",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 3,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "PrecoAltura": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "PrecoAltura",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "PrecoLargura": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "PrecoLargura",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Lei2622PosVert": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "Lei2622PosVert",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Lei2622PosHoriz": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "Lei2622PosHoriz",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Lei2622Fonte": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "Lei2622Fonte",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 3,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Lei2622Altura": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "Lei2622Altura",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Lei2622Largura": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "Lei2622Largura",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CodBarraPosVert": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "CodBarraPosVert",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CodBarraPosHoriz": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "CodBarraPosHoriz",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CodBarraFonte": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "CodBarraFonte",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 3,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CodBarraAltura": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "CodBarraAltura",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CodBarraBarraEstreita": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "CodBarraBarraEstreita",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CodBarraBarraLarga": {
      "table": "ConfiguracaoImpressaoEtiqueta",
      "name": "CodBarraBarraLarga",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 10,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    }
  }
}
