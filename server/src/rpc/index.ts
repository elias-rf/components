import { JSONRPCServer, SimpleJSONRPCMethod } from "json-rpc-2.0";
import { connections, Connections } from "../dal/connections";

import { Authentication, AuthenticationRpc } from "./authentication";
import { Cliente, ClienteRpc } from "./cliente";
import { Echo, EchoRpc } from "./echo";
import {
  EsterilizacaoExterna,
  EsterilizacaoExternaRpc,
} from "./esterilizacao-externa";
import {
  EsterilizacaoInterna,
  EsterilizacaoInternaRpc,
} from "./esterilizacao-interna";
import { Estoque, EstoqueRpc } from "./estoque";
import { NfEntrada, NfEntradaRpc } from "./nf-entrada";
import { NfEntradaControle, NfEntradaControleRpc } from "./nf-entrada-controle";
import { NfEntradaItem, NfEntradaItemRpc } from "./nf-entrada-item";
import { NfEntradaLog, NfEntradaLogRpc } from "./nf-entrada-log";
import { Operacao, OperacaoRpc } from "./operacao";
import { OrdemProducao, OrdemProducaoRpc } from "./ordem-producao";
import { Permissao, PermissaoRpc } from "./permissao";
import { Phonebook, PhonebookRpc } from "./phonebook";
import { ProdutoControle, ProdutoControleRpc } from "./produto-controle";
import {
  ProdutoEstatistica,
  ProdutoEstatisticaRpc,
} from "./produto-estatistica";
import { Transferencia, TransferenciaRpc } from "./transferencia";
import { Usuario, UsuarioRpc } from "./usuario";
import { Venda, VendaRpc } from "./venda";

type LibRpc = (connections: Connections) => any;

export const rpc = new JSONRPCServer();
let indexMethods: string[] = [];

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

export type ApiRpc = IndexRpc &
  AuthenticationRpc &
  ClienteRpc &
  EchoRpc &
  EsterilizacaoExternaRpc &
  EsterilizacaoInternaRpc &
  EstoqueRpc &
  NfEntradaRpc &
  NfEntradaControleRpc &
  NfEntradaItemRpc &
  NfEntradaLogRpc &
  OperacaoRpc &
  OrdemProducaoRpc &
  PermissaoRpc &
  PhonebookRpc &
  ProdutoControleRpc &
  ProdutoEstatisticaRpc &
  TransferenciaRpc &
  UsuarioRpc &
  VendaRpc;

rpc.addMethod("index", <Method>index);
register(Echo);
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
