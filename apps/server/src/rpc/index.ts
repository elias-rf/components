import { JSONRPCServer, SimpleJSONRPCMethod } from "json-rpc-2.0";
import { connections, TConnections } from "../dal/connections";
// @index(['./**/*.ts','!./**/*.spec.ts'], (f, _) => `import {${_.camelCase(f.name)}, T${_.pascalCase(f.name)}} from '${f.path}'`)
import { agendaTelefoneRpc, TAgendaTelefoneRpc } from "./agenda-telefone.rpc";
import { cidadeRpc, TCidadeRpc } from "./cidade.rpc";
import { clienteRpc, TClienteRpc } from "./cliente.rpc";
import { diamanteRpc, TDiamanteRpc } from "./diamante.rpc";
import { echoRpc, TEchoRpc } from "./echo.rpc";
import {
  esterilizacaoExternaRpc,
  TEsterilizacaoExternaRpc,
} from "./esterilizacao-externa.rpc";
import {
  esterilizacaoInternaRpc,
  TEsterilizacaoInternaRpc,
} from "./esterilizacao-interna.rpc";
import { estoqueRpc, TEstoqueRpc } from "./estoque.rpc";
import {
  etiquetaExternaRpc,
  TEtiquetaExternaRpc,
} from "./etiqueta-externa.rpc";
import {
  etiquetaInternaRpc,
  TEtiquetaInternaRpc,
} from "./etiqueta-interna.rpc";
import { groupSubjectRpc, TGroupSubjectRpc } from "./group-subject.rpc";
import { maquinaRpc, TMaquinaRpc } from "./maquina.rpc";
import {
  nfEntradaControleRpc,
  TNfEntradaControleRpc,
} from "./nf-entrada-controle.rpc";
import { nfEntradaItemRpc, TNfEntradaItemRpc } from "./nf-entrada-item.rpc";
import { nfEntradaLogRpc, TNfEntradaLogRpc } from "./nf-entrada-log.rpc";
import { nfEntradaRpc, TNfEntradaRpc } from "./nf-entrada.rpc";
import {
  operacaoProducaoRpc,
  TOperacaoProducaoRpc,
} from "./operacao-producao.rpc";
import { ordemProducaoRpc, TOrdemProducaoRpc } from "./ordem-producao.rpc";
import {
  produtoCategoriaRpc,
  TProdutoCategoriaRpc,
} from "./produto-categoria.rpc";
import {
  produtoControleRpc,
  TProdutoControleRpc,
} from "./produto-controle.rpc";
import {
  produtoEstatisticaRpc,
  TProdutoEstatisticaRpc,
} from "./produto-estatistica.rpc";
import { produtoPlanoRpc, TProdutoPlanoRpc } from "./produto-plano.rpc";
import { produtoRpc, TProdutoRpc } from "./produto.rpc";
import { transferenciaRpc, TTransferenciaRpc } from "./transferencia.rpc";
import { TUsuarioRpc, usuarioRpc } from "./usuario.rpc";
import { TVendaRpc, vendaRpc } from "./venda.rpc";
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
  // @index(['./**/*.ts','!./**/*.spec.ts'], (f, _) => `T${_.pascalCase(f.name)} &`)
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
    TProdutoPlanoRpc &
    TProdutoRpc &
    TTransferenciaRpc &
    TUsuarioRpc &
    TVendaRpc &
    // @endindex
    IndexRpc;

rpc.addMethod("index", <Method>index);
// @index(['./**/*.ts','!./**/*.spec.ts'], (f, _) => `register(${_.camelCase(f.name)});`)
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
register(produtoPlanoRpc);
register(produtoRpc);
register(transferenciaRpc);
register(usuarioRpc);
register(vendaRpc);
// @endindex
