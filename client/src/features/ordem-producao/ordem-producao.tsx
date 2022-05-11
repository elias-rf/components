import React from "react";
import OrdemProducaoService from "@/features/ordem-producao/ordem-producao.service";
import DataContext, { ClientContext } from "@/contexts/data-context";
import MasterDetail from "@/features/ui/master-detail";

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
function OrdemProducao() {
  const { clientKnex } = React.useContext(DataContext) as ClientContext;
  const { schema, list, read, update, create, clear } =
    OrdemProducaoService(clientKnex);

  async function schemaAux(target: "table" | "form") {
    const sch = await schema(target);
    // if (target === "table") {
    //   delFields(sch, "DataUltimoLancamento");
    // }
    return sch;
  }

  return (
    <MasterDetail
      schema={schema}
      list={list}
      read={read}
      update={update}
      create={create}
      clear={clear}
      searchable={false}
    />
  );
}

export default OrdemProducao;
