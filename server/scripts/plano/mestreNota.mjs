import { connections } from "../connections.mjs";
import { copy } from "../copy.mjs";

await copy(connections.plano, "diamante", "id", [
  "id",
  "diamante",
  "tipo",
  "raio",
  "espessura",
  "fkMaquina",
  "fkFuncionario",
  "dataEntrada",
  "ordemInicial",
  "dataSaida",
  "ordemFinal",
  "qtdCortes",
]);
