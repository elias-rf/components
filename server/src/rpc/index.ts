import { JSONRPCServer, SimpleJSONRPCMethod } from "json-rpc-2.0";
import connections from "../dal/connections";
import clienteRpc from "./cliente";
import esterilizacaExternaRpc from "./esterilizacao-externa";
import esterilizacaInternaRpc from "./esterilizacao-interna";
import * as operacao from "./operacao";
import ordemProducaoRpc from "./ordem-producao";
import * as permissao from "./permissao";
import phonebookRpc from "./phonebook";
import transferenciaRpc from "./transferencia";
import * as usuario from "./usuario";
import vendaRpc from "./venda";

const rpc = new JSONRPCServer();

function echo(arg1: any, arg2: any) {
  return { arg1, arg2 };
}

const estExterna = esterilizacaExternaRpc(connections);
const estInterna = esterilizacaInternaRpc(connections);
const cliente = clienteRpc(connections);
const phonebook = phonebookRpc(connections);
const ordemProducao = ordemProducaoRpc(connections);
const transferencia = transferenciaRpc(connections);
const venda = vendaRpc(connections);

type Method = SimpleJSONRPCMethod<any>;

rpc.addMethod("echo", <Method>echo);
rpc.addMethod("clienteCreate", <Method>cliente.create);
rpc.addMethod("clienteDel", <Method>cliente.del);
rpc.addMethod("clienteList", <Method>cliente.list);
rpc.addMethod("clienteRead", <Method>cliente.read);
rpc.addMethod("clienteUpdate", <Method>cliente.update);
rpc.addMethod("clienteSchema", <Method>cliente.schema);
rpc.addMethod("esterilizacaoExternaDiario", <Method>estExterna.diario);
rpc.addMethod("esterilizacaoExternaMensal", <Method>estExterna.mensal);
rpc.addMethod("esterilizacaoExternaModelo", <Method>estExterna.modelo);
rpc.addMethod("esterilizacaoExternaProduto", <Method>estExterna.produto);
rpc.addMethod("esterilizacaoInternaDiario", <Method>estInterna.diario);
rpc.addMethod("esterilizacaoInternaMensal", <Method>estInterna.mensal);
rpc.addMethod("esterilizacaoInternaModelo", <Method>estInterna.modelo);
rpc.addMethod("esterilizacaoInternaProduto", <Method>estInterna.produto);
rpc.addMethod("operacaoDiario", <Method>operacao.diario);
rpc.addMethod("operacaoMensal", <Method>operacao.mensal);
rpc.addMethod("operacaoModelo", <Method>operacao.modelo);
rpc.addMethod("operacaoProduto", <Method>operacao.produto);
rpc.addMethod("operacaoTurno", <Method>operacao.turno);
rpc.addMethod("ordemProducaoCreate", <Method>ordemProducao.create);
rpc.addMethod("ordemProducaoList", <Method>ordemProducao.list);
rpc.addMethod("ordemProducaoRead", <Method>ordemProducao.read);
rpc.addMethod("ordemProducaoUpdate", <Method>ordemProducao.update);
rpc.addMethod("ordemProducaoProdutoItem", <Method>ordemProducao.getProdutoItem);
rpc.addMethod(
  "ordemProducaoProdutoPlano",
  <Method>ordemProducao.getProdutoPlano
);
rpc.addMethod("ordemProducaoProduto", <Method>ordemProducao.getProduto);
rpc.addMethod(
  "ordemProducaoDataFabricao",
  <Method>ordemProducao.getDataFabricacao
);
rpc.addMethod(
  "ordemProducaoDataValidade",
  <Method>ordemProducao.getDataValidade
);
rpc.addMethod("ordemProducaoVersao", <Method>ordemProducao.getVersao);
rpc.addMethod("ordemProducaoControle", <Method>ordemProducao.getControle);
rpc.addMethod(
  "ordemProducaoControleValido",
  <Method>ordemProducao.isControleValido
);

rpc.addMethod("phonebookCreate", <Method>phonebook.create);
rpc.addMethod("phonebookDel", <Method>phonebook.del);
rpc.addMethod("phonebookList", <Method>phonebook.list);
rpc.addMethod("phonebookRead", <Method>phonebook.read);
rpc.addMethod("phonebookUpdate", <Method>phonebook.update);
rpc.addMethod("transferenciaDiario", <Method>transferencia.diario);
rpc.addMethod("transferenciaMensal", <Method>transferencia.mensal);
rpc.addMethod("transferenciaModelo", <Method>transferencia.modelo);
rpc.addMethod("usuarioCreate", <Method>usuario.create);
rpc.addMethod("usuarioDel", <Method>usuario.del);
rpc.addMethod("usuarioList", <Method>usuario.list);
rpc.addMethod("usuarioRead", <Method>usuario.read);
rpc.addMethod("usuarioUpdate", <Method>usuario.update);
rpc.addMethod("vendaDiario", <Method>venda.diario);
rpc.addMethod("vendaMensal", <Method>venda.mensal);
rpc.addMethod("permissaoDel", <Method>permissao.del);
rpc.addMethod("permissaoList", <Method>permissao.list);
rpc.addMethod("permissaoRead", <Method>permissao.read);
rpc.addMethod("permissaoUpdate", <Method>permissao.update);
export default rpc;
