import { TConnections } from "../../types";
import { rpcServer } from "../../utils/rpc/rpc-server";
import { connections } from "../dal/connections";

// @index(['./**/*.rpc.ts','!./**/*.spec.ts','!./**/*.old.rpc.ts'], (f, _) => `import { ${_.camelCase(f.name)} } from '${f.path}'`)
import { agendaTelefoneRpc } from "./agenda-telefone/agenda-telefone.rpc";
import { cidadeRpc } from "./cidade/cidade.rpc";
import { clienteRpc } from "./cliente/cliente.rpc";
import { crudRpc } from "./crud/crud.rpc";
import { echoRpc } from "./echo/echo.rpc";
import { esterilizacaoExternaRpc } from "./esterilizacao-externa/esterilizacao-externa.rpc";
import { esterilizacaoInternaRpc } from "./esterilizacao-interna/esterilizacao-interna.rpc";
import { estoqueRpc } from "./estoque/estoque.rpc";
import { groupSubjectRpc } from "./group-subject/group-subject.rpc";
import { nfEntradaControleRpc } from "./nf-entrada-controle/nf-entrada-controle.rpc";
import { nfEntradaItemRpc } from "./nf-entrada-item/nf-entrada-item.rpc";
import { nfEntradaRpc } from "./nf-entrada/nf-entrada.rpc";
import { nfSaidaFvRpc } from "./nf-saida-fv/nf-saida-fv.rpc";
import { nfSaidaItemRpc } from "./nf-saida-item/nf-saida-item.rpc";
import { nfSaidaRpc } from "./nf-saida/nf-saida.rpc";
import { operacaoProducaoRpc } from "./operacao-producao/operacao-producao.rpc";
import { ordemProducaoRpc } from "./ordem-producao/ordem-producao.rpc";
import { produtoEstatisticaRpc } from "./produto-estatistica/produto-estatistica.rpc";
import { produtoItemRpc } from "./produto-item/produto-item.rpc";
import { produtoPlanoRpc } from "./produto-plano/produto-plano.rpc";
import { produtoRpc } from "./produto/produto.rpc";
import { usuarioRpc } from "./usuario/usuario.rpc";
// @endindex

type TLibRpc = (connections: TConnections) => any;

export const rpc = rpcServer();

function index(initiais: string) {
  return rpc.list(initiais);
}

function getName(lib: any, name: string) {
  if (lib.name.endsWith("Rpc")) {
    return (
      lib.name.substring(0, lib.name.length - 3) +
      name.charAt(0).toUpperCase() +
      name.slice(1)
    );
  }
  return name;
}

function register(lib: TLibRpc) {
  const libRpc = lib(connections);
  if (Object.hasOwn(libRpc, "mutation")) {
    Object.keys(libRpc?.mutation).forEach((key) => {
      rpc.addMethod("mutation", getName(lib, key), libRpc.mutation[key]);
    });
  }
  if (Object.hasOwn(libRpc, "query")) {
    Object.keys(libRpc?.query).forEach((key) => {
      rpc.addMethod("query", getName(lib, key), libRpc.query[key]);
    });
  }
}

rpc.addMethod("query", "index", index);
// @index(['./**/*.rpc.ts','!./**/*.spec.ts','!./**/*.old.rpc.ts'], (f, _) => `register(${_.camelCase(f.name)});`)
register(agendaTelefoneRpc);
register(cidadeRpc);
register(clienteRpc);
register(crudRpc);
register(echoRpc);
register(esterilizacaoExternaRpc);
register(esterilizacaoInternaRpc);
register(estoqueRpc);
register(groupSubjectRpc);
register(nfEntradaControleRpc);
register(nfEntradaItemRpc);
register(nfEntradaRpc);
register(nfSaidaFvRpc);
register(nfSaidaItemRpc);
register(nfSaidaRpc);
register(operacaoProducaoRpc);
register(ordemProducaoRpc);
register(produtoEstatisticaRpc);
register(produtoItemRpc);
register(produtoPlanoRpc);
register(produtoRpc);
register(usuarioRpc);
// @endindex
