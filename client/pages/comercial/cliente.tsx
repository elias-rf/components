import { TClienteIds } from "@mono/models/cliente/cliente.type";
import React from "react";
import { Page } from "../../components/page/page";
import { PageTitle } from "../../components/page/page_title";
import { Tab, Tabs } from "../../components/tabs";
import { ClienteForm } from "../../features/cliente/cliente_form";
import { ClienteList } from "../../features/cliente/cliente_list";
import { ClienteQuantidade } from "../../features/cliente/cliente_quantidade";
import { ClienteValor } from "../../features/cliente/cliente_valor";
import { ClienteValorMedio } from "../../features/cliente/cliente_valor_medio";

export default function Cliente() {
  const [tabActive, setTabActive] = React.useState("form");
  const [selected, setSelected] = React.useState<TClienteIds>({
    cliente_id: 0,
  });
  const [where, setWhere] = React.useState([]);
  const [order, setOrder] = React.useState([]);

  function handle(event: TClienteList) {
    if (event.event === "onSelect") {
      setSelected(event.value);
    }
    if (event.event === "onWhere") {
      setWhere(event.value);
    }
    if (event.event === "onOrder") {
      setOrder(event.value);
    }
  }
  const handleOnChangeTabs = (_: any, id: string) => {
    setTabActive(id);
  };

  return (
    <Page>
      <PageTitle title="Cliente" />
      <hr />
      <section className={"flex flex-col gap-2"}>
        <Tabs
          active={tabActive}
          onChange={handleOnChangeTabs}
        >
          <Tab
            id="form"
            title="Cadastro"
          >
            <ClienteForm id={selected} />
          </Tab>
          <Tab
            id="quantidade"
            title="Quantidade"
          >
            <ClienteQuantidade id={selected} />
          </Tab>
          <Tab
            id="faturamento"
            title="Faturamento"
          >
            <ClienteValor id={selected} />
          </Tab>
          <Tab
            id="preco"
            title="Preço Médio"
          >
            <ClienteValorMedio id={selected} />
          </Tab>
        </Tabs>
        <div className={"mt-4"}>
          <ClienteList
            selected={selected}
            where={where}
            order={order}
            onSelect={handle}
            onWhere={handle}
            onOrder={handle}
          />
        </div>
      </section>
    </Page>
  );
}
