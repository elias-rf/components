import { TIds } from "../../../types";
import { module10 } from "../../../utils/string/module10";

// Retorna numero de controle a partir da ordem de producao e numero de serie
export function controleFactory() {
  return ({ id, serie }: { id: TIds; serie: number }) => {
    const serial = "000000"
      .concat((parseInt(id.ordem_producao_id) / 100).toString())
      .slice(-6)
      .concat("00000".concat(serie.toString()).slice(-5));
    const dv = module10(serial);
    return serial.concat(dv);
  };
}
