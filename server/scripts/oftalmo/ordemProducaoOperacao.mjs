import { connections } from "../connections.mjs";
import { copy } from "../copy.mjs";

await copy(connections.oftalmo, "tOperacaoOrdemProducao", "kOperacaoOP", [
  "kOperacaoOP",
  "fkOP",
  "fkOperacao",
  "fkFuncionario",
  "fkMaquina",
  "DataHoraInicio",
  "DataHoraFim",
  "QtdInicial",
  "QtdConforme",
  "QtdRetrabalho",
  "Complemento",
  "fkOPFilha",
]);
