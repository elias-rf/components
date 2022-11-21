import { rpcServer } from "../../utils/rpc/rpc-server";
import { connections, TConnections } from "../dal/connections";

// @index(['./**/*.rpc.ts','!./**/*.spec.ts','!./**/*.old.rpc.ts'], (f, _) => `import {${_.camelCase(f.name)}, T${_.pascalCase(f.name)}} from '${f.path}'`)
import { crudRpc } from "./crud/crud.rpc";
import { echoRpc } from "./echo/echo.rpc";
import { esterilizacaoExternaRpc } from "./esterilizacao_externa/esterilizacao_externa.rpc";
import { esterilizacaoInternaRpc } from "./esterilizacao_interna/esterilizacao_interna.rpc";
import { estoqueRpc } from "./estoque/estoque.rpc";
import { nfEntradaRpc } from "./nf_entrada/nf_entrada.rpc";
import { nfSaidaRpc } from "./nf_saida/nf_saida.rpc";
import { nfSaidaFvRpc } from "./nf_saida_fv/nf_saida_fv.rpc";
import { operacaoProducaoRpc } from "./operacao_producao/operacao_producao.rpc";
import { ordemProducaoRpc } from "./ordem_producao/ordem_producao.rpc";
import { produtoEstatisticaRpc } from "./produto_estatistica/produto_estatistica.rpc";
import { produtoItemRpc } from "./produto_item/produto_item.rpc";
import { usuarioRpc } from "./usuario/usuario.rpc";
// @endindex

type TLibRpc = (connections: TConnections) => any;

export const rpc = rpcServer();

// type TIndexRpc = {
//   index(): Promise<string[]>;
// };

function index() {
  return rpc.list().sort();
}

function register(lib: TLibRpc) {
  const libRpc = lib(connections);
  Object.keys(libRpc).forEach((key) => {
    rpc.addMethod(key, libRpc[key]);
  });
}

// export type TApiRpc =
//   // @index(['./**/*.rpc.ts','!./**/*.spec.ts','!./**/*.old.rpc.ts'], (f, _) => `T${_.pascalCase(f.name)} &`)
//   TCrudRpc &
//     TEchoRpc &
//     TEsterilizacaoExternaRpc &
//     TEsterilizacaoInternaRpc &
//     TEstoqueRpc &
//     TNfEntradaRpc &
//     TNfSaidaFvRpc &
//     TNfSaidaRpc &
//     TOperacaoProducaoRpc &
//     TOrdemProducaoRpc &
//     TProdutoEstatisticaRpc &
//     TProdutoItemRpc &
//     TUsuarioRpc &
//     // @endindex
//     TIndexRpc;

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
