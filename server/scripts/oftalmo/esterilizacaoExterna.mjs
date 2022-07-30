import { connections } from "../connections.mjs";
import { copy } from "../copy.mjs";

await copy(connections.oftalmo, "tEsterilizacaoExterna", "kLoteEstExt", [
  "kLoteEstExt",
  "Data",
  "DataRetorno",
  "Quantidade",
  "QtdCaixa",
  "Fechado",
  "Resultado",
  "UsuarioResultado",
  "Obs",
  "LoteEto",
]);
