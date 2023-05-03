//--
import { TCrud } from "@/utils/crud/crud.type";
import { TEtiquetaExternaRpc } from "../../etiqueta-externa/etiqueta-externa.type";
import { TOrdemProducaoOperacaoModel } from "../../ordem-producao-operacao/ordem-producao-operacao.type";
import { TProdutoItemModel } from "../../produto-item/produto-item.type";
import { controleFactory } from "./controle";
import { dataFabricacaoFactory } from "./data-fabricacao";
import { dataValidadeFactory } from "./data-validade";
import { ehControleValidoFactory } from "./eh-controle-valido";
import { etiquetaExternaFactory } from "./etiqueta-externa";
import { fromControleFactory } from "./from-controle";
import { produtoItemFactory } from "./produto-item";
import { produtoPlanoFactory } from "./produto-plano";

export function ordemProducaoMethods({
  crud,
  etiquetaExternaModel,
  ordemProducaoOperacaoModel,
  produtoItemModel,
}: {
  crud: TCrud;
  etiquetaExternaModel: TEtiquetaExternaRpc;
  ordemProducaoOperacaoModel: TOrdemProducaoOperacaoModel;
  produtoItemModel: TProdutoItemModel;
}) {
  const controle = controleFactory();
  const dataFabricacao = dataFabricacaoFactory({ ordemProducaoOperacaoModel });
  const dataValidade = dataValidadeFactory({ dataFabricacao });
  const ehControleValido = ehControleValidoFactory();
  const etiquetaExterna = etiquetaExternaFactory({ etiquetaExternaModel });
  const fromControle = fromControleFactory();
  const produtoItem = produtoItemFactory({ crud, produtoItemModel });
  const produtoPlano = produtoPlanoFactory({ crud, produtoItemModel });

  return {
    query: {
      controle,
      dataFabricacao,
      dataValidade,
      ehControleValido,
      etiquetaExterna,
      fromControle,
      produtoItem,
      produtoPlano,
    },
  };
}
