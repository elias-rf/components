import { day } from "@/utils/date/day";
import { TOrdemProducaoIds, TOrdemProducaoModel } from "../ordem-producao.type";

// Retorna data de validade
export function dataValidadeFactory({
  dataFabricacao,
}: {
  dataFabricacao: TOrdemProducaoModel["query"]["dataFabricacao"];
}) {
  return async ({ id }: { id: TOrdemProducaoIds }) => {
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
