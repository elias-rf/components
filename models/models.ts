import { connections } from "@/config/connections";
import {
  AgendaTelefoneModel,
  TAgendaTelefoneModel,
} from "@/models/agenda-telefone/agenda-telefone-model";
import {
  TEtiquetaExternaModel,
  etiquetaExternaModelRegister,
} from "@/models/etiqueta-externa/model";
import {
  TOrdemProducaoOperacaoModel,
  ordemProducaoOperacaoModelRegister,
} from "@/models/ordem-producao-operacao/model";
import {
  TOrdemProducaoModel,
  ordemProducaoModelRegister,
} from "@/models/ordem-producao/model";
import {
  TProdutoItemModel,
  produtoItemModelRegister,
} from "@/models/produto-item/model";
import {
  TProdutoPlanoModel,
  produtoPlanoModelRegister,
} from "@/models/produto-plano/model";

export type TModels = {
  produtoItem: TProdutoItemModel;
  produtoPlano: TProdutoPlanoModel;
  agendaTelefone: TAgendaTelefoneModel;
  ordemProducao: TOrdemProducaoModel;
  ordemProducaoOperacao: TOrdemProducaoOperacaoModel;
  etiquetaExterna: TEtiquetaExternaModel;
};

export const models = {} as TModels;

const args = {
  connections,
  models,
};

export const modelsRegister = (args: any) => {
  new AgendaTelefoneModel(args);
  produtoItemModelRegister(args);
  produtoPlanoModelRegister(args);
  ordemProducaoOperacaoModelRegister(args);
  ordemProducaoModelRegister(args);
  etiquetaExternaModelRegister(args);
};

modelsRegister(args);
