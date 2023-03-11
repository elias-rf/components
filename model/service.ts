// ---

// @index(['./**/*.service.ts'], (f, _) => `import { ${_.camelCase(f.name.slice(0,-8))}Service } from "${f.path}";`)
import { agendaTelefoneService } from "./agenda-telefone/agenda-telefone.service";
import { cidadeService } from "./cidade/cidade.service";
import { clienteService } from "./cliente/cliente.service";
import { diamanteService } from "./diamante/diamante.service";
import { empregadoService } from "./empregado/empregado.service";
import { esterilizacaoExternaService } from "./esterilizacao-externa/esterilizacao-externa.service";
import { esterilizacaoInternaService } from "./esterilizacao-interna/esterilizacao-interna.service";
import { estoqueService } from "./estoque/estoque.service";
import { etiquetaExternaService } from "./etiqueta-externa/etiqueta-externa.service";
import { etiquetaInternaService } from "./etiqueta-interna/etiqueta-interna.service";
import { fornecedorService } from "./fornecedor/fornecedor.service";
import { groupSubjectService } from "./group-subject/group-subject.service";
import { maquinaService } from "./maquina/maquina.service";
import { nfCfopService } from "./nf-cfop/nf-cfop.service";
import { nfEntradaControleService } from "./nf-entrada-controle/nf-entrada-controle.service";
import { nfEntradaItemService } from "./nf-entrada-item/nf-entrada-item.service";
import { nfEntradaLogService } from "./nf-entrada-log/nf-entrada-log.service";
import { nfEntradaService } from "./nf-entrada/nf-entrada.service";
import { nfSaidaFvService } from "./nf-saida-fv/nf-saida-fv.service";
import { nfSaidaItemService } from "./nf-saida-item/nf-saida-item.service";
import { nfSaidaService } from "./nf-saida/nf-saida.service";
import { operacaoProducaoService } from "./operacao-producao/operacao-producao.service";
import { ordemProducaoOperacaoService } from "./ordem-producao-operacao/ordem-producao-operacao.service";
import { ordemProducaoService } from "./ordem-producao/ordem-producao.service";
import { pagarService } from "./pagar/pagar.service";
import { pedidoItemService } from "./pedido-item/pedido-item.service";
import { pedidoService } from "./pedido/pedido.service";
import { produtoCategoriaService } from "./produto-categoria/produto-categoria.service";
import { produtoControleService } from "./produto-controle/produto-controle.service";
import { produtoEstatisticaService } from "./produto-estatistica/produto-estatistica.service";
import { produtoItemService } from "./produto-item/produto-item.service";
import { produtoPlanoService } from "./produto-plano/produto-plano.service";
import { produtoService } from "./produto/produto.service";
import { receberService } from "./receber/receber.service";
import { usuarioService } from "./usuario/usuario.service";
import { vendedorMetaService } from "./vendedor-meta/vendedor-meta.service";
import { vendedorService } from "./vendedor/vendedor.service";
// @endindex

export const service = {
  // @index(['./**/*.service.ts'], (f, _) => `${_.camelCase(f.name.slice(0,-8))}Service: ${_.camelCase(f.name.slice(0,-8))}Service,`)
  agendaTelefoneService: agendaTelefoneService,
  cidadeService: cidadeService,
  clienteService: clienteService,
  diamanteService: diamanteService,
  empregadoService: empregadoService,
  esterilizacaoExternaService: esterilizacaoExternaService,
  esterilizacaoInternaService: esterilizacaoInternaService,
  estoqueService: estoqueService,
  etiquetaExternaService: etiquetaExternaService,
  etiquetaInternaService: etiquetaInternaService,
  fornecedorService: fornecedorService,
  groupSubjectService: groupSubjectService,
  maquinaService: maquinaService,
  nfCfopService: nfCfopService,
  nfEntradaControleService: nfEntradaControleService,
  nfEntradaItemService: nfEntradaItemService,
  nfEntradaLogService: nfEntradaLogService,
  nfEntradaService: nfEntradaService,
  nfSaidaFvService: nfSaidaFvService,
  nfSaidaItemService: nfSaidaItemService,
  nfSaidaService: nfSaidaService,
  operacaoProducaoService: operacaoProducaoService,
  ordemProducaoOperacaoService: ordemProducaoOperacaoService,
  ordemProducaoService: ordemProducaoService,
  pagarService: pagarService,
  pedidoItemService: pedidoItemService,
  pedidoService: pedidoService,
  produtoCategoriaService: produtoCategoriaService,
  produtoControleService: produtoControleService,
  produtoEstatisticaService: produtoEstatisticaService,
  produtoItemService: produtoItemService,
  produtoPlanoService: produtoPlanoService,
  produtoService: produtoService,
  receberService: receberService,
  usuarioService: usuarioService,
  vendedorMetaService: vendedorMetaService,
  vendedorService: vendedorService,
  // @endindex
};
