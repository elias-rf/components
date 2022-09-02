import { rpcFactory } from "../lib/http/rpc.factory";

export type IProdutoItemRecord = {
  kProdutoItem?: string;
  NomeProdutoItem?: string;
  fkProduto?: string;
  idVisiontech?: string;
};

export const ordemProducaoOperacaoService = {
  ...rpcFactory("ordemProducaoOperacao"),

  clear() {
    return {
      kOperacaoOp: "",
      fkOp: "",
      fkOperacaoLP: "",
      fkOperacao: "",
      fkFuncionario: "",
      fkMaquina: "",
      DataHoraInicio: "",
      DataHoraFim: "",
      QtdInicial: "",
      QtdConforme: "",
      QtdRetrabalho: "",
      fkOperacaoRetrab: "",
      Complemento: "",
      fkOPFilha: "",
      EspPriAlca: "",
      EspSegAlca: "",
    };
  },
};
