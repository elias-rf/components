import { JSONRPCServer, SimpleJSONRPCMethod } from "json-rpc-2.0";
import { connections, Connections } from "../dal/connections";

import { Authentication } from "./authentication";
import { Cliente } from "./cliente";
import { EsterilizacaoExterna } from "./esterilizacao-externa";
import { EsterilizacaoInterna } from "./esterilizacao-interna";
import { Estoque } from "./estoque";
import { NfEntrada } from "./nf-entrada";
import { NfEntradaControle } from "./nf-entrada-controle";
import { NfEntradaItem } from "./nf-entrada-item";
import { NfEntradaLog } from "./nf-entrada-log";
import { Operacao } from "./operacao";
import { OrdemProducao } from "./ordem-producao";
import { Permissao } from "./permissao";
import { Phonebook } from "./phonebook";
import { ProdutoControle } from "./produto-controle";
import { ProdutoEstatistica } from "./produto-estatistica";
import { Transferencia } from "./transferencia";
import { Usuario } from "./usuario";
import { Venda } from "./venda";

type LibRpc = (connections: Connections) => any;

export const rpc = new JSONRPCServer();
let indexMethods: string[] = [];

function echo(arg1: any, arg2: any) {
  return { arg1, arg2 };
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

rpc.addMethod("echo", <Method>echo);
rpc.addMethod("index", <Method>index);

register(Authentication);
register(Cliente);
register(EsterilizacaoExterna);
register(EsterilizacaoInterna);
register(Estoque);
register(NfEntrada);
register(NfEntradaControle);
register(NfEntradaItem);
register(NfEntradaLog);
register(Operacao);
register(OrdemProducao);
register(Permissao);
register(Phonebook);
register(ProdutoControle);
register(ProdutoEstatistica);
register(Transferencia);
register(Usuario);
register(Venda);
