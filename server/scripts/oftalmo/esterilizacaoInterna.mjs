import { connections } from "../connections.mjs";
import { copy } from "../copy.mjs";

await copy(connections.oftalmo, "tEsterilizacaoInterna", "kLoteEstInt", [
  "kLoteEstInt",
  "Data",
  "Resultado",
  "UsuarioResultado",
  "Obs",
  "Fechado",
  "UsuarioFechamento",
  "DataFechamento",
  "DataHoraAutoclave",
]);
