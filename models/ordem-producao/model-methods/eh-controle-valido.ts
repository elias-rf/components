import { module10 } from "../../../utils/string/module10";

// Valida se número de série é válido
export function ehControleValidoFactory() {
  return async ({ controle }: { controle: string }) => {
    if (!controle) return false;

    if (controle.length === 12) {
      const serial = controle.substring(0, 11);
      const dv = controle.substring(11);
      if (module10(serial) === dv) {
        return true;
      }
    }
    return false;
  };
}
