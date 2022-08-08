import { JSONRPCServer, SimpleJSONRPCMethod } from "json-rpc-2.0";
import { connections, Connections } from "../dal/connections";

import { Authentication, AuthenticationRpc } from "./authentication.rpc";
import { Cliente, ClienteRpc } from "./cliente.rpc";
import { Echo, EchoRpc } from "./echo.rpc";
import {
  EsterilizacaoExterna,
  EsterilizacaoExternaRpc,
} from "./esterilizacao-externa.rpc";
import {
  EsterilizacaoInterna,
  EsterilizacaoInternaRpc,
} from "./esterilizacao-interna.rpc";
import { Estoque, EstoqueRpc } from "./estoque.rpc";
import { EtiquetaExterna, EtiquetaExternaRpc } from "./etiqueta-externa.rpc";
import { EtiquetaInterna, EtiquetaInternaRpc } from "./etiqueta-interna.rpc";
import {
  NfEntradaControle,
  NfEntradaControleRpc,
} from "./nf-entrada-controle.rpc";
import { NfEntradaItem, NfEntradaItemRpc } from "./nf-entrada-item.rpc";
import { NfEntradaLog, NfEntradaLogRpc } from "./nf-entrada-log.rpc";
import { NfEntrada, NfEntradaRpc } from "./nf-entrada.rpc";
import { OperacaoProducao, OperacaoRpc } from "./operacao-producao.rpc";
import { OrdemProducao, OrdemProducaoRpc } from "./ordem-producao.rpc";
import { Permissao, PermissaoRpc } from "./permissao.rpc";
import { Phonebook, PhonebookRpc } from "./phonebook.rpc";
import { ProdutoCategoria, ProdutoCategoriaRpc } from "./produto-categoria.rpc";
import { ProdutoControle, ProdutoControleRpc } from "./produto-controle.rpc";
import {
  ProdutoEstatistica,
  ProdutoEstatisticaRpc,
} from "./produto-estatistica.rpc";
import { ProdutoPlano, ProdutoPlanoRpc } from "./produto-plano.rpc";
import { Produto, ProdutoRpc } from "./produto.rpc";
import { Transferencia, TransferenciaRpc } from "./transferencia.rpc";
import { Usuario, UsuarioRpc } from "./usuario.rpc";
import { Venda, VendaRpc } from "./venda.rpc";

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
  EtiquetaExternaRpc &
  EtiquetaInternaRpc &
  NfEntradaRpc &
  NfEntradaControleRpc &
  NfEntradaItemRpc &
  NfEntradaLogRpc &
  OperacaoRpc &
  OrdemProducaoRpc &
  PermissaoRpc &
  PhonebookRpc &
  ProdutoCategoriaRpc &
  ProdutoControleRpc &
  ProdutoEstatisticaRpc &
  ProdutoPlanoRpc &
  ProdutoRpc &
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
register(EtiquetaExterna);
register(EtiquetaInterna);
register(NfEntrada);
register(NfEntradaControle);
register(NfEntradaItem);
register(NfEntradaLog);
register(OperacaoProducao);
register(OrdemProducao);
register(Permissao);
register(Phonebook);
register(ProdutoControle);
register(ProdutoCategoria);
register(ProdutoEstatistica);
register(ProdutoPlano);
register(Produto);
register(Transferencia);
register(Usuario);
register(Venda);
