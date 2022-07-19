import React from "react";
import { ClientContext, DataContext } from "../../contexts/data-context";
import { ordemProducaoService } from "../../service/ordem-producao.service";

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
export function OrdemProducao() {
  const { clientKnex } = React.useContext(DataContext) as ClientContext;
  const { schema, list, read, update, create, clear } = ordemProducaoService();

  async function schemaAux(target: "table" | "form") {
    const sch = await schema(target);
    // if (target === "table") {
    //   delFields(sch, "DataUltimoLancamento");
    // }
    return sch;
  }

  return (
    <div>ok</div>
    // <MasterDetail
    //   schema={schema}
    //   list={list}
    //   read={read}
    //   update={update}
    //   create={create}
    //   clear={clear}
    //   searchable={false}
    // />
  );
}
