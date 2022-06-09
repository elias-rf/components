import Page from "@/features/ui/page";
import PageTitle from "@/features/ui/page-title";
import knexRequest from "@/lib/knex/knex-request";
import React from "react";
import { useQueryClient } from "react-query";
import { Action } from "../../..";
import Faturamento from "../../features/faturamento/faturamento";
import Authorization from "../../features/ui/authorization";
import FaturamentoService from "../../service/faturamento.service";

export default function FaturamentoPage() {
  const faturamento = FaturamentoService(knexRequest);
  const [selected, setSelected] = React.useState<string>("");
  const [data, setData] = React.useState<any[]>([]);
  const [schema, setSchema] = React.useState<any>({});

  const queryClient = useQueryClient();

  const datatree = faturamento.treeAnual(faturamento.treeMensal());

  const handleDispatch = (action: Action) => {
    switch (action.type) {
      case "click":
        setSelected(action.payload);
        console.log(
          `🚀 ~ file: faturamento.tsx ~ line 26 ~ handleDispatch ~ action.payload`,
          action.payload
        );
        break;
      default:
        break;
    }
  };

  return (
    <Authorization>
      <Page>
        <PageTitle
          title="Faturamento"
          loading={false}
        />
        <Faturamento
          data={data}
          datatree={datatree}
          schema={schema}
          dispatch={handleDispatch}
          selected={selected}
        />
      </Page>
    </Authorization>
  );
}
