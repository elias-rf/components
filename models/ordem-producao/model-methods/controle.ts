import { module10 } from "@mono/utils/string/module10";
import { TOrdemProducaoIds } from "../ordem-producao.type";

// Retorna numero de controle a partir da ordem de producao e numero de serie
export function controleFactory() {
  return async ({ id, serie }: { id: TOrdemProducaoIds; serie: string }) => {
    const serial = "000000"
      .concat((parseInt(id.ordem_producao_id) / 100).toString())
      .slice(-6)
      .concat("00000".concat(serie).slice(-5));
    const dv = module10(serial);
    return serial.concat(dv);
  };
}
