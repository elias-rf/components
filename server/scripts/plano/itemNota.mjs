import { connections } from "../connections.mjs";
import { upsert } from "../upsert.mjs";

await upsert(connections.oftalmo, "diamante", "id", [
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
