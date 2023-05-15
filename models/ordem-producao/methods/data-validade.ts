import { TModels } from "@/models/models";
import { TIds } from "@/types";
import { assertIds } from "@/utils/asserts/assert-ids";
import { day } from "@/utils/date/day";
import { ordem_producao } from "../ordem-producao.table";

// Retorna data de validade
export function dataValidadeFactory({ models }: { models: TModels }) {
  return async ({ ids }: { ids: TIds }) => {
    assertIds(ids, ordem_producao.fields);
    // const id = ids[0].value;
    const fabricacao = await models.ordemProducao.query.dataFabricacao({ ids });
    if (fabricacao === "") {
      throw new Error("Ordem de produção não possui 3059, 3060, 4020 ou 3160");
    }
    const validade = day(fabricacao).add(5, "y").format("YYYY-MM-DD");
    return validade;
  };
}
