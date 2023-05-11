import { ordem_producao } from "@/models/ordem-producao/ordem-producao.table";
import { TIds } from "@/types";
import { assertIds } from "@/utils/asserts/assert-ids";
import { module10 } from "@/utils/string/module10";

// Retorna numero de controle a partir da ordem de producao e numero de serie
export function controleFactory() {
  return async ({ ids, serie }: { ids: TIds; serie: string }) => {
    assertIds(ids, ordem_producao.fields);
    const id = ids[0].value;
    const serial = "000000"
      .concat((parseInt(id) / 100).toString())
      .slice(-6)
      .concat("00000".concat(serie).slice(-5));
    const dv = module10(serial);
    return serial.concat(dv);
  };
}
