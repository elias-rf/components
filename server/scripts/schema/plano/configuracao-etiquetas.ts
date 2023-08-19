import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoEtiquetas extends ModelBase {
  static tableName = "ConfiguracaoEtiquetas";
  static idColumn = [];

  ModeloEtiqueta!: string;
  Impressora!: string;
  FgImprimeVlAtacado!: string;
  FgImprimeVlVarejo!: string;
  TipoCodigo!: string;
  LinhasPorFolha!: number;
  ColunasPorLinha!: number;
  AlturaEtiqueta!: number;
  LarguraEtiqueta!: number;
  AlturaCodigoBarras!: number;
  FatorDeCorrecao!: number;
  EspacoSuperior!: number;
  EspacoLateral!: number;
  EspacoAntesDoCodigo!: number;
  EspacoEntreColunas!: number;
  DeslocamentoCodigo!: number;
  FonteCodigo!: string;
  PosicaoCodigo!: number;
  PosicaoCodigoAdicional!: number;
  CaracteresDescricao!: number;
  FonteDescricao!: string;
  LinhasDescricao!: number;
  PosicaoDescricao!: number;
  PosicaoDescricaoAdicional!: number;
  CorrecaoDescricao!: number;
  DeslocamentoPreco!: number;
  FontePreco!: string;
  PosicaoPreco!: number;
  FgDuasLinhas!: string;
  CaracteresDuasLinhas!: number;
  FonteDuasLinhas!: string;
  PosicaoDuasLinhas!: number;
  CorrecaoDuasLinhas!: number;
  Mensagem!: string;
  FonteMensagem!: string;
  PosicaoMensagem!: number;
  IdentificacaoEmpresa!: string;
  FonteIdentificacao!: string;
  PosicaoIdentificacao!: number;
  AlturaPapel!: number;
  DeslocamentoDtCadastro!: number;
  FonteDtCadastro!: string;
  PosicaoDtCadastro!: number;
  DeslocamentoPromocao!: number;
  PosicaoPromocao!: number;
  FontePromocao!: string;
  DeslocamentoBarra!: number;
  PosicaoBarra!: number;
  DeslocamentoDescricao!: number;
  InicioImpCodBarras!: number;
  VlPixel!: number;
  DeslocamentoIdentificacao!: number;
  FonteDtFabricacao!: string;
  DeslocamentoDtFabricacao!: number;
  PosicaoDtFabricacao!: number;
  

  static getFields() {
    return [
      "ModeloEtiqueta",
      "Impressora",
      "FgImprimeVlAtacado",
      "FgImprimeVlVarejo",
      "TipoCodigo",
      "LinhasPorFolha",
      "ColunasPorLinha",
      "AlturaEtiqueta",
      "LarguraEtiqueta",
      "AlturaCodigoBarras",
      "FatorDeCorrecao",
      "EspacoSuperior",
      "EspacoLateral",
      "EspacoAntesDoCodigo",
      "EspacoEntreColunas",
      "DeslocamentoCodigo",
      "FonteCodigo",
      "PosicaoCodigo",
      "PosicaoCodigoAdicional",
      "CaracteresDescricao",
      "FonteDescricao",
      "LinhasDescricao",
      "PosicaoDescricao",
      "PosicaoDescricaoAdicional",
      "CorrecaoDescricao",
      "DeslocamentoPreco",
      "FontePreco",
      "PosicaoPreco",
      "FgDuasLinhas",
      "CaracteresDuasLinhas",
      "FonteDuasLinhas",
      "PosicaoDuasLinhas",
      "CorrecaoDuasLinhas",
      "Mensagem",
      "FonteMensagem",
      "PosicaoMensagem",
      "IdentificacaoEmpresa",
      "FonteIdentificacao",
      "PosicaoIdentificacao",
      "AlturaPapel",
      "DeslocamentoDtCadastro",
      "FonteDtCadastro",
      "PosicaoDtCadastro",
      "DeslocamentoPromocao",
      "PosicaoPromocao",
      "FontePromocao",
      "DeslocamentoBarra",
      "PosicaoBarra",
      "DeslocamentoDescricao",
      "InicioImpCodBarras",
      "VlPixel",
      "DeslocamentoIdentificacao",
      "FonteDtFabricacao",
      "DeslocamentoDtFabricacao",
      "PosicaoDtFabricacao",
      ];
  }
}

ConfiguracaoEtiquetas.knex(connections.plano);

export type TConfiguracaoEtiquetas = ModelObject<ConfiguracaoEtiquetas>;
