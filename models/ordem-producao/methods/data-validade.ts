import { TIds } from "@/types";
import { day } from "@/utils/date/day";

// Retorna data de validade
export function dataValidadeFactory({
  dataFabricacao,
}: {
  dataFabricacao: TIds;
}) {
  return async ({ id }: { id: TIds }) => {
    const fabricacao = await dataFabricacao({
      id,
    });
    if (fabricacao === "") {
      throw new Error("Ordem de produção não possui 3059, 3060, 4020 ou 3160");
    }
    const validade = day(fabricacao).add(5, "y").format("YYYY-MM-DD");
    return validade;
  };
}
