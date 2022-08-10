import { connections } from "../connections.mjs";
import { upsert } from "../upsert.mjs";

await upsert(connections.oftalmo, "tOperacaoOrdemProducao", "kOperacaoOP", [
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
