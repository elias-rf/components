import { JSONRPCServer, SimpleJSONRPCMethod } from "json-rpc-2.0";
import { connections, TConnections } from "../dal/connections";
// @index(['./**/*.rpc.ts','!./**/*.spec.ts'], (f, _) => `import {${_.camelCase(f.name)}, T${_.pascalCase(f.name)}} from '${f.path}'`)
import {
  agendaTelefoneRpc,
  TAgendaTelefoneRpc,
} from "./agenda-telefone/agenda-telefone.rpc";
import { cidadeRpc, TCidadeRpc } from "./cidade/cidade.rpc";
import { clienteRpc, TClienteRpc } from "./cliente/cliente.rpc";
import { diamanteRpc, TDiamanteRpc } from "./diamante/diamante.rpc";
import { echoRpc, TEchoRpc } from "./echo/echo.rpc";
import {
  esterilizacaoExternaRpc,
  TEsterilizacaoExternaRpc,
} from "./esterilizacao-externa/esterilizacao-externa.rpc";
import {
  esterilizacaoInternaRpc,
  TEsterilizacaoInternaRpc,
} from "./esterilizacao-interna/esterilizacao-interna.rpc";
import { estoqueRpc, TEstoqueRpc } from "./estoque/estoque.rpc";
import {
  etiquetaExternaRpc,
  TEtiquetaExternaRpc,
} from "./etiqueta-externa/etiqueta-externa.rpc";
import {
  etiquetaInternaRpc,
  TEtiquetaInternaRpc,
} from "./etiqueta-interna/etiqueta-interna.rpc";
import {
  groupSubjectRpc,
  TGroupSubjectRpc,
} from "./group-subject/group-subject.rpc";
import { maquinaRpc, TMaquinaRpc } from "./maquina/maquina.rpc";
import {
  nfEntradaControleRpc,
  TNfEntradaControleRpc,
} from "./nf-entrada-controle/nf-entrada-controle.rpc";
import {
  nfEntradaItemRpc,
  TNfEntradaItemRpc,
} from "./nf-entrada-item/nf-entrada-item.rpc";
import {
  nfEntradaLogRpc,
  TNfEntradaLogRpc,
} from "./nf-entrada-log/nf-entrada-log.rpc";
import { nfEntradaRpc, TNfEntradaRpc } from "./nf-entrada/nf-entrada.rpc";
import {
  operacaoProducaoRpc,
  TOperacaoProducaoRpc,
} from "./operacao-producao/operacao-producao.rpc";
import {
  ordemProducaoRpc,
  TOrdemProducaoRpc,
} from "./ordem-producao/ordem-producao.rpc";
import {
  produtoCategoriaRpc,
  TProdutoCategoriaRpc,
} from "./produto-categoria/produto-categoria.rpc";
import {
  produtoControleRpc,
  TProdutoControleRpc,
} from "./produto-controle/produto-controle.rpc";
import {
  produtoEstatisticaRpc,
  TProdutoEstatisticaRpc,
} from "./produto-estatistica/produto-estatistica.rpc";
import {
  produtoItemRpc,
  TProdutoItemRpc,
} from "./produto-item/produto-item.rpc";
import {
  produtoPlanoRpc,
  TProdutoPlanoRpc,
} from "./produto-plano/produto-plano.rpc";
import { produtoRpc, TProdutoRpc } from "./produto/produto.rpc";
import {
  transferenciaRpc,
  TTransferenciaRpc,
} from "./transferencia/transferencia.rpc";
import { TUsuarioRpc, usuarioRpc } from "./usuario/usuario.rpc";
import { TVendaRpc, vendaRpc } from "./venda/venda.rpc";
// @endindex

type LibRpc = (connections: TConnections) => any;

export const rpc = new JSONRPCServer();
const indexMethods: string[] = [];

interface IndexRpc {
  index(): Promise<string[]>;
}

function index() {
  return indexMethods.sort();
}

function register(lib: LibRpc) {
  const libRpc = lib(connections);
  Object.keys(libRpc).forEach((key) => {
    rpc.addMethod(key, libRpc[key]);
    indexMethods.push(key);
  });
}
type Method = SimpleJSONRPCMethod<any>;

export type ApiRpc =
  // @index(['./**/*.rpc.ts','!./**/*.spec.ts'], (f, _) => `T${_.pascalCase(f.name)} &`)
  TAgendaTelefoneRpc &
    TCidadeRpc &
    TClienteRpc &
    TDiamanteRpc &
    TEchoRpc &
    TEsterilizacaoExternaRpc &
    TEsterilizacaoInternaRpc &
    TEstoqueRpc &
    TEtiquetaExternaRpc &
    TEtiquetaInternaRpc &
    TGroupSubjectRpc &
    TMaquinaRpc &
    TNfEntradaControleRpc &
    TNfEntradaItemRpc &
    TNfEntradaLogRpc &
    TNfEntradaRpc &
    TOperacaoProducaoRpc &
    TOrdemProducaoRpc &
    TProdutoCategoriaRpc &
    TProdutoControleRpc &
    TProdutoEstatisticaRpc &
    TProdutoItemRpc &
    TProdutoPlanoRpc &
    TProdutoRpc &
    TTransferenciaRpc &
    TUsuarioRpc &
    TVendaRpc &
    // @endindex
    IndexRpc;

rpc.addMethod("index", <Method>index);
// @index(['./**/*.rpc.ts','!./**/*.spec.ts'], (f, _) => `register(${_.camelCase(f.name)});`)
register(agendaTelefoneRpc);
register(cidadeRpc);
register(clienteRpc);
register(diamanteRpc);
register(echoRpc);
register(esterilizacaoExternaRpc);
register(esterilizacaoInternaRpc);
register(estoqueRpc);
register(etiquetaExternaRpc);
register(etiquetaInternaRpc);
register(groupSubjectRpc);
register(maquinaRpc);
register(nfEntradaControleRpc);
register(nfEntradaItemRpc);
register(nfEntradaLogRpc);
register(nfEntradaRpc);
register(operacaoProducaoRpc);
register(ordemProducaoRpc);
register(produtoCategoriaRpc);
register(produtoControleRpc);
register(produtoEstatisticaRpc);
register(produtoItemRpc);
register(produtoPlanoRpc);
register(produtoRpc);
register(transferenciaRpc);
register(usuarioRpc);
register(vendaRpc);
// @endindex
