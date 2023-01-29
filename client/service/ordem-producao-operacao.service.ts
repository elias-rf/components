import { TOrdemProducaoOperacaoRpc } from "../../types/ordem-producao-operacao.type";
import { rpcFactory } from "../lib/http/rpc.factory";

const SERVICE = "ordemProducaoOperacao";
export const ordemProducaoOperacaoService: TOrdemProducaoOperacaoRpc =
  rpcFactory<TOrdemProducaoOperacaoRpc>(SERVICE);

// clear() {
//   return {
//     kOperacaoOp: "",
//     fkOp: "",
//     fkOperacaoLP: "",
//     fkOperacao: "",
//     fkFuncionario: "",
//     fkMaquina: "",
//     DataHoraInicio: "",
//     DataHoraFim: "",
//     QtdInicial: "",
//     QtdConforme: "",
//     QtdRetrabalho: "",
//     fkOperacaoRetrab: "",
//     Complemento: "",
//     fkOPFilha: "",
//     EspPriAlca: "",
//     EspSegAlca: "",
//   };
// },
