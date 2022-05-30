import { JSONRPCServer, SimpleJSONRPCMethod } from "json-rpc-2.0";
import * as phonebook from "./phonebook";
import * as usuario from "./usuario";
import * as esterilizacaoExterna from "./esterilizacao-externa";
import * as esterilizacaoInterna from "./esterilizacao-interna";
import * as operacao from "./operacao";

const rpc = new JSONRPCServer();

// oftalmo.phonebook
rpc.addMethod("listPhonebook", <SimpleJSONRPCMethod>phonebook.list);
rpc.addMethod("readPhonebook", <SimpleJSONRPCMethod>phonebook.read);
rpc.addMethod("delPhonebook", <SimpleJSONRPCMethod>phonebook.del);
rpc.addMethod("updatePhonebook", <SimpleJSONRPCMethod>phonebook.update);
rpc.addMethod("createPhonebook", <SimpleJSONRPCMethod>phonebook.create);

// oftalmo.tbl_seguranca_usuario
rpc.addMethod("listUsuario", <SimpleJSONRPCMethod>usuario.list);
rpc.addMethod("readUsuario", <SimpleJSONRPCMethod>usuario.read);
rpc.addMethod("delUsuario", <SimpleJSONRPCMethod>usuario.del);
rpc.addMethod("updateUsuario", <SimpleJSONRPCMethod>usuario.update);
rpc.addMethod("createUsuario", <SimpleJSONRPCMethod>usuario.create);

// oftalmo.tEsterilizacaoexterna
rpc.addMethod(
  "diarioEsterilizacaoExterna",
  <SimpleJSONRPCMethod>esterilizacaoExterna.diario
);
rpc.addMethod(
  "mensalEsterilizacaoExterna",
  <SimpleJSONRPCMethod>esterilizacaoExterna.mensal
);
rpc.addMethod(
  "modeloEsterilizacaoExterna",
  <SimpleJSONRPCMethod>esterilizacaoExterna.modelo
);
rpc.addMethod(
  "produtoEsterilizacaoExterna",
  <SimpleJSONRPCMethod>esterilizacaoExterna.produto
);

// oftalmo.tEsterilizacaointerna
rpc.addMethod(
  "diarioEsterilizacaoInterna",
  <SimpleJSONRPCMethod>esterilizacaoInterna.diario
);
rpc.addMethod(
  "mensalEsterilizacaoInterna",
  <SimpleJSONRPCMethod>esterilizacaoInterna.mensal
);
rpc.addMethod(
  "modeloEsterilizacaoInterna",
  <SimpleJSONRPCMethod>esterilizacaoInterna.modelo
);
rpc.addMethod(
  "produtoEsterilizacaoInterna",
  <SimpleJSONRPCMethod>esterilizacaoInterna.produto
);

// oftalmo.tOperacaoOrdemProducao
rpc.addMethod("diarioOperacao", <SimpleJSONRPCMethod>operacao.diario);
rpc.addMethod("mensalOperacao", <SimpleJSONRPCMethod>operacao.mensal);
rpc.addMethod("modeloOperacao", <SimpleJSONRPCMethod>operacao.modelo);
rpc.addMethod("produtoOperacao", <SimpleJSONRPCMethod>operacao.produto);
rpc.addMethod("turnoOperacao", <SimpleJSONRPCMethod>operacao.turno);

export default rpc;
