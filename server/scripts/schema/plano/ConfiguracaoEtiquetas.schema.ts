import { TEntity } from "@er/types/*";

export const ConfiguracaoEtiquetas: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoEtiquetas",
  "fields": [
    {
      "field": "ModeloEtiqueta",
      "label": "ModeloEtiqueta",
      "name": "ModeloEtiqueta",
      "type": "string",
      "size": 20,
      "allowNull": false
    },
    {
      "field": "Impressora",
      "label": "Impressora",
      "name": "Impressora",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "FgImprimeVlAtacado",
      "label": "FgImprimeVlAtacado",
      "name": "FgImprimeVlAtacado",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImprimeVlVarejo",
      "label": "FgImprimeVlVarejo",
      "name": "FgImprimeVlVarejo",
      "type": "string",
      "size": 1
    },
    {
      "field": "TipoCodigo",
      "label": "TipoCodigo",
      "name": "TipoCodigo",
      "type": "string",
      "size": 10
    },
    {
      "field": "LinhasPorFolha",
      "label": "LinhasPorFolha",
      "name": "LinhasPorFolha",
      "type": "int",
      "size": 4
    },
    {
      "field": "ColunasPorLinha",
      "label": "ColunasPorLinha",
      "name": "ColunasPorLinha",
      "type": "int",
      "size": 4
    },
    {
      "field": "AlturaEtiqueta",
      "label": "AlturaEtiqueta",
      "name": "AlturaEtiqueta",
      "type": "float",
      "size": 8
    },
    {
      "field": "LarguraEtiqueta",
      "label": "LarguraEtiqueta",
      "name": "LarguraEtiqueta",
      "type": "float",
      "size": 8
    },
    {
      "field": "AlturaCodigoBarras",
      "label": "AlturaCodigoBarras",
      "name": "AlturaCodigoBarras",
      "type": "float",
      "size": 8
    },
    {
      "field": "FatorDeCorrecao",
      "label": "FatorDeCorrecao",
      "name": "FatorDeCorrecao",
      "type": "float",
      "size": 8
    },
    {
      "field": "EspacoSuperior",
      "label": "EspacoSuperior",
      "name": "EspacoSuperior",
      "type": "float",
      "size": 8
    },
    {
      "field": "EspacoLateral",
      "label": "EspacoLateral",
      "name": "EspacoLateral",
      "type": "float",
      "size": 8
    },
    {
      "field": "EspacoAntesDoCodigo",
      "label": "EspacoAntesDoCodigo",
      "name": "EspacoAntesDoCodigo",
      "type": "float",
      "size": 8
    },
    {
      "field": "EspacoEntreColunas",
      "label": "EspacoEntreColunas",
      "name": "EspacoEntreColunas",
      "type": "float",
      "size": 8
    },
    {
      "field": "DeslocamentoCodigo",
      "label": "DeslocamentoCodigo",
      "name": "DeslocamentoCodigo",
      "type": "int",
      "size": 4
    },
    {
      "field": "FonteCodigo",
      "label": "FonteCodigo",
      "name": "FonteCodigo",
      "type": "string",
      "size": 30
    },
    {
      "field": "PosicaoCodigo",
      "label": "PosicaoCodigo",
      "name": "PosicaoCodigo",
      "type": "float",
      "size": 8
    },
    {
      "field": "PosicaoCodigoAdicional",
      "label": "PosicaoCodigoAdicional",
      "name": "PosicaoCodigoAdicional",
      "type": "float",
      "size": 8
    },
    {
      "field": "CaracteresDescricao",
      "label": "CaracteresDescricao",
      "name": "CaracteresDescricao",
      "type": "int",
      "size": 4
    },
    {
      "field": "FonteDescricao",
      "label": "FonteDescricao",
      "name": "FonteDescricao",
      "type": "string",
      "size": 30
    },
    {
      "field": "LinhasDescricao",
      "label": "LinhasDescricao",
      "name": "LinhasDescricao",
      "type": "int",
      "size": 4
    },
    {
      "field": "PosicaoDescricao",
      "label": "PosicaoDescricao",
      "name": "PosicaoDescricao",
      "type": "float",
      "size": 8
    },
    {
      "field": "PosicaoDescricaoAdicional",
      "label": "PosicaoDescricaoAdicional",
      "name": "PosicaoDescricaoAdicional",
      "type": "float",
      "size": 8
    },
    {
      "field": "CorrecaoDescricao",
      "label": "CorrecaoDescricao",
      "name": "CorrecaoDescricao",
      "type": "float",
      "size": 8
    },
    {
      "field": "DeslocamentoPreco",
      "label": "DeslocamentoPreco",
      "name": "DeslocamentoPreco",
      "type": "int",
      "size": 4
    },
    {
      "field": "FontePreco",
      "label": "FontePreco",
      "name": "FontePreco",
      "type": "string",
      "size": 30
    },
    {
      "field": "PosicaoPreco",
      "label": "PosicaoPreco",
      "name": "PosicaoPreco",
      "type": "float",
      "size": 8
    },
    {
      "field": "FgDuasLinhas",
      "label": "FgDuasLinhas",
      "name": "FgDuasLinhas",
      "type": "string",
      "size": 1
    },
    {
      "field": "CaracteresDuasLinhas",
      "label": "CaracteresDuasLinhas",
      "name": "CaracteresDuasLinhas",
      "type": "int",
      "size": 4
    },
    {
      "field": "FonteDuasLinhas",
      "label": "FonteDuasLinhas",
      "name": "FonteDuasLinhas",
      "type": "string",
      "size": 30
    },
    {
      "field": "PosicaoDuasLinhas",
      "label": "PosicaoDuasLinhas",
      "name": "PosicaoDuasLinhas",
      "type": "float",
      "size": 8
    },
    {
      "field": "CorrecaoDuasLinhas",
      "label": "CorrecaoDuasLinhas",
      "name": "CorrecaoDuasLinhas",
      "type": "float",
      "size": 8
    },
    {
      "field": "Mensagem",
      "label": "Mensagem",
      "name": "Mensagem",
      "type": "string",
      "size": 50
    },
    {
      "field": "FonteMensagem",
      "label": "FonteMensagem",
      "name": "FonteMensagem",
      "type": "string",
      "size": 30
    },
    {
      "field": "PosicaoMensagem",
      "label": "PosicaoMensagem",
      "name": "PosicaoMensagem",
      "type": "float",
      "size": 8
    },
    {
      "field": "IdentificacaoEmpresa",
      "label": "IdentificacaoEmpresa",
      "name": "IdentificacaoEmpresa",
      "type": "string",
      "size": 50
    },
    {
      "field": "FonteIdentificacao",
      "label": "FonteIdentificacao",
      "name": "FonteIdentificacao",
      "type": "string",
      "size": 30
    },
    {
      "field": "PosicaoIdentificacao",
      "label": "PosicaoIdentificacao",
      "name": "PosicaoIdentificacao",
      "type": "float",
      "size": 8
    },
    {
      "field": "AlturaPapel",
      "label": "AlturaPapel",
      "name": "AlturaPapel",
      "type": "float",
      "size": 8
    },
    {
      "field": "DeslocamentoDtCadastro",
      "label": "DeslocamentoDtCadastro",
      "name": "DeslocamentoDtCadastro",
      "type": "int",
      "size": 2
    },
    {
      "field": "FonteDtCadastro",
      "label": "FonteDtCadastro",
      "name": "FonteDtCadastro",
      "type": "string",
      "size": 30
    },
    {
      "field": "PosicaoDtCadastro",
      "label": "PosicaoDtCadastro",
      "name": "PosicaoDtCadastro",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DeslocamentoPromocao",
      "label": "DeslocamentoPromocao",
      "name": "DeslocamentoPromocao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PosicaoPromocao",
      "label": "PosicaoPromocao",
      "name": "PosicaoPromocao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FontePromocao",
      "label": "FontePromocao",
      "name": "FontePromocao",
      "type": "string",
      "size": 30
    },
    {
      "field": "DeslocamentoBarra",
      "label": "DeslocamentoBarra",
      "name": "DeslocamentoBarra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PosicaoBarra",
      "label": "PosicaoBarra",
      "name": "PosicaoBarra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DeslocamentoDescricao",
      "label": "DeslocamentoDescricao",
      "name": "DeslocamentoDescricao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "InicioImpCodBarras",
      "label": "InicioImpCodBarras",
      "name": "InicioImpCodBarras",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlPixel",
      "label": "VlPixel",
      "name": "VlPixel",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DeslocamentoIdentificacao",
      "label": "DeslocamentoIdentificacao",
      "name": "DeslocamentoIdentificacao",
      "type": "int",
      "size": 4
    },
    {
      "field": "FonteDtFabricacao",
      "label": "FonteDtFabricacao",
      "name": "FonteDtFabricacao",
      "type": "string",
      "size": 32
    },
    {
      "field": "DeslocamentoDtFabricacao",
      "label": "DeslocamentoDtFabricacao",
      "name": "DeslocamentoDtFabricacao",
      "type": "int",
      "size": 4
    },
    {
      "field": "PosicaoDtFabricacao",
      "label": "PosicaoDtFabricacao",
      "name": "PosicaoDtFabricacao",
      "type": "float",
      "size": 8
    }
  ]
}
