import { rpcServer } from "../../utils/rpc/rpc-server";
import { connections, TConnections } from "../dal/connections";

// @index(['./**/*.rpc.ts','!./**/*.spec.ts','!./**/*.old.rpc.ts'], (f, _) => `import {${_.camelCase(f.name)}, T${_.pascalCase(f.name)}} from '${f.path}'`)
import { crudRpc, TCrudRpc } from "./crud/crud.rpc";
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
import { nfEntradaRpc, TNfEntradaRpc } from "./nf-entrada/nf-entrada.rpc";
import { nfSaidaFvRpc, TNfSaidaFvRpc } from "./nf-saida-fv/nf-saida-fv.rpc";
import { nfSaidaRpc, TNfSaidaRpc } from "./nf-saida/nf-saida.rpc";
import {
  operacaoProducaoRpc,
  TOperacaoProducaoRpc,
} from "./operacao-producao/operacao-producao.rpc";
import {
  ordemProducaoRpc,
  TOrdemProducaoRpc,
} from "./ordem-producao/ordem-producao.rpc";
import {
  produtoEstatisticaRpc,
  TProdutoEstatisticaRpc,
} from "./produto-estatistica/produto-estatistica.rpc";
import {
  produtoItemRpc,
  TProdutoItemRpc,
} from "./produto-item/produto-item.rpc";
import { TUsuarioRpc, usuarioRpc } from "./usuario/usuario.rpc";
// @endindex

type LibRpc = (connections: TConnections) => any;

export const rpc = rpcServer();

interface IndexRpc {
  index(): Promise<string[]>;
}

function index() {
  return rpc.list().sort();
}

function register(lib: LibRpc) {
  const libRpc = lib(connections);
  Object.keys(libRpc).forEach((key) => {
    rpc.addMethod(key, libRpc[key]);
  });
}

export type ApiRpc =
  // @index(['./**/*.rpc.ts','!./**/*.spec.ts','!./**/*.old.rpc.ts'], (f, _) => `T${_.pascalCase(f.name)} &`)
  TCrudRpc &
    TEchoRpc &
    TEsterilizacaoExternaRpc &
    TEsterilizacaoInternaRpc &
    TEstoqueRpc &
    TNfEntradaRpc &
    TNfSaidaFvRpc &
    TNfSaidaRpc &
    TOperacaoProducaoRpc &
    TOrdemProducaoRpc &
    TProdutoEstatisticaRpc &
    TProdutoItemRpc &
    TUsuarioRpc &
    // @endindex
    IndexRpc;

rpc.addMethod("index", index);
// @index(['./**/*.rpc.ts','!./**/*.spec.ts','!./**/*.old.rpc.ts'], (f, _) => `register(${_.camelCase(f.name)});`)
register(crudRpc);
register(echoRpc);
register(esterilizacaoExternaRpc);
register(esterilizacaoInternaRpc);
register(estoqueRpc);
register(nfEntradaRpc);
register(nfSaidaFvRpc);
register(nfSaidaRpc);
register(operacaoProducaoRpc);
register(ordemProducaoRpc);
register(produtoEstatisticaRpc);
register(produtoItemRpc);
register(usuarioRpc);
// @endindex
